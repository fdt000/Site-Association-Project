
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
function loadBtn(id, options) {
    fetch('../components/btn.html')
        .then(response => response.text())
        .then(data => {

            let html = data
                .replace('{{variant}}', options.variant)
                .replace('{{texte}}', options.text)
                .replace('{{icon}}', options.icon);

            document.getElementById(id).innerHTML = html;
        });
}

const btn = [
    { id: "btn", text: "suivre", icon: "../assets/icon/fleche.png" },
    { id: "btn2", text: "suivre", icon: "../assets/icon/fleche.png" },
    { id: "btn3", text: "suivre", icon: "../assets/icon/fleche.png" },
    { id: "btn4", text: "suivre", icon: "../assets/icon/fleche.png" },
    { id: "btn5", text: "suivre", icon: "../assets/icon/fleche.png" }
];

btn.forEach(btn => {
    loadBtn(btn.id, {
        variant: "primary",
        text: btn.text,
        icon: btn.icon
    });
})

// separate
function loadSeparate(id, options) {
    fetch("components/separate.html")
        .then(response => response.text())
        .then(data => {

            let html = data.replace('{{img}}', options.img);

            document.getElementById(id).innerHTML = html;
        });
}

const separates = [
  { id: "separate", img: "assets/img/separate1.png" },
  { id: "separate2", img: "assets/img/separate2.png" },
  { id: "separate3", img: "assets/img/separate3.png" },
  { id: "separate4", img: "assets/img/separate4.png" },
  { id: "separate5", img: "assets/img/separate5.png" }
];

separates.forEach(item => {
  loadSeparate(item.id, {
    img: item.img
  });
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
