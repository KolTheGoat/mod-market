const { createServer } = require("node:http");
const { existsSync, readFileSync } = require("node:fs");
const { readFile } = require("node:fs/promises");
const { createHmac, timingSafeEqual } = require("node:crypto");
const path = require("node:path");

const envPath = path.join(__dirname, ".env");
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (!match || match[1] in process.env) continue;
    process.env[match[1]] = match[2].replace(/^['"]|['"]$/g, "");
  }
}

const port = Number(process.env.PORT || 4242);
const appUrl = (process.env.APP_URL || `http://localhost:${port}`).replace(/\/$/, "");
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const publicDir = __dirname;
const isProduction = process.env.NODE_ENV === "production";
const checkoutAttempts = new Map();
const processedWebhookEvents = new Set();
const checkoutWindowMs = 60_000;
const checkoutLimit = 10;

const products = new Map([
  ["Sky Realms", { price: 12, category: "Adventure" }],
  ["OreFlow Plus", { price: 9, category: "Tech" }],
  ["ClaimGuard", { price: 0, category: "Server" }],
  ["Arcane Foundry", { price: 15, category: "Magic" }],
  ["Biome Bloom", { price: 7, category: "Worldgen" }],
  ["FrameBoost", { price: 5, category: "Utility" }],
  ["Obsidian Arsenal", { price: 14, category: "Gear" }],
  ["Crystal Armory", { price: 11, category: "Gear" }],
  ["Dungeon Relics", { price: 10, category: "Adventure" }],
  ["Knightfall Combat", { price: 16, category: "Gear" }],
  ["Portal Smith", { price: 13, category: "Magic" }],
  ["Dragonsteel Forge", { price: 18, category: "Tech" }],
  ["Mythic Mobsmith", { price: 12, category: "Adventure" }],
  ["Cloaks & Capes", { price: 4, category: "Gear" }],
  ["Vault Economy", { price: 8, category: "Server" }],
  ["Nether Bloom", { price: 6, category: "Worldgen" }],
  ["Builder's Bench", { price: 0, category: "Utility" }],
  ["Rune Storage", { price: 9, category: "Magic" }],
  ["Server Sentinel", { price: 10, category: "Server" }],
  ["Ancient Structures", { price: 14, category: "Worldgen" }],
  ["Titan Leap Blades", { price: 19, category: "Plugins" }],
  ["Earthbreaker Hammer", { price: 18, category: "Plugins" }],
  ["Stormcaller Trident", { price: 16, category: "Plugins" }],
  ["Inferno Gauntlets", { price: 15, category: "Plugins" }],
  ["Voidstep Daggers", { price: 17, category: "Plugins" }],
  ["Meteor Axe", { price: 21, category: "Plugins" }],
  ["Frostbite Scythe", { price: 14, category: "Plugins" }],
  ["Dragon Dash Spear", { price: 18, category: "Plugins" }],
  ["Gravity Mace", { price: 20, category: "Plugins" }],
  ["Phantom Bow", { price: 13, category: "Plugins" }],
  ["Emerald Paladin Set", { price: 17, category: "Plugins" }],
  ["Nether Berserker Set", { price: 16, category: "Plugins" }],
  ["Cloudrunner Boots", { price: 9, category: "Plugins" }],
  ["Golem Knuckles", { price: 12, category: "Plugins" }],
  ["Soul Reaper Katana", { price: 22, category: "Plugins" }],
  ["Thunderlord Hammer", { price: 23, category: "Plugins" }],
  ["Venom Fang Dagger", { price: 10, category: "Plugins" }],
  ["Sunflare Crossbow", { price: 13, category: "Plugins" }],
  ["Abyssal Anchor", { price: 15, category: "Plugins" }],
  ["Rift Shield", { price: 12, category: "Plugins" }],
  ["Warlock Staffs", { price: 17, category: "Plugins" }],
  ["Lava Launcher", { price: 14, category: "Plugins" }],
  ["Moonblade Plugin", { price: 11, category: "Plugins" }],
  ["Warden Crusher", { price: 24, category: "Plugins" }],
  ["Phoenix Feather Bow", { price: 18, category: "Plugins" }],
  ["Echo Boots", { price: 10, category: "Plugins" }],
  ["Royal Claymore", { price: 13, category: "Plugins" }],
  ["Prism Cannon", { price: 16, category: "Plugins" }],
  ["Ender Whip", { price: 12, category: "Plugins" }],
  ["Boulder Toss Gloves", { price: 12, category: "Plugins" }],
  ["Skyhook Grappler", { price: 11, category: "Plugins" }],
  ["Bloodmoon Saber", { price: 15, category: "Plugins" }],
  ["Celestial Pickaxe", { price: 13, category: "Plugins" }],
  ["Radiant Wings", { price: 19, category: "Plugins" }],
  ["Sculk Launcher", { price: 14, category: "Plugins" }],
  ["Runic Shields", { price: 10, category: "Plugins" }],
  ["Comet Boots", { price: 9, category: "Plugins" }],
  ["Necro Wand", { price: 16, category: "Plugins" }],
  ["GearSmith Recipes", { price: 8, category: "Plugins" }],
  ["BossDrop Crafting", { price: 12, category: "Plugins" }],
  ["Custom Ability Core", { price: 15, category: "Plugins" }],
  ["Raid Relic Drops", { price: 9, category: "Plugins" }],
  ["Enchanted Smithing", { price: 11, category: "Plugins" }],
  ["Arena Smash Kit", { price: 14, category: "Plugins" }],
  ["Mythic Recipe Book", { price: 7, category: "Plugins" }],
  ["Legendary Crates", { price: 12, category: "Plugins" }],
  ["WorldBoss Arsenal", { price: 23, category: "Plugins" }],
  ["Heroic Trinkets", { price: 9, category: "Plugins" }],
  ["Leaping Enchantments", { price: 7, category: "Plugins" }],
  ["Smash Enchantments", { price: 7, category: "Plugins" }]
]);

