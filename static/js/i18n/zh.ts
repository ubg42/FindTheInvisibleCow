import { Language } from "../i18n";

const zh: Language = {
  language: "简体中文",
  findTheInvisibleCow: "找到隐藏的牛",
  animal: {
    cow: "牛",
    goat: "山羊",
    fox: "狐狸",
  },
  instruction: {
    intro: "移动你的鼠标直到你找到了隐藏的牛。你鼠标离得越近，它叫的越响。",
    audio: "保证你在点击开始按钮前开启了声音",
  },
  cta: {
    start: "开始游戏",
    findA: "找到 %{animal}",
  },
  success: {
    congratulations: "恭喜你",
    found: "你找到一只动物了! 这让你的总分达到了 %{points}分",
    keepItUp: "保持你的好状态并寻找更多动物吧",
    unlockAtFive: "获得<strong>5分</strong> 用来解锁另外一个动物！",
    unlockAtFifty: "获得 <strong>50分</strong> 用来解锁最后一个动物！",
    unlockedAll: "恭喜你，你已经解锁了全部动物了！",
  },
  config: {
    expertMode: "试试更难的专家模式",
    expertModeDescription: "(当你的鼠标经过动物时，你的鼠标不会变成小手噢)",
    findA: "找到",
  },
  social: {
    shareOnTwitter: "在推特上面分享",
  },
  stats: {
    globalPoints: "全世界所有被找到的动物的总数：",
    points: "你的分数：",
  },
  support: {
    webExperiment: "这其实只是一个网络测试",
    sorry: "抱歉，你的浏览器不支持该小游戏的核心技术：网络音频API",
    possiblyUnsupported:
      "如果你啥都没听到，那么你的浏览器很有可能不支持网络音频API",
    browsers:
      '目前市场上支持的主流的浏览器有<a href="http://google.com/chrome" target="_blank">谷歌浏览器 10+</a>, <a href="http://www.mozilla.org/en-US/firefox/new/" target="_blank">火狐浏览器 25+</a>, <a href="http://www.opera.com/" target="_blank">欧朋浏览器 15+</a>，和 <a href="http://www.apple.com/au/safari/" target="_blank">Safari（就是苹果自带的浏览器） 6+</a>.',
  },
  footer: {
    credits: null,
    creditsButton: null,
    privacyPolicyButton: null,
    seenOnBoredButton:
      '<a href="http://www.boredbutton.com/" target="_blank">试试更多的无聊小游戏？</a>',
    byScriptist:
      '由作者 <a href="https://berman.xyz" target="_blank">Scriptist</a> 制作',
  },
};

export default zh;
