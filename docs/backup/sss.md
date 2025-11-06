---
sidebar_position: 50
---

# Sıkça Sorulan Sorular 

:::tip İpucu
Destek talebi oluştururken ekran görüntüleri, log dosyalarını ve hata mesajlarını vb. ekleyin. Bu, sorununuzun daha hızlı çözülmesine yardımcı olur.
:::


## Sistem gereksinimleri nelerdir?

**İşletim Sistemi**:
- Windows Server 2012 R2 veya üzeri
- Windows 10/11 (64-bit)

**Donanım**:
- Minimum 2 GB RAM (4 GB önerilir)
- 100 MB boş disk alanı (kurulum için)
- Yedekleme dosyaları için yeterli disk alanı

**Yazılım**:
- .NET Framework 4.7.2 veya üzeri
- SQL Server (SQL veritabanı yedeklemesi için)
- Rclone (bulut yükleme için - otomatik yüklenir)

**Ağ**:
- İnternet bağlantısı (lisans kontrolü ve bulut yükleme için)
- SMTP sunucusu (e-posta bildirimleri için)

**İzinler**:
- Windows Görev Zamanlayıcı kullanım yetkisi
- Yedeklenecek kaynaklara okuma izni
- Hedef klasöre yazma izni

## Kurulum nasıl yapılmaktadır?

1. **Kurulum Dosyasını İndirin**
   - Renium destek sisteminden kurulum dosyasını edinin
   - `ReniumBackup_Setup.exe` dosyasını çalıştırın

2. **Kurulum Sihirbazını Takip Edin**
   - "Next" butonuna tıklayarak devam edin
   - Lisans sözleşmesini kabul edin
   - Kurulum dizinini seçin (varsayılan: `C:\Program Files\ReniumBackup`)
   - "Install" butonuna tıklayın

3. **Kurulumu Tamamlayın**
   - Kurulum tamamlandığında "Finish" butonuna tıklayın
   - Uygulama otomatik olarak başlatılır

4. **İlk Yapılandırma**
   - Ayarlar bölümünden Customer ID'nizi girin
   - "Lisansı Test Et" butonuna tıklayarak lisansınızı doğrulayın
   - İsteğe bağlı: Teams webhook ve rclone remote'larını yapılandırın

5. **İlk Görevinizi Oluşturun**
   - "Yeni Görev" butonuna tıklayın
   - Görev ayarlarını yapılandırın
   - "Kaydet" butonuna tıklayarak görevi oluşturun

:::tip İpucu
Kurulum sonrası "Lisansı Test Et" ile lisansınızı doğrulamayı unutmayın. Geçerli lisans olmadan görevler çalışmaz.
:::

## Mail Bildirimi gelmiyor?

Mail bildirimlerinin çalışmaması için birkaç neden olabilir:

1. **E-posta Ayarları Kontrol Edin**
   - Görev ayarlarında doğru e-posta adresini girdiğinizden emin olun
   - Konu şablonunun doğru yapılandırıldığını kontrol edin

2. **SMTP Ayarları**
   - Sunucu SMTP ayarlarının doğru yapılandırıldığından emin olun
   - Firewall veya güvenlik duvarı e-posta gönderimini engelliyor olabilir

3. **Spam/Gereksiz Klasörünü Kontrol Edin**
   - Bildirim e-postaları spam klasörüne düşmüş olabilir
   - E-posta sağlayıcınızın güvenli gönderici listesine ekleyin

4. **Log Dosyalarını İnceleyin**
   - Uygulama log dosyalarında hata mesajları olup olmadığını kontrol edin

