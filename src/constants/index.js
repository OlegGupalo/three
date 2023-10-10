import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    projectTwo,
    threejs,
    blog,
    expo,
    projectOne
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Обо мне",
    },
    {
      id: "work",
      title: "Проекты",
    },
    {
      id: "contact",
      title: "Контакты",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Good person",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Lama blog",
      icon: blog,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Разработка и поддержка веб-приложений с использованием React.js и других связанных технологий.",
        "Умение работать в команде и эффективно общаться с другими разработчиками, дизайнерами и менеджерами по продукту, чтобы создавать продукты, которые соответствуют потребностям пользователей.",
        "Реализация адаптивного дизайна и обеспечение кроссбраузерной совместимости.",
        "Глубокое понимание принципов разработки веб-приложений, таких как RESTful API, архитектура клиент-сервер и другие, что позволяет мне создавать приложения, которые легко масштабировать и поддерживать.",
      ],
    },
    {
      title: "Expo Developer",
      company_name: "Tinkoff Bank (copy)",
      icon: expo,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Online store",
      description:
        "Web-based platform that allows users to search, add, and and add products from the list of information to the carts.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: projectOne,
      source_code_link: "https://github.com/OlegGupalo/Shop",
    },
    {
      name: "Job IT",
      description:
        "A comprehensive platform that allows users to create own posts, allow its, and add other people as friend.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: projectOne,
      source_code_link: "https://github.com/OlegGupalo/Lama-Blog",
    },
    {
      name: "Blog website",
      description:
        "A comprehensive platform that allows users to create own posts, allow its, and add other people as friend.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "NestJS",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: projectTwo,
      source_code_link: "https://github.com/OlegGupalo/Lama-Blog",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };