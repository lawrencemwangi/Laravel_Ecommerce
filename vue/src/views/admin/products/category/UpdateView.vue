<script setup>
import Aside from '../../partials/AsideView.vue'
</script>


<template>
    <main class="Admin">
        <Aside/>

        <section class="main_content">

            <div class="custom_form">
                <form action="" method="post">

                <div class="input_group">
                    <label for="title">Title</label>
                    <input type="text" name="title" id="title" autofocus>
                </div>
                <button class="btn" type="submit">Update</button>
                </form>
            </div>
        </section>
    </main>
</template>