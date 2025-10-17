<template>
  <div class="storybook-container">
    <!-- Book Cover/Logo -->
    <div class="book-cover">
      <div class="book-logo">
        📖
        <span class="logo-text">The Smokey Chronicles</span>
      </div>
    </div>

    <!-- Main Story Book -->
    <div class="story-book">
      <div class="book-page">
        <div class="page-content">
          <h1 class="chapter-title">Welcome to the Underworld</h1>
          <h2 class="chapter-subtitle">A Tale of Crime, Redemption, and Brotherhood</h2>
          
          <div class="story-content">
            <p class="first-letter">
              In the shadowy corners of Los Santos, where loyalty is bought with blood and trust is earned through fire, legends are born and names are forged in the crucible of violence. This is the world of Duncan Smokey—a man who rose from the slums to become a kingpin, only to lose everything and find himself reborn as Dante White.
            </p>

            <p class="centered-text">
              ***
            </p>

            <!-- Character Introduction Cards -->
            <div class="character-grid">
              <div class="character-card" @click="navigateTo('/characters/Story-DuncanSmokey')">
                <div class="character-icon">👑</div>
                <h3 class="character-name">Duncan Smokey</h3>
                <p class="character-desc">The Ghost of the Old Family</p>
                <div class="character-tags">
                  <span class="tag">Mafia</span>
                  <span class="tag">Enforcer</span>
                  <span class="tag">Legend</span>
                </div>
                <p class="character-quote">"You don't walk away from the life. You just walk quieter."</p>
              </div>

              <div class="character-card" @click="navigateTo('/characters/Story-DanteWhite')">
                <div class="character-icon">🏍️</div>
                <h3 class="character-name">Dante White</h3>
                <p class="character-desc">Silverbacks MC Brother</p>
                <div class="character-tags">
                  <span class="tag">Biker</span>
                  <span class="tag">Enforcer</span>
                  <span class="tag">Reborn</span>
                </div>
                <p class="character-quote">"I've been loyal to ghosts before. Now, I ride with the living."</p>
              </div>
            </div>

            <p class="centered-text">
              ***
            </p>

            <!-- Story Overview -->
            <h3 class="section-title">The Journey</h3>
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-marker">1</div>
                <div class="timeline-content">
                  <h4>The Rise</h4>
                  <p>From street rat to made man in the Marcello Crime Family</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-marker">2</div>
                <div class="timeline-content">
                  <h4>The Fall</h4>
                  <p>Betrayal, loss, and the destruction of everything he built</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-marker">3</div>
                <div class="timeline-content">
                  <h4>The Rebirth</h4>
                  <p>Duncan Smokey dies, Dante White is born</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-marker">4</div>
                <div class="timeline-content">
                  <h4>Brotherhood</h4>
                  <p>Finding family and purpose with the Silverbacks MC</p>
                </div>
              </div>
            </div>

            <!-- Quick Navigation -->
            <div class="quick-nav">
              <NuxtLink to="/characters/Story-DuncanSmokey" class="nav-button large">
                Begin Duncan's Story
              </NuxtLink>
              <NuxtLink to="/characters/Story-DanteWhite" class="nav-button large outline">
                Continue as Dante
              </NuxtLink>
              <NuxtLink to="/characters/CharacterBio" class="nav-button large outline">
                Character Dossier
              </NuxtLink>
            </div>

            <p class="final-line">
              Enter a world where names change but the soul remains.<br>
              Where loyalty is the only currency that matters.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Navigation -->
    <div class="book-navigation">
      <div class="nav-spacer"></div>
      <NuxtLink to="/characters/Story-DuncanSmokey" class="nav-button next-button">
        Begin the Story →
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const navigateTo = (path) => {
  navigateTo(path);
};
</script>

<style scoped>
/* Character Grid */
.character-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.character-card {
  background: #f8f1e5;
  border: 2px solid #d4af37;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.character-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-color: #8B4513;
}

.character-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.character-name {
  font-size: 1.5rem;
  color: #8B4513;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.character-desc {
  font-style: italic;
  color: #666;
  margin-bottom: 1rem;
}

.character-tags {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.tag {
  background: #8B4513;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
}

.character-quote {
  font-style: italic;
  color: #A0522D;
  border-top: 1px solid #d4af37;
  padding-top: 1rem;
  margin-top: 1rem;
  font-size: 0.9rem;
}

/* Timeline */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 2rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #d4af37;
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  position: relative;
}

.timeline-marker {
  background: #8B4513;
  color: white;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
  z-index: 2;
  border: 3px solid #d4af37;
}

.timeline-content {
  flex: 1;
  padding: 1rem;
  background: #f8f1e5;
  border-radius: 8px;
  border-left: 4px solid #8B4513;
}

.timeline-content h4 {
  color: #8B4513;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.timeline-content p {
  margin: 0;
  color: #666;
}

/* Quick Navigation */
.quick-nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 3rem 0;
}

.nav-button.large {
  padding: 1.2rem 2rem;
  font-size: 1.2rem;
  text-align: center;
  text-decoration: none;
}

.nav-button.outline {
  background: transparent;
  border: 2px solid #8B4513;
  color: #8B4513;
}

.nav-button.outline:hover {
  background: #8B4513;
  color: white;
}

.nav-spacer {
  flex: 1;
}

/* Responsive Design */
@media (max-width: 768px) {
  .character-grid {
    grid-template-columns: 1fr;
  }
  
  .timeline::before {
    left: 2rem;
  }
  
  .timeline-marker {
    width: 3.5rem;
    height: 3.5rem;
    font-size: 1rem;
  }
  
  .quick-nav {
    margin: 2rem 0;
  }
  
  .nav-button.large {
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
  }
}
</style>