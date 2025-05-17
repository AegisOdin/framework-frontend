<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <div class="brand-title">
          <img src="../assets/images/logo.jpg" alt="Logo Kabo" class="brand-logo" />
          <strong>KABO</strong>
        </div>
        <p class="brand-description">
          Ropa deportiva de alta calidad para tu mejor rendimiento.
        </p>
      </div>
      <nav class="footer-nav">
        <a href="#">INICIO</a>
        <a href="#">HOMBRE</a>
        <a href="#">MUJER</a>
        <a href="#">ACCESORIOS</a>
        <a href="#">CONTACTO</a>
        <a href="#">NOSOTROS</a>
        <a href="#">BLOG</a>
        <a href="#">POLÍTICAS</a>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #f2f2f2;
  padding: 56px 0 24px 0;
  font-family: 'Segoe UI', Arial, sans-serif;
  color: #888;
  border-top: 1px solid #e0e0e0;
  width: 100%;
  position: fixed; /* Cambiado a fixed */
  bottom: 0; /* Lo fija al fondo */
  left: 0;
  z-index: 100;
}

.footer-content {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.brand-title {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}

.brand-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 8px;
}

.brand-title strong {
  font-size: 2.2rem;
  color: #222;
  letter-spacing: 2px;
  font-weight: 700;
}

.brand-description {
  font-size: 1.15rem;
  color: #666;
  margin: 0;
  line-height: 1.6;
  max-width: 600px;
}

.footer-nav {
  display: flex;
  gap: 32px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
}

.footer-nav a {
  color: #888;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1.5px;
  font-size: 1.08rem;
  transition: color 0.2s, border-bottom 0.2s;
  text-transform: uppercase;
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
}

.footer-nav a:hover {
  color: #222;
  border-bottom: 2px solid #222;
}
</style>