<template>
  <div class="footer-extension">
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
  </div>
</template>

<style scoped>
.footer-extension {
  background: #f8f9fa;
  border-top: 1px solid #dadce0;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
}

.footer {
  background: #f8f9fa;
  padding: 25px 40px;
  font-family: 'Roboto', Arial, sans-serif;
  color: #70757a;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  font-size: 16px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 140px;
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
  gap: 32px;
}

.links-left, .links-right {
  display: flex;
  gap: 32px;
}

.footer-links a {
  color: #70757a;
  text-decoration: none;
  white-space: nowrap;
  font-size: 16px;
  padding: 4px 0;
}

.footer-links a:hover {
  text-decoration: underline;
  color: #3c4043;
}

.footer-language {
  min-width: 200px;
  text-align: right;
  color: #3c4043;
  font-size: 16px;
  padding: 4px 0;
}

@media (max-width: 768px) {
  .footer {
    padding: 22px 25px;
  }
  
  .footer-content {
    flex-direction: column;
    align-items: center;
    gap: 18px;
  }
  
  .footer-links {
    flex-direction: column;
    align-items: center;
    gap: 18px;
  }
  
  .links-left, .links-right {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  
  .footer-language {
    text-align: center;
    margin-top: 15px;
    font-size: 15px;
  }
}

</style>