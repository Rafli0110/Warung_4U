/*!
 * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
 */
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

//Contact

const scriptURL =
    'https://script.google.com/macros/s/AKfycbyZhJGz-fnCalmRUTwrHAycVHCzGhSqemiAWPKbrgYmKZOXIG8hDgNMUgCdSY244mue/exec'
const form = document.forms['Portofolio-contact']
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.myAlert');

form.addEventListener('submit', e => {
    e.preventDefault();
    //ketika tombol submit dikilik
    //tampilkan tombol loading, hilangkan tombol kirim

    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            //tampilkan tombol krim, hilangkan tombol loading

            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            //tampilkan alert
            myAlert.classList.toggle('d-none');
            //reset fromnya
            form.reset();
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
});