# 💍 دعوة زفاف — أمل و سامي

دعوة زفاف فخمة بتصميم Glassmorphism (تأثيرات شفافة وزجاجية) مع أنيميشنز احترافية وثقيلة.

---

## 🚀 الرفع على GitHub

### الخطوة 1: إنشاء حساب GitHub
- اذهب إلى [github.com](https://github.com) وسجّل حساب جديد (أو سجّل دخولك).

### الخطوة 2: إنشاء مستودع جديد
1. اضغط على زر **"+"** في أعلى اليمين → **New repository**
2. اكتب اسم المستودع: `wedding-invitation`
3. اختَر **Public** (عام)
4. **لا** تفعّل Initialize with README
5. اضغط **Create repository**

### الخطوة 3: رفع الملفات
1. في صفحة المستودع، اضغط **Add file** → **Upload files**
2. اسحب الملفات التالية وأفلتها:
   ```
   wedding-invitation/
   ├── index.html
   ├── README.md
   ├── assets/
   │   ├── css/
   │   │   └── style.css
   │   ├── js/
   │   │   ├── config.js
   │   │   └── main.js
   │   └── images/
   │       └── gallery/
   │           ├── 1.jpg
   │           ├── 2.jpg
   │           ├── 3.jpg
   │           └── 4.jpg
   ```
3. اكتب رسالة Commit: "First commit"
4. اضغط **Commit changes**

### الخطوة 4: نشر الموقع (GitHub Pages)
1. اذهب إلى **Settings** → **Pages**
2. تحت **Source**، اختَر **main** branch و **/ (root)** folder
3. اضغط **Save**
4. انتظر دقيقة، والموقع هيشتغل على: `https://username.github.io/wedding-invitation/`

---

## ⚙️ التعديل على المحتوى

كل التعديلات تتم من ملف واحد فقط:

### `assets/js/config.js`

هذا الملف يحتوي على كل بيانات الدعوة. عدّل القيم فقط:

```javascript
const WEDDING_CONFIG = {
  couple: {
    bride: "اسم العروس",
    groom: "اسم العريس",
  },
  ayah: {
    text: "نص الآية",
    reference: "الآية",
  },
  inviteText: "نص الدعوة",
  event: {
    dateISO: "2026-08-07T21:00:00",
    dateDisplay: "يوم الجمعة 8/7",
    durationHours: 4,
  },
  timeline: [
    { time: "16:00", title: "استقبال الضيوف", desc: "مشروبات" },
    // أضف أو احذف حسب الحاجة
  ],
  gallery: [
    { src: "assets/images/gallery/1.jpg", alt: "صورة 1" },
    // أضف صورك هنا
  ],
  location: {
    name: "اسم القاعة",
    mapQuery: "Crystal Hall قاعة كريستال",
  },
};
```

---

## 📱 صور المعرض

ضع صورك في المجلد: `assets/images/gallery/`

بصيغة: `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`

أو عدّل أسماء الصور في `config.js` حسب أسماء ملفاتك.

---

## ✨ المميزات

- تصميم زجاجي فاخر (Glassmorphism)
- أنيميشنز احترافية عند التمرير (AOS)
- جزيئات متحركة في الخلفية (Particles.js)
- عد تنازلي تلقائي للحفل
- إضافة الحدث لتقويم Google
- رابط خريطة جوجل لمكان الحفل
- متجاوب مع كل الشاشات (موبايل/تابلت/ديسكتوب)
- تأثير Tilt ثلاثي الأبعاد على البطاقات
- تأثير إضاءة يتبع الماوس
