import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import ss from "@/public/ss.jpg";
import sorting from "@/public/sorting.jpg";
import ndime from "@/public/ndime.jpg";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Fullstack Software Engineer",
    location: "Surat, India",
    // I graduated after 6 months of studying.
    description:
      " I am currenty doing full time job in Root Technologies. My Tech stack includes React, Next,js, MongoDB, Node and Express.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Front-end Intern",
    location: "Remote",
    description:
      "I did intern in Root Technologies . My stack includes Next.Js, React, TypeScript, Tailwind.",
    icon: React.createElement(FaReact),
    date: "2023-2024",
  },
  {
    title: "B.Tech Computer Science",
    location: "Lovely Professional University, Jalandhar",
    description: "I studied computer science and graduated in 2023.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2023",
  },
 
] as const;

export const projectsData = [
  {
    title: "Shopper",
    description:
      "It is an Ecommerce Website. I worked on A Full stack application in which admin can have access of add, delete, update products in different categories. Customers can buy different products after adding it into card when logged in.",
    tags: ["React", "Express","Nodejs","Tailwind", "MongoDB","Bootstrap"],
    imageUrl: ss,
  },
  {
    title: "5-n-dime",
    description:
      "5 & DIME is a webapp 🚀 developed 💻 for connecting ⚓ local shops 🏬 to their regular customers 👨 by online mode 💬 and thus also maintaining social distancing, shops can also put up advertisements 🎉 for offers..",
    tags: ["Nodejs", "Express", "Javascript", "MongoDB, HTML, CSS"],
    imageUrl: ndime,
  },
  {
    title: "Sorting Visualizer",
    description:
      "Sorting.Visualizer is a web app for visualizing a bunch of different sorting algorithms Like Selection Sort, Bubble Sort, Insertion Sort, Merge Sort, Quick Sort, Heap Sort With the functionality of (Speed Control) and (Array Size Control).",
    tags: ["sorting-algorithms-implemented", "javascript", "css", "html","visualizer"],
    imageUrl: sorting,
  },
] as const;

export const skillsData = [
  "C++",
  "React",
  "Nextjs",
  "JavaScript",
  "Node.js",
  "Git",
  "Tailwind",
   "Shadcn",
   "Flowbite",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Postman",
] as const;
