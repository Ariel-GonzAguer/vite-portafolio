import {
  faBurger,
  faShieldCat,
  faGhost,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";

import { nanoid } from "@reduxjs/toolkit";

export const projects = [
  {
    icon: faBurger,
    name: "Porto Burger",
    href: " https://ariel-gonzaguer.github.io/Port-O-Burger/",
    text: `This web project is made in pure HTML, CSS and JS. It is one of the first projects where I used JavaScript to achieve interactivity with users.\n\
    It is a fictitious ( 😿 ) vegan burger joint. The page contains a small and delicious menu in the form of a slider and the description of the most important ingredients. In addition, users can place their order from the page. When placing the order, people have the option to read/use a detailed guide on how to place their order, this to provide more accessibility to the project.\n\The project has a lot to improve, and it will do so in the near future, but in the meantime you can see it here: `,
    key: nanoid(),
  },

  {
    icon: faRedditAlien,
    name: "Red-dit",
    href: "https://red-dit.netlify.app/",
    text: `This web app is part of CodeCademy's Front-End Development Engineering curriculum. And it was quite a challenge at the time.
    For this project I used the Reddit API, React, Redux TLK, React Router, and OAuth 2.0. The app allows users to view and search posts provided by the API, and features a section for popular subreddits. The design is simple and clean, with a color scheme that plays off of the Reddit logo.\n\
    Next steps:\n\
    > show a modal with more information when clicking on the posts.\n\
    > add a dark mode.\n\
    See the web app here:`,
    key: nanoid(),
  },

  {
    icon: faShieldCat,
    name: "Michi Cards",
    href: "https://michicards.netlify.app/",
    text: `This is my favorite project so far!\n\
    With this web app users can create their own Kitty Cat Card Collection!\n\You can create cards similar to other card games like Pokemon, but Cat based.
    Take a screenshot and share it with your friends 😺\n\The card is only yours 😼\n\Made with React, React Router, Redux TLK, this web app is designed to be used on mobile devices, it also uses third-party APIs and ventures into the use of the user's device's Local Storage to save cards created with images from third-party APIs.cUsers can choose everything from the name of the Kitty, the points of each attribute, to the image of your card.\n\Try it out and tell me what you think!`,
    key: nanoid(),
  },

  {
    icon: faGhost,
    name: "the-Undefined",
    href: "https://the-undefined.netlify.app/",
    text: `This project is a website I created to participate in my first hackathon, one organized by Cloudinary and Midudev.\n\
    The game consists of four Javascript-related challenges. It uses Cloudinary's transformative AI to transform three images that the user uploads to the platform, and to modify an image already on the server using a prompt. \n\In this project I also use Wouter (for routing) and Zustand (state management) for the first time in a full project.\n\Try it here:`,
    key: nanoid(),
  },

  {
    icon: faUtensils,
    name: "Cocina Libre Menú",
    href: "https://cocinalibremenu.netlify.app/",
    text: `This is a simple, small but nice project for a small food business in San José, Costa Rica.\n\For this project I used a React custom hook for first time.\n\Next steps for this project:\n\-add a library for translation.\n\-add more features for accesibility.\n\-find some way to let the costumers make their order from the page.\n\Look at the menu here:`,
    key: nanoid(),
  },
];
