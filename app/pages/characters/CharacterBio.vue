<template>
  <div class="storybook-container">
    <!-- Book Cover/Logo -->
    <div class="book-cover">
      <div class="book-logo">
        📖
        <span class="logo-text">The Smokey Chronicles</span>
      </div>
    </div>

    <!-- Story Content in Book Format -->
    <div class="story-book">
      <div class="book-page">
        <div class="page-content">
          <h1 class="chapter-title">Character Dossiers</h1>
          <h2 class="chapter-subtitle">Meet the Souls of the Story</h2>
          
          <div class="story-content">
            <p class="first-letter">
              In the shadowy corners of Los Santos, where loyalty is tested and identities are forged in fire, these are the men who define the story. Each carries their own ghosts, their own code, and their own path through the darkness.
            </p>

            <!-- Character Grid -->
            <div class="characters-hub">
              <!-- Duncan Smokey Card -->
              <div class="character-hub-card">
                <div class="character-hub-header" style="background: linear-gradient(135deg, #8B4513, #A0522D);">
                  <div class="character-hub-icon">🕴️</div>
                  <h3>Duncan Smokey</h3>
                  <p>The Ghost of the Old Family</p>
                </div>
                <div class="character-hub-content">
                  <p><strong>From street enforcer to hunted man, Duncan's journey is one of loss, loyalty, and the search for redemption.</strong></p>
                  
                  <div class="character-stats">
                    <div class="stat">
                      <strong>Affiliation:</strong> Former Marcello Crime Family
                    </div>
                    <div class="stat">
                      <strong>Status:</strong> On the Hunt → Reborn
                    </div>
                    <div class="stat">
                      <strong>Core Trait:</strong> Unwavering Loyalty
                    </div>
                  </div>

                  <div class="character-quote">
                    "You don't walk away from the life. You just walk quieter."
                  </div>

                  <div class="character-links">
                    <NuxtLink to="/characters/Story-DuncanSmokey" class="hub-link primary">
                      Read His Story
                    </NuxtLink>
                    <NuxtLink to="/characters/DuncanSmokeyBio" class="hub-link secondary">
                      Full Bio
                    </NuxtLink>
                  </div>
                </div>
              </div>

              <!-- Dante White Card -->
              <div class="character-hub-card">
                <div class="character-hub-header" style="background: linear-gradient(135deg, #2c1810, #8B4513);">
                  <div class="character-hub-icon">🏍️</div>
                  <h3>Dante White</h3>
                  <p>Silverbacks MC Brother</p>
                </div>
                <div class="character-hub-content">
                  <p><strong>The man Duncan Smokey became—a brother finding peace on the open road and new purpose in motorcycle club brotherhood.</strong></p>
                  
                  <div class="character-stats">
                    <div class="stat">
                      <strong>Affiliation:</strong> Silverbacks MC
                    </div>
                    <div class="stat">
                      <strong>Status:</strong> Found Brotherhood
                    </div>
                    <div class="stat">
                      <strong>Core Trait:</strong> Reborn Honor
                    </div>
                  </div>

                  <div class="character-quote">
                    "I've been loyal to ghosts before. Now, I ride with the living."
                  </div>

                  <div class="character-links">
                    <NuxtLink to="/characters/Story-DanteWhite" class="hub-link primary">
                      Continue His Journey
                    </NuxtLink>
                    <NuxtLink to="/characters/DuncanSmokeyBio" class="hub-link secondary">
                      Duncan's Bio
                    </NuxtLink>
                  </div>
                </div>
              </div>

              <!-- Arthur "Ash" Card -->
              <div class="character-hub-card">
                <div class="character-hub-header" style="background: linear-gradient(135deg, #666, #333);">
                  <div class="character-hub-icon">🎭</div>
                  <h3>Arthur "Ash"</h3>
                  <p>The Filterless Philosopher-Thug</p>
                </div>
                <div class="character-hub-content">
                  <p><strong>A man with no memory and no filter, trapped between the body of a thug and the mind of a curious child.</strong></p>
                  
                  <div class="character-stats">
                    <div class="stat">
                      <strong>Affiliation:</strong> Unknown Past
                    </div>
                    <div class="stat">
                      <strong>Status:</strong> Identity Lost
                    </div>
                    <div class="stat">
                      <strong>Core Trait:</strong> Brutal Honesty
                    </div>
                  </div>

                  <div class="character-quote">
                    "The body remembers what the mind forgot."
                  </div>

                  <div class="character-links">
                    <NuxtLink to="/characters/Arthur" class="hub-link primary">
                      Discover His Story
                    </NuxtLink>
                    <NuxtLink to="/characters/Arthur" class="hub-link secondary">
                      Full Profile
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>

            <!-- Character Relationships -->
            <h3 class="section-title">The Web of Loyalty</h3>
            <div class="relationships">
              <div class="relationship-card">
                <h4>🏍️ The Transformation</h4>
                <p><strong>Duncan Smokey → Dante White</strong> - A journey from mafia enforcer to MC brother, showing that even the hardest men can find redemption and new family.</p>
              </div>
              <div class="relationship-card">
                <h4>🎭 The Contrast</h4>
                <p><strong>Duncan vs Arthur</strong> - Where Duncan is calculated and disciplined, Arthur is filterless and raw. Two different approaches to survival in the same dangerous world.</p>
              </div>
              <div class="relationship-card">
                <h4>🤝 The Brotherhood</h4>
                <p><strong>Dante & The Silverbacks</strong> - Finding real family after a life of transactional loyalty. The MC becomes the home he never had.</p>
              </div>
            </div>

            <!-- Timeline Overview -->
            <h3 class="section-title">The Journey Through Shadows</h3>
            <div class="timeline-overview">
              <div class="timeline-item">
                <div class="timeline-phase">Phase 1</div>
                <h4>The Rise of Duncan Smokey</h4>
                <p>Street rat to made man in the Marcello Crime Family. Power, respect, and everything to lose.</p>
              </div>
              <div class="timeline-item">
                <div class="timeline-phase">Phase 2</div>
                <h4>The Fall & Rebirth</h4>
                <p>Betrayal, loss, and the death of Duncan Smokey. The birth of Dante White.</p>
              </div>
              <div class="timeline-item">
                <div class="timeline-phase">Phase 3</div>
                <h4>Brotherhood Found</h4>
                <p>Dante finds new purpose and family with the Silverbacks MC. Peace on the open road.</p>
              </div>
              <div class="timeline-item">
                <div class="timeline-phase">Phase 4</div>
                <h4>New Blood: Arthur "Ash"</h4>
                <p>A wildcard enters the scene—a man with no past but plenty of secrets.</p>
              </div>
            </div>

            <p class="final-line">
              Three men, three paths, one truth:<br>
              In this world, your brothers are the only family that matters.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Controls -->
    <div class="book-navigation">
      <NuxtLink to="/characters/Story-DanteWhite" class="nav-button prev-button">
        ← Dante's Story
      </NuxtLink>
      <NuxtLink to="/about" class="nav-button next-button">
        About the Story →
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
/* Characters Hub Grid */
.characters-hub {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.character-hub-card {
  background: #f8f1e5;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid #d4af37;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.character-hub-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.character-hub-header {
  padding: 2rem;
  color: white;
  text-align: center;
  border-bottom: 2px solid #d4af37;
}

.character-hub-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.character-hub-header h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  color: #f8e0a0;
}

