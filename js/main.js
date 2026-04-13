
// compossant header & footer
function loadComponent(id, file, callback) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (callback) callback();
        })
        .catch(error => console.error('Error loading component:', error));
}

loadComponent('header', '../components/header.html', () => {
    loadComponent("header-navBar", "../components/navBar.html");
    loadComponent("header-logo", "../components/logo.html");
});


loadComponent('footer', '../components/footer.html', () => {
    loadComponent("footer-navBar", "../components/navBar.html");
    loadComponent("footer-cardHour", "../components/cardHour.html");
    loadComponent("footer-logo", "../components/logo.html");
    loadComponent("footer-social", "../components/socialMedia.html");
});

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
    fetch('components/btn.html')
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
    fetch("components/separate.html")
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
    fetch("components/button-social.html")
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
    fetch("components/presse.html")
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