export function createHero() {
  return `
    <section id="inicio" class="hero">
      <div class="hero-decorations">
        <div class="decoration heart-1">❤️</div>
        <div class="decoration heart-2">❤️</div>
        <div class="decoration heart-3">❤️</div>
        <div class="decoration star-1">⭐</div>
        <div class="decoration star-2">⭐</div>
      </div>
      
      <h1>Ajude a Valentina</h1>
      
      <div class="profile-wrapper">
        <div class="profile-image-container">
          <img src="/valentina.png" alt="Valentina" class="profile-image">
        </div>
        <div class="profile-glow"></div>
      </div>
      
      <p class="highlight">Valentina poderia ser sua filha.<br>Faça por ela o que faria pela sua.</p>
    </section>
  `;
}