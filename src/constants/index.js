import { meta, shopify, starbucks, frontend, backend } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    resturant,
    hiking,
    hotel,
    weather
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
   
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
  
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "FrontEnd Developer",
        icon: frontend,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Proficient in React.js for building interactive web applications.",
            "Experienced with Next.js for server-side rendering and SEO optimization.",
            "Skilled in Tailwind CSS for rapid and customizable UI development.",
            "Proficient in Redux Toolkit for efficient state management in React applications.",
            "Strong command of modern JavaScript (ES6+) features.",
            "Familiar with component-based development principles and best practices.",
            "Experienced in implementing responsive design using media queries and CSS frameworks."
        ],
    },
    
    {
        title: "Backend Developer",
        icon: backend,
        iconBg: "#b7e4c7",
        points: [
            "Proficient in building server-side applications using Express.js and Node.js.",
            "Experienced in database management with MongoDB, including CRUD operations and schema design.",
            "Skilled in integrating and interacting with third-party APIs and services.",
            "Proficient in Sanity.io CMS for content management and structured data modeling.",
            "Familiar with GROQ (Graph-Relational Object Queries) for querying and retrieving data from Sanity.io.",
            "Capable of building RESTful APIs and handling authentication and authorization processes.",
            "Strong problem-solving skills and ability to troubleshoot issues independently."
        ],
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: resturant,
        theme: 'btn-back-red',
        name: 'Resturant Website',
        description: 'A resturant website with search option price filter, food filter, AddtoCart option with unique add to cart button ',
        link: 'https://food-restaurant-website-with-rtk.vercel.app/',
    },
    {
        iconUrl: hiking,
        theme: 'btn-back-green',
        name: 'Travel UI/UX App for Camping',
        description: 'Experience seamless exploration with our captivating travel website UI/UX. From dreamy destinations to effortless planning, let your wanderlust soar.',
        link: 'https://travel-website-pink-tau.vercel.app/',
    },
    {
        iconUrl: hotel,
        theme: 'btn-back-blue',
        name: 'Hotel-Managment',
        description: 'A Hotel Mangment Website Full Stack Using Nexts Js, Tailwind CSS, and TS and most important Sanity.io as Backend for data Handling is Here Now (add /studio in URL for sanity Admin Database).',
        link: 'https://hotel-website-khaki.vercel.app/',
    },
    {
        iconUrl: weather,
        theme: 'btn-back-yellow',
        name: 'Weather-APPlication',
        description: 'React Weather Application that efficiently fetching data from an API passes and displays weather data using props. This Application provides a clean and responsive interface to present real-time weather information.',
        link: 'https://react-weather-app-silk-beta.vercel.app/',
    },
    {
        iconUrl: recipe,
        theme: 'btn-back-orange',
        name: 'Recipe-APPlication',
        description: 'A recipe application using React.js Context API enables efficient state management by providing a centralized way to share data like recipe lists, search filters, and favorites across multiple components'
        link: 'https://food-recepie-application.vercel.app/',
    }
   
];