.character-hub-header p {
  margin: 0;
  font-style: italic;
  opacity: 0.9;
}

.character-hub-content {
  padding: 2rem;
}

.character-stats {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin: 1.5rem 0;
  padding: 1rem;
  background: rgba(212, 175, 55, 0.1);
  border-radius: 8px;
  border-left: 3px solid #8B4513;
}

.stat {
  font-size: 0.95rem;
}

.character-quote {
  font-style: italic;
  color: #8B4513;
  text-align: center;
  padding: 1rem;
  border-top: 1px solid #d4af37;
  border-bottom: 1px solid #d4af37;
  margin: 1.5rem 0;
  font-size: 1.1rem;
}

.character-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hub-link {
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-family: 'Georgia', serif;
  font-weight: bold;
  transition: all 0.3s ease;
  text-align: center;
  flex: 1;
  min-width: 120px;
}

.hub-link.primary {
  background: #8B4513;
  color: white;
  border: 2px solid #8B4513;
}

.hub-link.primary:hover {
  background: #A0522D;
  border-color: #A0522D;
  transform: translateY(-2px);
}

.hub-link.secondary {
  background: transparent;
  color: #8B4513;
  border: 2px solid #8B4513;
}

.hub-link.secondary:hover {
  background: #8B4513;
  color: white;
  transform: translateY(-2px);
}

/* Relationships */
.relationships {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.relationship-card {
  background: #f8f1e5;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #d4af37;
}

.relationship-card h4 {
  color: #8B4513;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

/* Timeline Overview */
.timeline-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.timeline-item {
  background: #f8f1e5;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #8B4513;
  text-align: center;
}

.timeline-phase {
  background: #8B4513;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 1rem;
}

.timeline-item h4 {
  color: #8B4513;
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .characters-hub {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .character-hub-header,
  .character-hub-content {
    padding: 1.5rem;
  }
  
  .character-links {
    flex-direction: column;
  }
  
  .hub-link {
    flex: none;
  }
  
  .relationships,
  .timeline-overview {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .character-hub-header,
  .character-hub-content {
    padding: 1.2rem;
  }
  
  .character-hub-icon {
    font-size: 2.5rem;
  }
}
</style>