<!-- eslint-disable vue -->
<!-- eslint-disable -->
<template>
  <div>
  <NavBar />
  <main>
    <router-view/>
  </main>
 <FooterCom />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterCom from "./components/Footer.vue"

export default ({
   
  name: 'App',

  components: {
    NavBar,
    FooterCom  
  },

})

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*, *::before, *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        main {
    padding-top: 90px;
}

        html {
            scroll-behavior: smooth;
            font-size: 16px;
        }

        body {
            font-family: var(--font-body);
            background-color: var(--light-beige);
            color: var(--dark-gray);
            line-height: 1.7;
            overflow-x: hidden; 
        }

        img {
            max-width: 100%;
            height: auto;
            display: block;
        }

        a {
            text-decoration: none;
            color: inherit;
            transition: var(--transition-smooth);
        }

        ul, ol {
            list-style: none;
        }
        /* Responsive */
        @media (max-width: 1200px) {
            .hero-container { grid-template-columns: 1fr; text-align: center; }
            .hero-content { order: 2; }
            .hero-image { order: 1; }
            .hero-subtitle { margin: 0 auto 40px; }
            .hero-cta-group { justify-content: center; }
            .hero-stats { justify-content: center; }
            .hero-image-main { max-width: 400px; margin: 0 auto; }
            .hero-floating-badge { display: none; }
            .authors-grid { grid-template-columns: repeat(2, 1fr); }
            .problem-grid { grid-template-columns: repeat(2, 1fr); }
            .solution-step { grid-template-columns: 1fr; gap: 40px; }
            .solution-step:nth-child(even) { direction: ltr; }
            .about-container { grid-template-columns: 1fr; text-align: center; }
            .about-image-wrapper { max-width: 400px; margin: 0 auto; }
            .contact-container { grid-template-columns: 1fr; }
            .footer-main { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 992px) {
            :root { --section-padding: 80px; }
            .navbar { padding: 15px 30px; }
            .nav-links { display: none; }
            .nav-cta { display: none; }
            .mobile-menu-btn { display: flex; }
            .hero { padding: 120px 30px 80px; }
            .hero-title { font-size: 2.8rem; }
            .section { padding: var(--section-padding) 30px; }
            .section-title { font-size: 2.5rem; }
            .trust-stats { grid-template-columns: repeat(2, 1fr); }
            .why-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
            .hero-title { font-size: 2.2rem; }
            .hero-subtitle { font-size: 1.1rem; }
            .hero-stats { flex-direction: column; gap: 30px; align-items: center; }
            .btn-primary, .btn-secondary { padding: 15px 30px; font-size: 0.9rem; }
            .authors-grid { grid-template-columns: 1fr; }
            .problem-grid { grid-template-columns: 1fr; }
            .why-grid { grid-template-columns: 1fr; }
            .trust-stats { grid-template-columns: 1fr; }
            .section-title { font-size: 2rem; }
            .contact-form-wrapper { padding: 30px; }
            .footer-main { grid-template-columns: 1fr; gap: 40px; }
            .footer-bottom { flex-direction: column; text-align: center; }
            .footer-legal { flex-direction: column; gap: 10px; }
            .footer-trust { flex-direction: column; }
        }

        @media (max-width: 480px) {
            .navbar { padding: 15px 20px; }
            .hero { padding: 100px 20px 60px; }
            .hero-title { font-size: 1.8rem; }
            .section { padding: 60px 20px; }
            .section-title { font-size: 1.7rem; }
            .author-card { padding: 25px; }
            .book-cover { width: 150px; height: 225px; }
            .testimonial-main { padding: 30px; }
            .testimonial-text { font-size: 1.1rem; }
            .testimonial-results { flex-direction: column; gap: 20px; }
            .about-content h2 { font-size: 2rem; }
            .contact-content h2 { font-size: 2rem; }
            .footer { padding: 50px 20px 20px; }
        }

 </style>
