# Renium Docs - Oturum Notları

## Proje Bilgileri

**Proje Konumu:** `/mnt/d/Projects/Renium/ReniumDocs/renium-docs`

**GitHub Repository:** https://github.com/Renium-Docs/renium-docs

**Live Site:** https://renium-docs.netlify.app

**Algolia Search:** 
- App ID: NUDWOMOH3M
- API Key: 2f31d13d31d67a92710c8d508d191129
- Index: renium-docs

## Yerel Geliştirme Komutları

```bash
# Proje klasörüne git
cd /mnt/d/Projects/Renium/ReniumDocs/renium-docs

# Geliştirme sunucusunu başlat
npm start

# Yeni version oluştur
npm run docusaurus docs:version X.X.X

# Değişiklikleri GitHub'a gönder
git add -A
git commit -m "Değişiklik açıklaması"
git push
```

## Proje Yapısı

- **docs/**: Ana dokümantasyon (Next version)
- **versioned_docs/**: Version'lanmış dokümantasyonlar
- **versions.json**: Version listesi
- **docusaurus.config.ts**: Ana yapılandırma
- **sidebars.ts**: Sidebar yapılandırması

## Önemli GitHub Linkleri

### Dosya Düzenleme Linkleri
- **Ana config:** https://github.com/Renium-Docs/renium-docs/blob/main/docusaurus.config.ts
- **Installation.md:** https://github.com/Renium-Docs/renium-docs/blob/main/docs/octo-desktop/installation.md
- **Octo Desktop Index:** https://github.com/Renium-Docs/renium-docs/blob/main/docs/octo-desktop/index.md
- **Octo Web Index:** https://github.com/Renium-Docs/renium-docs/blob/main/docs/octo-web/index.md
- **Sidebar Config:** https://github.com/Renium-Docs/renium-docs/blob/main/sidebars.ts

### Yeni Dosya Oluşturma Linkleri
- **Octo Desktop klasöründe yeni dosya:** https://github.com/Renium-Docs/renium-docs/new/main/docs/octo-desktop
- **Octo Web klasöründe yeni dosya:** https://github.com/Renium-Docs/renium-docs/new/main/docs/octo-web
- **Ana docs klasöründe yeni dosya:** https://github.com/Renium-Docs/renium-docs/new/main/docs

### Repository Yönetim Linkleri
- **Repository Settings:** https://github.com/Renium-Docs/renium-docs/settings
- **Releases:** https://github.com/Renium-Docs/renium-docs/releases
- **Actions (CI/CD):** https://github.com/Renium-Docs/renium-docs/actions

## Son Yapılan Işlemler

1. ✅ **Versioning sistemi eklendi** - Version 1.0.0 oluşturuldu
2. ✅ **Version dropdown navbar'a eklendi** - "Tüm Versiyonlar" linki kaldırıldı
3. ✅ **GitBook içeriği installation.md'ye eklendi** - Kapsamlı dokümantasyon tamamlandı
4. ✅ **GitHub'a push edildi** - Son değişiklikler deploy edildi

## Kaldığımız Yer

- **installation.md** dosyası GitBook içeriği ile tamamen genişletildi
- Version sistemi kuruldu ve çalışır durumda
- Site https://renium-docs.netlify.app adresinde yayında

## Kullanıcı Tercihleri

- GitHub web arayüzü üzerinden düzenleme
- Türkçe içerik
- Version bazlı dokümantasyon
- Edit links kaldırılmış
- Search özelliği aktif (Algolia)

## Netlify Deployment

- **Site URL:** https://renium-docs.netlify.app
- **Otomatik deployment:** GitHub push ile tetiklenir
- **Build komutu:** `npm run build`
- **Publish directory:** `build`

## Sırada Yapılabilecek İşler

1. **Daha fazla GitBook içeriği çevirmek** (kullanıcı gerektiğinde)
2. **Octo Web dokümantasyonu genişletmek**
3. **Yeni version oluşturmak** (dokümantasyon güncellendiğinde)
4. **Client-specific GUID routing** geliştirmek
5. **Temalar ve özelleştirmeler** eklemek

---

*Not: Bu dosya bir sonraki oturumda hızlı başlamak için oluşturulmuştur.*