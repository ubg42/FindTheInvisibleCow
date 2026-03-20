import { Language } from "../i18n";

const en: Language = {
  language: "English",
  findTheInvisibleCow: "Find the Invisible Cow",
  animal: {
    cow: "cow",
    goat: "goat",
    fox: "fox",
  },
  instruction: {
    intro:
      "Drag your mouse (or finger) around to find the cow. It’s hiding behind the shouting.",
    audio: "Make sure you turn your audio on before playing.",
  },
  cta: {
    start: "Start Game",
    findA: "Find a %{animal}",
  },
  success: {
    congratulations: "Congratulations",
    found: "You found one! That brings your total up to %{points}.",
    keepItUp: "Keep up the good work to unlock more animals!",
    unlockAtFive:
      "Get to <strong>five points</strong> to unlock another animal",
    unlockAtFifty:
      "Get to <strong>fifty points</strong> to unlock the final animal",
    unlockedAll: "Congratulations, you’ve unlocked them all!",
  },
  config: {
    expertMode: "Expert Mode",
    expertModeDescription:
      "(your cursor won’t change when you hover over the cow)",
    findA: "Find a",
  },
  social: {
    shareOnTwitter: "Share on Twitter",
  },
  stats: {
    globalPoints: "Animals found globally:",
    points: "Your points:",
  },
  support: {
    webExperiment: "This is a web experiment",
    sorry:
      "Sorry, your browser does not support the Web Audio API, which is an integral part of this experiment.",
    possiblyUnsupported:
      "If you do not hear anything, it’s possible that your browser does not support the Web Audio API.",
    browsers:
      'Currently supported browsers are <a href="http://google.com/chrome" target="_blank">Chrome 10+</a>, <a href="http://www.mozilla.org/en-US/firefox/new/" target="_blank">Firefox 25+</a>, <a href="http://www.opera.com/" target="_blank">Opera 15+</a>, and <a href="http://www.apple.com/au/safari/" target="_blank">Safari 6+</a>.',
  },
  footer: {
    credits:
      'Chinese translations by <a href="http://www.zangshian.com" target="_blank">臧世安</a> &bull; Art by <a href="https://www.instagram.com/acidyellows/" target="_blank">acidyellows</a>',
    creditsButton: "Credits",
    privacyPolicyButton: "Privacy&nbsp;policy",
    seenOnBoredButton:
      'As seen on <a href="http://www.boredbutton.com/" target="_blank">Bored Button</a>',
    byScriptist:
      'By&nbsp;<a href="https://berman.xyz" target="_blank">Scriptist</a>',
  },
};

export default en;
