<template>
  <div class="login-container">
    <div class="login-box">
      <h2 class="login-title">Login</h2>

      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label>Username</label>
          <div class="input-icon">
            <i class="fas fa-user"></i>
            <input
              type="text"
              v-model="username"
              placeholder="Type your username"
            />
          </div>
        </div>

        <div class="input-group">
          <label>Password</label>
          <div class="input-icon">
            <i class="fas fa-lock"></i>
            <input
              type="password"
              v-model="password"
              placeholder="Type your password"
            />
          </div>
          <div class="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
        </div>

        <button type="submit" class="login-button">LOGIN</button>
      </form>

      <div class="divider-text">Or Sign Up Using</div>

      <div class="social-icons">
        <button class="icon-button google">
          <i class="fab fa-google"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");

function handleLogin() {
  console.log("Username:", username.value);
  console.log("Password:", password.value);
}
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");

.login-container {
    margin-bottom: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-box {
  background: #fff;
  padding: 2rem;
  border-radius: 20px;
  width: 350px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.login-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color : #333;
}

.input-group {
  text-align: left;
  margin-bottom: 1.2rem;
}

.input-group label {
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
  display: block;
}

.input-icon {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  background: #f9f9f9;
}

.input-icon i {
  color: #999;
  margin-right: 0.5rem;
}

.input-icon input {
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-size: 0.95rem;
  color: #333;
}

.forgot-password {
  text-align: right;
  font-size: 0.8rem;
  margin-top: 0.3rem;
}

.forgot-password a {
  color: #888;
  text-decoration: none;
}

.forgot-password a:hover {
  text-decoration: underline;
}

.login-button {
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.login-button:hover {
  opacity: 0.9;
}

.divider-text {
  margin: 1.2rem 0 0.6rem;
  font-size: 0.9rem;
  color: #777;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.icon-button {
  border: none;
  background: none;
  font-size: 1.2rem;
  cursor: pointer;
}

.facebook {
  color: #3b5998;
}

.twitter {
  color: #1da1f2;
}

.google {
  color: #ea4335;
}

.signup-link {
  font-size: 0.9rem;
  color: #666;
}

.signup-link a {
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.signup-link a:hover {
  text-decoration: underline;
}
</style>
