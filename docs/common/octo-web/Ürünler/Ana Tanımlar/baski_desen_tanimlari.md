---
sidebar_position: 1010
---
# Baskı Desen Varyantları

Baskı desen tanımı; ürünün baskı (print) özelliklerini, varyantlarını ve doğrulama kurallarını içerir. Bu doküman son iyileştirmeler doğrultusunda güncellenmiştir.

## İşlemler

### Yeni
1) Yeni kaydı başlatın.
2) Baskı Desen alanlarını doldurun:
   - Baskı Desen Kodu (zorunlu, benzersiz)
   - Baskı Desen Adı (zorunlu)
   - Ürün Tipi ve Ürün Alt Tipi
   - Tek Varyant mı? (Evet/Hayır)
3) Tek Varyant = Evet ise:
   - Sistem otomatik olarak bir varyant oluşturur:
     - Varyant Kodu: DEFAULT
     - Varyant Adı: Varsayılan
     - Baskı Desen Varyant Kodu/Adı otomatik üretilir.
4) Tek Varyant = Hayır ise:
   - En az bir varyant ekleyin (Varyant Kodu ve Varyant Adı zorunlu).
5) Kaydedin.

### Düzenle
- Desen ve varyant bilgilerinde yapılan değişiklikler kaydedildiğinde, otomatik alanlar (Baskı Desen Varyant Kodu/Adı) kaynak alanlara göre yeniden oluşturulur.

### Sil
- Kullanımda olmayan desenler silinebilir.
- İlişkili kayıtlar varsa silme engellenir. Gerekirse önce ilişkileri güncelleyin veya deseni pasife alın.

---

## Alanlar

### Baskı Desen Tanımları

#### Baskı Desen Kodu
- Açıklama: Desenin benzersiz tanımlayıcısı.
- Kurallar:
  - Zorunlu
  - Ürün Alt Tipi bazında benzersiz
- Örnekler: BD001, TSHIRT_BASIC, HOODIE_PREM

#### Baskı Desen Adı
- Açıklama: Kullanıcıya gösterilen ad.
- Kurallar:
  - Zorunlu
  - En fazla 200 karakter
- Örnekler: Standart Logo Baskısı, Premium Hoodie Tasarımı

#### Ürün Tipi
- Açıklama: Desenin ait olduğu ana ürün tipi.
- Kurallar:
  - Filtreleme ve raporlarda kullanılır
- Örnekler: Tekstil, Promosyon, Aksesuar, Ev Dekorasyon

#### Ürün Alt Tipi
- Açıklama: Ürün tipinin alt kategorisi.
- Kurallar:
  - Seçilen Ürün Tipi ile tutarlı olmalı
- Örnekler:
  - Tekstil: T‑Shirt, Hoodie, Sweatshirt, Polo
  - Promosyon: Kalem, Ajanda, USB

#### Tek Varyant mı?
- Açıklama: Desenin tek mi çok varyantlı mı olduğunu belirtir.
- Değerler:
  - Evet: Sistem otomatik olarak tek bir varyant kaydı oluşturur. Manuel ikinci varyant eklenemez.
  - Hayır: Çok varyant. En az bir varyant tanımı gerekir.

---

### Baskı Desen Varyant Tanımları
Çok varyantlı desenlerde kullanılır. Her varyant ana desenin bir seçeneğini temsil eder.

#### Baskı Deseni
- Açıklama: Varyant kaydında yukarıda oluşturulan desen seçilir. Desen kodu bulunamazsa kütüphaneden oluşturulur.

#### Varyant Kodu
- Açıklama: Varyantın kullanıcı tanımlı kısa kodu.
- Kurallar:
  - Çok varyantlı desenlerde zorunlu
  - Ürün Alt Tipi bazında benzersiz olmalı

#### Varyant Adı
- Açıklama: Varyantın kullanıcıya gösterilen adı.
- Kurallar:
  - Çok varyantlı desenlerde zorunlu

#### Baskı Desen Varyant Kodu
- Açıklama: Sistem tarafından otomatik oluşturulan birleşik kod.
- Kurallar ve Format:
  - Otomatik oluşur
  - Format: DESEN_KODU-VARYANT_KODU
- Örnek: TSHIRT_BASIC-RED

#### Baskı Desen Varyant Adı
- Açıklama: Sistem tarafından otomatik oluşturulan birleşik ad.
- Kurallar ve Format:
  - Otomatik oluşur
  - Format: DESEN_ADI - VARYANT_ADI
- Örnek: Standart Logo Baskısı - Kırmızı

:::info
Otomatik oluşan alanlar (Baskı Desen Varyant Kodu/Adı), kaynak alanlar güncellendiğinde yeniden oluşturulur.
:::

---

## Doğrulama ve Kurallar
- Benzersizlik:
  - Baskı Desen Kodu ve Varyant Kodları, Ürün Alt Tipi bazında tekil olmalı.
- Tutarlılık:
  - Tek Varyant = Evet ise varyant listesi manuel eklenmez; sistem tek kayıt oluşturur.
  - Tek Varyant = Hayır ise en az bir geçerli varyant bulunmalı.
- Referans kontrolleri:
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
- Silme yerine mümkünse pasife almayı tercih edin.

## Sık Karşılaşılan Hatalar ve Çözümler
- Duplicate key: Kod benzersiz değil → Kodu değiştirin.
- Validation error: Zorunlu alan eksik → Gerekli alanları tamamlayın.
- Reference error: Kullanımda olan desen siliniyor → İlişkili kayıtları güncelleyin/silin.




