# 📰 notsk-twentyfournews-feed

A secure and developer-friendly Node.js package that fetches the latest breaking news from [TwentyFour News](https://www.twentyfournews.com) — a leading **Malayalam-language news channel** — using their official RSS feed.

This package fetches:
- 🗞️ Headline (in Malayalam)
- 🔗 Direct article link
- 🖼️ Resized image (base64, 290x160)
- 📡 Channel metadata (name, logo, site)

---

## 📦 Installation

```bash
npm install notsk-twentyfournews-feed
```

---

## 🧪 Example Usage

```js
const Feed = require('notsk-twentyfournews-feed');
const feed = new Feed();

(async () => {
  const news = await feed.getLatest();

  console.log(news.title);        // News headline in Malayalam
  console.log(news.link);         // Direct article link
  console.log(news.image);        // Base64 resized image (290x160)
  console.log(news.channel_url);  // https://www.twentyfournews.com
  console.log(news.channel_logo); // Logo URL
  console.log(news.channel_name); // TwentyFour News
})();
```

---

## 📸 Sample Output

**News Headline (in Malayalam):**
```
"വായനയുടെ ലോകത്തെ മാറ്റുന്ന പുതിയ വാർത്ത"
```

**News Image Preview (resized 290x160):**

![Sample]([https://r2.fivemanage.com/9JxmrTZeBRNmJpMZ0FVfn/IMG_3303.jpeg](https://r2.fivemanage.com/9JxmrTZeBRNmJpMZ0FVfn/IMG_3303.jpeg))

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
