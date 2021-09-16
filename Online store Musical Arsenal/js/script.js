let select = document.querySelector('select');

let cleave = new Cleave('input', {
    phone: true,
    phoneRegionCode: 'US'
});

select.addEventListener('change', function() {
    cleave.setPhoneRegionCode(this.value);
    cleave.setRawValue('');
})