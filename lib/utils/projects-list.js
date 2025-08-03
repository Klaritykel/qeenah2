export const projects = [
  {
    name: "ValueMax Prototype",
    description: `ValueMax is a mobile learning platform designed to help users track and manage their educational progress in various skill areas such as Graphic Design, Digital Marketing, and Web Development

The app features a clean and user-friendly dashboard where users can view their completed and ongoing courses, search for specific lessons, and instantly access course certificates.
    `,
    images: [2, 1, 3, 4, 5, 6].map((img) => `/images/projects/valuemax/${img}.png`),
    alt_attr: "ValueMax Illustration",
    id: "valuemax",
    techs: ["Figma", "Prototype"],
    github_repo: "https://github.com/benjaminnkem/bstore",
    live_: {
      url: "https://www.figma.com/proto/j9OuAxo9Ufngc881mUE1qT/Valuemax-Mobile",
      name: "ValueMax",
    },
  },
  {
    name: "Simplified Credit",
    description: `"Simplified Credit" is about providing users with an easy and reliable way to compare different types of loan options—including business loans, personal loans, and intervention funds. It serves as a one-stop platform for accessing credit information, calculating loan or mortgage repayments, and making informed financial decisions

It also comes with a loan calculator functionality that calculate loans and interest rates.    
    `,
    images: ["cover", 1, 2, 3].map((num) => `/images/projects/simplified/${num}.png`),
    alt_attr: "Simplified Illustration",
    id: "simplified",
    techs: ["HTML", "Javascript", "Bootstrap"],
    github_repo: "",
    live_: {
      url: "https://qeenah005.github.io/port/simplified.html",
      name: "Simplified Credit",
    },
  },
  {
    name: "GoCart Prototype",
    description: `GoCart offers a flexible subscription system tailored for service providers and product sellers. Users can choose from three tiers—Basic (free), Gold, and Premium—based on their business needs and growth goals. Each tier provides increasing benefits such as reduced sales commission, access to promotional tools, priority support, and visibility enhancements.

This model empowers users to scale affordably while maximizing exposure and sales potential on the GoCart platform.
    `,
    images: ["cover"].map((num) => `/images/projects/gocart/${num}.png`),
    alt_attr: "GoCart Illustration",
    id: "gocart",
    techs: ["Figma", "Prototype", "Desktop"],
    github_repo: "",
    live_: {
      url: "https://www.figma.com/design/u5YttTbbhswqiDLy2zpoAh/Untitled",
      name: "GoCart",
    },
  },
];
