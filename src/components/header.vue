<template>
  <header class="header">
    <div class="header-container">
      <!-- Logo y nombre -->
      <div class="brand">
        <img src="../assets/images/logo.jpg" alt="Logo Kabo" class="logo" />
        <h1>KABO</h1>
      </div>

      <!-- Menú principal -->
      <nav class="main-nav">
        <a href="#">HOME</a>
        <a href="#">ROPA</a>
        <a href="#">ACCESORIOS</a>
        <a href="#">CONTACTO</a>
      </nav>

      <!-- Iconos -->
      <div class="action-icons">
        <button class="icon-btn">
          <svg viewBox="0 0 24 24" class="icon">
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </button>
        <button class="icon-btn">
          <svg viewBox="0 0 24 24" class="icon">
            <path d="M17 18c-1.11 0-2 .89-2 2 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-1.11-.89-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.11 0-2 .89-2 2 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-1.11-.89-2-2-2z"/>
          </svg>
        </button>
        <button class="icon-btn">
          <svg viewBox="0 0 24 24" class="icon">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </button>
      </div>
    </div>
  </header>

  <!-- Espacio para el contenido principal -->
  <main class="main-content">
    <!-- Tu contenido irá aquí -->
  </main>
</template>

<style scoped>
.header {
  background: #f2f2f2;
  border-bottom: 1px solid #e0e0e0;
  width: 100%;
  position: fixed; /* Fija el header en la parte superior */
  top: 0; /* Lo pega arriba */
  left: 0;
  z-index: 1000; /* Asegura que esté por encima de otros elementos */
  padding: 15px 0;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 8px;
}

.brand h1 {
  font-size: 2rem;
  color: #222;
  margin: 0;
  font-weight: 700;
  letter-spacing: 2px;
}

.main-nav {
  display: flex;
  gap: 30px;
}

.main-nav a {
  color: #555;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.2s;
}

.main-nav a:hover {
  color: #222;
}

.action-icons {
  display: flex;
  gap: 20px;
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.icon {
  width: 24px;
  height: 24px;
  fill: #555;
  transition: fill 0.2s;
}

.icon-btn:hover .icon {
  fill: #222;
}

.main-content {
  margin-top: 90px; /* Asegura que el contenido no quede detrás del header */
  min-height: calc(100vh - 180px); /* Ajusta según el tamaño de tu footer */
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    gap: 15px;
  }
  
  .main-nav {
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .main-content {
    margin-top: 150px; /* Más espacio para el header en móvil */
  }
}
</style>