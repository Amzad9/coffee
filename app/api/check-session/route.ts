import Stripe from "stripe";
import { NextResponse } from "next/server";
import { db } from "../../../lib/firebaseAdmin";
import admin from "firebase-admin";

export const runtime = "node";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2026-02-25.clover",
});

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const sessionId = url.searchParams.get("session_id");
    if (!sessionId) {
      return NextResponse.json({ error: "missing session_id" }, { status: 400 });
    }

    // Retrieve the session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId as string, {
      expand: ["payment_intent", "line_items"],
    });

    // If payment completed, flip user active flag in Firestore using Admin SDK
    const paid = session.payment_status === "paid" || session.status === "complete";
    const metadata = (session as any).metadata || {};
    const userId = metadata.userId || metadata.user_id || metadata.uid;

    if (userId && paid) {
      const userRef = db.collection("users").doc(userId as string);
      // Idempotent update
      await userRef.set(
        {
          active: true,
          stripeSessionId: session.id,
          stripeCustomerId: session.customer,
          activatedAt: admin.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
    }

    return NextResponse.json({ session, updatedUser: !!(userId && paid) });
  } catch (err: any) {
    // Common cause: using client SDK on server (client offline) or missing env vars
    const message = err?.message || String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
