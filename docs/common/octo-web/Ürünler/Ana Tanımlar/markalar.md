---
sidebar_position: 1030
---
# Markalar

Markalar; ürün kartlarında “Marka” alanı olarak seçilir ve raporlamada kullanılır. Konf. malzemelerde Ürün Adı’nda son parça olarak gösterilir, ürün koduna girmez.

## Alanlar

### Marka Kodu (ItemBrandCode)
- Maks. 250 karakter; benzersiz olmalıdır.
- Arama ve raporlarda kullanılır.

### Marka Adı (ItemBrandName)
- Maks. 100 karakter.
- Ürün Adı’na yansır; kullanılması önerilir

### Etiket Stok Kartı (LabelItemId)
- Opsiyonel. Bu markaya ait varsayılan etiket stok kartını bağlamak için kullanılır.
- Satın alma/ambalaj süreçlerinde etiketin otomatik önerilmesini sağlayabilir.

## İşlemler

### Ekle
1. Yeni marka oluşturun.
2. Marka Kodu ve Marka Adı’nı girin.
3. Gerekirse Etiket Stok Kartı’nı seçin.
4. Kaydedin.

### Güncelle
- Kod, Ad veya Etiket Stok Kartı’nı düzenleyip kaydedin.

### Sil
- Marka ilişkili kayıtlarca kullanılıyorsa silme engellenebilir; önce ilişkileri kontrol edin.

## Kurallar ve İpuçları

### Ürün adına etkisi
- Marka, Ürün Adı’nda son parça olarak eklenir: “… | Dikiş Tipi | Marka”.

## Örnekler

### Marka Kodu
ACME

### Marka Adı
ACME Tekstil

### Etiket Stok Kartı
10234 – “GENEL ETİKET 60x40”

