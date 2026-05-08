// header
function loadHeader(id) {
    fetch("../components/header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;  //injecter

            const page = document.body.className;  //Récupérer, la classe du body pour savoir sur quelle page on est
            const header = document.querySelector('header');  //Récupérer, le header

            header.classList.add('header--' + page);  // adapter,  le header en fonction de la page


            // Charger la Nav Bar dans le header
            loadNavBar('header-navBar');
            // Charger la light column dans le header
            loadlightColumn('header-lightColumn');
            // Charger le logo dans le header
            loadLogo('header-logo', {
                image: "../assets/logo.png"
            });
        });
}
loadHeader("header"); //appel 

// footer
function loadFooter(id) {
    fetch("../components/footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;  //injecter

            const page = document.body.className;  //Récupérer, la classe du body pour savoir sur quelle page on est
            const footer = document.querySelector('footer');  //Récupérer, le footer

            footer.classList.add('footer--' + page);  // adapter,  le footer en fonction de la page

            loadNavBar('footer-navBar'); // Charger la Nav Bar dans le footer
            loadSocialMedia("footer-socialMedia", "footer"); // Charger le bouton Facebook dans le footer
            loadCardHour("footer-cardHour", "footer"); // Charger les horaires dans le footer
            loadLogo('footer-logo', { // Charger le logo dans le footer
                image: "../assets/logo.png"
            });
        })
}
loadFooter("footer"); //appel



//Nav Bar

function loadNavBar(id) {
    fetch("../components/navBar.html")
        .then(res => res.text())
        .then(data => {

            //injecter
            document.getElementById(id).innerHTML = data;

            // ont selectionne les éléments du menu et le hamburger
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.querySelector('.hamburger');

            //evenement
            document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }));

            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

        });
}

// LIGHT COLUMN
//A mettre directement dans la nav bar et faire en sorte que la light column s'adapte a chaque page (ex: light-column--home, light-column--contact, etc...)
// a faire plus tard.
function loadlightColumn(id) {
    fetch("../components/lightColumn.html")
        .then(res => res.text())
        .then(data => {

            //injecter
            document.getElementById(id).innerHTML = data;

            const lightColumn = document.querySelector('.light-column');
        });
}




// logo
function loadLogo(id, options) {
    fetch("../components/logo.html")
        .then(res => res.text())
        .then(data => {

            let html = data.replace("{{image}}", options.image);

            document.getElementById(id).innerHTML = html;
        });
}


// btn
function loadBtn(el, text, icon) {
    fetch('../components/btn.html')
        .then(response => response.text())
        .then(data => {

            let html = data.replace('{{texte}}', text)
                .replace('{{icon}}', icon);

            el.innerHTML = html;
        });
}

document.querySelectorAll('.btn').forEach(el => {
    const text = el.dataset.text;
    const icon = el.dataset.icon;
    loadBtn(el, text, icon);
});


// separate
function loadSeparate(el, img) {
    fetch("../components/separate.html")
        .then(response => response.text())
        .then(data => {

            let html = data.replace('{{img}}', img);

            el.innerHTML = html;
        });
}

document.querySelectorAll('.separate').forEach(el => {
    const img = el.dataset.img;
    loadSeparate(el, img);
});

// social media
function loadSocialMedia(id, variant, options) {
    fetch("../components/socialMedia.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;

            //remplace variable du html
            let html = data
                .replace('{{facebook}}', options.facebook)
                .replace('{{insta}}', options.insta)
                .replace('{{tiktok}}', options.tiktok)

            document.getElementById(id).innerHTML = html //inject composant

            const container = document.getElementById(id); //récupère dans le document par l'id donc le container

            const socialMedia = container.querySelector('social-media'); // récupère composant injecté

            socialMedia.classList.add("social-media--" + variant); //ont ajoute au nom de class social-media un variant selon le context

        });
}
//Appels composants dans home
loadSocialMedia("home-socialMedia", "home", {
    facebook: "../assets/icon/facebook.png",
    insta: "../assets/icon/instagram.png",
    tiktok: "../assets/icon/tiktok.png"
});

//Appels  // // Footer
loadSocialMedia("footer-socialMedia", "footer", {
    facebook: "../assets/icon/facebook-white.png",
    insta: "../assets/icon/instagram-white.png",
    tiktok: "../assets/icon/tiktok-white.png"
});



// card hours
function loadCardHour(id, variant) {
    fetch("../components/cardHour.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data; // injecte

            const container = document.getElementById(id); //récupère

            const cardHour = container.querySelector('.card-hour'); //récupère

            cardHour.classList.add("card-hour--" + variant);
        })
}
loadCardHour("contact-cardHour", "contact");





// presse
function loadPresseLink(el, link,) {
    fetch("../components/presse.html")
        .then(res => res.text())
        .then(data => {

            let html = data.replace("{{link}}", link)

            el.innerHTML = html;
        });
}

document.querySelectorAll('.presse-link').forEach(el => {
    const link = el.dataset.link;
    loadPresseLink(el, link,);
});

console.log("main.js chargé");
console.log(document.getElementById("header"));
