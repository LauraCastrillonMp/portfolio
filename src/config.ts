import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Laura Castrillón",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  // {
  //   title: "About",
  //   url: "/about",
  // },
  {
    title: "Projects",
    url: "/projects",
  },
];

export const socialLinks: SocialLink[] = [
  {
    url: "https://github.com/LauraCastrillonMp",
    icon: "mdi:github",
    external: true,
  },
  {
    url: "https://www.linkedin.com/in/laura-castrillón/",
    icon: "mdi:linkedin",
    external: true,
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Laura Castrillón",
    description:
      "Full time student and software developer from Colombia who loves building cool things using code."
  },
  role: "Student & Software Developer",
  description:
    "I'm Laura Castrillón, a full time student and software developer from Colombia who also loves building cool things using code.",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Laura Castrillón",
    description:
      "Full time student from Colombia who loves building cool things using code."
  },
  subtitle: "Some information about myself",
  about: {
    description: `
I'm Laura Castrillón, a full time student from Colombia who also loves building cool things using code.
<br/><br/>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque placeat est architecto tempora voluptatem sit suscipit aspernatur? <br/><br/>
Facere quibusdam reiciendis, distinctio sunt praesentium error accusantium consectetur nemo vero officia itaque.`, // Markdown is supported
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`, // Markdown is supported
    items: [
      {
        title: "Software Developer",
        company: {
          name: "Freelance",
          url: "https://github.com/LauraCastrillonMp",
        },
        date: "2021 - Present",
      },
      {
        title: "Software Developer",
        company: {
          name: "Freelance",
          url: "https://github.com/LauraCastrillonMp",
        },
        date: "2019 - 2021",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Laura Castrillón",
    description: "Check out what I've been working on."
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Datodo",
      description: "Platform for learning data structures in a interactive and fun way.",
      image: "/datodo.png",
      year: "2025",
      url: "https://github.com/LauraCastrillonMp/datodo",
    },
    {
      title: "Orbyt",
      description: "X clone in mobile and web platforms.",
      image: "/orbyt.jpg",
      year: "2025",
      url: "https://github.com/LauraCastrillonMp/x-clone",
    },
    {
      title: "Pisag",
      description: "Web platform for exploring the universe through diverses features.",
      image: "/pisag.png",
      year: "2025",
      url: "https://github.com/LauraCastrillonMp/pisag",
    },
    {
      title: "Seiiis",
      description: "Landing page for the SEIIIS university event on technology and innovation.",
      image: "/seiiis.png",
      year: "2025",
      url: "https://github.com/LauraCastrillonMp/seiiis",
    },
  ],
};