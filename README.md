# ![Portfolio](https://img.shields.io/badge/Portfolio-Adam_Bowie-blue) Adam Bowie Portfolio

![Website Screenshot](/public/portfolioimage.png)  
*A modern personal portfolio website built with React and Tailwind CSS. Hosted on AWS.*

**Live Demo:** [https://www.truman.vip/](#)

---

## ✨ Features

- **Hero Section** with animated typing effect using `TextType`  
- **About Section** with education, experience, and personal bio  
- **Skills Section** with filterable categories (Frontend, Backend, Tools)  
- **Projects Section** showcasing featured projects with demo & GitHub links  
- **Contact Section** with functional email form via EmailJS  
- **Dark Veil Background** for subtle animation effects  
- **Responsive Navbar** with mobile dropdown menu  
- **Scroll-to-Top Button** in footer  
- **Smooth animations & transitions** throughout the site  

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)  
- **Styling:** Tailwind CSS, CSS Variables  
- **Animations:** Custom CSS keyframes + GSAP (for typing cursor)  
- **Forms:** EmailJS  
- **Icons:** Lucide React

# Truman Portfolio Deployment

The Truman Portfolio website is hosted on AWS using:

- **S3** – Stores static website files
- **CloudFront** – CDN for fast global delivery and HTTPS
- **Route 53** – Manages DNS for `truman.vip` and `www.truman.vip`
- **ACM** – Provides SSL/TLS certificates for secure HTTPS

## Setup Summary

- S3 bucket contains website files (`index.html`, CSS, JS, images)
- CloudFront distribution serves the site with HTTPS using a custom ACM certificate covering both domains
- Route 53 points both `truman.vip` and `www.truman.vip` to the CloudFront distribution
- Optional: redirect `www.truman.vip` to the root domain

The site is live and fully accessible via HTTPS at:

- `https://truman.vip`
- `https://www.truman.vip`
