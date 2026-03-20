import { Language } from "../i18n";

const es: Language = {
  language: "Español",
  findTheInvisibleCow: "Encuentra la vaca invisible",
  animal: {
    cow: "una vaca",
    goat: "una cabra",
    fox: "un zorro",
  },
  instruction: {
    intro:
      "Mueve el cursor alrededor para encontrar la vaca. Se oculta detrás de los sonidos.",
    audio: "Asegúrate de que enciendes el sonido antes de jugar",
  },
  cta: {
    start: "Empieza el juego",
    findA: "Encuentra",
  },
  success: {
    congratulations: "Felicidades",
    found: "¡Has encontrado una! Eso sube tu puntuación total a %{points}.",
    keepItUp: "¡Continúa así para desbloquear más animales!",
    unlockAtFive: "Consigue cinco puntos para desbloquear otro animal",
    unlockAtFifty: "Consigue cincuenta puntos para desbloquear el animal final",
    unlockedAll: "Felicidades, ¡has desbloqueado todos!",
  },
  config: {
    expertMode: "Modo experto",
    expertModeDescription:
      "(Tu cursor no cambiará cuando lo pases sobre la vaca)",
    findA: "Encuentra",
  },
  social: {
    shareOnTwitter: "Comparte en Twitter",
  },
  stats: {
    globalPoints: "Total de animales encontrados:",
    points: "Tu puntuación:",
  },
  support: {
    webExperiment: "Este es un experimento web",
    sorry:
      "Lo siento, tu navegador no es compatible con el sonido API de la web, que es una parte esencial de este experimento.",
    possiblyUnsupported:
      "Si no oyes nada, es posible que tu navegador no sea compatible con el sonido API de la Web.",
    browsers:
      'Los navegadores compatibles actualmente son <a href="http://google.com/chrome" target="_blank"> Chrome 10+</a>, <a href="http://www.mozilla.org/en-US/firefox/new/" target="_blank">Firefox 25+</a>, <a href="http://www.opera.com/" target="_blank">Opera 15+</a> y <a href="http://www.apple.com/au/safari/" target="_blank">Safari 6+</a>.',
  },
  footer: {
    credits: null,
    creditsButton: null,
    privacyPolicyButton: null,
    seenOnBoredButton: null,
    byScriptist: null,
  },
};

export default es;
