---
sidebar_position: 4
---

# Ortak İkonlar

Aşağıdaki tablo Octo'da en sık kullanılan ikonları tanımlar.
### Özet
| İkon | Açıklama |
|:--:|:--|
| <i class="dxbl-image fa-regular fa-file image"></i> |  **[Yeni kayıt](#yeni-kayıt)** |
| <i class="dxbl-image fa-regular fa-pen-to-square image"></i> | **[Düzenle](#düzenle)** |
| <i class="dxbl-image fa-regular fa-trash-can image"></i> | **[Sil](#sil)** |
| <i class="fa-solid fa-arrow-rotate-right"></i>| **[Yenile](#yenile)** |
| <i class="fa-solid fa-caret-down"></i> | **[Açılır liste](#açılır-liste)** |
| <i class="fa-solid fa-ellipsis"></i> | **[Kütüphaneye erişim](#daha-fazla-işlem)** |
| <i class="fa-solid fa-up-right-from-square"></i> | **[Dış bağlantı](#dış-bağlantı)** |
| <i class="dxbl-image fa-solid fa-table dxbl-context-menu-item-icon"></i> | **[Tablo işlemi](#tablo-i̇şlemi)** |
| <i class="dxbl-image fa-regular fa-solid fa-bolt"></i> | **[Hızlı işlem](#hızlı-i̇şlem)** |
| <i class="fa-regular fa-square-bolt"></i>| **[Onay isteyen işlem](#onay-isteyen-i̇şlem)** |

---

### <i class="dxbl-image fa-regular fa-file image"></i>  Yeni kayıt

Yeni bir kayıt/evrak oluşturur. Tıklandığında boş bir form veya satır açılır; zorunlu alanları doldurup **Kaydet** ile işlemi tamamlarsınız. Varsayılan değerler ve numaralandırma, sistem ayarlarına göre otomatik atanabilir.  
**İz kaydı:** *ekleyen kullanıcı ve tarih* ilgili alanlara kaydedilir.  
**Kısayol:** `F2`  
**Ne zaman kullanılır?** Yeni müşteri, sipariş, iş emri vb. oluştururken.  
**İpucu:** Zorunlu alanlar yıldız (*) ile işaretlenir; eksik alanları üstteki uyarı çubuğundan takip edin.

---

### <i class="dxbl-image fa-regular fa-pen-to-square image"></i>  Düzenle

Seçili kaydı düzenleme modunda açar. Kaydın statüsüne ve yetkilere bağlı olarak bazı alanlar kilitli olabilir.  
**İz kaydı:** *güncelleyen kullanıcı ve güncelleme tarihi* kaydedilir.  
**Ne zaman kullanılır?** Fiyat, teslim tarihi, açıklama gibi alanları güncellerken.  
**İpucu:** Düzenleme sırasında değişiklikler otomatik kaydedilmez; formu kapatmadan önce **Kaydet**’i tıklayın.

---

### <i class="dxbl-image fa-regular fa-trash-can image"></i>  Sil

Seçili kaydı siler. Çoğu ekranda silme işlemi geri alınamaz veya yalnızca yetkili kullanıcılara açıktır.  
**Ne zaman kullanılır?** Yanlış oluşturulmuş, test amaçlı veya iptal edilen kayıtları kaldırırken.  
**Uyarı:** Silme, ilişkili alt kayıtları (satırlar, ekler, hareketler) etkileyebilir. Silmeden önce ilişki uyarılarını kontrol edin.

---

### <i class="fa-solid fa-arrow-rotate-right"></i>  Yenile

Tablo/gridi sunucudan yeniden yükler.  
**Ne değişir?** Veriler güncellenir; mevcut filtreler ve sıralama tercihleriniz korunur.  
**İpucu:** Başka kullanıcıların yaptığı değişiklikleri görmek için listeyi yenileyin; sayfayı komple yenilemenize gerek yok.

---

### <i class="fa-solid fa-caret-down"></i>  Açılır liste

Alan veya butona bağlı seçenek listesini açar.  
**Ne zaman kullanılır?** Durum seçimi, tip/alt tip seçimi, hızlı filtreleme.  
**İpucu:** Yazmaya başlayarak listede arama yapabilirsiniz; uzun listelerde bu çok daha hızlıdır.

---

### <i class="fa-solid fa-ellipsis"></i>  Daha fazla işlem (…)

1. Araç Çubuğunda yer almayan ya da sığmayan, bağlama duyarlı ek işlemleri gösterir. 
2. *Seçenekli alanlar, kütüphane kaynağına ulaştırır.* Veriler daha detaylı incelenebilir; yetkiye göre kütüphanede **düzenlenebilir**.  
**Örnekler:** “PDF indir”, “Hareketler”, “Etiket Yazdır”, “Kopyala”.  
**İpucu:** Seçilen nesnelere göre menü içeriği değişebilir; önce nesneyi işaretleyin.

---

### <i class="fa-solid fa-up-right-from-square"></i>  Dış bağlantı

*Değerin tanımına götürür; böylece ilgili kayıt detaylı incelenebilir.* 

**Örnekler:** Ürün tanımı, müşteri tanımı, sipariş belgesi vb.  
**Güvenlik:** Yalnızca yetkili kullanıcılar görebilir.

---

### <i class="dxbl-image fa-solid fa-table dxbl-context-menu-item-icon"></i>  Tablo işlemi

Seçili satırlar üzerinde ilişkili tablolardaki bilgileri getirir. Herhangi bir işlem yapmaz. Bilgiye ulaşımı hızlandırma amacı taşır. 
**Örnekler:** Ürün satırında Ürün hareketleri veri işlemi vb.

---

### <i class="dxbl-image fa-regular fa-solid fa-bolt"></i>  Soru Sormadan işlem

Kullanıcının herhangi bir bilgi girişi yapmadan çalışan veri işlemleridir.  
**Örnekler:** “Yeniden hesapla”, “Kayıt onayla”, “Etiket üret”.  

---

### <i class="fa-regular fa-square-bolt"></i>  Soru Soran işlem

Çalıştırmadan önce parametre formu açan işlemlerdir.  
**Örnekler:** “Sevk et” (tarih ve araç ister), “Kapat” (not ister), “İptal” (gerekçe ister).  

---
