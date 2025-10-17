<template>
    <nav class="storybook-nav">
      <div class="nav-container">
        <!-- Logo/Book Icon -->
        <div class="nav-logo">
          <NuxtLink to="/" class="logo-link">
            📖
            <span class="logo-text">Smokey Chronicles</span>
          </NuxtLink>
        </div>

        <!-- Navigation Links -->
        <ul class="nav-links">
          <li><NuxtLink to="/" class="nav-link">Home</NuxtLink></li>
          <li><NuxtLink to="/characters/Story-DuncanSmokey" class="nav-link">Duncan's Story</NuxtLink></li>
          <li><NuxtLink to="/characters/Story-DanteWhite" class="nav-link">Dante's Story</NuxtLink></li>
          <li><NuxtLink to="/characters/Arthur" class="nav-link">Arthur "Ash"</NuxtLink></li>
          <!-- <li><NuxtLink to="/characters/CharacterBio" class="nav-link">Character Dossier</NuxtLink></li> -->
          <li><NuxtLink to="/about" class="nav-link">About</NuxtLink></li>
        </ul>

        <!-- Mobile Menu Button -->
        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div class="mobile-menu" :class="{ 'mobile-menu-open': isMobileMenuOpen }">
        <NuxtLink to="/" class="mobile-nav-link" @click="closeMobileMenu">Home</NuxtLink>
        <NuxtLink to="/characters/Story-DuncanSmokey" class="mobile-nav-link" @click="closeMobileMenu">Duncan's Story</NuxtLink>
        <NuxtLink to="/characters/Story-DanteWhite" class="mobile-nav-link" @click="closeMobileMenu">Dante's Story</NuxtLink>
        <NuxtLink to="/characters/Arthur" class="mobile-nav-link" @click="closeMobileMenu">Arthur "Ash"</NuxtLink>
        <NuxtLink to="/characters/CharacterBio" class="mobile-nav-link" @click="closeMobileMenu">Character Dossier</NuxtLink>
        <NuxtLink to="/about" class="mobile-nav-link" @click="closeMobileMenu">About</NuxtLink>
      </div>
    </nav>
</template>

<script setup>
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<style scoped>
.storybook-nav {
  background: linear-gradient(135deg, #2c1810 0%, #8B4513 100%);
  padding: 0;
  border-bottom: 3px solid #d4af37;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

/* Logo Styles */
.nav-logo {
  flex-shrink: 0;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #d4af37;
  font-weight: bold;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.logo-link:hover {
  color: #f8e0a0;
  transform: scale(1.05);
}

.logo-text {
  font-family: 'Georgia', serif;
  font-size: 1.3rem;
}

/* Desktop Navigation */
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  align-items: center;
  flex-wrap: wrap;
}

.nav-link {
  color: #f8f1e5;
  text-decoration: none;
  font-family: 'Georgia', serif;
  font-size: 0.95rem;
  padding: 0.5rem 0.8rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  position: relative;
  border: 1px solid transparent;
  white-space: nowrap;
}

.nav-link:hover {
  color: #d4af37;
  background: rgba(212, 175, 55, 0.1);
  border-color: #d4af37;
  text-decoration: none;
}

.nav-link.router-link-active {
  color: #d4af37;
  background: rgba(212, 175, 55, 0.15);
  border-color: #d4af37;
  font-weight: bold;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  gap: 4px;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: #d4af37;
  transition: all 0.3s ease;
}

/* Mobile Menu */
.mobile-menu {
  display: none;
  flex-direction: column;
  background: #2c1810;
  border-top: 1px solid #d4af37;
  padding: 1rem 2rem;
}

.mobile-menu-open {
  display: flex;
}

.mobile-nav-link {
  color: #f8f1e5;
  text-decoration: none;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(212, 175, 55, 0.3);
  font-family: 'Georgia', serif;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.mobile-nav-link:hover {
  color: #d4af37;
  padding-left: 0.5rem;
  text-decoration: none;
}

.mobile-nav-link:last-child {
  border-bottom: none;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .nav-links {
    gap: 1rem;
  }
  
  .nav-link {
    font-size: 0.9rem;
    padding: 0.4rem 0.7rem;
  }
}

@media (max-width: 768px) {
  .nav-container {
    padding: 1rem;
  }

  .nav-links {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .logo-text {
    font-size: 1.1rem;
  }

  .logo-link {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 0.8rem;
  }

  .logo-text {
    display: none; /* Hide text on very small screens */
  }

  .logo-link {
    font-size: 1.5rem; /* Make book emoji larger */
  }
  
  .mobile-menu {
    padding: 1rem;
  }
  
  .mobile-nav-link {
    font-size: 1rem;
    padding: 0.8rem 0;
  }
}

/* Active route indicator */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: #d4af37;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 80%;
}

/* Mobile menu button animation */
.mobile-menu-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}
</style>