const liveProductRepos = new Map([
  ["Titan Leap Blades", "https://github.com/KolTheGoat/titan-leap-blades"],
  ["Earthbreaker Hammer", "https://github.com/KolTheGoat/earthbreaker-hammer"],
  ["Thunderlord Hammer", "https://github.com/KolTheGoat/thunderlord-hammer"],
  ["Warden Crusher", "https://github.com/KolTheGoat/warden-crusher"],
  ["Cloudrunner Boots", "https://github.com/KolTheGoat/cloudrunner-boots"],
  ["GearSmith Recipes", "https://github.com/KolTheGoat/gearsmith-recipes"],
  ["BossDrop Crafting", "https://github.com/KolTheGoat/bossdrop-crafting"],
  ["Custom Ability Core", "https://github.com/KolTheGoat/custom-ability-core"],
  ["Stormcaller Trident", "https://github.com/KolTheGoat/stormcaller-trident"],
  ["Inferno Gauntlets", "https://github.com/KolTheGoat/inferno-gauntlets"],
  ["Voidstep Daggers", "https://github.com/KolTheGoat/voidstep-daggers"],
  ["Meteor Axe", "https://github.com/KolTheGoat/meteor-axe"],
  ["Frostbite Scythe", "https://github.com/KolTheGoat/frostbite-scythe"],
  ["Dragon Dash Spear", "https://github.com/KolTheGoat/dragon-dash-spear"],
  ["Gravity Mace", "https://github.com/KolTheGoat/gravity-mace"],
  ["Phantom Bow", "https://github.com/KolTheGoat/phantom-bow"],
  ["Emerald Paladin Set", "https://github.com/KolTheGoat/emerald-paladin-set"],
  ["Nether Berserker Set", "https://github.com/KolTheGoat/nether-berserker-set"],
  ["Golem Knuckles", "https://github.com/KolTheGoat/golem-knuckles"],
  ["Soul Reaper Katana", "https://github.com/KolTheGoat/soul-reaper-katana"],
  ["Venom Fang Dagger", "https://github.com/KolTheGoat/venom-fang-dagger"],
  ["Sunflare Crossbow", "https://github.com/KolTheGoat/sunflare-crossbow"],
  ["Abyssal Anchor", "https://github.com/KolTheGoat/abyssal-anchor"],
  ["Rift Shield", "https://github.com/KolTheGoat/rift-shield"]
]);
const liveProductNames = new Set(liveProductRepos.keys());

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png"
};

function sendJson(response, status, payload) {
  response.writeHead(status, {
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8"
  });
  response.end(JSON.stringify(payload));
}

function applySecurityHeaders(response) {
  response.setHeader("Content-Security-Policy", "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://checkout.stripe.com");
  response.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  response.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.setHeader("X-Frame-Options", "DENY");
  if (isProduction) {
    response.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  }
}

function requestIp(request) {
  const forwarded = request.headers["x-forwarded-for"];
  return (Array.isArray(forwarded) ? forwarded[0] : forwarded?.split(",")[0])?.trim()
    || request.socket.remoteAddress
    || "unknown";
}

function checkoutRateLimited(request) {
  const now = Date.now();
  const ip = requestIp(request);
  const attempts = (checkoutAttempts.get(ip) || []).filter(time => now - time < checkoutWindowMs);
  attempts.push(now);
  checkoutAttempts.set(ip, attempts);
  return attempts.length > checkoutLimit;
}

