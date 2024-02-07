<script setup>

</script>

<template>
    <div class="custom_form">
        <h2>Register</h2>
        <form @submit.prevent="" class="form_container">
            <div class="input_group">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" v-model="form.name" placeholder="Enter your full name">
            </div>
            <div class="input_group">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" v-model="form.email" placeholder="Enter your Email">
            </div>
            <div class="input_group">
                <label for="password">password</label>
                <input type="text" name="password" id="password" v-model="form.password" placeholder="Enter your password">
            </div>
            <div class="input_group">
                <label for="password_confirmation">password</label>
                <input type="text" name="password_confirmation" id="password_confirmation" v-model="form.password_confirmation" placeholder="Enter your password">
            </div>
            <button type="submit">Register</button>
            <p class="link"> Already have an account?<a href="/login" class="register">Login</a></P>
        </form>

    </div>
    
</template>