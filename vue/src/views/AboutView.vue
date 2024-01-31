<script setup>
import Navbar from '../components/NavbarComponent.vue'
import Footer from '../components/FooterComponent.vue'
</script>

<template>
    <Navbar />
    
    <section class="container">
        <h1>About</h1>
        <div class="about_container">
            <p> In the vibrant city of Kiambu, Lawrence, a passionate coffee enthusiast, embraces the culture,
                rituals, and community surrounding coffee. In early 2024, he turned his dream into reality,
                creating Lawrence's Coffee Shop. Here, beyond exquisite coffee, patrons find a welcoming haven
                to escape daily hustle, savor moments, and foster connections. The ambiance reflects Lawrence's 
                vision—a blend of warmth, aromatic brews, and a shared love for the rich tapestry of coffee. 
                Lawrence's Coffee Shop, a testament to the power of dreams and the joy found in the simple ritual 
                of enjoying a cup of coffee together.
            </p>
        </div>

        <div class="shop_content">
            <div class="time_cotent">
                <p>Mon -Fri: 7:00am - 5:00pm</p>
                <p>sat - sun: 10:00am - 4:00pm</p>
            </div>
            <div class="shop_image">
                <img src="../assets/images/coffeeshop.jpg" alt="....">
                <div class="shop_name">
                    <p>Lawrence Coffee Shop</p>
                    <span>since 2024</span>
                </div>
            </div>
        </div>
        <div class="owner_container">
            <h2>Founder</h2>
            <p>Explore the story of Lawrence Coffee Shop through an exclusive meeting with its founder.
              Gain insights into his journey, vision, and passion for crafting exceptional coffee experiences.
            </p>
            <div class="image_content">               
                <img src="../assets/images/mwangi.jpg" alt="picture of the ceo">
                <div class="name">
                    <p>Lawrence Mwangi <span>CEO</span></p>
                </div>
                <div class="social_media">
                    <div class="icons">
                        <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                        
                        <a href="https://www.instagram.com/lawrenzo.mwangi/" target="_blank"
                            ><i class="fab fa-instagram"></i></a>

                        <a href="https://github.com/lawrencemwangi" target="_blank"
                            ><i class="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
</template>