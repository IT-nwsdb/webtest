import admin from "firebase-admin";
import { initializeApp, applicationDefault } from "firebase-admin/app";

initializeApp({ credential: applicationDefault() });
const db = admin.firestore();

async function migrateBillingMonth() {
  console.log("⏳ Starting migration...");
  const snapshot = await db.collection("schemeExtended").get();
  let moved = 0, cleaned = 0;

  for (const doc of snapshot.docs) {
    const data = doc.data();
    const { connections, region, location } = data || {};
    if (!Array.isArray(connections)) continue;

    for (const e of connections) {
      const cat = (e && e.category) || "";
      const meta = (e && e.meta) ? e.meta : {};

      if (/bulk/i.test(cat) && meta.billingMonth) {
        await db.collection("utilities").add({
          supplierName: meta.supplierName || null,
          location: location || meta.location || null,
          accountNumber: meta.accountNumber || null,
          monthlyBill: Number(meta.monthlyBill) || null,
          officerTel: meta.officerTel || null,
          quantity: Number(meta.quantity) || null,
          billingMonth: meta.billingMonth,
          region: region || null,
          category: cat,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });
        moved++;
      }
      if (meta.billingMonth) delete meta.billingMonth;
    }

    await doc.ref.set({ connections }, { merge: true });
    cleaned++;
  }

  console.log(`✅ Done. Moved ${moved}, cleaned ${cleaned}.`);
}

migrateBillingMonth().catch(e => console.error(e));
