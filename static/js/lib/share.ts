import { TweetText } from "../constants";
import track from "./track";

export type Network = "twitter" | "facebook";

const networkUrls = {
  twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    TweetText,
  )}`,
  facebook:
    "https://www.facebook.com/sharer/sharer.php" +
    `?u=${encodeURIComponent(document.URL)}` +
    `&t=${encodeURIComponent(document.URL)}`,
};

export default function share(network: Network) {
  const url = networkUrls[network];

  if (url) {
    window.open(url, "share", "height=500,width=500");
  }

  track("Social", "Share", network);
}
