const faqData =[
    {
        id: 1,
        title: "What is the main difference between React and Next.js?",
        desc: "React is a JavaScript library for building user interfaces, primarily handling the view layer. Next.js is a React framework that provides additional features like server-side rendering (SSR), static site generation (SSG), file-based routing, and API routes out of the box, making it better for production-ready applications."
    },
    {
        id: 2,
        title: "When should I choose Next.js over a standard React application",
        desc: "Choose Next.js when you need better SEO (Search Engine Optimization), faster initial page loads, or built-in routing. It's ideal for e-commerce, marketing websites, and blogs. Standard React (using Vite or Create React App) is great for highly interactive dashboards or apps that don't rely heavily on search engine visibility."
    },
    {
        id: 3,
        title: "How does routing differ between React and Next.js?",
        desc: "In standard React, you must install and configure an external library like React Router to handle navigation. In Next.js, routing is built-in and file-based. You simply create files inside the pages directory (or app directory in App Router) and the routes are generated automatically based on the file structure."
    },
    {
        id:4,
        title:"What are the rendering methods available in Next.js?",
        desc:"Next.js supports multiple rendering strategies. It includes Client-Side Rendering (CSR), Server-Side Rendering (SSR) for dynamic content, Static Site Generation (SSG) for fast, pre-rendered pages, and Incremental Static Regeneration (ISR) which allows you to update static pages after they've been built."
    },
    {
        id:5,
        title:"Can I still use React Hooks and components in Next.js?",
        desc:"Absolutely. Next.js is built on top of React, so you can use all standard React features, including Hooks (useState, useEffect, useReducer) and React components. However, you must be mindful of where you use them, as certain hooks can only run in Client Components or during specific lifecycle phases."
    }
    
]

export default faqData;