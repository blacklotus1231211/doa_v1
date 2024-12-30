import { QR_CODE_URL } from '../config/constants.js';

export function createDonationSection() {
  return `
    <section id="doar" class="donation-section">
      <div class="floating-hearts"></div>
      <div class="floating-balloons"></div>
      <div class="content-wrapper">
        <h2>Faça Sua Doação</h2>
        <p>Escaneie o QR Code abaixo e faça sua doação via PIX:</p>
        <div class="qr-code-container">
          <img src="${QR_CODE_URL}" alt="QR Code PIX" class="qr-code">
        </div>
        <button class="donation-button" onclick="window.copyPixKey()">
          <span class="button-text">Copiar Chave PIX</span>
          <div class="button-shine"></div>
        </button>
        <p class="highlight">Qualquer valor faz a diferença!</p>
      </div>
    </section>
  `;
}