async function readJson(request) {
  return JSON.parse((await readBody(request)) || "{}");
}

async function readBody(request) {
  let body = "";
  for await (const chunk of request) {
    body += chunk;
    if (body.length > 32768) throw new Error("Request body is too large.");
  }
  return body;
}

function validateItems(rawItems) {
  if (!Array.isArray(rawItems) || rawItems.length === 0 || rawItems.length > 25) {
    throw new Error("Cart must include 1 to 25 items.");
  }

  const seen = new Set();
  return rawItems.map(item => {
    const name = typeof item === "string" ? item : item?.name;
    const product = products.get(name);
    if (!product) throw new Error(`Unknown product: ${name || "missing item"}`);
    if (!liveProductNames.has(name)) throw new Error(`${name} is not available for purchase yet.`);
    if (seen.has(name)) throw new Error(`${name} can only appear once per order.`);
    seen.add(name);
    return { name, ...product };
  });
}

async function stripeRequest(pathname, options = {}) {
  const response = await fetch(`https://api.stripe.com/v1/${pathname}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${stripeSecretKey}`,
      ...options.headers
    }
  });
  const payload = await response.json();
  if (!response.ok) {
    const error = new Error(payload.error?.message || "Stripe request failed.");
    error.status = response.status;
    throw error;
  }
  return payload;
}

function buildStripeParams(items) {
  const params = new URLSearchParams();
  params.set("mode", "payment");
  params.set("submit_type", "pay");
  params.set("billing_address_collection", "auto");
  params.set("success_url", `${appUrl}/success.html?session_id={CHECKOUT_SESSION_ID}`);
  params.set("cancel_url", `${appUrl}/cancel.html`);
  params.set("metadata[items]", items.map(item => item.name).join(", ").slice(0, 450));

  params.set("custom_fields[0][key]", "minecraftname");
  params.set("custom_fields[0][label][type]", "custom");
  params.set("custom_fields[0][label][custom]", "Minecraft player name");
  params.set("custom_fields[0][type]", "text");
  params.set("custom_fields[0][text][minimum_length]", "3");
  params.set("custom_fields[0][text][maximum_length]", "16");

  params.set("custom_fields[1][key]", "licensetype");
  params.set("custom_fields[1][label][type]", "custom");
  params.set("custom_fields[1][label][custom]", "License type");
  params.set("custom_fields[1][type]", "dropdown");
  params.set("custom_fields[1][dropdown][options][0][label]", "Personal download");
  params.set("custom_fields[1][dropdown][options][0][value]", "personal");
  params.set("custom_fields[1][dropdown][options][1][label]", "Single server license");
  params.set("custom_fields[1][dropdown][options][1][value]", "server");
  params.set("custom_fields[1][dropdown][options][2][label]", "Network owner license");
  params.set("custom_fields[1][dropdown][options][2][value]", "network");

  params.set("custom_fields[2][key]", "ordernotes");
  params.set("custom_fields[2][label][type]", "custom");
  params.set("custom_fields[2][label][custom]", "Server version or order notes");
  params.set("custom_fields[2][type]", "text");
  params.set("custom_fields[2][optional]", "true");
  params.set("custom_fields[2][text][maximum_length]", "200");

  items.filter(item => item.price > 0).forEach((item, index) => {
    params.set(`line_items[${index}][quantity]`, "1");
    params.set(`line_items[${index}][price_data][currency]`, "usd");
    params.set(`line_items[${index}][price_data][unit_amount]`, String(item.price * 100));
    params.set(`line_items[${index}][price_data][product_data][name]`, item.name);
    params.set(`line_items[${index}][price_data][product_data][description]`, `${item.category} listing from ModForge Market`);
  });

  return params;
}

async function createCheckoutSession(request, response) {
  if (!stripeSecretKey) {
    sendJson(response, 503, { error: "Stripe is not configured. Set STRIPE_SECRET_KEY in your environment." });
    return;
  }

  if (checkoutRateLimited(request)) {
    sendJson(response, 429, { error: "Too many checkout attempts. Please wait one minute and try again." });
    return;
  }

  try {
    const { items: rawItems } = await readJson(request);
    const items = validateItems(rawItems);
    const paidItems = items.filter(item => item.price > 0);

    if (!paidItems.length) {
      sendJson(response, 200, { url: `${appUrl}/success.html?free=true` });
      return;
    }

    const payload = await stripeRequest("checkout/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: buildStripeParams(items)
    });

    sendJson(response, 200, { url: payload.url });
  } catch (error) {
    sendJson(response, error.status || 400, { error: error.message });
  }
}

