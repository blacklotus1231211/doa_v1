import { createNavigation } from './src/components/Navigation.js';
import { createHero } from './src/components/Hero.js';
import { createStory } from './src/components/Story.js';
import { createDonationSection } from './src/components/DonationSection.js';
import { createContactSection } from './src/components/ContactSection.js';
import { createFooter } from './src/components/Footer.js';
import { initScrollHandlers } from './src/utils/scroll.js';
import { copyToClipboard } from './src/utils/clipboard.js';
import { showNotification } from './src/utils/notifications.js';
import { PIX_KEY } from './src/config/constants.js';

import './src/styles/base.css';
import './src/styles/typography.css';
import './src/styles/animations.css';
import './src/styles/components/navigation.css';
import './src/styles/components/hero.css';
import './src/styles/components/donation.css';
import './src/styles/notifications.css';

window.copyPixKey = async () => {
  try {
    await copyToClipboard(PIX_KEY);
    showNotification('Chave PIX copiada com sucesso!');
  } catch (error) {
    showNotification('Erro ao copiar chave PIX');
  }
};

document.querySelector('#app').innerHTML = `
  ${createNavigation()}
  <div class="container">
    ${createHero()}
    ${createStory()}
    ${createDonationSection()}
    ${createContactSection()}
  </div>
  ${createFooter()}
`;

initScrollHandlers();