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
          <h1 class="chapter-title">Arthur "Ash" Corbin</h1>
          <h2 class="chapter-subtitle">The Filterless Philosopher-Thug</h2>
          
          <!-- Update navigation controls -->
          <div class="book-navigation">
            <NuxtLink to="/characters/CharacterBio" class="nav-button prev-button">
              ← Character Dossier
            </NuxtLink>
            <NuxtLink to="/characters/DuncanSmokeyBio" class="nav-button next-button">
              Duncan's Bio →
            </NuxtLink>
          </div>

          <div class="story-content">
            <!-- Character Introduction -->
            <div class="character-intro">
              <div class="character-image">
                <div class="image-placeholder">
                  🎭
                  <p>Visual Concept: Hardened Shell, Empty Core</p>
                </div>
              </div>
              <div class="character-quote">
                "The body remembers what the mind forgot. I look like a thug, but feel like a ghost wearing someone else's skin."
              </div>
            </div>

            <p class="first-letter">
              Found on the side of the road with no memory, no past, and no filter between his thoughts and his mouth, Ashe is a walking contradiction—a south central thug's body inhabited by the mind of a brutally honest, curious child. The brain injury didn't just take his memories; it shattered the social conventions that tell us what to keep inside.
            </p>

            <!-- Core Concept -->
            <h3 class="section-title">The Core Concept: Filterless Philosopher-Thug</h3>
            <div class="concept-grid">
              <div class="concept-card">
                <h4>🧠 The Mind</h4>
                <p><strong>Compulsive Verbalization:</strong> His internal monologue leaks directly out of his mouth. He can't lie, can't filter, and sees the world with terrifying honesty.</p>
              </div>
              <div class="concept-card">
                <h4>💥 The Body</h4>
                <p><strong>Muscle Memory:</strong> Scarred knuckles, fighter's stance, and instincts he can't explain. His body remembers the violence his mind forgot.</p>
              </div>
              <div class="concept-card">
                <h4>🎭 The Paradox</h4>
                <p><strong>Walking Contradiction:</strong> Looks like a hardened criminal, acts like a curious child, and speaks with unsettling truth.</p>
              </div>
            </div>

            <!-- Appearance -->
            <h3 class="section-title">Appearance: Hardened Shell, Empty Core</h3>
            
            <div class="appearance-details">
              <div class="appearance-section">
                <h4>👁️ The Face</h4>
                <div class="detail-grid">
                  <div class="detail-item">
                    <strong>Eyes:</strong> Intense, observant, but often hold a blank, confused stare. Makes too much direct eye contact.
                  </div>
                  <div class="detail-item">
                    <strong>Hair:</strong> Shorter on sides, messy and longer on top. Grown out, unkempt—weeks without a proper cut.
                  </div>
                  <div class="detail-item">
                    <strong>The Scar:</strong> Fresh, healing wound on left temple—the source of his amnesia. Hair around it shaved or shorter.
                  </div>
                  <div class="detail-item">
                    <strong>Facial Hair:</strong> Scraggly stubble in that awkward phase between stubble and beard.
                  </div>
                </div>
              </div>

              <div class="appearance-section">
                <h4>💪 The Physique</h4>
                <div class="detail-grid">
                  <div class="detail-item">
                    <strong>Build:</strong> Lean, wiry, and tense—functional strength of a fighter or runner.
                  </div>
                  <div class="detail-item">
                    <strong>Posture:</strong> Defensive hunch. Cautious, efficient gait—expects danger but doesn't know from where.
                  </div>
                  <div class="detail-item">
                    <strong>Hands:</strong> Scarred, calloused knuckles that tell stories of violence he can't recall.
                  </div>
                </div>
              </div>

              <div class="appearance-section">
                <h4>👕 The Clothing: A Story in Layers</h4>
                <div class="clothing-grid">
                  <div class="clothing-layer">
                    <h5>South Central Uniform</h5>
                    <ul>
                      <li>Plain, once-white t-shirt now greyed with dirt</li>
                      <li>Dark hooded sweatshirt with small stains</li>
                      <li>Worn-in blue jeans or cargo pants</li>
                      <li>Scuffed, practical sneakers</li>
                    </ul>
                  </div>
                  <div class="clothing-layer">
                    <h5>Unexplained Anomalies</h5>
                    <ul>
                      <li><strong>Wrong Watch:</strong> Durable digital Casio—soldier/outdoorsman style</li>
                      <li><strong>Mismatched:</strong> One expensive black leather glove on left hand</li>
                      <li><strong>The Pendant:</strong> Dog tag or mysterious key on a chain</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="appearance-section">
                <h4>💉 The Tattoos: Faded Clues</h4>
                <div class="tattoos-grid">
                  <div class="tattoo-item">
                    <strong>Left Forearm:</strong> Simple black outline of a snake wrapped around a dagger
                  </div>
                  <div class="tattoo-item">
                    <strong>Right Knuckles:</strong> Faded letters "L U C K" or "H O L D"
                  </div>
                  <div class="tattoo-item">
                    <strong>Back of Neck:</strong> Three-dot triangle ("mi vida loca")
                  </div>
                </div>
              </div>
            </div>

            <!-- Backstory Theories -->
            <h3 class="section-title">The Mystery: Who Was He?</h3>
            <div class="theory-cards">
              <div class="theory-card">
                <h4>🔫 Option A: The Fallen Soldier</h4>
                <p>Loyal enforcer for a crew. The head injury from a job gone wrong—betrayal or massive screw-up. His old crew sees him as a liability or loose end.</p>
              </div>
              <div class="theory-card">
                <h4>♟️ Option B: The Blank Slate Pawn</h4>
                <p>Low-level runner. The injury from random violence. His lack of history makes him the perfect patsy—others pin crimes on him because he "won't remember."</p>
              </div>
              <div class="theory-card">
                <h4>👁️ Option C: The Unexpected Victim</h4>
                <p>Wasn't a thug at all. A civilian who witnessed something and was "dealt with." The thug persona is survival armor his mind created.</p>
              </div>
            </div>

            <!-- Roleplay Guide -->
            <h3 class="section-title">Roleplay Guide: The Walking Paradox</h3>
            <div class="rp-guide">
              <div class="rp-tip">
                <h4>🎭 Embrace the Awkwardness</h4>
                <p>Lean into the cringe. Let him say the quiet part out loud: "That's a nice car. Are we gonna steal it? Your girlfriend is prettier than you."</p>
              </div>
              <div class="rp-tip">
                <h4>🔍 Discover Through Reaction</h4>
                <p>You don't need to know his past. Let reactions define him: Does he instinctively know how to hotwire a car? Does a gun feel familiar or terrifying?</p>
              </div>
              <div class="rp-tip">
                <h4>💔 The Vulnerability is Key</h4>
                <p>Underneath the filterless thug is a scared man building an identity from scratch. He forms childlike loyalty to the first person who shows him kindness.</p>
              </div>
              <div class="rp-tip">
                <h4>⚡ Use the Triggers</h4>
                <p>Work with RP partners: "If your character has a silver lighter, mine might freeze up and get a headache." Collaborative storytelling.</p>
              </div>
            </div>

            <p class="final-line">
              A man without a past, speaking truths everyone else fears to say.<br>
              The most dangerous weapon is a mind with nothing to lose.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Controls -->
    <div class="book-navigation">
      <NuxtLink to="/characters/CharacterBio" class="nav-button prev-button">
        ← Other Characters
      </NuxtLink>
      <NuxtLink to="/characters/Story-Ash" class="nav-button next-button">
        Read Ash's Story →
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
/* Character Introduction */
.character-intro {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  margin: 2rem 0;
  align-items: center;
}

