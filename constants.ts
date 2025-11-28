import { ContactInfo, Experience, SkillCategory } from './types';

export const CONTACT_INFO: ContactInfo = {
  email: "botran153@gmail.com",
  phone: "0352941465",
  location: "Ho Chi Minh City",
  linkedin: "https://linkedin.com/in/bộ-trần-6b7499183", // Normalized link
  github: "https://github.com/tranvanbo",
  avatar: "https://picsum.photos/400/400" // Placeholder, user should replace this
};

export const SUMMARY = `I have 3 years of hands-on experience in building high-performance mobile applications with React Native. I focus on delivering smooth user experiences, optimizing performance, and implementing impactful features. Having worked on apps in e-commerce, customer loyalty, and internal operations, I bring practical insight into building solutions tailored to real-world business needs. I'm currently seeking a position where I can grow professionally and contribute meaningfully to the company's success.`;

export const SKILLS: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React Native", "Redux Thunk", "Redux Saga", "Redux Toolkit", "GraphQL", "Apollo Client", "Firebase", "Mini App"]
  },
  {
    title: "Tools & Design",
    skills: ["Figma", "Flipper", "Postman", "Git", "Repack"]
  },
  {
    title: "Soft Skills",
    skills: ["Problem-solving", "Teamwork", "Time Management", "Adaptability"]
  }
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    company: "Mobile World Group (MWG)",
    period: "5/2022 - Present",
    role: "Mobile Developer",
    projects: [
      {
        name: "Xwork App",
        type: "Mobile App",
        description: "A multi-functional application to streamline various employee workflows: work management, order approvals, maintenance requests, integration with faceMWG, digital contracts, and surveillance.",
        techStack: ["Mini App", "Redux Thunk", "JavaScript"],
        responsibilities: [
          "Rebuilt the app using Mini App technology and upgraded it to a new version.",
          "Fixed UI/UX bugs and improved app performance.",
          "Developed new functional modules."
        ]
      },
      {
        name: "Bách Hóa XANH Online",
        type: "Mobile App",
        link: "#", // Placeholder
        linkText: "App BHX",
        description: "An eCommerce project specializing in everyday consumer products such as food and beverages.",
        techStack: ["React Native", "JavaScript", "Redux Thunk"],
        responsibilities: [
          "Built customer engagement features such as gift games.",
          "Optimized product listing (category, brand, search) for better performance.",
          "Improved UI/UX and overall responsiveness."
        ]
      },
      {
        name: "Bách Hóa Xanh Nhà Cung Cấp",
        type: "Mobile App",
        description: "An application for farmers to provide crop and livestock information to ensure supply for stores.",
        techStack: ["React Native", "JavaScript"],
        responsibilities: [
          "Fixed UI bugs and maintained app logic.",
          "Implemented and maintained features related to product listing display."
        ]
      },
      {
        name: "Quà Tặng VIP",
        type: "Mobile App",
        link: "#",
        linkText: "App QTV",
        description: "A loyalty application that allows customers to accumulate and redeem points for rewards, access warranty and installment features.",
        techStack: ["Mini App", "Redux Thunk", "TypeScript"],
        responsibilities: [
          "Fixed UI bugs and researched deep linking functionality.",
          "Developed and maintained new features."
        ]
      },
      {
        name: "Avakids App",
        type: "Mobile App",
        link: "#",
        linkText: "App Avakids",
        description: "An eCommerce app specializing in products for mothers and babies.",
        techStack: ["Repack", "Redux Saga", "Redux Toolkit", "TypeScript"],
        responsibilities: [
          "Resolved UI issues, Improved user interface.",
          "Implemented animations and optimized the app for better performance.",
          "Setup deep linking for data declarer.",
          "Improved upgrade UI for new version app.",
          "Developed new functional modules."
        ]
      }
    ]
  }
];

export const EDUCATION = {
  degree: "Bachelor's Degree in Information Technology",
  school: "Saigon University",
  period: "2018 - 2022",
  note: "Able to read and understand technical documentation."
};
