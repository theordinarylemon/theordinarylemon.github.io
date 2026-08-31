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
                    <!-- <img src="happy-girl-kitting.png" alt="happy-girl-kitting" class="hero-image-main"> -->
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
</div>
</template>

// <script>
// // @ is an alias to /src
// import HelloWorld from '@/components/home.vue'

// export default {
//   name: 'HomeView',
//   components: {
//     HelloWorld
//   }
// }
// </script>
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
            color: var(--drak-gray);
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
            color: var(--drak-gray);
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
.hero-floating-badge {
            position: absolute;
            background: var(--drak-gray);
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
            color: var(--drak-gray);
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
            color: var(--drak-gray);
            margin-bottom: 5px;
        }

        .trust-stat-label {
            font-size: 0.95rem;
            color: rgba(255, 255, 255, 0.6);
        }

</style>