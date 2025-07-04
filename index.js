const axios = require("axios");

class X0xA {
  constructor() {
    this.x1 = "https://notsk-news-rssfeed.onrender.com/news-data";
    this.x2 = {
      Authorization: "404",
      "User-Agent": "NotBrowser-Fetcher",
    };
  }

  async getLatest() {
    const r = await axios.get(this.x1, { headers: this.x2 });
    const d = r.data;
    return {
      title: d.title,
      link: d.link,
      image: d.image,
      channel_url: d.channel_url,
      channel_logo: d.channel_logo,
      channel_name: d.channel_name,
    };
  }
}

module.exports = function () {
  if (!(this instanceof module.exports)) {
    console.error(
      "⛔ Use as constructor: const feed = new require('notsk-twentyfournews-feed')()"
    );
    process.exit(1);
  }

  return new X0xA();
};
