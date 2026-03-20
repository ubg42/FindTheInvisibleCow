import { Language } from "../i18n";

const ru: Language = {
  language: "ру́сский",
  findTheInvisibleCow: "Найдите невидимую корову",
  animal: {
    cow: "корову",
    goat: "козу",
    fox: "лису",
  },
  instruction: {
    intro:
      "Перемещайте курсор, чтобы найти корову. Ее можно обнаружить по звукам.",
    audio: "Убедитесь, что вы включили звук, прежде чем играть.",
  },
  cta: {
    start: "Начать игру",
    findA: "Найдите %{animal}",
  },
  success: {
    congratulations: "Поздравляем",
    found: "Вы нашли одно животное! Это поднимает ваш общий счет на %{points}.",
    keepItUp: "Продолжайте работать, чтобы разблокировать больше животных!",
    unlockAtFive: "Наберите пять очков, чтобы разблокировать другое животное",
    unlockAtFifty:
      "Наберите пятьдесят очков, чтобы разблокировать последнее животное",
    unlockedAll: "Поздравляем, вы разблокировали всех животных!",
  },
  config: {
    expertMode: "Режим эксперта",
    expertModeDescription:
      "(ваш курсор не поменяется, когда вы поместите его над коровой)",
    findA: "Найдите",
  },
  social: {
    shareOnTwitter: "Поделиться в Твиттере",
  },
  stats: {
    globalPoints: "Животные, встречаемые повсеместно:",
    points: "Ваш счет:",
  },
  support: {
    webExperiment: "Это веб-эксперимент",
    sorry:
      "Извините, ваш браузер не поддерживает Web Audio API, которое является необходимой частью этого эксперимента.",
    possiblyUnsupported:
      "Если вы ничего не слышите, возможно, ваш браузер не поддерживает Web Audio API.",
    browsers:
      'Поддерживаемые сейчас браузеры: <a href="http://google.com/chrome" target="_blank">Chrome 10+</a>, <a href="http://www.mozilla.org/en-US/firefox/new/" target="_blank">Firefox 25+</a>, <a href="http://www.opera.com/" target="_blank">Opera 15+</a>, и <a href="http://www.apple.com/au/safari/" target="_blank">Safari 6+</a>.',
  },
  footer: {
    credits: null,
    creditsButton: null,
    privacyPolicyButton: null,
    seenOnBoredButton:
      'As seen on <a href="http://www.boredbutton.com/" target="_blank">Bored Button</a>',
    byScriptist:
      'By&nbsp;<a href="https://berman.xyz" target="_blank">Scriptist</a>',
  },
};

export default ru;
