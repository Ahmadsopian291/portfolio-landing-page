// Navbar Clik
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}


// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// SMTP Email
const form = document.querySelector('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

function sendEmail(){

    Email.send({
        SecureToken: "499611d9-2fc5-48ac-87a8-04c5f01b19a4",
        To : 'ahmadckt3@gmail.com',
        From : "ahmadckt3@gmail.com",
        Subject : "Permintaan",
        Body : "Name: " + document.getElementById("name").value 
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Berhasil!",
                text: "Selamat Pesan Kamu Telah Terkirim!",
                icon: "success"
              });
        }
      }
    );
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    if (!email.value.match(emailRegex)) {
        email.classList.add("eror");
        email.parentElement.classList.add("eror");
    }

    else {
        email.classList.remove("eror");
        email.parentElement.classList.remove("eror");
    }
    }

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail()
}) 
// SMPT END
