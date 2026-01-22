// Wire the green + Add button to write using the helper (uses addDoc under the hood)
document.getElementById('addCategoryBtn')?.addEventListener('click', async (e) => {
  e.preventDefault();
  await window.addUtilityFromForm({
    region: (window.DATA_CTX && window.DATA_CTX.region) || '',
    location: (window.DATA_CTX && window.DATA_CTX.location) || '',
    categoryLabel: document.querySelector('#categorySelect')?.value || 'Bulk',
    supplierName: document.querySelector('#supplierName')?.value || '',
    billingMonth: document.querySelector('#billingMonth')?.value || '',
    monthlyBill: document.querySelector('#monthlyBill')?.value || '',
    officerTel: document.querySelector('#officerTel')?.value || '',
    accountNumber: document.querySelector('#accountNumber')?.value || '',
    quantity: document.querySelector('#quantity')?.value || ''
  });
});
