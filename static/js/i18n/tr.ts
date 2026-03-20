import { Language } from "../i18n";

const tr: Language = {
  language: "Türkçe",
  findTheInvisibleCow: "Görünmez İneği Bulun",
  animal: {
    cow: "inek bulun",
    goat: "keçi bulun",
    fox: "tilki bulun",
  },
  instruction: {
    intro:
      "İneği bulmak için imlecinizi hareket ettirin. İnek, seslenmenin arkasında saklanıyor.",
    audio: "Oynamaya başlamadan önce sesinizi açtığınızdan emin olun.",
  },
  cta: {
    start: "Oyunu Başlat",
    findA: "Bir",
  },
  success: {
    congratulations: "Tebrikler",
    found: "Bir tane buldunuz! Bu toplamınızı %{points} çıkarıyor.",
    keepItUp: "Daha fazla hayvanın kilidini açmak için bu şekilde devam edin!",
    unlockAtFive: "Başka bir hayvanın kilidini açmak için beş puana ulaşın",
    unlockAtFifty: "Son hayvanın kilidini açmak için elli puana ulaşın",
    unlockedAll: "Tebrikler, hepsinin kilidini açtınız!",
  },
  config: {
    expertMode: "Uzman Modu",
    expertModeDescription:
      "(ineğin üzerine geldiğinizde imleciniz değişmeyecektir)",
    findA: "Bir",
  },
  social: {
    shareOnTwitter: "Twitter'da paylaş",
  },
  stats: {
    globalPoints: "Dünya genelinde bulunan hayvanlar:",
    points: "Puanınız:",
  },
  support: {
    webExperiment: "Bu bir internet denemesidir",
    sorry:
      "Üzgünüz, tarayıcınız bu denemenin ayrılmaz bir parçası olan İnternet Ses API'sini desteklemiyor.",
    possiblyUnsupported:
      "Herhangi bir şey duymuyorsanız, tarayıcınız muhtemelen İnternet Ses API'sini desteklemiyordur.",
    browsers:
      'Şu anda desteklenen tarayıcılar, <a href="http://google.com/chrome" target="_blank"> Chrome 10+ </a>, <a href="http://www.mozilla.org/en-US/firefox/new/" target="_blank"> Firefox 25+ </a>, <a href="http://www.opera.com/" target="_blank"> Opera 15+ </a> ve <a href="http://www.apple.com/au/safari/" target="_blank"> Safari 6+ </a> \'dır.',
  },
  footer: {
    credits: null,
    creditsButton: null,
    privacyPolicyButton: null,
    seenOnBoredButton: null,
    byScriptist: null,
  },
};

export default tr;
