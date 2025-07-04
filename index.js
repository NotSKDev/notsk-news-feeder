1const axios = require("axios");
2
3class X0xA {
4  constructor() {
5    this.x1 = "https://rssfeed-qk11.onrender.com/news-data";
6    this.x2 = {
7      Authorization: "404",
8      "User-Agent": "NotBrowser-Fetcher",
9    };
10  }
11
12  async getLatest() {
13    const r = await axios.get(this.x1, { headers: this.x2 });
14    const d = r.data;
15    return {
16      title: d.title,
17      link: d.link,
18      image: d.image,
19      channel_url: d.channel_url,
20      channel_logo: d.channel_logo,
21      channel_name: d.channel_name,
22    };
23  }
24}
25
26module.exports = function () {
27  if (!(this instanceof module.exports)) {
28    console.error(
29      "⛔ Use as constructor: const feed = new require('notsk-twentyfournews-feed')()"
30    );
31    process.exit(1);
32  }
33
34  return new X0xA();
35};
