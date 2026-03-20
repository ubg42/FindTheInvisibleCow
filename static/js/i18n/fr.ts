import { Language } from "../i18n";

const fr: Language = {
  language: "Français",
  findTheInvisibleCow: "Trouvez la vache invisible",
  animal: {
    cow: "une vache",
    goat: "une chèvre",
    fox: "un renard",
  },
  instruction: {
    intro:
      "Déplacez votre curseur pour trouver la vache. Elle se cache derrière les cris.",
    audio: "Veillez à allumer votre système audio avant de jouer.",
  },
  cta: {
    start: "Commencer le jeu",
    findA: "Trouvez",
  },
  success: {
    congratulations: "Félicitations",
    found: "Vous en avez trouvé un ! Cela porte votre total à %{points}.",
    keepItUp:
      "Continuez à faire du bon travail pour débloquer plus d'animaux !",
    unlockAtFive: "Obtenez cinq points pour débloquer un autre animal",
    unlockAtFifty: "Obtenez cinquante points pour débloquer le dernier animal",
    unlockedAll: "Félicitations, vous les avez tous débloqués !",
  },
  config: {
    expertMode: "Mode expert",
    expertModeDescription:
      "(votre curseur ne changera pas lorsque vous passerez votre souris sur la vache)",
    findA: "Trouvez",
  },
  social: {
    shareOnTwitter: "Partager sur Twitter",
  },
  stats: {
    globalPoints: "Animaux trouvés au total :",
    points: "Vos points :",
  },
  support: {
    webExperiment: "Ceci est une expérience web",
    sorry:
      "Désolé, votre navigateur ne prend pas en charge l'API web audio, qui fait partie intégrante de cette expérience.",
    possiblyUnsupported:
      "Si vous n'entendez rien, il est possible que votre navigateur ne prenne pas en charge l'API web audio.",
    browsers:
      'Les navigateurs actuellement pris en charge sont <a href="http://google.com/chrome" target="_blank">Chrome 10 et les versions supérieures</a>, <a href="http://www.mozilla.org/en-US/firefox/new/" target="_blank">Firefox 25 et les versions supérieures</a>, <a href="http://www.opera.com/" target="_blank">Opera 15 et les versions supérieures</a> et <a href="http://www.apple.com/au/safari/" target="_blank">Safari 6 et les versions supérieures</a>.',
  },
  footer: {
    credits: null,
    creditsButton: null,
    privacyPolicyButton: null,
    seenOnBoredButton: null,
    byScriptist: null,
  },
};

export default fr;
