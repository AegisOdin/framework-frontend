<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-logo">
          <img src="../assets/images/logo.jpg" alt="Logo Kabo" class="logo" />
          <span class="logo-text">KABO</span>
        </div>
        <div class="footer-links">
          <div class="links-left">
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
            <a href="#">Acerca de Kabo</a>
          </div>
          <div class="links-right">
            <a href="#">Productos</a>
            <a href="#">Nuestra política</a>
            <a href="#">Ayuda</a>
          </div>
        </div>
        <div class="footer-language">
          <span>Español (Latinoamérica) - México</span>
        </div>
      </div>
    </footer>

</template>

<style scoped>
.footer-extension {
  background: #f8f9fa;
  border-top: 1px solid #dadce0;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 100;
}

.footer {
  background: #f8f9fa;
  padding: 25px 40px;
  font-family: 'Roboto', Arial, sans-serif;
  color: #70757a;
  max-width: 100%;
  margin: 0 auto;
  font-size: 16px;
  border-top: 1px solid #dadce0;
  bottom: 0;
  left: 0;
  z-index: 100;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.logo-text {
  font-weight: 500;
  color: #3c4043;
  font-size: 20px;
}

.footer-links {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  gap: 0.7em;
}

.links-left, .links-right {
  display: flex;
  gap: 1em;
}

.footer-links a {
  color: #70757a;
  text-decoration: none;
  white-space: nowrap;
  font-size: 16px;
}

.footer-links a:hover {
  text-decoration: underline;
  color: #3c4043;
}

.footer-language {
  text-align: right;
  color: #3c4043;
  font-size: 16px;
  padding: 4px 0;
}


</style>