<script setup>
import Navbar from '../components/NavbarComponent.vue'
import Footer from '../components/FooterComponent.vue'
</script>

<template>
    <Navbar />
    <section class="container">
        <div class="contact_container">
            <div class="conatct_content">
                <span>lawrencecoffeeshop@email.com</span>
                <span>+254 799 509 242</span>
            </div>
            <div class="contact_form">
                <form action="" method="post">
                    <div class="input_group">
                        <div class="names">
                            <div class="input_content">
                                <input type="text" name="first_name" id="first_name"  required>
                                <label for="first_name"><i class="fas fa-user-alt"></i>First Name</label>
                            </div>
                            <div class="input_content">
                                <input type="text" name="last_name" id="last_name"  required>
                                <label for="first_name"><i class="fas fa-user-alt"></i>Last Name</label>
                            </div>
                        </div>
                        <div class="input_content">
                            <input type="email" name="email" id="email" required >
                            <label for="email"><i class="fas fa-envelope"></i>Email</label>
                        </div>
                        <div class="input_content">
                            <textarea name="message" id="message" cols="7" rows="6" required></textarea>
                            <label for="first_name"><i class="fas fa-comments"></i>Message</label>
                        </div>
                    </div>
                    <button class="btn" type="submit">Submit</button>
                </form>
            </div>
        </div>
    </section>
    <Footer/>
</template>