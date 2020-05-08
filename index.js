window.alert("This site is being built. Many other things will be available as soon as possible.")

const hamburguer = document.querySelector('.hamburguer');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburguer.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
});

function openGithubLink(repo) {
    switch (repo) {
        case 'instarocket':
            window.open('https://github.com/gabrielgambarra/semana-omnistack7');
            break;

        case 'tindev':
            window.open('https://github.com/gabrielgambarra/semana-omnistack8');
            break;

        case 'angular-infinite-scroll':
            window.open('https://github.com/gabrielgambarra/infinite-scroll-cdk');
            break;

        case 'leaflet-example':
            window.open('https://github.com/gabrielgambarra/leaflet-example');
            break;

        case 'crud-php':
            window.open('https://github.com/gabrielgambarra/crud_php');
            break;

        default:
            break;
    }
}

function openGithubPage(repo) {
    switch (repo) {
        case 'instarocket':
            window.open('https://gabrielgambarra.github.io/semana-omnistack7/');
            break;

        case 'tindev':
            window.open('https://github.com/gabrielgambarra/semana-omnistack8');
            break;

        case 'angular-infinite-scroll':
            window.open('https://gabrielgambarra.github.io/infinite-scroll-cdk/');
            break;

        case 'leaflet-example':
            window.open('https://gabrielgambarra.github.io/leaflet-example/');
            break;

        case 'crud-php':
            window.open('https://basic-php-crud.herokuapp.com/');
            break;

        default:
            break;
    }
}

function openLinkToAPK(repo) {
    switch (repo) {
        case 'instarocket':
            window.open('https://github.com/gabrielgambarra/semana-omnistack7');
            break;

        case 'tindev':
            window.open('https://github.com/gabrielgambarra/semana-omnistack8');
            break;

        default:
            break;
    }
}