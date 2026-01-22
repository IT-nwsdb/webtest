# NWSDB Web Portal — Full Deploy Pack (Option B)

This bundle is ready for **Firebase Hosting** with **Firestore** fully wired.
It keeps your existing structure (dynamic imports, global `FB` object).

## 1) Prereqs
- Node.js 18+
- Firebase CLI: `npm i -g firebase-tools`
- A Firebase project called **web-portal-ac49e** (already yours)

## 2) Verify Firebase config (script.js)
Make sure these entries exist exactly:
- `projectId: "web-portal-ac49e"`
- `storageBucket: "web-portal-ac49e.appspot.com"` ← IMPORTANT
- Auth is anonymous sign-in (script already calls `signInAnonymously`)

## 3) Login + target project
```bash
firebase login
firebase use web-portal-ac49e
```

## 4) Deploy Firestore rules
```bash
firebase deploy --only firestore:rules
```

## 5) Deploy Hosting (static site)
```bash
firebase deploy --only hosting
```
This serves your files as a static site from the project root.

## 6) Test online saving
1. Open your Hosting URL.
2. Login (demo credentials in the UI).
3. Fill HRM (e.g., M(M)) and click **Save**.
4. Open Firebase Console → Firestore → confirm a new document appears in the collection:
   - `hrmSheets` / `schemeExtended` / `labsSubmissions` / `plantSubmissions`

### Notes
- If you ever see “Saved locally (offline). Will sync when you’re online”, the browser is offline or auth/rules blocked a write. Open DevTools Console to see the exact reason.
- You can adjust public visibility of dashboard data in `firestore.rules` (the `dashboardStats` rule).

## 7) Optional (disable local-only fallback)
If you want **only cloud saves**, remove the LS fallbacks from `core.js` / `hrm.js` (functions like `savePlantDataLS`, etc.).