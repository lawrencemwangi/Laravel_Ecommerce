<script setup>
import { ref }  from 'vue'
import axios from '@/axios';

const errorMessage = ref('');
const form = ref({
    email: ''
})

const forgotPassword = async () => {
  try {
    const response = await axios.post('/forgot-password', { email: form.value.email });
    errorMessage.value = 'Email sent successfully';
  } catch (error) {
    handleError(error);
  }
};

const handleError = (error) => {
  if (error.response && error.response.data) {
    errorMessage.value = error.response.data.message || "An error occurred while sending the email. Please try again later.";
  } else if (error.message === 'Network Error') {
    errorMessage.value = "A network error occurred. Please check your internet connection and try again.";
  } else {
    errorMessage.value = "An unknown error occurred. Please try again later.";
  }
};
</script>

<template>
    <div class="custom_form">
        <h1>Forgot Password</h1>
        <span >{{ errorMessage }}</span>
        <form @submit.prevent="forgotPassword"  class="form_container">
            <div class="input_group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" v-model="form.email" placeholder="Enter your email">
                <span  class="error" v-if="errorMessage.email">{{ errorMessage.email }}</span>
            </div>
            <button type="submit" class="btn">Submit</button>
        </form>
    </div>
</template>