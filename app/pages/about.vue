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
          <h1 class="chapter-title">About This Story</h1>
          <h2 class="chapter-subtitle">A Tale of Crime, Redemption, and Brotherhood</h2>
          
          <div class="story-content">
            <p class="first-letter">
              Welcome to The Smokey Chronicles, a character-driven narrative that explores the gritty underworld of Los Santos through the eyes of men forged in fire and reborn on the open road. This is more than just a story—it's a journey through the shadows of organized crime to the freedom of brotherhood.
            </p>

            <!-- The Story Section -->
            <h3 class="section-title">The Story</h3>
            <div class="about-grid">
              <div class="about-card">
                <div class="about-icon">🏍️</div>
                <h4>The Journey</h4>
                <p>Follow Duncan Smokey's transformation from a feared mafia enforcer to Dante White, a brother in the Silverbacks MC. Witness his struggle with identity, loyalty, and the ghosts of his past.</p>
              </div>
              <div class="about-card">
                <div class="about-icon">🎭</div>
                <h4>The Characters</h4>
                <p>Meet complex characters each battling their own demons—from the filterless philosopher-thug Arthur "Ash" Corbin to the hardened bikers who become family.</p>
              </div>
              <div class="about-card">
                <div class="about-icon">📚</div>
                <h4>The World</h4>
                <p>Immerse yourself in a richly detailed universe where every choice has consequences, and brotherhood is the only currency that truly matters.</p>
              </div>
            </div>

            <!-- Characters Section -->
            <h3 class="section-title">The Characters</h3>
            <div class="characters-section">
              <div class="character-profile">
                <h4>Duncan Smokey → Dante White</h4>
                <p><strong>The Ghost of the Old Family:</strong> A former Marcello Crime Family enforcer who loses everything and rebuilds his life as a Silverbacks MC brother. His journey from ruthless killer to loyal brother forms the heart of our story.</p>
              </div>
              <div class="character-profile">
                <h4>Arthur "Ash" Corbin</h4>
                <p><strong>The Filterless Philosopher-Thug:</strong> A man with no memory, no past, and no filter between his thoughts and his mouth. Found on the side of the road with a head injury, he's a walking contradiction—a south central thug's body inhabited by the mind of a brutally honest child.</p>
              </div>
            </div>

            <!-- Inspiration Section -->
            <h3 class="section-title">Inspiration & Style</h3>
            <div class="inspiration-section">
              <p>
                The Smokey Chronicles draws inspiration from classic crime sagas, motorcycle club culture, and character-driven narratives where redemption is hard-earned and brotherhood is everything. The storytelling style blends gritty realism with poetic reflection, creating a world that feels both dangerous and deeply human.
              </p>
              <div class="inspiration-quotes">
                <div class="inspiration-quote">
                  "You don't walk away from the life. You just walk quieter."
                </div>
                <div class="inspiration-quote">
                  "I've been loyal to ghosts before. Now, I ride with the living."
                </div>
              </div>
            </div>

            <!-- Technical Section -->
            <h3 class="section-title">About This Website</h3>
            <div class="tech-section">
              <div class="tech-details">
                <div class="tech-item">
                  <strong>Built With:</strong> Nuxt 3, Vue 3, CSS3
                </div>
                <div class="tech-item">
                  <strong>Design:</strong> Storybook-inspired aesthetic with vintage book styling
                </div>
                <div class="tech-item">
                  <strong>Features:</strong> Responsive design, smooth navigation, immersive reading experience
                </div>
                <div class="tech-item">
                  <strong>Content:</strong> Original character stories and development
                </div>
              </div>
            </div>

            <!-- Author Section -->
            <h3 class="section-title">The Author</h3>
            <div class="author-section">
              <p>
                This narrative universe is created by a storyteller passionate about character development, crime fiction, and the complex relationships that define us. Each character represents a different facet of the human experience—loss, redemption, identity, and the search for belonging.
              </p>
              <p class="centered-text">
                "Every character has a story. Every story has a soul."
              </p>
            </div>

            <p class="final-line">
              Thank you for visiting The Smokey Chronicles.<br>
              May you find brothers worth riding for, and stories worth telling.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Controls -->
    <div class="book-navigation">
      <NuxtLink to="/characters/CharacterBio" class="nav-button prev-button">
        ← Character Dossier
      </NuxtLink>
      <NuxtLink to="/" class="nav-button next-button">
        Back to Home →
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
/* About Grid */
.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.about-card {
  background: #f8f1e5;
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid #d4af37;
  text-align: center;
  transition: transform 0.3s ease;
}

.about-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.about-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.about-card h4 {
  color: #8B4513;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.about-card p {
  color: #666;
  line-height: 1.6;
}

/* Characters Section */
.characters-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
}

.character-profile {
  background: #f8f1e5;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #8B4513;
}

.character-profile h4 {
  color: #8B4513;
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
}

.character-profile p {
  margin: 0;
  line-height: 1.6;
}

/* Inspiration Section */
.inspiration-section {
  background: #f8f1e5;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #d4af37;
  margin: 2rem 0;
}

.inspiration-quotes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.inspiration-quote {
  font-style: italic;
  color: #8B4513;
  padding: 1rem;
  background: rgba(212, 175, 55, 0.1);
  border-radius: 5px;
  text-align: center;
  border-left: 3px solid #d4af37;
}

/* Tech Section */
.tech-section {
  background: #f8f1e5;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
  border: 1px solid #d4af37;
}

.tech-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.tech-item {
  padding: 0.8rem;
  background: rgba(212, 175, 55, 0.1);
  border-radius: 5px;
  border-left: 3px solid #8B4513;
}

/* Author Section */
.author-section {
  background: #f8f1e5;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #d4af37;
  margin: 2rem 0;
  text-align: center;
}

.author-section p {
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
  
  .about-card {
    padding: 1.5rem;
  }
  
  .inspiration-quotes {
    grid-template-columns: 1fr;
  }
  
  .tech-details {
    grid-template-columns: 1fr;
  }
  
  .character-profile {
    padding: 1.2rem;
  }
  
  .inspiration-section,
  .tech-section,
  .author-section {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .about-card {
    padding: 1.2rem;
  }
  
  .about-icon {
    font-size: 2.5rem;
  }
}
</style>