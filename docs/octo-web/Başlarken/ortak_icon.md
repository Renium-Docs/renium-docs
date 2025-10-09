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
| <i class="fa-solid fa-ellipsis"></i> | **[Daha fazla işlem (…)](#daha-fazla-işlem)** |
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
**Kütüphane entegrasyonu:** *Seçenekli alanlar, kütüphane kaynağına ulaştırır.* Veriler daha detaylı incelenebilir; yetkiye göre kütüphanede **düzenlenebilir**.  
**Ne zaman kullanılır?** Durum seçimi, tip/alt tip seçimi, hızlı filtreleme.  
**İpucu:** Yazmaya başlayarak listede arama yapabilirsiniz; uzun listelerde bu çok daha hızlıdır.

---

### <i class="fa-solid fa-ellipsis"></i>  Daha fazla işlem (…)

Ana butonlarda yer almayan, bağlama duyarlı ek işlemleri gösterir.  
**İlişki geçidi:** *İlişkili/bağlantılı kayıtlara ulaşmayı sağlar.*  
**Örnekler:** “PDF indir”, “Hareketler”, “Etiket Yazdır”, “Kopyala”.  
**İpucu:** Seçtiğiniz satıra göre menü içeriği değişebilir; önce satırı işaretleyin.

---

### <i class="fa-solid fa-up-right-from-square"></i>  Dış bağlantı

Octo dışındaki bir kaynağı yeni sekmede açar.  
**Tanım kısayolu:** *Değerin tanımına götürür; böylece ilgili kayıt detaylı incelenebilir.*  
**Örnekler:** e-fatura portali, müşteri CRM kartı, üretici teknik dökümanı.  
**Güvenlik:** Yalnızca yetkili kullanıcılar görebilir; erişim izleri denetim kaydına işlenir.

---

### <i class="dxbl-image fa-solid fa-table dxbl-context-menu-item-icon"></i>  Tablo işlemi

Seçili satırlar üzerinde toplu/ızgara tabanlı işlemleri çalıştırır.  
**Örnekler:** Çoklu durum değişikliği, toplu atama, gruplu yazdırma.  
**İpucu:** İşlemi çalıştırmadan önce **çoklu seçim** (Ctrl/Shift) ile etkilenecek satırları işaretleyin.

---

### <i class="dxbl-image fa-regular fa-solid fa-bolt"></i>  Hızlı işlem

Soru sormadan, tek tıkla çalışan eylemdir.  
**Örnekler:** “Yeniden hesapla”, “Kayıt onayla”, “Etiket üret”.  
**Uyarı:** Geri alma yoksa sistem bir bilgilendirme gösterir; emin değilseniz önce **[Onay isteyen işlem](#onay-isteyen-i̇şlem)** sürümünü tercih edin.

---

### <i class="fa-regular fa-square-bolt"></i>  Onay isteyen işlem

Çalıştırmadan önce onay diyalogu veya parametre formu açar.  
**Örnekler:** “Sevk et” (tarih ve araç ister), “Kapat” (not ister), “İptal” (gerekçe ister).  
**İpucu:** Onay penceresinde özetlenen etki alanını dikkatle okuyun; parametreler raporlara ve loglara yansır.

---
