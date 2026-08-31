
<template>
<!-- <div class="header"> -->
  <nav class="navbar" id="navbar">
    <a href="#" class="nav-logo">
      <img src="src/assets/component/happy-girl-kitting.png" alt="happy-girl-kitting">
      <span class="nav-logo-text">MY <span>BRAND NAME</span></span>
    </a>
    <div class="nav-links">
      <router-link to="/">Home</router-link> 
      <router-link to="/product">Product</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/blog">Blog</router-link>
    </div>
  <a href="#contact" class="nav-cta">Feature Your Book</a>
  <div class="mobile-menu-btn" id="mobileMenuBtn" @click="openMobileMenu">
    <span></span>
    <span></span>
    <span></span>
  </div>
  </nav>

 <!-- Mobile Menu -->
<div class="mobile-overlay" :class="{ active: isMenuOpen }" @click="closeMobileMenu"></div>
<div class="mobile-menu" :class="{ active: isMenuOpen }">
    <i class="fas fa-times mobile-menu-close" @click="closeMobileMenu">X</i>
    <div class="mobile-menu-links">
      <router-link to="/" @click="closeMobileMenu">Home</router-link> 
      <router-link to="/product" @click="closeMobileMenu">Product</router-link>
      <router-link to="/about" @click="closeMobileMenu">About</router-link>
      <router-link to="/blog" @click="closeMobileMenu">Blog</router-link>
    </div>
</div>
<!-- </div> -->
</template>

<script>

export default {
  name: "NavBar",

  data() {
    return {
      isMenuOpen: false
    };
  },

  methods: {
    openMobileMenu() {
      console.log("open the menu clicked");

      this.isMenuOpen = true;

      console.log("after clicking:", this.isMenuOpen);

      document.body.style.overflow = "hidden";
    },

    closeMobileMenu() {
      console.log("close button clicked");

      this.isMenuOpen = false;

      document.body.style.overflow = "";
    }
  }
};

// import {ref} from "vue";
// const isMenuOpen = ref(false);

// // close menu
// function closeMobileMenu() {    
//     console.log("close button clicked")
//     isMenuOpen.value = false;
//     document.body.style.overflow = "";
// }
// export default {
//     methods:{
//     openMobileMenu() {
//     console.log("open the menu clicked")
//     console.log(isMenuOpen.value)
//     isMenuOpen.value = true;
//     console.log("after clicking"+isMenuOpen.value)
//     document.body.style.overflow = "hidden";
// }
//   },
//     name: 'NavBar',


// }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 20px 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 1000;
            transition: var(--transition-smooth);
        }

        .navbar.scrolled {
            background: rgba(238, 233, 231, 0.95);
            backdrop-filter: blur(20px);
            padding: 15px 50px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }

        .nav-logo {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .nav-logo img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid var(--accent-gold);
        }

        .nav-logo-text {
            font-family: var(--font-display);
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--dark-gray);
        }

        .nav-logo-text span {
            color: var(--accent-gold);
        }

        .nav-links {
            display: flex;
            gap: 40px;
        }

        .nav-links a {
            font-size: 0.9rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--drak-gray);
            position: relative;
            padding: 5px 0;
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--accent-gold);
            transition: var(--transition-smooth);
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        .nav-cta {
            background: var(--gradient-gold);
            color: var(--light-beige);
            padding: 12px 30px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: var(--transition-smooth);
            box-shadow: 0 4px 20px rgba(212, 165, 116, 0.3);
        }

        .nav-cta:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 30px rgba(212, 165, 116, 0.5);
        }

        .mobile-menu-btn {
            display: none;
            flex-direction: column;
            gap: 6px;
            cursor: pointer;
            z-index: 1001;
        }

        .mobile-menu-btn span {
            width: 30px;
            height: 2px;
            background: var(--drak-gray);
            transition: var(--transition-smooth);
        }
 /* Mobile Menu */
        .mobile-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            max-width: 400px;
            height: 100vh;
            background: var(--light-beige);
            z-index: 1000;
            padding: 100px 40px 40px;
            transition: var(--transition-smooth);
            box-shadow: -10px 0 40px rgba(0, 0, 0, 0.3);
        }

        .mobile-menu.active {
            right: 0;
        }

        .mobile-menu-links {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        .mobile-menu-links a {
            font-size: 1.3rem;
            font-weight: 500;
            color: var(--drak-gray);
            transition: var(--transition-smooth);
        }

        .mobile-menu-links a:hover {
            color: var(--accent-gold);
            padding-left: 15px;
        }

        .mobile-menu-close {
            position: absolute;
            top: 30px;
            right: 30px;
            font-size: 2rem;
            color: var(--drak-gray);
            cursor: pointer;
            transition: var(--transition-smooth);
        }

        .mobile-menu-close:hover {
            color: var(--accent-gold);
            transform: rotate(90deg);
        }

        .mobile-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.7);
            z-index: 999;
            opacity: 0;
            /* visibility: hidden; */
            transition: var(--transition-smooth);
        }

        .mobile-overlay.active {
            opacity: 1;
            visibility: visible;
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
