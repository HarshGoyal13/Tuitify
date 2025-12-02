// src/data/courses.js

import cppDSAImage from "../assets/c++.png";
import mernImage from "../assets/mern.jpg";
import fullstackAppCourseImage from "../assets/app.png";
import blockchainImage from "../assets/Blockchain.png";
import techMasterImage from "../assets/TechMaster.png";
import cppSchoolImage from "../assets/c++10.png";
import frontendCourseImage from "../assets/front.png";
import nodeCourseImage from "../assets/back.png";



export const courses = [
{
  id: "cpp-dsa-master-101",
  name: "C++ & Data Structures Mastery Program",
  description: "Master C++, Data Structures, Algorithms, and problem-solving with an industry-oriented curriculum.",
  about: "A structured, professional program designed to build strong fundamentals in C++ and complete mastery of Data Structures & Algorithms for technical interviews and product-based companies.",
  category: "Programming & DSA",
  price: 35000,
  discount: 10,
  image: cppDSAImage,


  includes: [
    "Live Doubt Clearing Sessions",
    "Coding Assignments",
    "Topic-Wise Problem Sheets",
    "Interview Sheet (250+ Problems)",
    "Resume & Portfolio Guidance",
    "Completion Certificate",
    "Structured Notes & Study Material",
    "Community & Mentor Support"
  ],

  modules: [
    { 
      title: "C++ Basics & Fundamentals",
      content: "Syntax, data types, operators, loops, functions, memory, pointers."
    },
    { 
      title: "Object-Oriented Programming (OOP)",
      content: "Classes, objects, inheritance, polymorphism, abstraction, encapsulation."
    },
    { 
      title: "Standard Template Library (STL)",
      content: "Vectors, lists, stacks, queues, sets, maps, pairs, algorithms."
    },
    { 
      title: "Time & Space Complexity",
      content: "Big-O notation, recurrence relations, amortized analysis."
    },

    /* ---------------- DSA Modules ---------------- */

    { 
      title: "Arrays & Searching Techniques", 
      content: "1D/2D arrays, sliding window, binary search patterns, two pointers."
    },
    { 
      title: "Strings & Pattern Algorithms", 
      content: "String manipulation, frequency maps, KMP, Rabin-Karp."
    },
    { 
      title: "Linked Lists", 
      content: "Singly/Doubly linked lists, fast-slow pointer, cycle detection, reversing."
    },
    { 
      title: "Stacks & Queues", 
      content: "Stack operations, queues, deque, monotonic stack, circular queue."
    },
    { 
      title: "Hashing & HashMaps", 
      content: "Hash tables, collision handling, frequency maps, sets."
    },
    { 
      title: "Recursion & Backtracking", 
      content: "Recursion tree, subsets, permutations, N-Queens, sudoku solver."
    },
    { 
      title: "Trees & Binary Search Trees", 
      content: "Binary trees, traversal, BST operations, diameter, LCA."
    },
    { 
      title: "Heaps & Priority Queues", 
      content: "Min/Max heap, heapify, priority queue problems."
    },
    { 
      title: "Graphs", 
      content: "BFS, DFS, cycle detection, shortest paths, Dijkstra, topological sorting."
    },
    { 
      title: "Dynamic Programming", 
      content: "1D & 2D DP, subsequence DP, knapsack, DP on trees/graphs."
    },
    { 
      title: "Greedy Algorithms", 
      content: "Activity selection, Huffman coding, interval problems."
    },
    { 
      title: "Advanced Data Structures", 
      content: "Tries, Disjoint Set Union (DSU), Segment Trees, Fenwick Tree."
    },

    /* ---------------- Final ---------------- */

    { 
      title: "Interview Preparation",
      content: "Company-wise problems, mock interviews, real interview patterns."
    },
    { 
      title: "Capstone Problem-Solving Projects",
      content: "Case studies, algorithmic mini-projects, end-to-end coding tasks."
    }
  ]
},
{
  id: "mern-stack-complete-101",
  name: "MERN Stack Web Development Master Course",
  description:
    "Become a professional full-stack developer by mastering MongoDB, Express, React, and Node.js along with complete frontend and backend foundations.",
  about:
    "A step-by-step industry-ready MERN program designed to take you from frontend basics to advanced backend, database mastery, and real-world full-stack project building.",
  category: "Web Development",
  price: 36000,
  discount: 10,
  image: mernImage,

  includes: [
    "Live Doubt Sessions",
    "Assignments & Practice Tasks",
    "Hands-on Projects",
    "Interview Preparation",
    "Resume & Portfolio Guidance",
    "Completion Certificate",
    "Study Materials",
    "Lifetime Access",
    "Community & Mentor Support"
  ],

  modules: [
    {
      title: "HTML",
      content:
        "HTML5 structure, semantic tags, forms, media elements, SEO basics."
    },
    {
      title: "CSS",
      content:
        "Selectors, box model, flexbox, grid, animations, responsive design."
    },
    {
      title: "Tailwind CSS",
      content:
        "Utility-first styling, components, layouts, responsive UI, custom configurations."
    },
    {
      title: "JavaScript Basics",
      content:
        "Variables, data types, functions, loops, arrays, DOM manipulation."
    },
    {
      title: "JavaScript Advanced",
      content:
        "Closures, promises, async-await, ES6+, OOP in JS, hoisting, event loop."
    },
    {
      title: "jQuery",
      content:
        "DOM manipulation, event handling, animations, AJAX with jQuery."
    },
    {
      title: "Node.js",
      content:
        "Node architecture, modules, file system, events, streams, async patterns."
    },
    {
      title: "Express.js",
      content:
        "Routing, middleware, REST API development, error handling, authentication basics."
    },
    {
      title: "React.js",
      content:
        "Components, props, hooks, context API, routing, state management, API integration."
    },
    {
      title: "MongoDB",
      content:
        "CRUD operations, schema design, aggregation, indexing, Mongoose models."
    },
    {
      title: "Capstone Full-Stack Project",
      content:
        "End-to-end MERN project including UI, backend APIs, database, and deployment."
    },
    {
      title: "Interview Questions & Preparation",
      content:
        "Frontend + backend interview questions, coding round practice, system design basics."
    },
    {
      title: "Resume & Portfolio Building",
      content:
        "Industry-level resume creation, GitHub portfolio setup, project presentation."
    }
  ]
},
{
  id: "blockchain-fullstack-master-101",
  name: "Blockchain Full-Stack Development Program",
  description: "Become a professional Blockchain & Web3 full-stack developer with a complete curriculum covering Solidity, Ethereum, MERN, NFTs, Rust, and Solana.",
  about: "A structured, industry-ready Blockchain program that takes you from fundamentals to advanced smart contract development, EVM internals, full-stack dApps, NFTs, and Solana development.",
  category: "Blockchain & Web3",
  price: 67000,
  discount: 10,
  image: blockchainImage,

  includes: [
    "Live Doubt Clearing Sessions",
    "Smart Contract Assignments",
    "Hands-on Blockchain Projects",
    "Interview + Portfolio Guidance",
    "Completion Certificate",
    "Structured Notes & Study Material",
    "Community & Mentor Support",
    "DApp Deployment Guides"
  ],

  modules: [

    /* ---------------- Blockchain Modules ---------------- */

    { 
      title: "Blockchain Basics",
      content: "What is blockchain, decentralization, hashing, mining, consensus, wallets, Web3 vs Web2."
    },

    { 
      title: "Solidity – Beginner Level",
      content: "Syntax, variables, data types, functions, mappings, structs, events, error handling."
    },

    { 
      title: "MetaMask & Wallet Essentials",
      content: "Wallet setup, accounts, test networks, signing transactions, connecting dApps."
    },

    { 
      title: "Solidity – Advanced",
      content: "Inheritance, interfaces, libraries, ERC20/ERC721, contract security, assembly basics."
    },

    { 
      title: "Solidity Optimization",
      content: "Gas optimization, memory vs storage, packing, loops optimization, unchecked blocks."
    },

    { 
      title: "Ethereum Development",
      content: "Ethereum architecture, nodes, JSON-RPC, transactions, gas, Alchemy, Infura."
    },

    { 
      title: "EVM (Ethereum Virtual Machine)",
      content: "Stack machine, opcodes, storage layout, call/delegatecall, memory/storage model."
    },

    { 
      title: "MERN Stack for Web3",
      content: "React basics, integrating Web3.js & Ethers.js, Express API, MongoDB, wallet auth."
    },

    { 
      title: "Yul (Low-Level EVM Language)",
      content: "Yul syntax, opcodes, inline assembly, optimized smart contracts."
    },

    { 
      title: "Major Blockchain Project",
      content: "Complete dApp project—NFT marketplace, DAO, crowdfunding, or wallet application."
    },

    { 
      title: "NFT Development",
      content: "ERC721 & ERC1155, metadata, IPFS, minting, royalties, marketplace flow."
    },

    { 
      title: "Rust Essentials",
      content: "Ownership, borrowing, structs, enums, traits—Rust foundations for Solana."
    },

    { 
      title: "Solana Development",
      content: "Solana architecture, Anchor framework, PDAs, programs, deploying Solana smart contracts."
    }
  ]
},
{
  id: "tech-master-360-101",
  name: "Tech Master 360° Program",
  description:
    "A complete 18-month mastery program covering C++ DSA, MERN Stack, OS, DBMS, Networking, and System Design for top tech career preparation.",
  about:
    "The Tech Master 360° Program is a flagship professional training track that transforms students into industry-ready full-stack developers and problem solvers. Covering every essential core CS subject along with hands-on development skills and interview preparation, this program is designed for long-term career success in top product-based companies.",
  category: "Full Career Program",
  price: 120000,
  discount: 10,
  duration: "18 Months",
  image: techMasterImage,

  includes: [
    "Live Doubt Clearing Sessions",
    "Coding & Full-Stack Assignments",
    "Topic-wise DSA Problem Sheets",
    "Interview Sheet (300+ Problems)",
    "DSA + Development Projects",
    "Resume & Portfolio Guidance",
    "Mock Interviews",
    "Completion Certificate",
    "Study Materials & Notes",
    "Community & Mentor Support",
    "Career Roadmap Sessions"
  ],

  modules: [
    /* -------------------- Phase 1: C++ & DSA -------------------- */
    {
      title: "C++ Fundamentals",
      content: "Syntax, loops, functions, pointers, memory management, OOP concepts."
    },
    {
      title: "DSA – Arrays & Searching",
      content: "1D/2D arrays, binary search, patterns, two pointers, sliding window."
    },
    {
      title: "DSA – Strings",
      content: "String manipulation, hashing, pattern matching algorithms."
    },
    {
      title: "DSA – Linked Lists",
      content: "Singly & doubly lists, fast-slow pointer, cycle detection, reversal."
    },
    {
      title: "DSA – Stacks & Queues",
      content: "Stacks, queues, monotonic stack, circular queues."
    },
    {
      title: "DSA – Trees & BST",
      content: "Binary trees, traversals, BST operations, LCA, diameter."
    },
    {
      title: "DSA – Heaps & Priority Queue",
      content: "Min/max heaps, heapify, priority queue problems."
    },
    {
      title: "DSA – Graphs",
      content: "BFS, DFS, shortest paths, topological sort, cycle detection."
    },
    {
      title: "DSA – Dynamic Programming",
      content: "1D/2D DP, subsequence patterns, knapsack, DP on trees & graphs."
    },

    /* -------------------- Phase 2: MERN Stack -------------------- */
    {
      title: "Frontend Basics (HTML, CSS, JS)",
      content:
        "HTML5, CSS3, TailwindCSS, JS fundamentals, DOM, responsive UI development."
    },
    {
      title: "Advanced JavaScript",
      content: "Closures, async programming, promises, fetch, ES6+ features."
    },
    {
      title: "React.js Development",
      content:
        "Hooks, routing, context API, state management, API integration, advanced UI."
    },
    {
      title: "Node.js & Express.js",
      content:
        "REST APIs, middlewares, authentication, error handling, JWT, backend architecture."
    },
    {
      title: "MongoDB Database",
      content:
        "CRUD, schema design, aggregation, indexing, Mongoose models & relationships."
    },
    {
      title: "Full MERN Project",
      content:
        "Build and deploy a complete full-stack application with authentication & admin panel."
    },

    /* -------------------- Phase 3: Core CS Subjects -------------------- */
    {
      title: "Operating Systems",
      content:
        "Processes, threads, scheduling, memory management, deadlock, synchronization."
    },
    {
      title: "DBMS",
      content:
        "Normalization, ER models, indexing, transactions, ACID properties, SQL queries."
    },
    {
      title: "Computer Networking",
      content:
        "OSI/TCP models, routing, DNS, HTTP/HTTPS, sockets, network layers & protocols."
    },

    /* -------------------- Phase 4: System Design -------------------- */
    {
      title: "System Design Basics",
      content:
        "Scalability, load balancing, caching, proxies, hashing, replication, sharding."
    },
    {
      title: "Low-Level Design (LLD)",
      content:
        "OOP, UML diagrams, design patterns, real-world object modeling."
    },
    {
      title: "High-Level Design (HLD)",
      content:
        "Design scalable architectures like social media, e-commerce, messaging systems."
    },

    /* -------------------- Final Phase -------------------- */
    {
      title: "Capstone Projects",
      content:
        "Industry-grade multi-module projects including full-stack apps, DSA case studies & system design problems."
    },
    {
      title: "Interview Preparation",
      content:
        "DSA + development interview problems, mock interviews, coding rounds, HR preparation."
    },
    {
      title: "Resume & Portfolio Building",
      content:
        "Professional resume, GitHub portfolio optimization, real project showcasing."
    }
  ]
},
{
  "id": "fullstack-app-dev-master-101",
  "name": "Full Stack App Development Master Course",
  "description": "A complete full-stack development program covering frontend (HTML, CSS, JS, React), backend (Node.js, Express, MongoDB), and mobile app development using React Native.",
  "about": "This program is designed to take students from zero to full-stack mastery. Starting from web basics and ending with advanced mobile app development, this course prepares students to build production-ready web apps, APIs, and mobile apps using the latest industry technologies.",
  "category": "Full Career Program",
  "price": 48000,
  "discount": 10,
  "duration": "8 Months",
  "image": fullstackAppCourseImage,

  "includes": [
    "Live Doubt Sessions",
    "Assignments & Coding Tasks",
    "Frontend + Backend + Mobile Projects",
    "Authentication & Security Training",
    "REST API Development",
    "Deployment Sessions",
    "Certificate of Completion",
    "Study Material & Notes",
    "Portfolio & Resume Guidance",
    "Community & Mentor Support"
  ],

  "modules": [

    /* -------------------- Phase 1: Frontend Foundations -------------------- */
    {
      "title": "HTML Fundamentals",
      "content": "Tags, elements, attributes, forms, semantic HTML, website structure."
    },
    {
      "title": "CSS Fundamentals",
      "content": "Selectors, box model, flexbox, grid, transitions, animations."
    },
    {
      "title": "Responsive Web Design",
      "content": "Media queries, mobile-first design, layout techniques."
    },
    {
      "title": "TailwindCSS",
      "content": "Utility-first CSS, responsive classes, components, layouts."
    },

    /* -------------------- Phase 2: JavaScript Mastery -------------------- */
    {
      "title": "JavaScript Basics",
      "content": "Variables, data types, functions, arrays, objects, DOM."
    },
    {
      "title": "Advanced JavaScript",
      "content": "ES6+, closures, promises, async/await, fetch API, modules."
    },

    /* -------------------- Phase 3: React.js Frontend Development -------------------- */
    {
      "title": "React Fundamentals",
      "content": "Components, props, state, events, conditional rendering."
    },
    {
      "title": "React Advanced Concepts",
      "content": "Hooks, context API, routing, API integration, custom hooks."
    },
    {
      "title": "React Project",
      "content": "Build and deploy a real web app using React."
    },

    /* -------------------- Phase 4: Backend with Node.js -------------------- */
    {
      "title": "Node.js Fundamentals",
      "content": "Node architecture, modules, event loop, fs module, HTTP."
    },
    {
      "title": "Express.js Backend",
      "content": "Routing, controllers, middleware, REST APIs, error handling."
    },

    /* -------------------- Phase 5: Database (MongoDB) -------------------- */
    {
      "title": "MongoDB Essentials",
      "content": "CRUD operations, schemas, collections."
    },
    {
      "title": "Mongoose ORM",
      "content": "Models, relationships, validation, timestamps."
    },
    {
      "title": "Advanced MongoDB",
      "content": "Aggregation pipeline, indexing, optimization."
    },

    /* -------------------- Phase 6: Full Stack Projects -------------------- */
    {
      "title": "Full Stack MERN Project",
      "content": "React + Node.js + MongoDB full-stack web application."
    },
    {
      "title": "Authentication System",
      "content": "JWT, bcrypt, protected routes, roles."
    },
    {
      "title": "Cloud File Upload",
      "content": "Multer, Cloudinary, image handling."
    },

    /* -------------------- Phase 7: React Native App Development -------------------- */
    {
      "title": "React Native Basics",
      "content": "Core components, JSX, styling, flexbox, props, state."
    },
    {
      "title": "React Native Navigation",
      "content": "Stack navigation, tab navigation, drawer navigation."
    },
    {
      "title": "API Integration in React Native",
      "content": "Fetching data, authentication, handling async tasks."
    },
    {
      "title": "React Native Advanced",
      "content": "Native modules, animations, offline storage, context, Redux (optional)."
    },

    /* -------------------- Phase 8: Final Capstone Projects -------------------- */
    {
      "title": "Major Full Stack App",
      "content": "A production-grade app combining Node.js backend + React Native frontend."
    },
    {
      "title": "Deployment",
      "content": "Deploy backend on Render/Railway/AWS, deploy apps for Android/iOS."
    },
    {
      "title": "Portfolio & Interview Prep",
      "content": "Resume building, 30+ interview questions, GitHub profile optimization."
    }
  ]
},
{
  "id": "cpp-school-master-11-12",
  "name": "C++ Master Course for Class 11 & 12",
  "description": "A beginner-friendly C++ course designed specially for Class 11 & 12 students focusing on school syllabus, logic building, and strong programming foundations.",
  "about": "This course covers the complete Class 11 & 12 C++ syllabus along with practical programming foundations. Students will learn everything from basics to object-oriented programming in a very easy and structured way, preparing them for board exams and future programming careers.",
  "category": "School Programming Course",
  "price": 15000,
  "discount": 10,
  "duration": "6 Months",
  "image": cppSchoolImage,

  "includes": [
    "Live Doubt Sessions",
    "Board Exam-Oriented Notes",
    "Assignments & Worksheets",
    "Monthly Tests",
    "Practical File Guidance",
    "C++ Programs Practice Sheets",
    "Mini Projects",
    "Completion Certificate",
    "Mentor Support",
    "MCQ + Theory Tests for Boards"
  ],

  "modules": [
    /* -------------------- Basics (Class 11 Level) -------------------- */
    {
      "title": "Introduction to Programming",
      "content": "What is programming, problem solving basics, flowcharts, algorithms."
    },
    {
      "title": "Basics of C++",
      "content": "Structure of a C++ program, cout/cin, variables, data types, constants, keywords."
    },
    {
      "title": "Operators in C++",
      "content": "Arithmetic, relational, logical, assignment, increment/decrement, operator precedence."
    },
    {
      "title": "Control Statements",
      "content": "if-else, nested if, switch-case, loops (for, while, do-while), break, continue."
    },
    {
      "title": "Functions",
      "content": "Function declaration, return types, parameters, pass by value/reference, inline functions."
    },
    {
      "title": "Arrays (1D & 2D)",
      "content": "Declaration, initialization, traversing, searching, sorting basics."
    },
    {
      "title": "Strings in C++",
      "content": "Character arrays, string handling functions, input/output techniques."
    },

    /* -------------------- OOP + Class 12 Level -------------------- */
    {
      "title": "Object-Oriented Programming Basics",
      "content": "Classes, objects, member functions, access specifiers."
    },
    {
      "title": "Constructors & Destructors",
      "content": "Default, parameterized, copy constructor, destructor working."
    },
    {
      "title": "Inheritance",
      "content": "Types of inheritance, base/derived classes, protected members, constructor order."
    },
    {
      "title": "Polymorphism",
      "content": "Function overloading, operator overloading, basics of runtime polymorphism."
    },
    {
      "title": "Encapsulation & Abstraction",
      "content": "Header files, class encapsulation, abstraction roles in C++."
    },
    {
      "title": "Pointers",
      "content": "Pointer basics, pointer arithmetic, pointers with arrays & functions."
    },
    {
      "title": "File Handling",
      "content": "Opening, closing files, read/write using fstream, handling file errors."
    },

    /* -------------------- Core Logic Building -------------------- */
    {
      "title": "School-Level DSA Basics",
      "content": "Searching (linear, binary), sorting (bubble, selection), stacks/queues introduction."
    },
    {
      "title": "Mathematics in Programming",
      "content": "Prime numbers, factors, patterns, number system, important logic programs."
    },

    /* -------------------- Projects & Exam Prep -------------------- */
    {
      "title": "Mini Projects",
      "content": "Library management, student database, billing system, quiz application."
    },
    {
      "title": "Practical File Preparation",
      "content": "20+ programs for practical file, formatting, viva preparation."
    },
    {
      "title": "Board Exam Preparation",
      "content": "Chapter-wise notes, MCQs, long questions, sample paper practice."
    }
  ]
},
{
  "id": "frontend-master-beginner-101",
  "name": "Frontend Development Master Course",
  "description": "A complete beginner-friendly course to learn Frontend Development from HTML, CSS, TailwindCSS, JavaScript basics to powerful React.js applications.",
  "about": "This course is designed for students who want to start their journey in web development. You will learn everything required to build professional, responsive, modern websites and dynamic single-page applications using HTML, CSS, TailwindCSS, JavaScript, and React.js. No prior coding knowledge required.",
  "category": "Development",
  "price": 20000,
  "discount": 10,
  "duration": "4 Months",
  "image": frontendCourseImage,

  "includes": [
    "Live Doubt Sessions",
    "Assignments + Projects",
    "Responsive Website Practice",
    "Component-Based UI Training",
    "React.js Project Walkthroughs",
    "Mini + Major Projects",
    "Certificate of Completion",
    "Study Material & Notes",
    "Portfolio & Resume Guidance",
    "Community + Mentor Support"
  ],

  "modules": [
    /* -------------------- Module 1: HTML -------------------- */
    {
      "title": "HTML Basics",
      "content": "Introduction to web, tags, elements, attributes, headings, paragraphs, links, images."
    },
    {
      "title": "Structuring Websites",
      "content": "Lists, tables, semantic tags (header, footer, section, article)."
    },
    {
      "title": "Forms & Inputs",
      "content": "Form tag, input types, buttons, labels, validation basics."
    },
    {
      "title": "HTML Project",
      "content": "Build a basic multi-page website using pure HTML."
    },

    /* -------------------- Module 2: CSS -------------------- */
    {
      "title": "CSS Fundamentals",
      "content": "Selectors, colors, units, box model, display properties."
    },
    {
      "title": "Layouts",
      "content": "Flexbox, grid, positioning, responsive units, media queries."
    },
    {
      "title": "Styling Techniques",
      "content": "Borders, shadows, transitions, animations, pseudo classes/elements."
    },
    {
      "title": "CSS Project",
      "content": "Create a responsive landing page with animations."
    },

    /* -------------------- Module 3: TailwindCSS -------------------- */
    {
      "title": "Introduction to TailwindCSS",
      "content": "Why Tailwind, installation, utility-first concept."
    },
    {
      "title": "Styling with Tailwind",
      "content": "Containers, spacing, typography, colors, flex, grid."
    },
    {
      "title": "Components & UI Patterns",
      "content": "Navbar, hero section, cards, forms, animations."
    },
    {
      "title": "Tailwind Project",
      "content": "Build a fully responsive modern website with Tailwind components."
    },

    /* -------------------- Module 4: JavaScript Essentials -------------------- */
    {
      "title": "JavaScript Basics",
      "content": "Variables, data types, operators, conditionals, loops."
    },
    {
      "title": "Functions & Arrays",
      "content": "Normal & arrow functions, arrays, objects, iteration."
    },
    {
      "title": "DOM Manipulation",
      "content": "Selecting elements, events, dynamic UI changes."
    },
    {
      "title": "APIs & Fetch",
      "content": "Working with APIs, fetch(), promises, JSON."
    },
    {
      "title": "JavaScript Mini Projects",
      "content": "Todo app, calculator, color switcher, counter, form validation."
    },

    /* -------------------- Module 5: React.js -------------------- */
    {
      "title": "React Fundamentals",
      "content": "Components, props, JSX, folder structure, reusable UI."
    },
    {
      "title": "State & Hooks",
      "content": "useState, useEffect, events, conditional rendering."
    },
    {
      "title": "Routing & Navigation",
      "content": "React Router, pages, navigation, dynamic routes."
    },
    {
      "title": "Working with APIs",
      "content": "Fetch API data, handle loading & errors, dynamic UI updates."
    },
    {
      "title": "Context API",
      "content": "Global state management, theme switchers, auth basics."
    },
    {
      "title": "React Project",
      "content": "Build a complete SPA website or dashboard with multiple pages."
    },

    /* -------------------- Final Phase -------------------- */
    {
      "title": "Portfolio Building",
      "content": "Create personal portfolio website with projects & animations."
    },
    {
      "title": "Frontend Interview Prep",
      "content": "HTML/CSS/JS important interview questions, tips, portfolio review."
    }
  ]
},
{
  "id": "backend-nodejs-master-101",
  "name": "Node.js Backend Development Master Course",
  "description": "A complete backend development course covering Node.js, Express.js, MongoDB, Authentication, API development, and deployment.",
  "about": "This backend course is designed for students who want to master server-side development. You will learn how the backend works, how APIs are created, how databases store data, and how secure applications are built using Node.js, Express.js, and MongoDB. By the end, you will be able to build production-level backend systems and real-world applications.",
  "category": "Development",
  "price": 24000,
  "discount": 10,
  "duration": "4 Months",
  "image": nodeCourseImage,

  "includes": [
    "Live Doubt Sessions",
    "Assignments & Coding Tasks",
    "Backend + Database Projects",
    "Authentication & Security training",
    "REST API Development",
    "Deployment Sessions",
    "Certificate of Completion",
    "Study Material & Notes",
    "Portfolio & Resume Guidance",
    "Community & Mentor Support"
  ],

  "modules": [

    /* -------------------- Module 1: Backend Fundamentals -------------------- */
    {
      "title": "How the Web Works",
      "content": "Client-server model, HTTP basics, request/response cycle, APIs, backend architecture."
    },
    {
      "title": "Introduction to Node.js",
      "content": "What is Node, how Node works, event loop, non-blocking model, modules."
    },
    {
      "title": "Node.js Core Modules",
      "content": "FS, path, OS, http module, creating a basic server."
    },

    /* -------------------- Module 2: Express.js Essentials -------------------- */
    {
      "title": "Express.js Basics",
      "content": "Routes, middlewares, REST APIs, controllers."
    },
    {
      "title": "Advanced Express",
      "content": "Error handling, cookies, sessions, environment variables, folder structure."
    },

    /* -------------------- Module 3: MongoDB & Mongoose -------------------- */
    {
      "title": "MongoDB Fundamentals",
      "content": "NoSQL basics, CRUD operations, collections, documents."
    },
    {
      "title": "Mongoose ORM",
      "content": "Schemas, models, relationships, timestamps, validation."
    },
    {
      "title": "MongoDB Advanced",
      "content": "Aggregation pipeline, indexes, query optimization."
    },

    /* -------------------- Module 4: Authentication & Security -------------------- */
    {
      "title": "User Authentication",
      "content": "Signup/Login, password hashing, JWT authentication, bcrypt, tokens."
    },
    {
      "title": "Authorization & Access Control",
      "content": "Role-based access, middleware protection."
    },
    {
      "title": "Security Essentials",
      "content": "Helmet, rate limiting, CORS, preventing SQL injection, XSS protection."
    },

    /* -------------------- Module 5: APIs & Architecture -------------------- */
    {
      "title": "REST API Deep Dive",
      "content": "Best practices, versioning, status codes, validation."
    },
    {
      "title": "File Uploads & Cloud Storage",
      "content": "Multer, Cloudinary, image upload handling."
    },
    {
      "title": "Email & Notifications",
      "content": "Nodemailer, email templates."
    },
    {
      "title": "Payment Integration",
      "content": "Razorpay/Stripe basics and checkout flow."
    },

    /* -------------------- Module 6: Real Backend Projects -------------------- */
    {
      "title": "Mini Backend Projects",
      "content": "Blog API, Todo backend, Notes app, User CRUD system."
    },
    {
      "title": "Major Backend Project",
      "content": "Build a complete production-grade backend with authentication, role access, database, email, and deployment."
    },

    /* -------------------- Module 7: Deployment & DevOps Basics -------------------- */
    {
      "title": "Deployment",
      "content": "Deploy Node apps on Render, Railway, Vercel, or AWS. Environment configs, production builds."
    },
    {
      "title": "Git & GitHub",
      "content": "Version control, branching, pull requests, GitHub workflows."
    },

    /* -------------------- Final Phase -------------------- */
    {
      "title": "Portfolio Building",
      "content": "How to showcase backend projects professionally."
    },
    {
      "title": "Backend Interview Preparation",
      "content": "Most asked backend interview questions, MCQs, coding rounds."
    }
  ]
}








];