async function getCheckoutSession(request, response) {
  if (!stripeSecretKey) {
    sendJson(response, 503, { error: "Stripe is not configured." });
    return;
  }

  try {
    const requestUrl = new URL(request.url, appUrl);
    const sessionId = requestUrl.searchParams.get("session_id") || "";
    if (!/^cs_(test_|live_)[A-Za-z0-9]+$/.test(sessionId)) {
      sendJson(response, 400, { error: "Invalid checkout session ID." });
      return;
    }

    const session = await stripeRequest(`checkout/sessions/${encodeURIComponent(sessionId)}?expand[]=line_items`);
    const items = (session.line_items?.data || []).map(item => ({
      name: item.description,
      quantity: item.quantity,
      repoUrl: liveProductRepos.get(item.description) || null
    }));

    sendJson(response, 200, {
      customerEmail: session.customer_details?.email || null,
      items,
      mode: stripeSecretKey.startsWith("sk_live_") ? "live" : "test",
      paid: session.payment_status === "paid",
      status: session.status
    });
  } catch (error) {
    sendJson(response, error.status || 400, { error: error.message });
  }
}

function verifyStripeSignature(payload, signatureHeader, secret = stripeWebhookSecret) {
  if (!secret || !signatureHeader) return false;

  const values = Object.fromEntries(signatureHeader.split(",").map(part => part.split("=")));
  const timestamp = values.t;
  const signature = values.v1;
  if (!timestamp || !signature) return false;

  const age = Math.abs(Date.now() / 1000 - Number(timestamp));
  if (!Number.isFinite(age) || age > 300) return false;

  const expected = createHmac("sha256", secret)
    .update(`${timestamp}.${payload}`, "utf8")
    .digest("hex");
  const actualBuffer = Buffer.from(signature, "hex");
  const expectedBuffer = Buffer.from(expected, "hex");

  return actualBuffer.length === expectedBuffer.length && timingSafeEqual(actualBuffer, expectedBuffer);
}

async function handleStripeWebhook(request, response) {
  try {
    const payload = await readBody(request);
    if (!verifyStripeSignature(payload, request.headers["stripe-signature"])) {
      sendJson(response, 400, { error: "Invalid Stripe webhook signature." });
      return;
    }

    const event = JSON.parse(payload);
    if (processedWebhookEvents.has(event.id)) {
      sendJson(response, 200, { received: true });
      return;
    }
    processedWebhookEvents.add(event.id);
    if (processedWebhookEvents.size > 1000) {
      processedWebhookEvents.delete(processedWebhookEvents.values().next().value);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      console.log(`Stripe payment completed: ${session.id} (${session.amount_total} ${session.currency})`);
    }

    sendJson(response, 200, { received: true });
  } catch (error) {
    sendJson(response, 400, { error: error.message });
  }
}

async function serveStatic(request, response) {
  const url = new URL(request.url, appUrl);
  const requested = url.pathname === "/" ? "index.html" : decodeURIComponent(url.pathname).replace(/^\/+/, "");
  const filePath = path.resolve(publicDir, requested);
  const relativePath = path.relative(publicDir, filePath);

  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const content = await readFile(filePath);
    const cacheControl = path.extname(filePath) === ".html" ? "no-cache" : "public, max-age=3600";
    response.writeHead(200, {
      "Cache-Control": cacheControl,
      "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream"
    });
    response.end(request.method === "HEAD" ? undefined : content);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
}

function requestHandler(request, response) {
  applySecurityHeaders(response);

  if (request.method === "GET" && request.url === "/api/health") {
    const ready = Boolean(
      stripeSecretKey
      && (!isProduction || (stripeWebhookSecret && appUrl.startsWith("https://")))
    );
    sendJson(response, ready ? 200 : 503, {
      appUrl,
      mode: stripeSecretKey?.startsWith("sk_live_") ? "live" : "test",
      ready
    });
    return;
  }

  if (request.method === "GET" && request.url.startsWith("/api/checkout-session?")) {
    getCheckoutSession(request, response);
    return;
  }

  if (request.method === "POST" && request.url === "/api/stripe-webhook") {
    handleStripeWebhook(request, response);
    return;
  }

  if (request.method === "POST" && request.url === "/api/create-checkout-session") {
    createCheckoutSession(request, response);
    return;
  }

  if (request.method === "GET" || request.method === "HEAD") {
    serveStatic(request, response);
    return;
  }

  response.writeHead(405, { "Content-Type": "text/plain; charset=utf-8" });
  response.end("Method not allowed");
}

function startServer() {
  return createServer(requestHandler).listen(port, () => {
    console.log(`ModForge Market running at ${appUrl}`);
  });
}

if (require.main === module) {
  startServer();
}

module.exports = {
  buildStripeParams,
  requestHandler,
  startServer,
  validateItems,
  verifyStripeSignature
};
