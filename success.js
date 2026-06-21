const title = document.querySelector("#resultTitle");
const eyebrow = document.querySelector("#resultEyebrow");
const message = document.querySelector("#resultMessage");
const items = document.querySelector("#resultItems");
const sessionId = new URLSearchParams(window.location.search).get("session_id");

function showFailure(text) {
  document.title = "Payment Not Confirmed | ModForge Market";
  eyebrow.textContent = "Order status";
  title.textContent = "Payment Not Confirmed";
  message.textContent = text;
}

async function verifyPayment() {
  if (!sessionId) {
    showFailure("This page does not include a Stripe Checkout Session ID.");
    return;
  }

  try {
    const response = await fetch(`/api/checkout-session?session_id=${encodeURIComponent(sessionId)}`);
    const order = await response.json();
    if (!response.ok) throw new Error(order.error || "The order could not be verified.");

    if (!order.paid) {
      showFailure("Stripe has not marked this order as paid. No download will be released.");
      return;
    }

    document.title = "Payment Complete | ModForge Market";
    eyebrow.textContent = "Order confirmed";
    title.textContent = "Payment Complete";
    const receiptNote = order.customerEmail ? ` A receipt was sent to ${order.customerEmail}.` : "";
    message.textContent = order.mode === "test"
      ? `Test payment confirmed. No real money was charged.${receiptNote}`
      : `Stripe confirmed the payment.${receiptNote}`;

    order.items.forEach(item => {
      const row = document.createElement("li");
      const label = document.createElement("span");
      label.textContent = `${item.quantity || 1} x ${item.name}`;
      row.append(label);

      if (item.repoUrl) {
        const accessLink = document.createElement("a");
        accessLink.className = "button primary small";
        accessLink.href = item.repoUrl;
        accessLink.target = "_blank";
        accessLink.rel = "noopener";
        accessLink.textContent = "Access project";
        row.append(accessLink);
      }
      items.append(row);
    });
  } catch (error) {
    showFailure(error.message);
  }
}

verifyPayment();
