const resources = {
    en: {
        translation: {
            "aboutMe": "About me",
            "description": "I am a front-end developer with experience in React, Next.js, TypeScript, Angular, Java and Spring Boot, focused on creating web applications that unite quality, performance and good user experience. I have well advanced knowledge in HTML, CSS and Stylization Frameworks such as Bootstrap, Tailwind and ShadCN, always seeking to deliver efficient and scalable solutions. My goal is to evolve constantly, creating solutions that bring real value to the business and intuitive experiences to users, always combining technology and good development practices.",
            "skills": "Skills",
        }
    },
    pt: {
        translation: {
            "aboutMe": "Sobre mim",
            "description": "Sou Desenvolvedor Front-End com experiência em React, Next.js, TypeScript, Angular, Java e Spring Boot, focado em criar aplicações web que unem qualidade, performance e boa experiência de usuário. Tenho conhecimento bem avançado em HTML, CSS e frameworks de estilização como Bootstrap, Tailwind e Shadcn, sempre buscando entregar soluções eficientes e escaláveis. Meu objetivo é evoluir constantemente, criando soluções que tragam valor real para o negócio e experiências intuitivas para os usuários, sempre aliando tecnologia e boas práticas de desenvolvimento.",
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
