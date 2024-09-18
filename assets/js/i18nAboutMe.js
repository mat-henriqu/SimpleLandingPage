const resources = {
    en: {
        translation: {
            "aboutMe": "About me",
            "description": "Front-End Developer with experience in Java, Spring Boot. Development of web applications using technologies such as React, Next.js, and TypeScript. I have knowledge in databases, as well as skills in HTML, CSS, and styling frameworks such as Bootstrap, Tailwind and Shadcn. Committed to delivering efficient, high-quality solutions.",
            "skills": "Skills",
        }
    },
    pt: {
        translation: {
            "aboutMe": "Sobre mim",
            "description": "Desenvolvedor Front-End com experiência em Java, Spring Boot. Desenvolvimento de aplicações web usando tecnologias como React, Next.js e TypeScript. Tenho conhecimento em bancos de dados, assim como habilidades em HTML, CSS e frameworks de estilização como Bootstrap, Tailwind e Shadcn. Comprometido em entregar soluções eficientes e de alta qualidade.",
            "skills": "Habilidades",
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
    document.getElementById('aboutMeTitle').innerText = i18next.t('aboutMe');
    document.getElementById('aboutMeDescription').innerText = i18next.t('description');
    document.getElementById('skillsTitle').innerText = i18next.t('skills');
}

function toggleLanguage() {
    const currentLanguage = i18next.language;
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    i18next.changeLanguage(newLanguage, updateContent);
}
