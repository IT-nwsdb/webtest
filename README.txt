# NWSDB Schemes App – Updated with Secondary Add Button

- Added a SECOND "Add" button directly under the Bulk-only fields.
- This secondary button triggers the SAME save logic as the top Add button by programmatically clicking #bulk-add-btn.
- Works even if the Bulk panel is injected dynamically (MutationObserver watches DOM).