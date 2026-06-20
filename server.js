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

const liveProductNames = new Set([
  "Titan Leap Blades",
  "Earthbreaker Hammer",
  "Thunderlord Hammer",
  "Warden Crusher",
  "Cloudrunner Boots",
  "GearSmith Recipes",
  "BossDrop Crafting",
  "Custom Ability Core",
  "Stormcaller Trident",
  "Inferno Gauntlets",
  "Voidstep Daggers",
  "Meteor Axe",
  "Frostbite Scythe",
  "Dragon Dash Spear",
  "Gravity Mace",
  "Phantom Bow",
  "Emerald Paladin Set",
  "Nether Berserker Set",
  "Golem Knuckles",
  "Soul Reaper Katana",
  "Venom Fang Dagger",
  "Sunflare Crossbow",
  "Abyssal Anchor",
  "Rift Shield"
]);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png"
};

function sendJson(response, status, payload) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
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

  return rawItems.map(item => {
    const name = typeof item === "string" ? item : item?.name;
    const product = products.get(name);
    if (!product) throw new Error(`Unknown product: ${name || "missing item"}`);
    if (!liveProductNames.has(name)) throw new Error(`${name} is not available for purchase yet.`);
    return { name, ...product };
  });
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
    sendJson(response, 500, { error: "Stripe is not configured. Set STRIPE_SECRET_KEY in your environment." });
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

    const stripeResponse = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${stripeSecretKey}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: buildStripeParams(items)
    });
    const payload = await stripeResponse.json();

    if (!stripeResponse.ok) {
      sendJson(response, stripeResponse.status, { error: payload.error?.message || "Stripe checkout could not be created." });
      return;
    }

    sendJson(response, 200, { url: payload.url });
  } catch (error) {
    sendJson(response, 400, { error: error.message });
  }
}

function verifyStripeSignature(payload, signatureHeader) {
  if (!stripeWebhookSecret || !signatureHeader) return false;

  const values = Object.fromEntries(signatureHeader.split(",").map(part => part.split("=")));
  const timestamp = values.t;
  const signature = values.v1;
  if (!timestamp || !signature) return false;

  const age = Math.abs(Date.now() / 1000 - Number(timestamp));
  if (!Number.isFinite(age) || age > 300) return false;

  const expected = createHmac("sha256", stripeWebhookSecret)
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
  const requested = url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname);
  const filePath = path.normalize(path.join(publicDir, requested));

  if (!filePath.startsWith(publicDir)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const content = await readFile(filePath);
    response.writeHead(200, { "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream" });
    response.end(content);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
}

createServer((request, response) => {
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
}).listen(port, () => {
  console.log(`ModForge Market running at ${appUrl}`);
});
