<template>
  <header class="header">
    <div class="header-container">
      <!-- Logo y nombre -->
      <div class="brand">
        <img src="../assets/images/logo.jpg" alt="Logo Kabo" class="logo" />
        <span class="brand-name">KABO</span>
      </div>

      <!-- Menú principal centrado -->
      <nav class="main-nav">
        <div class="nav-center">
          <a href="#" class="nav-link">Productos</a>
          <a href="#" class="nav-link">Para empresas</a>
          <a href="#" class="nav-link">Servicio y soporte técnico</a>
          <a href="#" class="nav-link ">Planes y precios</a>
        </div>
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
</template>

<style scoped>
.header {
  background: #f8f9fa;
  border-bottom: 1px solid #dadce0;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 16px 0;
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 40px;
}

.logo {
  width: 36px;
  height: 36px;
  object-fit: contain;
}

.brand-name {
  font-size: 1.5rem;
  color: #3c4043;
  font-weight: 500;
}

/* Menú centrado */
.main-nav {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.nav-center {
  display: flex;
  gap: 0;
}

.nav-link {
  color: #000000;
  text-decoration: none;
  font-size: 1rem;
  padding: 10px 20px;
  margin: 0 4px;
  border-radius: 4px;
  transition: all 0.2s;
  font-weight: 500;
  white-space: nowrap;
}

.nav-link:hover {
  background-color: #f1f3f4;
  color: #202124;
}

.nav-link.active {
  color: #202124;
  font-weight: 600;
  background-color: #e8f0fe;
}

.action-icons {
  display: flex;
  gap: 20px;
  margin-left: 30px;
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.icon-btn:hover {
  background-color: #f1f3f4;
}

.icon {
  width: 24px;
  height: 24px;
  fill: #5f6368;
}

.icon-btn:hover .icon {
  fill: #202124;
}

@media (max-width: 1024px) {
  .header-container {
    padding: 0 20px;
  }
  
  .brand {
    margin-right: 20px;
  }
  
  .nav-link {
    padding: 10px 15px;
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .header {
    padding: 12px 0;
  }
  
  .main-nav {
    display: none;
  }
  
  .action-icons {
    margin-left: auto;
  }
}
</style>