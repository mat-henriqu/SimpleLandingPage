const resources = {
    en: {
        translation: {
            "headingProjects": "Projects",
            "descriptionProjects": "Projects Web",
            "titleprojectsHtmCss": "Developed with HTML and CSS",
            "titleprojectsHtmCssBoot": "Developed with HTML, CSS and BootStrap.",
            "titleprojectsHtmCssJs": "Developed with HTML, CSS and JavaScript.",
            "titleprojectsReact": "Developed with React (Vite | JavaScript | TypeScript)",
        }
    },
    pt: {
        translation: {
            "headingProjects": "Projetos",
            "descriptionProjects": "Projetos Web",
            "titleprojectsHtmCss": "Desenvolvido com HTML e CSS",
            "titleprojectsHtmCssBoot": "Desenvolvido com HTML, CSS e BootStrap.",
            "titleprojectsHtmCssJs": "Developed com HTML, CSS e JavaScript.",
            "titleprojectsReact": "Desenvolvido com React (Vite | JavaScript | TypeScript)",
        }
    }
};

i18next.init({
    lng: 'pt', 
    resources
}, function(err, t) {
    updateContent();
});

function updateContent() {
    document.getElementById('headingProjects').innerText = i18next.t('headingProjects');
    document.getElementById('descriptionProjects').innerText = i18next.t('descriptionProjects');
    document.getElementById('titleprojectsHtmCss').innerText = i18next.t('titleprojectsHtmCss');
    document.getElementById('titleprojectsHtmCssBoot').innerText = i18next.t('titleprojectsHtmCssBoot');
    document.getElementById('titleprojectsHtmCssJs').innerText = i18next.t('titleprojectsHtmCssJs');
    document.getElementById('titleprojectsReact').innerText = i18next.t('titleprojectsReact');
}

function toggleLanguage() {
    const currentLanguage = i18next.language;
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    i18next.changeLanguage(newLanguage, updateContent);
}
