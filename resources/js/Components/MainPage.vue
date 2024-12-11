<template>
    <div class="main-page">
        <h1 data-aos="fade-up" class="header-title">
            <img src="/images/profile-image.jpg" alt="Daniil Perepelitsa" class="header-photo">
            <h2 class="glow-text">Hey, I'm Daniil Perepelitsa.</h2>
        </h1>

        <section class="description">
            <div class="content">
                <p class="highlight-text">
                    I have <span class="highlight">5 years</span> of experience as a <span class="highlight">full stack</span> developer.
                </p>
                <p>
                    When I'm developing, I focus on <span class="highlight">speed</span> and <span class="highlight">security</span>. I'm passionate about learning new technologies, toolkits, and methodologies.
                </p>
                <p>
                    My primary tech stack is:
                </p>
            </div>
        </section>

        <div class="info-container">
            <div class="skills-section">
<!--                <h4>Backend Skills:</h4>-->
                <div class="skills-grid">
                    <button class="glow-btn" disabled>
                        <img src="/images/icons/php.png" alt="PHP Icon" class="icon">
                        PHP
                    </button>
                    <button class="glow-btn" disabled>
                        <img src="/images/icons/laravel.png" alt="Laravel Icon" class="icon">
                        Laravel
                    </button>
                    <button class="glow-btn" disabled>
                        <img src="/images/icons/docker.png" alt="Docker Icon" class="icon">
                        Docker
                    </button>
                    <button class="glow-btn" disabled>LAMP</button>
                </div>
            </div>

            <div class="skills-section">
<!--                <h4>Frontend Skills:</h4>-->
                <div class="skills-grid">
                    <button class="glow-btn" disabled>
                        <img src="/images/icons/vue.png" alt="Vue Icon" class="icon">
                        Vue.js
                    </button>
                    <button class="glow-btn" disabled>
                        <img src="/images/icons/vue.png" alt="Vue Icon" class="icon">
                        Vue 3
                    </button>
                    <button class="glow-btn" disabled>
                        <img src="/images/icons/html.png" alt="HTML/CSS Icon" class="icon">
                        HTML
                    </button>
                    <button class="glow-btn" disabled>
                        <img src="/images/icons/css.png" alt="HTML/CSS Icon" class="icon">
                        CSS
                    </button>
                    <button class="glow-btn" disabled>Vuex</button>
                </div>
            </div>

            <div class="row futuristic-block">
                <div class="col">
                    <section data-aos="fade-up" class="card">
                        <div class="card-header">
                            <img src="/images/icons/database.png" alt="Docker Icon" class="icon">
                            <h2>Databases:</h2>
                        </div>
                        <div class="card-content">
                            <ul>
                                <li>MySQL</li>
                                <li>MariaDB</li>
                                <li>Experience with GIS (Geographical Information Systems) data manipulation and queries</li>
                            </ul>
                        </div>
                    </section>
                </div>
                <div class="col">
                    <section data-aos="fade-up" class="card">
                        <div class="card-header">
                            <img src="/images/icons/git.png" alt="Docker Icon" class="icon">
                            <h2>Version control:</h2>
                        </div>
                        <div class="card-content">
                            <ul>
                                <li>Git, proficient with Git Flow</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>

            <section data-aos="fade-up" class="testimonials">
                <h2 class="section-title">What people say about me:</h2>
                <div class="testimonials-grid">
                    <div class="testimonial">
                        <img src="/images/reviews/review-1.png" alt="Review 1">
                    </div>
                    <div class="testimonial">
                        <img src="/images/reviews/review-2.png" alt="Review 2">
                    </div>
                    <div class="testimonial">
                        <img src="/images/reviews/review-3.png" alt="Review 3">
                    </div>
                    <div class="testimonial">
                        <img src="/images/reviews/review-4.png" alt="Review 4">
                    </div>
                </div>
            </section>


            <section data-aos="fade-up" class="links">
                <div class="contact-text">
                    I'm open to full-time positions, so don't hesitate to contact me! You'll win if you choose to work with me.
                </div>
                <div class="buttons-row">
                    <a href="https://www.upwork.com/freelancers/~01c2bbcb3783d2312f" target="_blank">
                        <button class="glow-btn">Get in touch</button>
                    </a>
                    <a href="https://github.com/DaniilPerepelitsa08" target="_blank">
                        <button class="glow-btn">GitHub</button>
                    </a>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name: 'MainPage',
    mounted() {
        AOS.init({
            duration: 1200,
            once: false,
        });
    }
};
</script>

