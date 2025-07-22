# 🔧 Browser Extension Manager UI

Modern ve şık bir tarayıcı extension yönetim arayüzü. React, TypeScript ve Tailwind CSS ile geliştirilmiştir.

![Browser Extension Manager](https://img.shields.io/badge/React-18+-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4.svg)
![Vite](https://img.shields.io/badge/Vite-7.0-646CFF.svg)

## ✨ Özellikler

- 🎨 **Modern UI/UX**: Şık ve kullanıcı dostu arayüz tasarımı
- 🌙 **Dark/Light Mode**: Tema değiştirme desteği
- 🔍 **Filtreleme**: Extension'ları durumlarına göre filtreleme (Tümü, Aktif, Pasif)
- 🎛️ **Switch Controls**: Extension'ları kolayca aktif/pasif yapma
- 📱 **Responsive**: Tüm cihazlarda mükemmel görünüm
- ⚡ **Fast Performance**: Vite ile optimize edilmiş build
- 🧩 **Component Based**: Modüler ve yeniden kullanılabilir componentler
- 🎯 **Context API**: Merkezi state yönetimi
- 🎨 **Custom Typography**: Özel font stilleri (Noto Sans)
- 💫 **Smooth Animations**: Yumuşak geçiş animasyonları

## 🚀 Hızlı Başlangıç

### Önkoşullar

- Node.js 20.19.0 veya üzeri
- npm 10.5.0 veya üzeri

### Kurulum

```bash
# Projeyi klonlayın
git clone https://github.com/kullanici/browser-extension-manager-ui.git

# Proje dizinine gidin  
cd browser-extension-manager-ui

# Bağımlılıkları yükleyin
npm install

# Development server'ını başlatın
npm run dev
```

Uygulama `http://localhost:5173` adresinde çalışacaktır.

## 🛠️ Kullanılabilir Komutlar

```bash
# Development server başlatma
npm run dev

# Production build
npm run build

# Kod kalitesi kontrolü
npm run lint

# Build'i önizleme
npm run preview
```

## 📁 Proje Yapısı

```
src/
├── app-layout.tsx          # Ana layout componenti
├── assets/                 # Statik dosyalar
│   ├── fonts/             # Font dosyaları
│   └── images/            # Logo ve icon'lar
├── components/            # UI componentleri
│   ├── app-header.tsx     # Üst başlık
│   ├── button-group.tsx   # Filter butonları
│   ├── extention-card.tsx # Extension kartları
│   ├── header-title.tsx   # Başlık componenti
│   ├── switch-button.tsx  # Toggle switch
│   └── theme-toggle.tsx   # Tema değiştirici
├── contexts/              # Context API
│   └── extention-context.tsx
├── lib/                   # Yardımcı dosyalar
│   ├── data.ts           # Extension verileri
│   └── types.ts          # TypeScript tipleri
├── index.css             # Global stiller
└── main.tsx              # Ana giriş dosyası
```

## 🎯 Kullanım

### Extension Yönetimi

- **Filtreleme**: Üst kısımdaki butonlarla extension'ları filtreleyebilirsiniz
  - `All`: Tüm extension'lar
  - `Active`: Sadece aktif extension'lar  
  - `Inactive`: Sadece pasif extension'lar

- **Aktif/Pasif Yapma**: Her kartın sağ altındaki switch ile extension'ı açıp kapatabilirsiniz

- **Silme**: "Remove" butonu ile extension'ı listeden çıkarabilirsiniz

### Tema Değiştirme

Sağ üst köşedeki güneş/ay iconuna tıklayarak dark/light mode arasında geçiş yapabilirsiniz.

## 🎨 Tasarım Sistemi

### Renk Paleti

```css
/* Light Mode */
--color-neutral-0: hsl(200, 60%, 99%)     /* Beyaz background */
--color-neutral-100: hsl(0, 0%, 93%)      /* Açık gri */
--color-neutral-200: hsl(217, 61%, 90%)   /* Border rengi */
--color-neutral-900: hsl(222, 73%, 7%)    /* Koyu metin */

/* Dark Mode */
--color-neutral-600: hsl(226, 11%, 37%)   /* Orta gri */
--color-neutral-700: hsl(225, 23%, 24%)   /* Koyu gri */
--color-neutral-800: hsl(226, 25%, 17%)   /* Çok koyu gri */
```

### Typography

6 farklı text preset'i mevcuttur:
- `text-preset-1`: Büyük başlıklar (2.125rem, bold)
- `text-preset-2`: Orta başlıklar (1.25rem, bold)  
- `text-preset-3`: Küçük başlıklar (1.125rem, normal)
- `text-preset-4`: Normal metin (1rem, normal)
- `text-preset-5`: Küçük metin (1rem, 1.4 line-height)
- `text-preset-6`: En küçük metin (0.875rem)

## 🧩 Component API

### ExtentionCard

```tsx
interface ExtentionCardProps {
  extention: Extention
}
```

### SwitchButton

```tsx
interface SwitchButtonProps {
  checked?: boolean
  onToggle?: (isOn: boolean) => void
  disabled?: boolean
}
```

### ButtonGroup

Context'ten otomatik olarak filter durumunu alır, props gerektirmez.

## 🌐 Context API

### ExtentionContext

Merkezi state yönetimi için kullanılır:

```tsx
const {
  extensions,           // Tüm extension'lar
  filteredExtensions,   // Filtrelenmiş extension'lar
  activeFilter,         // Aktif filter
  setActiveFilter,      // Filter değiştirme
  handleRemove,         // Extension silme
  handleToggle          // Extension aktif/pasif yapma
} = useExtention()
```

## 📦 Dependencies

### Ana Bağımlılıklar

- **React 19.1.0**: UI framework
- **React DOM 19.1.0**: DOM rendering
- **@reactuses/core 6.0.5**: React hooks koleksiyonu
- **Tailwind CSS 4.1.11**: Utility-first CSS framework

### Development Bağımlılıklar  

- **TypeScript 5.8.3**: Type safety
- **Vite 7.0.4**: Build tool ve dev server
- **ESLint 9.30.1**: Kod kalitesi
- **@vitejs/plugin-react 4.6.0**: React desteği

## 🤝 Katkıda Bulunma

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'i push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📝 Lisans

Bu proje MIT lisansı ile lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakınız.

## 👨‍💻 Geliştirici

**Alpay Genç**
- GitHub: [@alpaygenc](https://github.com/alpaygenc)
- Email: alpay@example.com

## 🙏 Teşekkürler

- [React](https://reactjs.org/) - UI framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework  
- [Vite](https://vitejs.dev/) - Build tool
- [TypeScript](https://www.typescriptlang.org/) - Type safety

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
