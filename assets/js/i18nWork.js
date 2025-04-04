const resources = {
  en: {
    translation: {
      workTitle: "📚 Work",
      workText:
        "I am a front-end developer, particularly focused on using React to build dynamic and responsive interfaces. I am always striving to improve my skills by adopting modern tools and best practices. I work well in teams and believe that collaboration is key to achieving innovative and scalable results.",
      skillsTitle: "🔧 Skills",
      lang: "Languages:",
      styles: "Styling:",
      database: "DataBases:",
      tools: "Tools:",
      experience: "💼 Professionals Experiences",
      kyrosTitle:
        "<strong>Kyros Tecnologia</strong> - Systems Analyst II (April 2025 - Present)",
      kyrosText:
        "I currently work as a Systems Analyst II, contributing to front-end development using Angular, Bootstrap, npm and GitLab. I started as a development intern, where I used a wide range of web technologies.",
      kyrosTitleEstagiario:
        "<strong>Kyros Tecnologia</strong> - Development Intern (October 2023 - April 2025 · 1 year and 7 months)",
      kyrosTextEstagiario:
        "I utilized a broad range of skills, including Java, Spring Boot, Databases, HTML, CSS, JavaScript, TypeScript, React, Next.js, Bootstrap, Tailwind, and Shadcn. I worked in an agile environment, contributing to the development of web applications, delivering solutions, and driving significant improvements to the projects.",
      relotecTitle:
        "<strong>Relotec Sistemas de Ponto e Acesso</strong> - System Support (May 2023 - September 2023 · 5 months)",
      relotecText:
        "I provided technical support and solutions for time and access control systems, ensuring stable and efficient operations.", // Novo campo
    },
  },
  pt: {
    translation: {
      workTitle: "📚 Trabalho",
      workText:
        "Eu sou um desenvolvedor front-end, com foco especial em usar React para criar interfaces dinâmicas e responsivas. Estou sempre buscando aprimorar minhas habilidades adotando ferramentas modernas e melhores práticas. Trabalho bem em equipe e acredito que a colaboração é fundamental para alcançar resultados inovadores e escaláveis.",
      skillsTitle: "🔧 Habilidades",
      lang: "Linguagens:",
      styles: "Estilizações:",
      database: "Banco de Dados:",
      tools: "Ferramentas:",
      experience: "💼 Experiências Profissionais",
      kyrosTitle:
        "<strong>Kyros Tecnologia</strong> - Analista de Sistema II (Abril de 2025 - Atual)",
      kyrosText:
        "Atualmente atuo como Analista de Sistema II, contribuindo no desenvolvimento front-end utilizando Angular, Bootstrap, npm e GitLab. Iniciei como estagiário de desenvolvimento, onde utilizei uma ampla gama de tecnologias web.",
      kyrosTitleEstagiario:
        "<strong>Kyros Tecnologia</strong> - Estagiário em Desenvolvimento (Outubro de 2023 - Abril de 2025 · 1 ano e 7 meses)",
      kyrosTextEstagiario:
        "Utilizei uma ampla gama de habilidades, incluindo Java, Spring Boot, Banco de Dados, HTML, CSS, JavaScript, TypeScript, React, Next.js, Bootstrap, Tailwind e Shadcn. Atuei no desenvolvimento de aplicações web em um ambiente ágil, contribuindo com soluções e melhorias significativas para os projetos.",
      relotecTitle:
        "<strong>Relotec Sistemas de Ponto e Acesso</strong> - Suporte de Sistemas (Maio de 2023 - Setembro de 2023 · 5 meses)", 
      relotecText:
        "Prestei suporte técnico e soluções para sistemas de controle de ponto e acesso, garantindo operações estáveis e eficientes.",
    },
  },
};

i18next.init(
  {
    lng: "pt",
    resources,
  },
  function (err, t) {
    updateContent();
  }
);

function updateContent() {
  const elements = {
    workTitle: "workTitle",
    workText: "workText",
    skillsTitle: "skillsTitle",
    lang: "lang",
    styles: "styles",
    database: "database",
    tools: "tools",
    experience: "experience",
    kyrosText: "kyrosText",
    kyrosTitle: "kyrosTitle",
    kyrosTitleEstagiario: "kyrosTitleEstagiario",
    kyrosTextEstagiario: "kyrosTextEstagiario",
    relotecTitle: "relotecTitle", // Novo campo
    relotecText: "relotecText", // Novo campo
  };

  for (const [key, value] of Object.entries(elements)) {
    const element = document.getElementById(value);
    if (element) {
      if (
        key === "kyrosTitleEstagiario" ||
        key === "relotecTitle" ||
        key === "kyrosTitle"
      ) {
        element.innerHTML = i18next.t(key);
      } else {
        element.innerText = i18next.t(key);
      }
    }
  }
}

function toggleLanguage() {
  const currentLanguage = i18next.language;
  const newLanguage = currentLanguage === "en" ? "pt" : "en";
  i18next.changeLanguage(newLanguage, updateContent);
}
