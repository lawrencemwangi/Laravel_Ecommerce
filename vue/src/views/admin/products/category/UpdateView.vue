<script setup>
import Aside from '../../partials/AsideView.vue'
</script>


<template>
    <main class="Admin">
        <Aside/>

        <section class="main_content">
            <div class="custom_form">
                <h1>Update Category</h1>
                <form action="" method="post">
                <div class="input_group">
                    <label for="title">Title</label>
                    <input type="text" name="title" id="title" autofocus>
                </div>
                <button  type="submit">Update</button>
                </form>
            </div>
        </section>
    </main>
</template>