.character-image {
  text-align: center;
}

.image-placeholder {
  background: #f8f1e5;
  border: 2px solid #d4af37;
  border-radius: 10px;
  padding: 2rem;
  font-size: 4rem;
}

.image-placeholder p {
  font-size: 0.9rem;
  color: #666;
  margin-top: 1rem;
  font-style: italic;
}

.character-quote {
  font-style: italic;
  font-size: 1.3rem;
  color: #8B4513;
  border-left: 4px solid #d4af37;
  padding-left: 1.5rem;
  line-height: 1.6;
}

/* Concept Grid */
.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.concept-card {
  background: #f8f1e5;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #8B4513;
}

.concept-card h4 {
  color: #8B4513;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

/* Appearance Details */
.appearance-details {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.appearance-section {
  background: #f8f1e5;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #d4af37;
}

.appearance-section h4 {
  color: #8B4513;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.detail-item {
  padding: 0.8rem;
  background: rgba(212, 175, 55, 0.1);
  border-radius: 5px;
}

/* Clothing Grid */
.clothing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
}

.clothing-layer {
  padding: 1rem;
  background: rgba(139, 69, 19, 0.05);
  border-radius: 5px;
}

.clothing-layer h5 {
  color: #A0522D;
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
}

.clothing-layer ul {
  margin: 0;
  padding-left: 1.2rem;
}

.clothing-layer li {
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

/* Tattoos */
.tattoos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.tattoo-item {
  padding: 1rem;
  background: rgba(212, 175, 55, 0.1);
  border-radius: 5px;
  border-left: 3px solid #8B4513;
}

/* Theory Cards */
.theory-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.theory-card {
  background: #f8f1e5;
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid #d4af37;
}

.theory-card h4 {
  color: #8B4513;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

/* RP Guide */
.rp-guide {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
}

.rp-tip {
  padding: 1.5rem;
  background: #f8f1e5;
  border-radius: 8px;
  border-left: 4px solid #A0522D;
}

.rp-tip h4 {
  color: #8B4513;
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .character-intro {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .concept-grid,
  .theory-cards {
    grid-template-columns: 1fr;
  }
  
  .detail-grid {
    grid-template-columns: 1fr;
  }
  
  .clothing-grid {
    grid-template-columns: 1fr;
  }
  
  .tattoos-grid {
    grid-template-columns: 1fr;
  }
  
  .image-placeholder {
    font-size: 3rem;
    padding: 1.5rem;
  }
}
</style>