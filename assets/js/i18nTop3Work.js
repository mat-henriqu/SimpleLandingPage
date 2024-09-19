const resources = {
    en: {
      translation: {
        top3Title: "Top 3 Works",
        top3Text: "Here are the top 3 areas where I focus my work:",
        frontendTitle: "Front-End Development",
        frontendText:
          "I am experienced in building dynamic and responsive user interfaces using React, JavaScript, TypeScript, HTML, and CSS. From designing intuitive layouts to implementing advanced front-end logic, I ensure seamless user experiences with a focus on modern web standards.",
        stylingTitle: "Styling Frameworks",
        stylingText:
          "Utilizing Tailwind, Bootstrap, and Shadcn, I create clean and responsive designs that enhance both the aesthetics and usability of web applications. I focus on delivering fluid, accessible interfaces that maintain consistency across various devices and platforms.",
        backendTitle: "Back-End and Database",
        backendText:
          "Though my primary focus is on front-end development, I have basic experience with Java, Spring Boot, and SQL databases. This knowledge allows me to collaborate effectively with back-end teams, ensuring smooth integration between the front-end and back-end systems.",
      },
    },
    pt: {
      translation: {
        top3Title: "Top 3 Áreas",
        top3Text: "Aqui estão as 3 principais áreas onde foco meu trabalho:",
        frontendTitle: "Desenvolvimento Front-End",
        frontendText:
          "Tenho experiência em construir interfaces de usuário dinâmicas e responsivas utilizando React, JavaScript, TypeScript, HTML e CSS. Desde o design de layouts intuitivos até a implementação de lógica avançada no front-end, garanto experiências de usuário fluidas, com foco em padrões modernos da web.",
        stylingTitle: "Frameworks de Estilo",
        stylingText:
          "Utilizando Tailwind, Bootstrap e Shadcn, crio designs limpos e responsivos que melhoram tanto a estética quanto a usabilidade das aplicações web. Foco em entregar interfaces fluidas e acessíveis, mantendo consistência entre dispositivos e plataformas.",
        backendTitle: "Back-End e Banco de Dados",
        backendText:
          "Embora meu foco principal seja o desenvolvimento front-end, tenho experiência básica com Java, Spring Boot e bancos de dados SQL. Esse conhecimento me permite colaborar efetivamente com equipes de back-end, garantindo uma integração suave entre os sistemas front-end e back-end.",
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
      top3Title: "top3Title",
      top3Text: "top3Text",
      frontendTitle: "frontendTitle",
      frontendText: "frontendText",
      stylingTitle: "stylingTitle",
      stylingText: "stylingText",
      backendTitle: "backendTitle",
      backendText: "backendText",
    };
  
    for (const [key, value] of Object.entries(elements)) {
      const element = document.getElementById(value);
      if (element) {
        element.innerText = i18next.t(key);
      }
    }
  }
  
  function toggleLanguage() {
    const currentLanguage = i18next.language;
    const newLanguage = currentLanguage === "en" ? "pt" : "en";
    i18next.changeLanguage(newLanguage, updateContent);
  }
  