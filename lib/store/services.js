import { faEarth, faRocket, faServer, faCode, faPencilRuler, faMobileAlt, faLaptopCode, faCube } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const services = [
  {
    type: "Frontend Development",
    description: (
      <p className="text-sm leading-relaxed text-opacity-75">
        I build clean, scalable, and interactive web interfaces using modern frontend technologies.{" "}.
      </p>
    ),
    icon: <FontAwesomeIcon icon={faCode} className="text-5xl" />,
  },
  {
    type: "UI/UX Design & Prototyping",
    description: (
      <p className="text-sm leading-relaxed text-opacity-75">
        I design intuitive user interfaces and bring ideas to life with engaging, user-centered experiences.
      </p>
    ),
    icon: <FontAwesomeIcon icon={faPencilRuler} className="text-5xl" />,
  },
  {
    type: "Responsive Web Design",
    description: (
      <p className="text-sm leading-relaxed text-opacity-75">
        I ensure websites are mobile-friendly, fast, and visually consistent across all screen sizes.
      </p>
    ),
    icon: <FontAwesomeIcon icon={faMobileAlt} className="text-5xl" />,
  },
  {
    type: "Modern Web Development with React & Next.js",
    description: (
      <p className="text-sm leading-relaxed text-opacity-75">
        I create fast, SEO-optimized, and dynamic web applications using powerful frameworks like React and Next.js
      </p>
    ),
    icon: <FontAwesomeIcon icon={faLaptopCode} className="text-5xl" />,
  },
  {
    type: "Reusable Components & UI Library Integration",
    description: (
      <p className="text-sm leading-relaxed text-opacity-75">
        I develop modular, maintainable UI components and integrate design systems to streamline development.
      </p>
    ),
    icon: <FontAwesomeIcon icon={faCube} className="text-5xl" />,
  },
];

export default services;
