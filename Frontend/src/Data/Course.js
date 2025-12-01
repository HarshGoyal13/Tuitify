// src/data/courses.js

import cppDSAImage from "../assets/c++.png";
import mernImage from "../assets/mern.jpg";
import blockchainImage from "../assets/Blockchain.png";
import techMasterImage from "../assets/TechMaster.png";



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
}






];