<style scoped>
.header-photo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-right: 20px;
    object-fit: cover;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.header-title {
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 1rem;
    margin-bottom: 40px;
}

.main-page {
    max-width: 100%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #dbdbdb;
    font-family: 'Orbitron', sans-serif;
    min-height: 100vh;
}

h1 {
    font-size: 4rem;
    text-align: center;
    margin-bottom: 40px;
}

h1 .glow-text {
    color: #58824b;
}

h2, h4 {
    color: #58824b;
    text-shadow: 0 0 10px #58824b;
    margin-bottom: 20px;
}

p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #dbdbdb;
    text-align: center;
}

p .highlight {
    color: #58824b;
    font-weight: bold;
}
h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 2rem;
    color: #58824b;
    text-shadow: 0 0 10px rgba(88, 130, 75, 0.8), 0 0 20px rgba(88, 130, 75, 0.5);
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 20px;
    text-align: center;
    transition: all 0.3s ease;
}

.skills-section {
    margin-bottom: 60px;
    text-align: center;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    justify-items: center;
}

.glow-btn {
    background: transparent;
    color: #eaf0e9;
    border: 2px solid #eaf0e9;
    padding: 10px 20px;
    font-size: 1.1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 0 10px rgba(234, 240, 233, 0.8), 0 0 20px rgba(234, 240, 233, 0.5);
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.glow-btn:hover {
    background: #eaf0e9;
    color: #101216;
    box-shadow: 0 0 20px rgba(234, 240, 233, 0.8), 0 0 40px rgba(234, 240, 233, 0.5);
}

.glow-btn:disabled {
    opacity: 0.7;
}



ul {
    padding-left: 20px;
    margin-top: 10px;
    list-style-type: square;
    font-size: 1.1rem;
}

.links {
    text-align: center;
    margin-top: 50px;
}

.contact-text {
    margin-bottom: 20px;
    font-size: 1.2rem;
    color: #dbdbdb;
}

.buttons-row {
    display: flex;
    gap: 20px;
    justify-content: center;
}

a {
    text-decoration: none;
    color: inherit;
}

@media (max-width: 768px) {
    h1 {
        font-size: 3rem;
    }

    p {
        font-size: 1rem;
    }

    .skills-grid {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
}

.futuristic-block {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 40px;
    background: linear-gradient(120deg, #101216, #1a1d25);
}

.card {
    background: linear-gradient(120deg, #101216, #1a1d25);
    border: 1px solid rgba(88, 130, 75, 0.5);
    border-radius: 15px;
    box-shadow: 0 0 15px rgba(88, 130, 75, 0.3), 0 0 30px rgba(88, 130, 75, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    padding: 20px;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 25px rgba(88, 130, 75, 0.6), 0 0 50px rgba(88, 130, 75, 0.3);
}

.card-header {
    display: flex; /* Включаем flexbox */
    align-items: center; /* Выравнивание по вертикали */
    gap: 10px; /* Отступ между иконкой и текстом */
}

.card-header h2 {
    font-size: 1.5rem;
    color: #dbdbdb;
    text-shadow: 0 0 10px #58824b, 0 0 20px #58824b;
    margin: 0; /* Убираем лишние отступы */
    text-align: left; /* Выравнивание текста */
}

.card-header .icon {
    width: 24px; /* Размер иконки */
    height: 24px;
    flex-shrink: 0; /* Запрет уменьшения иконки */
}
.card-content ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.card-content ul li {
    font-size: 1rem;
    color: #dbdbdb;
    line-height: 1.6;
    padding: 5px 0;
    position: relative;
    padding-left: 20px;
}

.card-content ul li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background: #58824b;
    border-radius: 50%;
    box-shadow: 0 0 5px #58824b, 0 0 10px #58824b;
}

.testimonials {
    margin-top: 60px;
    text-align: center;
}

.section-title {
    font-size: 2rem;
    color: #58824b;
    text-shadow: 0 0 10px #58824b, 0 0 20px #58824b;
    margin-bottom: 40px;
}

.testimonials-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
}

.testimonial {
    max-width: 600px;
    padding: 5px;
    border: 1px solid rgba(88, 130, 75, 0.5);
    border-radius: 15px;
    box-shadow: 0 0 15px rgba(88, 130, 75, 0.3), 0 0 30px rgba(88, 130, 75, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 25px rgba(88, 130, 75, 0.6), 0 0 50px rgba(88, 130, 75, 0.3);
}

.testimonial img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(88, 130, 75, 0.4);
}

@media (max-width: 768px) {
    .testimonials-grid {
        gap: 20px;
    }

    .testimonial {
        max-width: 100%;
    }
}
</style>

