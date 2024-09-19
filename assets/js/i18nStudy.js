const resources = {
    en: {
        translation: {
            "faculty": "Faculty",
            "descriptionFaculty": "Analysis and Systems Development.",
            "courses": "Courses",
            "typeLogic": "Logic Programming",
        }
    },
    pt: {
        translation: {
            "faculty": "Faculdade",
            "descriptionFaculty": "Análise e desenvolvimento de sistemas.",
            "courses": "Cursos",
            "typeLogic": "Logica de Programação"
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
    document.getElementById('faculty').innerText = i18next.t('faculty');
    document.getElementById('descriptionFaculty').innerText = i18next.t('descriptionFaculty');
    document.getElementById('courses').innerText = i18next.t('courses');
    document.getElementById('typeLogic').innerText = i18next.t('typeLogic');
}

function toggleLanguage() {
    const currentLanguage = i18next.language;
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    i18next.changeLanguage(newLanguage, updateContent);
}
