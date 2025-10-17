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
          <h1 class="chapter-title">Character Dossier</h1>
          <h2 class="chapter-subtitle">Duncan "Smokey" Smokey</h2>
          
          <!-- Navigation Tabs -->
          <div class="story-parts">
            <NuxtLink to="/characters/Story-DuncanSmokey" class="story-part-link">
              Duncan's Story
            </NuxtLink>
            <NuxtLink to="/characters/Story-DanteWhite" class="story-part-link">
              Dante's Story
            </NuxtLink>
            <NuxtLink to="/characters/Arthur" class="story-part-link">
              Arthur "Ash"
            </NuxtLink>
          </div>

          <div class="story-content">
            <!-- Character Header -->
            <div class="character-header">
              <div class="character-title">
                <h3>🕴️ Character Bio: Duncan "Smokey" Smokey</h3>
                <div class="character-subtitle">The Ghost of the Old Family</div>
              </div>
            </div>

            <!-- Basic Information -->
            <h3 class="section-title">Basic Information</h3>
            <div class="info-grid">
              <div class="info-item">
                <strong>Full Name:</strong> Duncan Smokey
              </div>
              <div class="info-item">
                <strong>Alias:</strong> "Smokey"
              </div>
              <div class="info-item">
                <strong>Age:</strong> Late 30s – Early 40s
              </div>
              <div class="info-item">
                <strong>Place of Birth:</strong> Los Santos (Southside District)
              </div>
              <div class="info-item">
                <strong>Ethnicity:</strong> Caucasian
              </div>
              <div class="info-item">
                <strong>Occupation:</strong> Former Made Man | Street Enforcer | Underworld Freelancer
              </div>
              <div class="info-item">
                <strong>Affiliation:</strong> Former Marcello Crime Family (Disbanded)
              </div>
              <div class="info-item">
                <strong>Current Alignment:</strong> Independent – On the Hunt
              </div>
            </div>

            <!-- Personality -->
            <h3 class="section-title">Personality</h3>
            <div class="trait-list">
              <div class="trait-item">
                <span class="trait-icon">🤝</span>
                <div>
                  <strong>Loyal</strong> – Once you earn his trust, it's for life. Betray it, and it's the last thing you'll ever do.
                </div>
              </div>
              <div class="trait-item">
                <span class="trait-icon">⚖️</span>
                <div>
                  <strong>Disciplined</strong> – Follows old-school codes of respect and hierarchy.
                </div>
              </div>
              <div class="trait-item">
                <span class="trait-icon">🧠</span>
                <div>
                  <strong>Calculated</strong> – Rarely speaks unless he's already thought two steps ahead.
                </div>
              </div>
              <div class="trait-item">
                <span class="trait-icon">❄️</span>
                <div>
                  <strong>Cold but Compassionate</strong> – Detached on the outside, but his moral compass still flickers when it comes to family or honor.
                </div>
              </div>
              <div class="trait-item">
                <span class="trait-icon">👻</span>
                <div>
                  <strong>Haunted</strong> – Dreams of the past and the sound of his Don's voice still echo in his head.
                </div>
              </div>
            </div>

            <!-- Skills & Abilities -->
            <h3 class="section-title">Skills & Abilities</h3>
            <div class="skills-grid">
              <div class="skill-item">
                <span class="skill-icon">🥊</span>
                <div>
                  <strong>Hand-to-Hand Combat:</strong> Trained through street fights and enforcement work.
                </div>
              </div>
              <div class="skill-item">
                <span class="skill-icon">🔫</span>
                <div>
                  <strong>Firearms Expert:</strong> Skilled with pistols and submachine guns—precision over chaos.
                </div>
              </div>
              <div class="skill-item">
                <span class="skill-icon">💬</span>
                <div>
                  <strong>Negotiation:</strong> Calm under pressure, persuasive when needed, terrifying when crossed.
                </div>
              </div>
              <div class="skill-item">
                <span class="skill-icon">🕵️</span>
                <div>
                  <strong>Street Intelligence:</strong> Understands the criminal ecosystem—knows how to blend in or pull strings quietly.
                </div>
              </div>
              <div class="skill-item">
                <span class="skill-icon">♟️</span>
                <div>
                  <strong>Strategic Thinking:</strong> Treats every move like a chess piece in a larger game.
                </div>
              </div>
            </div>

            <!-- Appearance -->
            <h3 class="section-title">Appearance</h3>
            <div class="appearance-grid">
              <div class="appearance-item">
                <span class="appearance-icon">💪</span>
                <div>
                  <strong>Build:</strong> Broad-shouldered, muscular but lean—lived-in strength rather than gym-polished.
                </div>
              </div>
              <div class="appearance-item">
                <span class="appearance-icon">💇</span>
                <div>
                  <strong>Hair:</strong> Dark, with early streaks of grey.
                </div>
              </div>
              <div class="appearance-item">
                <span class="appearance-icon">🧔</span>
                <div>
                  <strong>Facial Hair:</strong> Short beard or stubble.
                </div>
              </div>
              <div class="appearance-item">
                <span class="appearance-icon">👁️</span>
                <div>
                  <strong>Eyes:</strong> Steel blue—cold, observant, and heavy with memory.
                </div>
              </div>
              <div class="appearance-item">
                <span class="appearance-icon">👔</span>
                <div>
                  <strong>Clothing:</strong> Dark tailored suits when doing business; leather jackets and gloves off-duty. Always carries a lighter engraved with the initials "A.M."—his Don's.
                </div>
              </div>
            </div>

            <!-- Quotes -->
            <h3 class="section-title">Quotes</h3>
            <div class="quotes-section">
              <div class="quote-item">
                <div class="quote-mark">"</div>
                <p>You don't walk away from the life. You just walk quieter.</p>
              </div>
              <div class="quote-item">
                <div class="quote-mark">"</div>
                <p>The streets taught me two things: trust no one, and always finish the job.</p>
              </div>
              <div class="quote-item">
                <div class="quote-mark">"</div>
                <p>Antonio wasn't my boss. He was my father. And someone's gonna pay for taking him from me.</p>
              </div>
            </div>

            <p class="final-line">
              A man bound by honor, haunted by ghosts,<br>
              forever walking the line between darkness and duty.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Controls -->
    <div class="book-navigation">
      <NuxtLink to="/characters/Arthur" class="nav-button prev-button">
        ← Arthur "Ash"
      </NuxtLink>
      <NuxtLink to="/characters/Story-DuncanSmokey" class="nav-button next-button">
        Read Duncan's Story →
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
/* Character Header */
.character-header {
  text-align: center;
  margin: 2rem 0 3rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, #8B4513, #A0522D);
  border-radius: 10px;
  color: white;
  border: 2px solid #d4af37;
}

