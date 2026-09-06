<template>
  <div>
    <section class="hero" id="home">
      <div class="hero-background">
        <div class="hero-particles">
            <div class="particle" style="left: 10%; animation-delay: 0s;"></div>
            <div class="particle" style="left: 20%; animation-delay: 2s;"></div>
            <div class="particle" style="left: 30%; animation-delay: 4s;"></div>
            <div class="particle" style="left: 40%; animation-delay: 1s;"></div>
            <div class="particle" style="left: 50%; animation-delay: 3s;"></div>
            <div class="particle" style="left: 60%; animation-delay: 5s;"></div>
            <div class="particle" style="left: 70%; animation-delay: 2s;"></div>
            <div class="particle" style="left: 80%; animation-delay: 4s;"></div>
            <div class="particle" style="left: 90%; animation-delay: 1s;"></div>
        </div>
    </div>
        <div class="hero-container">
            <div class="hero-content" data-aos="fade-right" data-aos-duration="1000">
                <div class="hero-badge">
                    <i class="fas fa-star"></i>
                    Dedicate Language Learner
                </div>
                <h1 class="hero-title">
                    Transform Your Book Into a <span>Revenue-Generating Machine</span> That Sells While You Sleep
                </h1>
                <p class="hero-subtitle">
                    Join the exclusive platform where serious authors connect with thousands of hungry readers actively searching for their next favorite book. No gatekeepers. No algorithm games. Just direct access to readers who actually buy.
                </p>
                <div class="hero-cta-group">
                    <a href="#contact" class="btn-primary">
                        <i class="fas fa-rocket"></i>
                        Get in touch with me
                    </a>
                    <a href="#authors" class="btn-secondary">
                        <i class="fas fa-users"></i>
                        See Featured Authors
                    </a>
                </div>
                <div class="hero-stats">
                    <div class="stat-item">
                        <div class="stat-number" data-count="150">0</div>
                        <div class="stat-label">Authors Featured</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number" data-count="1000">0</div>
                        <div class="stat-label">+ Books Sold</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number" data-count="90">0</div>
                        <div class="stat-label">% Satisfaction</div>
                    </div>
                </div>
            </div>
            <div class="hero-image" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                <div class="hero-image-wrapper">
                    <img :src="knittingGirl" alt="happy-girl-kitting" class="hero-image-main">
                    <div class="hero-image-frame"></div>
                    <div class="hero-floating-badge badge-1">
                        <div class="badge-icon">
                            <i class="fas fa-trophy"></i>
                        </div>
                        <div class="badge-content">
                            <h4></h4>
                            <p>品质保证</p>
                        </div>
                    </div>
                    <div class="hero-floating-badge badge-2">
                        <div class="badge-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="badge-content">
                            <h4></h4>
                            <p>国际认证</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </section>

<!-- Trust Bar -->
<section class="trust-bar">
    <div class="trust-container">
        <h3 class="trust-title">Trusted By Authors Who've Sold Thousands of Books</h3>
        <div class="trust-stats">
            <div class="trust-stat" data-aos="fade-up" data-aos-delay="0">
                <div class="trust-stat-icon">
                    <i class="fas fa-book"></i>
                </div>
                <div class="trust-stat-number">150+</div>
                <div class="trust-stat-label">Authors Featured</div>
            </div>
            <div class="trust-stat" data-aos="fade-up" data-aos-delay="100">
                <div class="trust-stat-icon">
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <div class="trust-stat-number">1,000+</div>
                <div class="trust-stat-label">Books Sold</div>
            </div>
            <div class="trust-stat" data-aos="fade-up" data-aos-delay="200">
                <div class="trust-stat-icon">
                    <i class="fas fa-star"></i>
                </div>
                <div class="trust-stat-number">90%</div>
                <div class="trust-stat-label">Author Satisfaction</div>
            </div>
            <div class="trust-stat" data-aos="fade-up" data-aos-delay="300">
                <div class="trust-stat-icon">
                    <i class="fas fa-globe"></i>
                </div>
                <div class="trust-stat-number">70+</div>
                <div class="trust-stat-label">Countries Reached</div>
            </div>
        </div>
    </div>
</section>
<SnippetVue />
</div>
</template>

 <script>
import knittingGirl from "../assets/happy-girl-kitting.png"
import SnippetVue from "../components/Snippet.vue"

