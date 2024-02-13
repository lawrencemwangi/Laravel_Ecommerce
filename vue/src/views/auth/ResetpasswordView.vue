<script setup>

</script>

<template>
    <div class="custom_form">
        <h1>Reset Password</h1>
        <form action="">
            <div class="input_group">
                <label for="password">New Password</label>
                <input type="password" name="password" id="password" placeholder="new password">
            </div>
            <div class="input_group">
                <label for="confirm_password">Confrim password</label>
                <input type="password" name="confrim_password" id="confirm_password" placeholder="Confrim password">
            </div>
            <button type="submit" class="btn">Submit</button>
        </form>
    </div>
</template>