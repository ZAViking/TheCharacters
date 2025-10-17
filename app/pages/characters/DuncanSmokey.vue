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
          <h2 class="chapter-subtitle">Duncan "Smokey" → Dante White</h2>
          
          <!-- Navigation Tabs -->
          <div class="story-parts">
            <NuxtLink 
              to="/characters/Story-DuncanSmokey" 
              class="story-part-link"
            >
              Duncan Smokey - Story
            </NuxtLink>
            <NuxtLink 
              to="/characters/Story-DanteWhite" 
              class="story-part-link"
            >
              Dante White - Story
            </NuxtLink>
          </div>

          <div class="story-content">
            <!-- Basic Information -->
            <h3 class="section-title">Basic Information</h3>
            <div class="info-grid">
              <div class="info-item">
                <strong>Full Name:</strong> Duncan Smokey
              </div>
              <div class="info-item">
                <strong>Alias:</strong> "Smokey" → Dante White
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
                <strong>Occupation:</strong> Former Made Man → Silverbacks MC Enforcer
              </div>
              <div class="info-item">
                <strong>Affiliation:</strong> Former Marcello Crime Family → Silverbacks MC
              </div>
              <div class="info-item">
                <strong>Current Alignment:</strong> Independent – On the Hunt → Brotherhood Loyalist
              </div>
            </div>

            <!-- Personality -->
            <h3 class="section-title">Personality</h3>
            <div class="trait-list">
              <div class="trait-item">
                <strong>Loyal</strong> – Once you earn his trust, it's for life. Betray it, and it's the last thing you'll ever do.
              </div>
              <div class="trait-item">
                <strong>Disciplined</strong> – Follows old-school codes of respect and hierarchy.
              </div>
              <div class="trait-item">
                <strong>Calculated</strong> – Rarely speaks unless he's already thought two steps ahead.
              </div>
              <div class="trait-item">
                <strong>Cold but Compassionate</strong> – Detached on the outside, but his moral compass still flickers when it comes to family or honor.
              </div>
              <div class="trait-item">
                <strong>Haunted</strong> – Dreams of the past and the sound of his Don's voice still echo in his head.
              </div>
              <div class="trait-item">
                <strong>Reborn</strong> – As Dante White, he's found peace in brotherhood and the open road.
              </div>
            </div>

            <!-- Skills & Abilities -->
            <h3 class="section-title">Skills & Abilities</h3>
            <div class="skills-grid">
              <div class="skill-item">
                <strong>Hand-to-Hand Combat:</strong> Trained through street fights and enforcement work.
              </div>
              <div class="skill-item">
                <strong>Firearms Expert:</strong> Skilled with pistols and submachine guns—precision over chaos.
              </div>
              <div class="skill-item">
                <strong>Negotiation:</strong> Calm under pressure, persuasive when needed, terrifying when crossed.
              </div>
              <div class="skill-item">
                <strong>Street Intelligence:</strong> Understands the criminal ecosystem—knows how to blend in or pull strings quietly.
              </div>
              <div class="skill-item">
                <strong>Strategic Thinking:</strong> Treats every move like a chess piece in a larger game.
              </div>
              <div class="skill-item">
                <strong>Mechanical Aptitude:</strong> Expert motorcycle mechanic and rider.
              </div>
            </div>

            <!-- Appearance -->
            <h3 class="section-title">Appearance</h3>
            <div class="appearance-grid">
              <div class="appearance-item">
                <strong>Build:</strong> Broad-shouldered, muscular but lean—lived-in strength rather than gym-polished.
              </div>
              <div class="appearance-item">
                <strong>Hair:</strong> Dark, with early streaks of grey.
              </div>
              <div class="appearance-item">
                <strong>Facial Hair:</strong> Short beard or stubble.
              </div>
              <div class="appearance-item">
                <strong>Eyes:</strong> Steel blue—cold, observant, and heavy with memory.
              </div>
              <div class="appearance-item">
                <strong>Clothing (Past):</strong> Dark tailored suits when doing business; leather jackets and gloves off-duty.
              </div>
              <div class="appearance-item">
                <strong>Clothing (Present):</strong> Silverbacks MC cut, worn leather, road-dusted denim.
              </div>
              <div class="appearance-item">
                <strong>Distinguishing Marks:</strong> Various scars from past conflicts, Silverbacks MC tattoo.
              </div>
            </div>

            <!-- Quotes -->
            <h3 class="section-title">Quotes</h3>
            <div class="quotes-section">
              <div class="quote-item">
                "You don't walk away from the life. You just walk quieter."
              </div>
              <div class="quote-item">
                "The streets taught me two things: trust no one, and always finish the job."
              </div>
              <div class="quote-item">
                "Antonio wasn't my boss. He was my father. And someone's gonna pay for taking him from me."
              </div>
              <div class="quote-item">
                "I've been loyal to ghosts before. Now, I ride with the living."
              </div>
              <div class="quote-item">
                "You can change your name, your face, your life… but the ghosts? They ride with you, no matter where you go."
              </div>
            </div>

            <p class="final-line">
              A man of many names, but only one soul.<br>
              From the shadows of crime to the freedom of the open road.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Controls -->
    <div class="book-navigation">
    <NuxtLink to="/characters/Story-DanteWhite" class="nav-button prev-button">
        ← Back to Dante's Story
    </NuxtLink>
    <NuxtLink to="/" class="nav-button next-button">
        Back to Home →
    </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
/* Navigation Tabs */
.story-parts {
  display: flex;
  gap: 1rem;
  margin: 2rem 0 3rem 0;
  justify-content: center;
  flex-wrap: wrap;
}

.story-part-link {
  background: #8B4513;
  color: white;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-family: 'Georgia', serif;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 2px solid #d4af37;
}

.story-part-link:hover {
  background: #A0522D;
  text-decoration: none;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Info Grid Layout */
.info-grid, .skills-grid, .appearance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.info-item, .skill-item, .appearance-item {
  padding: 0.8rem;
  background: #f8f1e5;
  border-radius: 5px;
  border-left: 3px solid #d4af37;
}

/* Trait List */
.trait-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
}

.trait-item {
  padding: 0.8rem;
  background: #f8f1e5;
  border-radius: 5px;
  border-left: 3px solid #8B4513;
}

/* Quotes Section */
.quotes-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
}

.quote-item {
  font-style: italic;
  color: #666;
  padding: 1.5rem;
  background: #f8f1e5;
  border-radius: 8px;
  border-left: 4px solid #d4af37;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 768px) {
  .info-grid, .skills-grid, .appearance-grid {
    grid-template-columns: 1fr;
  }
  
  .story-parts {
    flex-direction: column;
    align-items: center;
  }
  
  .story-part-link {
    width: 100%;
    text-align: center;
  }
  
  .quote-item {
    padding: 1rem;
    font-size: 1rem;
  }
}
</style>