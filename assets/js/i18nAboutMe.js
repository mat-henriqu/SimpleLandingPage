const resources = {
    en: {
        translation: {
            "aboutMe": "About me",
            "description": "I am a front-end developer with experience in React, Next.js, TypeScript, Angular, Java and Spring Boot, focused on creating web applications that unite quality, performance and good user experience. I have well advanced knowledge in HTML, CSS and Stylization Frameworks such as Bootstrap, Tailwind and ShadCN, always seeking to deliver efficient and scalable solutions. In my career at Kyros Tecnologia I started my career as an intern, where for 1 year and 6 months I worked in functions adjustments, solution creation, development of endpoints and new screens, as well as process and flow improvements to optimize the user experience. I was effective as Systems Analyst II and, 6 months ago, I work focused on Front-end, participating in the conception and development of projects, page analysis, documentation and definition of continuous flows. I contributed 3 internal projects, which modernize the management of the company, and in 2 external projects, especially the creation of responsive and well -structured screens, ensuring usability and visual consistency. My goal is to evolve constantly, creating solutions that bring real value to the business and intuitive experiences to users, always combining technology and good development practices.",
            "skills": "Skills",
        }
    },
    pt: {
        translation: {
            "aboutMe": "Sobre mim",
            "description": "Sou Desenvolvedor Front-End com experiência em React, Next.js, TypeScript, Angular, Java e Spring Boot, focado em criar aplicações web que unem qualidade, performance e boa experiência de usuário. Tenho conhecimento bem avançado em HTML, CSS e frameworks de estilização como Bootstrap, Tailwind e Shadcn, sempre buscando entregar soluções eficientes e escaláveis. Em minha trajetória na Kyros Tecnologia iniciei minha carreira como estagiário, onde durante 1 ano e 6 meses atuei em ajustes de funções, criação de soluções, desenvolvimento de endpoints e novas telas, além de melhorias em processos e fluxos para otimizar a experiência do usuário. Fui efetivado como Analista de Sistemas II e, há 6 meses, atuo com foco em Front-End, participando da concepção e desenvolvimento de projetos, análise de páginas, documentação e definição de fluxos contínuos. Contribuí em 3 projetos internos, que modernizam a gestão da empresa, e em 2 projetos externos, com destaque para a criação de telas responsivas e bem estruturadas, garantindo usabilidade e consistência visual.Meu objetivo é evoluir constantemente, criando soluções que tragam valor real para o negócio e experiências intuitivas para os usuários, sempre aliando tecnologia e boas práticas de desenvolvimento.",
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
