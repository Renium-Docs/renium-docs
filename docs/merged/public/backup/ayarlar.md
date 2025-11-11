---
sidebar_position: 4
---

# Ayarlar
![x](./assets/ayarlar.png)

Renium Backup uygulamasının genel ayarlarını bu bölümden yapılandırabilirsiniz.

## Lisans Ayarları

### Customer ID

**Customer ID**: Renium yazılım tarafından size özel olarak verilecek müşteri kimlik numaranızdır.

- Support sisteminden aldığınız Customer ID'nizi girin
- Lisans kontrolü her çalıştığında yapılır
- Lisans yoksa çalışmaz

**Lisansı Test Et**: Customer ID'nizi girdikten sonra bu butona tıklayarak lisansınızın geçerli olup olmadığını kontrol edebilirsiniz.

:::danger ÖNEMLİ
ReniumBackup her çalıştığında lisans kontrolü yapar. Lisans yoksa çalışmaz!
:::

## Microsoft Teams Bildirim Ayarları

Microsoft Teams üzerinden yedekleme bildirimleri almak için webhook yapılandırması yapın.

**Teams Webhook URL**: Microsoft Teams kanalınız için oluşturduğunuz webhook URL'sini girin.

- Bu URL tüm görevler için varsayılan olarak kullanılabilir
- Her görev için ayrı bir webhook de tanımlanabilir

:::info Bilgi
Bu URL'yi yapılandırmadan da Teams bildirimi alabilirsiniz. Her görev için ayrı webhook tanımlanabilir.
:::

#### Teams kanalında webhook nasıl oluşturulur:

1. Teams'te bildirim almak istediğiniz kanala gidin
2. Kanal adı yanındaki `...` menüsünden **"Workflows"** (İş Akışları) seçin
3. "Post to a channel when a webhook request is received" şablonunu seçin
4. Webhook için bir ad girin ve **"Ekle"** butonuna tıklayın
5. Oluşturulan webhook URL'ini kopyalayın ve yukarıya yapıştırın

## Rclone Bulut Servis Yönetimi


Rclone, farklı bulut depolama servislerine dosya yüklemek için kullanılan bir araçtır. Renium Backup, yedekleme dosyalarını buluta otomatik yüklemek için rclone kullanır.


Yeşil kutuda rclone'un yüklü olup olmadığı ve versiyon bilgisi görüntülenir:

✅ **Rclone Durumu: Yüklü (rclone v1.71.1)**

Yapılandırılmış olan tüm rclone remote'ları liste halinde görüntülenir.

**Örnek**: `mega:`

### Mega Remote Ekle

MEGA bulut depolama servisi için remote yapılandırması:

1. **Mega Remote Ekle** butonuna tıklayın
2. Açılan diyalogda aşağıdaki bilgileri girin:
   - **Remote Adı**: Remote için benzersiz bir isim (örn: `mega`)
   - **Email**: MEGA hesap e-posta adresiniz
   - **Şifre**: MEGA hesap şifreniz
3. **Kaydet** butonuna tıklayın
4. Remote başarıyla eklenir ve listede görünür

**Kullanım**: Görev oluştururken "rclone Remote" alanına `mega:` yazabilirsiniz.

### Google Drive / OneDrive Remote Ekle

Google Drive veya OneDrive için remote yapılandırması:

**Ön Koşul**: İlgili bulut servisinde hesabınızın olması gerekmektedir.

1. **Google Drive Remote Ekle** veya **OneDrive Remote Ekle** butonuna tıklayın
2. Açılan diyalogda remote adını girin
3. Tarayıcıda açılan oturum açma sayfasından hesabınıza giriş yapın
4. Uygulamaya erişim izni verin
5. Remote başarıyla eklenir ve listede görünür

**Desteklenen Bulut Servisleri**:
- Google Drive
- Microsoft OneDrive
- MEGA
- Dropbox
- Amazon S3
- ve diğer rclone destekli servisler

:::tip İpucu
Birden fazla remote ekleyerek farklı bulut servislerine yedekleme yapabilirsiniz.
:::

### Remote Silme

Mevcut bir remote'u silmek için:

1. Remote listesinden silmek istediğiniz remote'u seçin
2. **Sil** butonuna tıklayın
3. Silme işlemini onaylayın

:::warning Uyarı
Remote silindiğinde, bu remote'u kullanan görevler artık buluta yükleme yapamaz.
:::

