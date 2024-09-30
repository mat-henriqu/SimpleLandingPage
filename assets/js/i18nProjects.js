const resources = {
    en: {
        translation: {
            "headingProjects": "Projects",
            "descriptionProjects": "Projects Web",
            "titleprojectsSimple": "Developed with HTML and CSS",
            "titleprojectsMid": "Developed with HTML, CSS and BootStrap.",
            "titleprojectsHigh": "Developed with React (Vite | JavaScript | TypeScript)",
        }
    },
    pt: {
        translation: {
            "headingProjects": "Projetos",
            "descriptionProjects": "Projetos Web",
            "titleprojectsSimple": "Desenvolvido com HTML e CSS",
            "titleprojectsMid": "Desenvolvido com HTML, CSS e BootStrap.",
            "titleprojectsHigh": "Desenvolvido com React (Vite | JavaScript | TypeScript)",
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
    document.getElementById('titleprojectsSimple').innerText = i18next.t('titleprojectsSimple');
    document.getElementById('titleprojectsMid').innerText = i18next.t('titleprojectsMid');
    document.getElementById('titleprojectsHigh').innerText = i18next.t('titleprojectsHigh');
}

function toggleLanguage() {
    const currentLanguage = i18next.language;
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    i18next.changeLanguage(newLanguage, updateContent);
}
