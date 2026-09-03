<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-main">
                <div class="footer-brand">
                    <div class="footer-logo">
                        <img src="happy-girl-kitting.png" alt="MY BRAND NAME">
                        <span class="footer-logo-text">MY <span>WEBSITE</span></span>
                    </div>
                    <p>Connecting talented authors with passionate readers. Transform your book into a bestseller with personalized marketing strategies that deliver real results.</p>
                    <div class="footer-social">
                        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="footer-column">
                    <h4>Quick Links</h4>
                    <div class="footer-links">
                        <a href="#home">Home</a>
                        <a href="#authors">Product</a>
                        <a href="#about">About Me</a>
                        <a href="#faq">FAQ</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
                <div class="footer-column">
                    <h4>For Authors</h4>
                    <div class="footer-links">
                        <a href="#contact">Feature Your Book</a>
                        <a href="#faq">How It Works</a>
                        <a href="#testimonials">Author Results</a>
                        <a href="#about">Why Choose Me</a>
                    </div>
                </div>
                <div class="footer-column">
                    <h4>Contact</h4>
                    <div class="footer-contact-item">
                        <i class="fas fa-envelope"></i>
                        <a href="mailto:hannahwilliams11493@wps.com">angel11493@wps.com</a>
                    </div>
                    <div class="footer-contact-item">
                        <i class="fas fa-globe"></i>
                        <span>Available Worldwide</span>
                    </div>
                    <div class="footer-contact-item">
                        <i class="fas fa-clock"></i>
                        <span>Response within 24-48 hours</span>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="footer-copyright">© 2026 MYSITE. All rights reserved.</p>
                <div class="footer-legal">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
                <div class="footer-trust">
                    <div class="footer-trust-badge"><i class="fas fa-lock"></i><span>SSL Secured</span></div>
                    <div class="footer-trust-badge"><i class="fas fa-shield-alt"></i><span>Trusted Platform</span></div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default{
    name: "FooterCom"
}
</script>

<style scoped>
.footer {
            background: var(--midnight);
            padding: 80px 50px 30px;
            border-top: 1px solid rgba(212, 165, 116, 0.1);
        }

        .footer-container {
            max-width: var(--container-width);
            margin: 0 auto;
        }

        .footer-main {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 60px;
            margin-bottom: 60px;
        }

        .footer-brand {
            max-width: 350px;
        }

        .footer-logo {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 25px;
        }

        .footer-logo img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid var(--accent-gold);
        }

        .footer-logo-text {
            font-family: var(--font-display);
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--dark-gray);
        }

        .footer-logo-text span {
            color: var(--accent-gold);
        }

        .footer-brand p {
            font-size: 0.95rem;
            color: rgba(255, 255, 255, 0.6);
            line-height: 1.8;
            margin-bottom: 25px;
        }

        .footer-social {
            display: flex;
            gap: 15px;
        }

        .footer-social a {
            width: 45px;
            height: 45px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--dark-gray);
            font-size: 1.1rem;
            transition: var(--transition-smooth);
        }

        .footer-social a:hover {
            background: var(--accent-gold);
            border-color: var(--accent-gold);
            color: var(--light-beige);
            transform: translateY(-5px);
        }
        .footer-column {
            text-align: left;
        }
        .footer-column h4 {
            font-family: var(--font-display);
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--dark-gray);
            margin-bottom: 25px;
        }

        .footer-links {
            display: flex;
            flex-direction: column;
            gap: 15px;
            align-items: flex-start;
        }

        .footer-links a {
            font-size: 0.95rem;
            color: rgba(255, 255, 255, 0.6);
            transition: var(--transition-smooth);
        }

        .footer-links a:hover {
            color: var(--accent-gold);
            padding-left: 10px;
        }

        .footer-contact-item {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 15px;
        }

        .footer-contact-item i {
            color: var(--accent-gold);
            font-size: 1rem;
        }

        .footer-contact-item span,
        .footer-contact-item a {
            font-size: 0.95rem;
            color: rgba(255, 255, 255, 0.6);
        }

        .footer-contact-item a:hover {
            color: var(--accent-gold);
        }

        .footer-bottom {
            padding-top: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
        }

        .footer-copyright {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.5);
        }

        .footer-legal {
            display: flex;
            gap: 30px;
        }

        .footer-legal a {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.5);
        }

        .footer-legal a:hover {
            color: var(--accent-gold);
        }

        .footer-trust {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .footer-trust-badge {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.5);
        }

        .footer-trust-badge i {
            color: var(--accent-gold);
        }

        /* Scroll to Top */
        .scroll-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 55px;
            height: 55px;
            background: var(--gradient-gold);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--light-beige);
            font-size: 1.3rem;
            cursor: pointer;
            z-index: 999;
            opacity: 0;
            visibility: hidden;
            transition: var(--transition-smooth);
            box-shadow: 0 10px 30px rgba(212, 165, 116, 0.3);
        }

        .scroll-top.visible {
            opacity: 1;
            visibility: visible;
        }

        .scroll-top:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(212, 165, 116, 0.5);
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
