<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <img src="../assets/images/logo.jpg" alt="Logo dreamy" class="footer-logo" />
        <div class="footer-description">
          <strong>dreamy.</strong>
          <p>
            Dreamy UI Kit. Carefully crafted UI components for Adobe Experience Design.<br>
            100+ components and sample pages will help you to create any project.
          </p>
        </div>
      </div>
      <nav class="footer-nav">
        <a href="#">ABOUT</a>
        <a href="#">PRODUCTS</a>
        <a href="#">BLOG</a>
        <a href="#">SHOP</a>
        <a href="#">CONTACTS</a>
        <a href="#">ACERCA DE NOSOTROS</a>
        <a href="#">CONTÁCTANOS</a>
        <a href="#">POLÍTICAS</a>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #f2f2f2;
  padding: 48px 0 32px 0;
  font-family: 'Segoe UI', Arial, sans-serif;
  color: #888;
  border-top: 1px solid #e0e0e0;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;
}

.footer-left {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.footer-logo {
  width: 54px;
  height: 54px;
  object-fit: contain;
  margin-top: 2px;
}

.footer-description {
  max-width: 370px;
}

.footer-description strong {
  font-size: 1.5rem;
  color: #444;
  display: block;
  margin-bottom: 8px;
  letter-spacing: 1px;
  font-weight: 600;
}

.footer-description p {
  font-size: 1rem;
  color: #888;
  margin: 0;
  line-height: 1.5;
}

.footer-nav {
  display: flex;
  gap: 32px;
  align-items: center;
  flex-wrap: wrap;
}

.footer-nav a {
  color: #888;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 1.5px;
  font-size: 1.05rem;
  transition: color 0.2s;
  text-transform: uppercase;
}

.footer-nav a:hover {
  color: #222;
}
</style>