export default {
  data(){
    return{
        knittingGirl
    }
  },
  
  components: {
    SnippetVue
  }

}
</script>
<style scoped>
 .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding: 150px 50px 100px;
            position: relative;
            overflow: hidden;
            background-image: url();/* update background */
            background-size: cover; 
            background-position: center;
        }

        .hero-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }

        .hero-background::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--gradient-royal);
            opacity: 0.9;
        }

        .hero-particles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            /* background: var(--accent-gold); */
            border-radius: 50%;
            opacity: 0.3;
            animation: float 15s infinite;
        }

        @keyframes float {
            0%, 100% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% { opacity: 0.3; }
            90% { opacity: 0.3; }
            100% {
                transform: translateY(-100vh) rotate(720deg);
                opacity: 0;
            }
        }

        .hero-container {
            max-width: var(--container-width);
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
        }

        .hero-content {
            z-index: 2;
        }
         .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: rgba(212, 165, 116, 0.1);
            border: 1px solid rgba(212, 165, 116, 0.3);
            padding: 10px 20px;
            border-radius: 50px;
            margin-bottom: 30px;
            font-size: 0.85rem;
            color: var(--accent-gold);
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        .hero-badge i {
            animation: sparkle 2s ease-in-out infinite;
        }

        @keyframes sparkle {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.7; }
        }

        .hero-title {
            font-family: var(--font-display);
            font-size: 4rem;
            font-weight: 700;
            line-height: 1.1;
            margin-bottom: 30px;
            color: var(--dark-gray);
        }

        .hero-title span {
            background: var(--gradient-gold);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .hero-subtitle {
            font-size: 1.25rem;
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.8;
            margin-bottom: 40px;
            max-width: 550px;
        }

        .hero-cta-group {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }

        .btn-primary {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            background: var(--gradient-gold);
            color: var(--light-beige);
            padding: 18px 40px;
            border-radius: 50px;
            font-weight: 700;
            font-size: 1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            border: none;
            cursor: pointer;
            transition: var(--transition-smooth);
            box-shadow: 0 10px 40px rgba(212, 165, 116, 0.3);
            position: relative;
            overflow: hidden;
        }

        .btn-primary::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: var(--gradient-shine);
            transition: 0.5s;
        }

        .btn-primary:hover::before {
            left: 100%;
        }
         .btn-primary:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 50px rgba(212, 165, 116, 0.4);
        }

        .btn-secondary {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            background: transparent;
            color: var(--dark-gray);
            padding: 18px 40px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1rem;
            border: 2px solid rgba(255, 255, 255, 0.3);
            cursor: pointer;
            transition: var(--transition-smooth);
        }

        .btn-secondary:hover {
            border-color: var(--accent-gold);
            color: var(--accent-gold);
            transform: translateY(-3px);
        }

        .hero-stats {
            display: flex;
            gap: 50px;
            margin-top: 60px;
            padding-top: 40px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat-item {
            text-align: left;
        }

        .stat-number {
            font-family: var(--font-display);
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--accent-gold);
            line-height: 1;
        }

        .stat-label {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.6);
            margin-top: 5px;
        }

        .hero-image {
            position: relative;
            z-index: 2;
        }

        .hero-image-wrapper {
            position: relative;
            display: inline-block;
        }

         .hero-image-main {
            width: 100%;
            max-width: 500px;
            border-radius: 20px;
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
            position: relative;
            z-index: 2;
        }

.hero-floating-badge {
            position: absolute;
            background: var(--dark-gray);
            padding: 20px 25px;
            border-radius: 15px;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
            display: flex;
            align-items: center;
            gap: 15px;
            animation: floatBadge 4s ease-in-out infinite;
            z-index: 3;
        }

        .hero-floating-badge.badge-1 {
            bottom: 30px;
            left: -50px;
        }

        .hero-floating-badge.badge-2 {
            top: 50px;
            right: -30px;
            animation-delay: 2s;
        }

        @keyframes floatBadge {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
        }

        .badge-icon {
            width: 50px;
            height: 50px;
            background: var(--gradient-gold);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--dark-gray);
            font-size: 1.3rem;
        }

        .badge-content h4 {
            font-size: 1.1rem;
            font-weight: 700;
            color: var(--light-beige);
            margin-bottom: 2px;
        }

        .badge-content p {
            font-size: 0.8rem;
            color: var(--medium-gray);
        } /* Trust Bar */
        .trust-bar {
            background: var(--dark-brown);
            padding: 60px 50px;
            border-top: 1px solid rgba(212, 165, 116, 0.1);
            border-bottom: 1px solid rgba(212, 165, 116, 0.1);
        }

        .trust-container {
            max-width: var(--container-width);
            margin: 0 auto;
        }

        .trust-title {
            text-align: center;
            font-family: var(--font-elegant);
            font-size: 1.3rem;
            color: rgba(255, 255, 255, 0.6);
            margin-bottom: 40px;
            letter-spacing: 3px;
            text-transform: uppercase;
        }

        .trust-stats {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 40px;
        }

        .trust-stat {
            text-align: center;
            padding: 30px;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 15px;
            border: 1px solid rgba(212, 165, 116, 0.1);
            transition: var(--transition-smooth);
        }

        .trust-stat:hover {
            transform: translateY(-10px);
            border-color: var(--accent-gold);
            background: rgba(212, 165, 116, 0.05);
        }

        .trust-stat-icon {
            width: 60px;
            height: 60px;
            background: var(--gradient-gold);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 1.5rem;
            color: var(--light-beige);
        }

        .trust-stat-number {
            font-family: var(--font-display);
            font-size: 2.8rem;
            font-weight: 700;
            color: var(--dark-gray);
            margin-bottom: 5px;
        }

        .trust-stat-label {
            font-size: 0.95rem;
            color: rgba(255, 255, 255, 0.6);
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