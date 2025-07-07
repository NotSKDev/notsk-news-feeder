# 📰 notsk-news-feeder

A secure and developer-friendly Node.js package that fetches the latest breaking news from [TwentyFour News](https://www.twentyfournews.com) — a leading **Malayalam-language news channel** — using their official RSS feed.

This package fetches:
- 🗞️ Headline (in Malayalam)
- 🔗 Direct article link
- 🖼️ Resized image (base64, 290x160)
- 📡 Channel metadata (name, logo, site)

---

## 📦 Installation

```bash
npm install notsk-news-feeder
```

---

## 🧪 Example Usage

```js
const Feed = require('notsk-news-feeder');
const feed = new Feed();
const shownLinks = new Set();

async function fetchNews() {
  
    const news = await feed.getLatest();
    if (!news.link || !news.link.startsWith('http') || shownLinks.has(news.link)) return;
    shownLinks.add(news.link);
    console.log('\n================ NEW NEWS ================\n');
    console.log('📰 TITLE:', news.title);
    console.log('🔗 LINK:', news.link);
    console.log('🖼️  IMAGE:', news.image);
    console.log('🌐 CHANNEL URL:', news.channel_url);
    console.log('📺 CHANNEL LOGO:', news.channel_logo);
    console.log('📣 CHANNEL NAME:', news.channel_name);
    console.log('\n==========================================\n');
 
}

fetchNews();
setInterval(fetchNews, 40000);
```

## 🌐 Discord.js Example Usage

```js
const { EmbedBuilder } = require('discord.js');
const Feed = require('notsk-news-feeder');
const feed = new Feed();
const shownLinks = new Set();

module.exports = async (client) => {
  const channelId = 'your channel id paste here!!';

  setInterval(async () => {
    const news = await feed.getLatest();
    if (!news.link || !news.link.startsWith('http') || shownLinks.has(news.link)) return;
    shownLinks.add(news.link);

    const channel = await client.channels.fetch(channelId);
    const messages = await channel.messages.fetch({ limit: 20 });
    const alreadyPosted = messages.some(m =>
      m.embeds?.[0]?.data?.fields?.some(f => f.value === news.link)
    );
    if (alreadyPosted) return;

    const embed = new EmbedBuilder()
      .setAuthor({ name: news.channel_name, iconURL: news.channel_logo, url: news.channel_url })
      .addFields({ name: 'Description', value: `"${news.title}"` })
      .addFields({ name: 'News Link', value: news.link })
      .setColor('Blue')
      .setImage(news.image)
      .setFooter({
        text: 'TwentyFourNews.com • Powered by NotSK',
        iconURL: news.channel_logo
      })
      .setTimestamp();

    await channel.send({ embeds: [embed] });
  }, 30000);
};
```

---

## 📸 Sample Output

**News Headline (in Malayalam):**
```
"വായനയുടെ ലോകത്തെ മാറ്റുന്ന പുതിയ വാർത്ത"
```

**News Image Preview (resized 290x160):**

![Sample](https://r2.fivemanage.com/9JxmrTZeBRNmJpMZ0FVfn/IMG_3306.png)

---

## 🔒 Security Notes

- This package is designed for **backend usage only**.
- News is fetched securely via an internal Express API.
- **Do not use in frontend or client-side code.**

---

## 📚 About TwentyFour News

> [TwentyFour News](https://www.twentyfournews.com) is a popular Malayalam-language television channel in Kerala, India, known for its reliable coverage of politics, current affairs, and breaking news.

---

## 👨‍💻 Developer

Made with ❤️ by [NotSK Dev](https://github.com/NotSKDev)

For any support or custom news integrations, feel free to reach out.

---
