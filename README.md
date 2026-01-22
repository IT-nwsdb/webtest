# Bulk Utilities Fix Pack (v2)

This version allows **create & update** in the `/utilities` rules to support handlers using `setDoc(..., {merge:true})` or `updateDoc(...)`.
Also includes:
- `addUtilityFromForm({...})` helper
- `renderSubmissions` no-op
- Example `webindex_add_handler_example.js` wiring for the green **+ Add** button

## Steps
1) Replace your `core.js` with the one in this zip.
2) Deploy rules:
   firebase deploy --only firestore:rules
3) Update the + Add button to call the helper (see `webindex_add_handler_example.js`).

## Sanity check in DevTools
await ensureOnlineAuth();
const { fsMod } = FB.mod;
await fsMod.addDoc(fsMod.collection(FB.db, 'utilities'), { category: 'Bulk (L.A.)', billingMonth: 'February' });
