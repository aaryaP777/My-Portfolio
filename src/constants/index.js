import project2 from "../assets/projects/matchmaking.png";
import project3 from "../assets/projects/sos.png";
import project4 from "../assets/projects/plant.png";
import project5 from "../assets/projects/gym.png";
import project6 from "../assets/projects/weather.png";

export const HERO_CONTENT = `I am a dedicated web developer with a solid foundation in both front-end and back-end technologies. With practical experience in web development, I've crafted scalable, efficient applications that address real-world needs. My expertise includes technologies like React, Node.js, MongoDB, and PostgreSQL, and I am committed to learning and adapting to new challenges. I am motivated to build innovative solutions focused on enhancing user experience and supporting business growth.`;

export const ABOUT_TEXT = `
I am an aspiring software engineer with a strong enthusiasm for mathematics and a passion for coding and software development. I thrive on collaboration and enjoy creating innovative solutions alongside others, combining analytical skills with a drive to build impactful software.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Community Work Facilitator",
    company: "Akshar Paaul NGO Kothrud, Pune",
    description: `Developing an Attendance management application to conduct, manage, and maintain attendance on regular basis.`,
    technologies: ["Flutter", "Dart", "Firebase", "Figma"],
  },
  {
    year: "2023 - 24",
    role: "Desgining team member (Robocon-23)",
    company: "SIT Pune",
    description: `Designing the chasis, hardware components and simulating the working of the robot for the competition.`,
    technologies: ["Fusion 360", "AutoCAD"],
  },
];

export const PROJECTS = [
  {
    title: "Matchmaking Site",
    image: project2,
    description: `A matchmaking site for LGBTQ community, specially-abled people, and middle aged individuals. Uses machine learning concepts, and languages like python , HTML,
CSS and JavaScript using React framework.`,
    technologies: ["Python", "React", "FastAPI"],
    githubLink: "https://github.com/aaryaP777/Pal-Matchmaking_Site",
    // liveLink: "https://mhfinal.onrender.com/",
  },
  {
    title: "SOS safety Device",
    image: project3,
    description: `An IoT based device, use to transmit real-time sos messages via sms. Uses SIM800L GSM module, NodeMCU 
ESP32, etc. Used Arduino IDE for hardware code implementation in C++, Android Studio and Kotlin for user app.`,
    technologies: ["NodeMCU", "C++", "Android Studio", "Kotlin", "IoT"],
    // githubLink: "https://github.com/kewalll/Digital-Twin",
    // liveLink:
    //   "https://dplat.zbyte.io/app/digital-twin-final-final/home-page-copy-6637dbdb6643ad3a17517322",
  },
  {
    title: "Smart Plant Monitoring System",
    image: project4,
    description: `A smart system based on IoT, for real-time monitoring of plants. Used Arduino IDE to implement code in
C++, used NodeMCU and various sensors. Also used Blynk IoT app to implement the project.`,
    technologies: ["NodeMCU", "C++", "IoT"],
    // githubLink:
    //   "https://github.com/kewalll/Face-Recognition-Door-Access-Control-System",
  },
  {
    title: "Gym Management System",
    image: project5,
    description: `Online Gym Management system using NetBeans IDE implementing java, and MySQL for database
management.`,
    technologies: ["NetBeans", "MySQL", "Java"],
    githubLink: "https://github.com/aaryaP777/DBMS_Project",
  },
  {
    title: "Weather App Simulator",
    image: project6,
    description: `A weather app simulator for real time weather information, also integrated with vacation planning functionality.`,
    technologies: ["JavaScript", "HTML", "CSS-Bootstrap"],
    githubLink:
      "https://github.com/aaryaP777/Web_Development_Projects/tree/Weather-App-and-Vacay-planner-Simulator/weather%20site",
  },
];

export const CONTACT = {
  phoneNo: "+91 7507067067",
  email: "aarya.pro2425@gmail.com",
};
