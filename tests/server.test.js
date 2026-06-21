const assert = require("node:assert/strict");
const { createHmac } = require("node:crypto");
const test = require("node:test");

const {
  buildStripeParams,
  validateItems,
  verifyStripeSignature
} = require("../server");

test("validates live products using server prices", () => {
  const items = validateItems([{ name: "Titan Leap Blades" }]);
  assert.deepEqual(items, [{ name: "Titan Leap Blades", price: 19, category: "Plugins" }]);
});

test("rejects planned products", () => {
  assert.throws(
    () => validateItems([{ name: "Sky Realms" }]),
    /not available for purchase yet/
  );
});

test("rejects duplicate products", () => {
  assert.throws(
    () => validateItems([{ name: "Titan Leap Blades" }, { name: "Titan Leap Blades" }]),
    /only appear once/
  );
});

test("builds Stripe-hosted customer fields and trusted pricing", () => {
  const params = buildStripeParams(validateItems([{ name: "Titan Leap Blades" }]));
  assert.equal(params.get("line_items[0][price_data][unit_amount]"), "1900");
  assert.equal(params.get("custom_fields[0][label][custom]"), "Minecraft player name");
  assert.equal(params.get("custom_fields[1][label][custom]"), "License type");
  assert.equal(params.get("custom_fields[2][label][custom]"), "Server version or order notes");
});

test("verifies Stripe webhook signatures", () => {
  const payload = JSON.stringify({ id: "evt_test", type: "checkout.session.completed" });
  const timestamp = Math.floor(Date.now() / 1000);
  const secret = "whsec_test_secret";
  const signature = createHmac("sha256", secret)
    .update(`${timestamp}.${payload}`, "utf8")
    .digest("hex");

  assert.equal(
    verifyStripeSignature(payload, `t=${timestamp},v1=${signature}`, secret),
    true
  );
  assert.equal(
    verifyStripeSignature(payload, `t=${timestamp},v1=${"0".repeat(64)}`, secret),
    false
  );
});
