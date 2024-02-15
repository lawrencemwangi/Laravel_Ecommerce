<script setup>
import Aside from './partials/AsideView.vue'
</script>

<template>
    <main class="Admin">
        <Aside/>
        <section class="main_content">
            <h1>Locations</h1>
            <div class="table">
                <table>
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Kiambu</td>
                            <td> <i class="fas fa-pencil-alt"></i></td>
                            <td><i class="fas fa-trash-alt"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </main>
</template>