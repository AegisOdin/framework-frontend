<template>
  <div class="notfound-container">
    <h1>404</h1>
    <h2>Oops, This Page Not Found!</h2>
    <p>The link might be corrupted,<br>or the page may have been removed</p>
    <router-link to="/" class="back-btn">GO BACK HOME</router-link>
  </div>
</template>

<style scoped>
.notfound-container {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.notfound-container h1 {
  font-size: 6rem;
  font-weight: bold;
  margin: 0;
  color: #ffffff;
}
.notfound-container h2 {
  font-size: 1.7rem;
  margin: 0.5rem 0 1rem 0;
  color: #9c9c9c;
}
.notfound-container p {
  color: #888;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}
.back-btn {
  display: inline-block;
  background: #fff;
  color: #222;
  padding: 0.7rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s;
}
.back-btn:hover {
  background: #444;
}
</style>