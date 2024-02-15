<script setup>
import Aside from './partials/AsideView.vue'
</script>

<template>
    <main class="Admin">
        <Aside/>
        <section class="main_content">
            <h1>Orders</h1>
            <div class="table">
                <table>
                    <thead>
                        <tr>
                            <th>Order No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Products</th>
                            <th>Price (Kshs)</th>
                            <th>Totals (Kshs)</th>
                            <th>Date</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>order123</td>
                            <td>Administrator</td>
                            <td>admin@gmail.com</td>
                            <td>Cappuccino</td>
                            <td>450</td>
                            <td>500</td>
                            <td>2/15/2024</td>
                            <td> <i class="fas fa-pencil-alt"></i></td>
                            <td><i class="fas fa-trash-alt"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </main>
</template>