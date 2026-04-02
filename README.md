🎬 My YT Player (智慧播放中樞)

My YT Player 是一個基於「本地端優先 (Local-First)」理念打造的 YouTube 專屬影音管理與播放器。它沒有惱人的演算法推薦，沒有無止盡的資訊干擾。在這裡，你只會看到你真正想看的內容，為自己打造一個純淨、專注的學習與放鬆空間。

👉 立即體驗 My YT Player 線上版 (請替換為你的實際網址)

✨ 核心特色 (Features)
🛡️ 絕對隱私 (Local-First)： 所有資料（影片庫、播放清單、設定檔、API 金鑰）皆以 JSON 格式安全儲存於瀏覽器的 localStorage 中。完全沒有後端資料庫，無需登入，確保您的隱私 100% 安全。
🎯 零演算法干擾： 告別 YouTube 首頁的無盡推送。支援建立個人專屬的播放清單，並提供「循序播放」、「單曲循環」、「隨機播放」三種模式。
📥 頻道自動同步： 整合 YouTube Data API v3，只需輸入頻道代號（如 @famidoc），即可一鍵自動抓取該頻道的所有影片，並智慧生成動態分類標籤。
💾 跨裝置無縫備份： 內建 JSON 備份與還原功能，讓您輕鬆將精心整理的影片庫在手機、平板與電腦之間轉移，甚至分享給親朋好友。
📱 PWA 支援 (Progressive Web App)： 支援安裝至手機主畫面，隱藏瀏覽器網址列，享受如原生 App 般流暢的全螢幕沉浸體驗。
⚡ 極致抗干擾排版架構： 採用最底層的 DOM 操作與強制定型的 CSS 寫法，完美免疫如 NAS 防火牆的 XSS 阻擋、免安裝版 Tailwind 的動態盲區，以及 AI 沙盒預覽的樣式攔截。

🛠️ 技術堆疊 (Tech Stack)
本專案堅持極簡、無伺服器依賴的純前端架構：
核心： HTML5, Vanilla JavaScript (純手寫原生 JS)
樣式： Tailwind CSS (CDN 引入)
圖示： Lucide Icons
串流： YouTube Iframe API
儲存： Web LocalStorage API

🚀 快速部署與使用 (Getting Started)
由於本專案完全不需要後端伺服器或資料庫，部署過程極度簡單：

1. 部署到任何網頁伺服器
   您可以將專案直接放上 GitHub Pages、Vercel、Netlify 或您家中的 NAS (如 Synology Web Station)。只需確保以    下三個檔案在同一個目錄：
    . index.html (主程式)
    . manifest.json (PWA 設定檔)
    . sw.js (背景快取服務)
2. 匯入精選片單 (可選)
   若您有好友分享的備份檔 (.json)，可直接在 App 的 [⚙️ 設定同步] 頁面最下方，點擊 [匯入 JSON]，一鍵載入所有影片。
3. 自動同步頻道設定 (需 API Key)若想使用「自動同步頻道影片」功能：前往 Google Cloud Console。啟用 YouTube Data API v3 並申請一組 API 金鑰。在 App 的 [⚙️ 設定同步] 頁面填入該金鑰（金鑰僅存在您的本地端），即可開始一鍵抓取頻道資料。
  
📝 Vibe Coding 開發幕後
本專案是透過 Human + AI (Gemini 3.1 Pro) 協作的 Vibe Coding 模式誕生。從一個簡單的構想，我們共同克服了跨環境部署的各種地雷，包括：
Tailwind CDN 的動態渲染高度塌陷問題
PWA Service Worker 的舊快取綁架
嚴格 NAS 伺服器的內聯樣式 (style="...") XSS 阻擋防護
YouTube Iframe API 的背景無縫播放技術
詳細的開發與除錯除雷過程，請參閱本專案中的 My_YT_Player_Dev_Log.md，這是一份非常珍貴的前端除錯實戰紀錄。

⚖️ 版權與宣告開發者： Famidoc Chang & Gemini 3.1 Pro年份： @2026本專案僅供個人學習與管理影片使用，所有影片播放皆透過 YouTube 官方 Iframe API，觀看次數與廣告收益皆正常回饋予 YouTube 創作者。

Enjoy your distraction-free learning and watching experience!
