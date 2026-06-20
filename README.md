# ModForge Market

Professional Minecraft mods and plugins storefront website with a catalog, filters, cart, and Stripe Checkout payments.

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
- This server uses Node's built-in `fetch` to call Stripe directly, so no package install is required.
- Stripe redirects back to `success.html` or `cancel.html`.
- Point Stripe webhooks to `https://your-domain.com/api/stripe-webhook` and subscribe to `checkout.session.completed`.
- The webhook signature is verified before a completed payment is accepted by the server.
- Automatic file delivery still needs a private storage/database fulfillment step before launch.
