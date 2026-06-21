# ModForge Market

Professional Minecraft mods and plugins storefront website with a catalog, filters, cart, and direct Stripe Checkout payments.

## Local Stripe Setup

1. Copy `.env.example` to `.env` and add your Stripe test secrets:

   ```bash
   STRIPE_SECRET_KEY=sk_test_your_key_here
   STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
   APP_URL=http://localhost:4242
   PORT=4242
   ```

2. Start the server:

   ```bash
   node server.js
   ```

3. Open `http://localhost:4242` and use Stripe test card `4242 4242 4242 4242`.

## Notes

- Stripe secret keys must stay on the server and must not be committed.
- The browser sends item names only; prices are validated on the server.
- Clicking checkout creates a Stripe Checkout Session immediately; the store does not show its own payment form.
- Stripe Checkout collects email, Minecraft player name, license type, order notes, billing details, and card information.
- This server uses Node's built-in `fetch` to call Stripe directly, so no package install is required.
- Stripe redirects back to `success.html` or `cancel.html`.
- Point Stripe webhooks to `https://your-domain.com/api/stripe-webhook` and subscribe to `checkout.session.completed`.
- The webhook signature is verified before a completed payment is accepted by the server.
- Automatic file delivery still needs a private storage/database fulfillment step before launch.

## Production Deployment

The repository includes `render.yaml` for a Node web service. Configure these environment variables on the host:

- `APP_URL`: the final HTTPS store URL
- `STRIPE_SECRET_KEY`: use `sk_test_...` while testing, then `sk_live_...` only after Stripe activation
- `STRIPE_WEBHOOK_SECRET`: the signing secret for the deployed `/api/stripe-webhook` endpoint
- `NODE_ENV=production`

The host health check is `/api/health`. In production it returns an unhealthy status until HTTPS, the Stripe key, and the webhook secret are configured.

Before accepting real money:

1. Complete Stripe email and business verification.
2. Deploy the Node service and set `APP_URL` to its HTTPS URL.
3. Add the Stripe webhook endpoint and its signing secret.
4. Test a complete sandbox payment and confirm the success page verifies it.
5. Upload tested, private release files and connect fulfillment to verified webhook events.