.character-title h3 {
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
  color: #f8e0a0;
}

.character-subtitle {
  font-size: 1.2rem;
  font-style: italic;
  color: #f8f1e5;
  opacity: 0.9;
}

/* Enhanced Info Grid */
.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.info-item {
  padding: 1rem;
  background: #f8f1e5;
  border-radius: 8px;
  border-left: 4px solid #8B4513;
  transition: transform 0.2s ease;
}

.info-item:hover {
  transform: translateX(5px);
}

/* Enhanced Trait List */
.trait-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
}

.trait-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.2rem;
  background: #f8f1e5;
  border-radius: 8px;
  border-left: 4px solid #A0522D;
  transition: all 0.3s ease;
}

.trait-item:hover {
  background: rgba(139, 69, 19, 0.05);
  transform: translateX(5px);
}

.trait-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.skill-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.2rem;
  background: #f8f1e5;
  border-radius: 8px;
  border-left: 4px solid #d4af37;
  transition: all 0.3s ease;
}

.skill-item:hover {
  background: rgba(212, 175, 55, 0.1);
  transform: translateX(5px);
}

.skill-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

/* Appearance Grid */
.appearance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.appearance-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.2rem;
  background: #f8f1e5;
  border-radius: 8px;
  border-left: 4px solid #8B4513;
  transition: all 0.3s ease;
}

.appearance-item:hover {
  background: rgba(139, 69, 19, 0.05);
  transform: translateX(5px);
}

.appearance-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

/* Enhanced Quotes */
.quotes-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
}

.quote-item {
  position: relative;
  padding: 2rem;
  background: #f8f1e5;
  border-radius: 10px;
  border: 2px solid #d4af37;
  font-style: italic;
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: center;
}

.quote-mark {
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  font-size: 4rem;
  color: #d4af37;
  opacity: 0.3;
  font-family: serif;
}

.quote-item p {
  margin: 0;
  color: #8B4513;
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 768px) {
  .character-header {
    padding: 1.5rem;
    margin: 1rem 0 2rem 0;
  }
  
  .character-title h3 {
    font-size: 1.5rem;
  }
  
  .info-grid,
  .skills-grid,
  .appearance-grid {
    grid-template-columns: 1fr;
  }
  
  .trait-item,
  .skill-item,
  .appearance-item {
    padding: 1rem;
  }
  
  .quote-item {
    padding: 1.5rem;
    font-size: 1.1rem;
  }
  
  .quote-mark {
    font-size: 3rem;
    top: 0.2rem;
    left: 0.5rem;
  }
}

@media (max-width: 480px) {
  .trait-item,
  .skill-item,
  .appearance-item {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
  
  .character-header {
    padding: 1rem;
  }
}
</style>