import { Language } from "../i18n";

const pt: Language = {
  language: "Português",
  findTheInvisibleCow: "Encontre a Vaca Invisível",
  animal: {
    cow: "Uma Vaca",
    goat: "Um Bode",
    fox: "Uma Raposa",
  },
  instruction: {
    intro:
      "Mova o mouse ao redor da tela para encontrar a vaca. Está escondida atrás do grito mais alto.",
    audio: "Ligue o som antes de jogar.",
  },
  cta: {
    start: "Começar",
    findA: "Encontrar %{animal}",
  },
  success: {
    congratulations: "Parabéns",
    found: "Você encontrou um animal! Isto leva seu total à: %{points}.",
    keepItUp: "Mantenha o bom trabalho para desbloquear mais animais!",
    unlockAtFive:
      "Consiga <strong>cinco pontos</strong> para destravar outro animal",
    unlockAtFifty:
      "Consiga <strong>cinquenta pontos</strong> para destravar outro animal",
    unlockedAll: "Parabéns! Você destravou todos eles!",
  },
  config: {
    expertMode: "Modo Experiente",
    expertModeDescription:
      "(seu cursor não muda quando você está sobre a vaca)",
    findA: "Encontrar",
  },
  social: {
    shareOnTwitter: "Compartilhar no Twitter",
  },
  stats: {
    globalPoints: "Animais encontrados mundialmente:",
    points: "Seus pontos:",
  },
  support: {
    webExperiment: "Este é um experimento web",
    sorry:
      "Desculpe, seu navegador não suporta a Web Audio API, que é parte integrante deste experimento.",
    possiblyUnsupported:
      "Se você não ouviu nada, é possível que o seu navegador não ofereça suporte a API Web Audio.",
    browsers:
      'Atualmente os navegadores com suporte são <a href="http://google.com/chrome" target="_blank">Chrome 10+</a>, <a href="http://www.mozilla.org/en-US/firefox/new/" target="_blank">Firefox 25+</a>, <a href="http://www.opera.com/" target="_blank">Opera 15+</a>, and <a href="http://www.apple.com/au/safari/" target="_blank">Safari 6+</a>.',
  },
  footer: {
    credits: null,
    creditsButton: null,
    privacyPolicyButton: null,
    seenOnBoredButton: null,
    byScriptist: null,
  },
};

export default pt;
