# Renium Documentation

Octo Desktop, Octo Web ve Octo Lab için kapsamlı dokümantasyon sistemi.

## 📚 Dokümantasyon Bölümleri

### 🖥️ Octo Desktop
Masaüstü uygulaması kullanım kılavuzu ve özellikleri.
- **URL:** `/docs/octo-desktop/`

### 🌐 Octo Web  
Web platformu kullanım kılavuzu ve özellikleri.
- **URL:** `/docs/octo-web/`

### 🔬 Octo Lab (Gizli)
Geliştirici dökümanları ve iç süreçler.
- **URL:** `/client/octo-lab-guid-12345/` (Sadece yetkili geliştiriciler)

## 🚀 Lokal Geliştirme

```bash
npm install
npm start          # http://localhost:3000 adresinde çalışır
npm run build      # Production build
npm run serve      # Build'i test et
```

## 📝 Dokümantasyon Yazma

1. GitHub web arayüzünde `.md` dosyalarını düzenle
2. Markdown formatını kullan
3. Commit yap → Otomatik build başlar

## 🏗️ Yapı

```
docs/
├── octo-desktop/     # Desktop app docs
├── octo-web/         # Web platform docs
└── clients/          # Private client docs
    └── octo-lab-guid-12345/
```

## 🔐 Gizli Dokümantasyon

Octo Lab dökümanları sadece GUID ile erişilebilir ve şirket içi kullanım içindir.

---

**Built with Docusaurus** 🦖
