Bulk Extra Fields Patch
========================

Date: 2025-10-29T03:49:01.070209

Changed files:
- system.js

What it adds:
- Detects Bulk categories (Bulk (L.A.), Bulk (C.B.O.), Bulk (Halgahakubura), Bulk Supply (Sp. Inst), Bulk Spl (Sp Inst), Bulk Supply (Sp. Inst))
- Shows six text boxes: Quantity, Monthly bill, Officer contact, Location, Supplier Name, Remarks (visible only for Bulk selections)
- Saves those values to `item.meta` in `DATA_CTX.entries`
- Renders Supplier & Monthly bill as badges in the connections list

Implementation details:
- Helper functions injected before `populateCategories()`
- `populateCategories()` patched to bind the visibility toggler
- `handleAddCategoryClick()` patched to persist `meta`
- `renderConnectionsList()` patched to show badges

The original `system.js` was saved as system.original.backup.js.
