---
sidebar_position: 1010
---
# Baskı Desen Varyantlar

Baskı desen tanımı; ürünün baskı (print) özelliklerini, varyantlarını ve doğrulama kurallarını içerir. Bu doküman son iyileştirmeler doğrultusunda güncellenmiştir.

## Baskı Desen Tanımları

### Baskı Desen Kodu
- Açıklama: Desenin benzersiz tanımlayıcısı.
- Kurallar:
  - Zorunlu
  - Benzersiz (unique)
- Örnekler: BD001, TSHIRT_BASIC, HOODIE_PREM

### Baskı Desen Adı
- Açıklama: Kullanıcıya gösterilen ad.
- Kurallar:
  - Zorunlu
  - En fazla 200 karakter
- Örnekler: Standart Logo Baskısı, Premium Hoodie Tasarımı

### Ürün Tipi
```[▼]```

- Açıklama: Desenin ait olduğu ana ürün tipi seçilir.
- Kurallar:
  - Filtreleme ve raporlarda kullanılır
- Örnekler: Tekstil, Promosyon, Aksesuar, Ev Dekorasyon

### Ürün Alt Tipi
- Açıklama: Ürün tipinin alt kategorisi.
- Kurallar:
  - Seçilen Ürün Tipi ile tutarlı olmalı
- Örnekler:
  - Tekstil: T‑Shirt, Hoodie, Sweatshirt, Polo
  - Promosyon: Kalem, Ajanda, USB

### Tek Varyant mı?
- Açıklama: Desenin tek mi çok varyantlı mı olduğunu belirtir.
- Değerler:
  - Evet: Sistem otomatik olarak tek bir varyant kaydı oluşturur. Manuel olarak ikinci bir varyant eklenemez.
  - Hayır: Çok varyant. En az bir varyant tanımı gerekir.

---

## Baskı Desen Varyant Tanımları
Çok varyantlı desenlerde kullanılır. Her varyant ana desenin bir seçeneğini temsil eder.

### Baskı Deseni
- Açıklama: Varyant kaydında yukarıda ouşturulan desen bilgisi seçilir. Desen kodu bulunumaz ise kütüphaeden oluşturulur.

### Varyant Kodu
- Açıklama: Varyantın kullanıcı tanımlı kısa kodu.
- Kurallar:
  - Çok varyantlı desenlerde zorunlu
  - Ürün alt tipi bazında benzersiz olmalı

### Varyant Adı
- Açıklama: Varyantın kullanıcıya gösterilen adı.
- Kurallar:
  - Çok varyantlı desenlerde zorunlu

### Baskı Desen Varyant Kodu
- Açıklama: Sistem tarafından otomatik oluşturulan birleşik kod.
- Kural ve Format:
  - Otomatik oluşur
  - Format: DESENKODU-VARYANTKODU
- Örnek: TSHIRT_BASIC-RED

:::info
 Otomatik oluşan alanlar (Baskı Desen Varyant Kodu/Adı), kaynak alanlar güncellendiğinde yeniden oluşturulur.
 :::

### Baskı Desen Varyant Adı
- Açıklama: Sistem tarafından otomatik oluşturulan birleşik ad.
- Kural ve Format:
  - Otomatik oluşur
  - Format: DESEN ADI - VARYANT ADI
- Örnek: Standart Logo Baskısı - Kırmızı

Not: Otomatik oluşan alanlar (Baskı Desen Varyant Kodu/Adı), kaynak alanlar güncellendiğinde yeniden oluşturulur.

---

## Doğrulama ve Kurallar
- Benzersizlik:
  - Baskı Desen Kodu ve Varyant Kodları, ürün alt tipi bazında tekil olmalı.
- Tutarlılık:
  - Tek Varyant = Evet ise varyant listesi manuel eklenmez; sistem tek kayıt oluşturur.
  - Tek Varyant = Hayır ise en az bir geçerli varyant bulunmalı.
- Referans Kontrolleri:
  - Kullanımda olan desenler silinemez; önce ilişkili kayıtlar güncellenmelidir.

---

## Kullanım Örnekleri

### Örnek 1 — Tek Varyantlı Desen
- Baskı Desen Kodu: LOGO_STD
- Baskı Desen Adı: Standart Logo Baskısı
- Ürün Tipi / Alt Tipi: Tekstil / T‑Shirt
- Tek Varyant mı: Evet
- Sistem çıktısı:
  - Baskı Desen Varyant Kodu: LOGO_STD-DEFAULT
  - Baskı Desen Varyant Adı: Standart Logo Baskısı - Varsayılan

### Örnek 2 — Çok Varyantlı Desen
- Baskı Desen Kodu: DESIGN_MULTI
- Baskı Desen Adı: Çok Renkli Tasarım
- Ürün Tipi / Alt Tipi: Tekstil / Hoodie
- Tek Varyant mı: Hayır
- Varyantlar:
  - Varyant Kodu: RED, Varyant Adı: Kırmızı
    - Otomatik: DESIGN_MULTI-RED, Çok Renkli Tasarım - Kırmızı
  - Varyant Kodu: BLUE, Varyant Adı: Mavi
    - Otomatik: DESIGN_MULTI-BLUE, Çok Renkli Tasarım - Mavi

---

## En İyi Uygulamalar
- Kodlar kısa, anlamlı ve tutarlı olmalı.
- Varyant adlarında farkı net ifade edin (renk/beden/efekt).
- Gereksiz varyant çoğaltmaktan kaçının.
- Silme yerine mümkünse pasife alma tercih edin.

## Sık Karşılaşılan Hatalar ve Çözümler
- Duplicate key: Kod benzersiz değil → Kodu değiştirin.
- Validation error: Zorunlu alan eksik → Gerekli alanları tamamlayın.
- Reference error: Kullanımda olan desen siliniyor → İlişkili kayıtları güncelleyin/silin.




