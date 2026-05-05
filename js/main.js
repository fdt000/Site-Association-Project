// header
function loadHeader(id) {
    fetch("../components/header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;  //injecter

            const page = document.body.className;  //Récupérer, la classe du body pour savoir sur quelle page on est
            const header = document.querySelector('header');  //Récupérer, le header

            header.classList.add('header--' + page);  // adapter,  le header en fonction de la page
        });
}

loadHeader("header"); //appel 

















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
function loadlightColumn(id) {
    fetch("../components/lightColumn.html")
        .then(res => res.text())
        .then(data => {

            //injecter
            document.getElementById(id).innerHTML = data;
        });
}

loadlightColumn("light-column");




// logo
function loadLogo(id, options) {
    fetch("../components/logo.html")
        .then(res => res.text())
        .then(data => {

            let html = data.replace("{{image}}", options.image);

            document.getElementById(id).innerHTML = html;
        });
}

loadLogo("logo", {
    image: ""
});


// btn
function loadBtn(el, text, icon) {
    fetch('/components/btn.html')
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
    fetch("/components/separate.html")
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
function loadSocialButton(id, platform, text, link) {
    fetch("/components/button-social.html")
        .then(res => res.text())
        .then(data => {
            let html = data
                .replace("{{platform}}", platform)
                .replace("{{text}}", text)
                .replace("{{link}}", link);

            document.getElementById(id).innerHTML = html;
        });
}

loadComponent("page-social", "components/socialMedia.html");


// presse
function loadPresseLink(el, link,) {
    fetch("/components/presse.html")
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