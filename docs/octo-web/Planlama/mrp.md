---
sidebar_position: 1
---

# MRP

## Genel Parametreler
### Giriş: MRP Nedir?
Malzeme İhtiyaç Planlama (MRP), üretim için doğru malzemenin, doğru miktarda ve doğru zamanda tedarik edilmesini sağlayan bir planlama ve envanter kontrol sistemidir. Bu modül, mevcut stokları, beklenen siparişleri ve üretim planlarını analiz ederek neyin, ne kadar ve ne zaman sipariş edilmesi veya üretilmesi gerektiğini belirler.
Kılavuz şu bölümlerden oluşmaktadır:
1. MRP Genel Parametreleri: Planlama motorunun genel çalışma kurallarını belirler.
2. Ürüne Özel MRP Parametreleri: Her bir ürün için özel planlama kurallarını tanımlar.
3. MRP Çalıştırma (Planlamanın Başlatılması): Planlama sürecinin nasıl başlatılacağını açıklar.
4. MRP Sonuçlarını İnceleme ve Sipariş Oluşturma: Planlama sonuçlarının nasıl yorumlanacağını ve aksiyona dönüştürüleceğini gösterir.
### Bölüm 1: MRP Genel Parametreleri
Bu ekran, tüm MRP hesaplamaları için geçerli olacak varsayılan kuralları ve davranışları tanımlar. Bu ayarlar, planlama motorunun temelini oluşturur. Genellikle bu ayarlar bir kez yapılır ve nadiren değiştirilir.
**Ekran Yolu: MRP Yönetimi > MRP Çalıştır > MRP Genel Parametreler**
> remi gelecek
#### Temel Parametreler ve Anlamları:
- **Ufuk Süresi:** MRP'nin ne kadar ileriyi planlayacağını belirtir (Örn: 90).
- **Ufuk Birimi:**
Ufuk süresinin birimini tanımlar (Gün, Hafta, Ay). Örnekte "Gün" seçilidir, yani sistem 90 gün ilerisini planlayacaktır.
- **Çalışma Tipi:**
MRP hesaplamasının yöntemini belirler. (Örn: Net Change - sadece değişen kalemler için, Regenerative - tüm kalemler için baştan hesaplama).
- **Geçmiş Tarihli Talep Yönetimi:**
Geçmişte kalmış ancak karşılanmamış taleplerin nasıl yönetileceğini belirler. (Örn: "Bugüne Ekle" - talebi bugünün tarihine taşır).
- **Planlama Zaman Çit Gün:**
Planın dondurulduğu, yani otomatik değişikliklere kapatıldığı gün sayısıdır. Bu süre içindeki planlanmış siparişler, MRP tarafından değiştirilmez, bu da yakın vadeli planlarda istikrar sağlar.
- **Talep Zaman Çit Gün:**
Yeni taleplerin dikkate alınacağı son tarihi belirleyen bir zaman bariyeridir.
- **Varsayılan Lot Sizing Rule (Parti Büyüklüğü Kuralı):**
Sipariş miktarlarının nasıl belirleneceğini tanımlayan varsayılan kuraldır.
- **L4L (Lot for Lot):**
İhtiyaç duyulan miktar kadar sipariş oluşturur.
- **Sabit Miktar:**
Her zaman önceden belirlenmiş sabit bir miktarda sipariş oluşturur.
- **Varsayılan Safety Stock (Güvenlik Stoğu) Method:**
Güvenlik stoğu hesaplama yöntemini belirler.
- **Gecikme Tolerans Gün:**
Tedarik veya üretim gecikmeleri için tolere edilecek gün sayısıdır.
- **Stok Fazlası Uyarı Çarpanı:**
Bir ürünün stoğunun ne zaman "fazla" olarak kabul edileceğini belirleyen bir çarpandır.
### Bölüm 2: Ürüne Özel MRP Parametreleri
Genel parametreler tüm sistem için geçerliyken, bazı ürünlerin kendilerine has tedarik, üretim veya stoklama koşulları olabilir. Bu ekran, her bir ürün kartı içinde o ürüne özel MRP kurallarını tanımlamanızı sağlar. Burada yapılan ayarlar, genel parametreleri geçersiz kılar (override eder).
Ekran Yolu: Genel Tanımlar > Ürünler > İlgili Ürün Seçilir > Ürün Ağacı İlişkileri (veya benzeri bir sekme)
#### Ürün Bazlı Ayarlar:
Bu alandaki bilgiler, sadece seçili olan ürün (Örn: 6754) için geçerlidir.
- **Min. Üretim Miktarı:** Bu üründen bir defada üretilebilecek minimum miktarı belirtir. MRP, bu miktarın altında üretim emri oluşturmaz.
- **Kalite Kontrol Süresi (Gün):** Ürün tedarik edildikten veya üretildikten sonra kalite kontrol süreçleri için gereken ek süreyi (gün olarak) belirtir. Bu süre, malzemenin kullanılabilir olma tarihini etkiler.
- **Mal Kabul Süresi (Gün):** Malzemenin depoya ulaştıktan sonra kabul ve yerleştirme işlemleri için gereken süredir.
- **Lot Başına Süre:** Üretimde, her parti (lot) için gereken hazırlık (setup) süresini ifade eder.
- **Periyodik Sip. Min. Gün/Süre:** Siparişlerin hangi periyotlarda verileceğini kısıtlamak için kullanılır (Örn: Bu ürün sadece haftanın başında sipariş edilebilir).
- **Sipariş Günleri:** Bu ürün için sadece belirli günlerde sipariş oluşturulmasını sağlar.

> resim gelecek

### Bölüm 3: MRP Çalıştırma (Planlamanın Başlatılması)
Tüm genel ve ürüne özel parametreler ayarlandıktan sonra MRP hesaplamasını başlatabilirsiniz.
1. **MRP Modülüne Gidin:** Genellikle ana menüde MRP Yönetimi veya Planlama gibi bir başlık altında bulunur.
2. **MRP Çalıştır Ekranını Açın:**  Bu ekranda genellikle planlamayı başlatacak bir "MRP Çalıştır" veya "Planlamayı Başlat" butonu bulunur.
3. **Parametreleri Gözden Geçirin:** Çalıştırma öncesinde, sistem size hangi planlama senaryosunu (Örn: ana plan, simülasyon planı) kullanmak istediğinizi sorabilir.
4. **Çalıştırın:** Butona tıkladığınızda MRP motoru çalışmaya başlar. Sistem;
   - Tüm satış siparişlerini, tahminleri ve bağımsız talepleri (Brüt İhtiyaçlar) toplar.
   - Mevcut eldeki ve yoldaki stokları (Mevcutlar) hesaplar.
   - Brüt ihtiyaçlardan mevcutları çıkararak Net İhtiyaçları bulur.
   - Ürünlerin tedarik ve üretim sürelerini (lead time), parti büyüklüklerini ve güvenlik stoğu kurallarını dikkate alarak Planlanmış Siparişleri (üretim ve satınalma için) oluşturur.
Bu işlem, veri miktarına bağlı olarak zaman alabilir. Sistemde bir ilerleme çubuğu veya durum bildirimi gösterilebilir.
### Bölüm 4: MRP Sonuçlarını İnceleme ve Sipariş Oluşturma
MRP çalışması bittikten sonra en önemli adım, sonuçları analiz etmek ve gerekli aksiyonları almaktır. Sonuçlar genellikle bir rapor veya interaktif bir tablo şeklinde sunulur.
#### Sonuç Ekranı
Bu ekranda genellikle aşağıdaki gibi bilgiler yer alır:

|Ürün Kodu|Ürün Adı|İhtiyaç Tarihi|Miktar|Sipariş Tipi|Önerilen Sipariş Tarihi|
|----------------|----------------------|----------------|--------|---------------|--------------------------|
|PLS-SEAT03-BL|PLASTİK KOLTUK SİYAH|20.06.2025|500|Üretim Emri|13.06.2025|
|HAM-CELIK-01|ÇELİK SAC|12.06.2025|1200|Satınalma Sip.|09.06.2025|

#### Sonuçları Aksiyona Dönüştürme (Sipariş Ekleme)
MRP'nin oluşturduğu "Planlanmış Siparişler" sadece birer öneridir. Bunları gerçeğe dönüştürmek için kullanıcı onayı gerekir.
1. **Önerileri İnceleyin:** Sonuç ekranındaki her bir satırı dikkatle inceleyin. Miktarların ve tarihlerin beklentilerinizle uyumlu olup olmadığını kontrol edin.
2. **Önerileri Seçin:** Gerçek bir siparişe dönüştürmek istediğiniz satırları seçin (genellikle satır başındaki onay kutuları ile).
3. **Siparişleri Oluşturun:** Ekranda bulunan "Seçilenleri Onayla", "Sipariş Oluştur" veya "Üretim Emri Oluştur" gibi bir butona tıklayın.
4. **Sistem Otomasyonu:** Bu butona tıkladığınızda sistem otomatik olarak:
   - "Üretim Emri" tipindeki öneriler için Üretim Modülü'ne yeni bir üretim emri kaydı oluşturur.
   - "Satınalma Siparişi" tipindeki öneriler için Satınalma Modülü'ne yeni bir satınalma siparişi taslağı veya direkt sipariş oluşturur.
Bu sayede, manuel veri girişi en aza indirilir ve planlama ile icra (üretim/satınalma) arasında tam bir entegrasyon sağlanır.
### Sonuç ve Önemli İpuçları
- **Veri Bütünlüğü Kuraldır:** MRP'nin doğruluğu tamamen girdiğiniz verilerin (ürün ağaçları, stok seviyeleri, tedarik süreleri, siparişler) doğruluğuna bağlıdır. "Çöp Girdi, Çöp Çıktı" (Garbage In, Garbage Out) prensibini asla unutmayın.
- **Parametreleri Düzenli Gözden Geçirin:** Tedarikçi performansları, üretim süreçleri veya pazar koşulları değiştikçe, genel ve ürüne özel parametrelerinizi düzenli olarak gözden geçirmeniz planlarınızın güncel ve gerçekçi kalmasını sağlar.
- **Performans:** MRP hesaplamaları yoğun kaynak gerektirebilir. Veritabanının düzenli olarak bakımının yapılması ve sorguların optimize edilmesi, planlama sürelerini kısaltacaktır.
Umarım bu kılavuz, MRP modülünü daha etkin ve verimli bir şekilde kullanmanıza yardımcı olur. Başka sorularınız veya veritabanı optimizasyonu ile ilgili talepleriniz olursa çekinmeden bana ulaşabilirsiniz.
## MRP Teknik Parametre Dokümantasyonu
Bu doküman, Malzeme İhtiyaç Planlama (MRP) modülünde kullanılan genel ve ürün bazlı parametreleri kapsamlı şekilde açıklar. Amaç, sistemin doğru planlama yapabilmesi için hangi parametrenin ne işe yaradığını netleştirmektir.
### 1. 🔧 Genel MRP Parametreleri (MRP_Parametreleri_Genel)
MRP sisteminin tüm ürünler için geçerli olan temel planlama kurallarını tanımlar. Genellikle sadece 1 kayıt bulunur ve sistemin genel davranışını belirler.
|Alan Adı|Açıklama|
|--|--|
| **Alan Adı** | **Açıklama** |
|---------------|--------------|
| **ParametreID** | Bu tabloya sadece tek satır girilmesine olanak tanır (varsayılan: 1). |
| **UfukSuresi** | MRP'nin ne kadar süreyi (örneğin 90 gün) planlayacağını belirler. |
| **UfukBirimi** | Planlama ufkunun birimi: 'Gün', 'Hafta', 'Ay'. |
| **ZamanKovasiTipi** | Raporlama veya zamanlamada kovaların nasıl kullanılacağını belirler (örn: 'Günlük', 'Haftalık', 'Aylık'). |
| **CalistirmaTipi** | MRP motorunun çalışma tipi: Rejeneratif (tüm kayıtlar), Net Değişim (sadece değişen kayıtlar). |
| **GecmisTarihliTalepYonetimi** | Geçmişe ait taleplerin nasıl ele alınacağı: Yok Say, Uyarı Ver, İlk Kovaya Ekle. |
| **GecmisTarihliGirisYonetimi** | Geçmişe ait mal girişleri için davranış aynı şekilde belirlenir. |
| **PlanlamaZamanCitiGun** | Belirli bir tarihten önceki günlerde MRP değişiklik yapmaz (dondurulmuş bölge). |
| **TalepZamanCitiGun** | Yeni taleplerin geçerli sayılacağı zaman bariyeri. |
| **VarsayilanLotSizingRule** | Tüm ürünler için geçerli olacak varsayılan parti büyüklüğü kuralı (L4L, FOQ, MAX, POQ). |
| **VarsayilanSafetyStockMethod** | Güvenlik stoğu hesaplama yöntemi: Sabit Miktar, Günlük Stok. |
| **VarsayilanSafetyStockValue** | Tüm ürünler için geçerli olacak minimum stok miktarı. |
| **VarsayilanSafetyTimeDays** | Tüm ürünler için varsayılan güvenlik süresi (gün). |
| **GecikmeToleransGun** | Tedarik gecikmelerinde kabul edilecek maksimum gecikme süresi. |
| **HizlandirmaEsikGun** | Siparişin planlanan tarihten daha erken verilmesi gerektiğinde dikkate alınacak eşik. |
| **StokFazlasiUyariCarpan** | Gerçek stok, beklenenin bu çarpanı kadar fazlaysa sistem uyarı verir. |
| **KapasiteKontroluAktif** | 1: Kapasite kontrolü yapılır. 0: Kapasite kontrolü yapılmaz. |
| **SonGuncelleme** |Parametrelerin son güncellenme tarihi.|

### 2. 📦 Ürün Bazlı Parametreler (MRP_Work_UrunParametreleri)
Her ürün için planlama davranışını belirleyen özel parametrelerdir. Ürünlerin kendine özgü üretim, tedarik ve stoklama koşulları bu tabloda tanımlanır.
#### Kimlik ve Tanım Bilgileri
| **Alan Adı**     | **Açıklama**                                                     |
|------------------|------------------------------------------------------------------|
| **MRPRunLogID**  | Bu kaydın hangi MRP çalışmasına ait olduğunu belirtir.           |
| **UrunID**       | Ürünün benzersiz sistemdeki kimliği.                             |
| **UrunKodu**     | Stok veya ERP sisteminde tanımlı ürün kodu.                      |
| **UrunAdi**      | Ürünün açıklayıcı adı.                                           |
| **UrunTipi**     | Mamul, yarı mamul, hammadde gibi ürün sınıflandırması.           |
| **BirimID**      | Stok biriminin kimliği (adet, kg, m vb.).                        |

#### Tedarik ve Üretim Süreleri
| **Alan Adı**                 | **Açıklama**                                  |
|-----------------------------|-----------------------------------------------|
| **SatinAlmaTedarikSuresiGun** | Satın alma tedarik süresi (gün).             |
| **UretimTedarikSuresiGun**    | Üretim süresi (gün).                         |
| **KaliteKontrolSuresiGun**    | Kalite kontrol işlemleri için gereken ekstra süre. |
| **MalKabulSuresiGun**         | Malzemenin depoya kabul süresi.              |

#### Parti Büyüklüğü ve Sipariş Kuralları
| **Alan Adı**             | **Açıklama**                                                  |
|--------------------------|---------------------------------------------------------------|
| **LotSizingRule**        | Parti büyüklüğü kuralı (L4L, FOQ, POQ, MAX).                  |
| **FixedOrderQuantity**   | Her siparişte sabit olarak sipariş edilecek miktar.           |
| **PeriodOrderQuantityDays** | Periyodik sipariş sıklığı (ör: 7 = haftada 1).            |
| **MinOrderQuantity**     | Minimum sipariş miktarı.                                      |
| **OrderMultiple**        | Siparişler bu sayının katı olmak zorundadır (örn: 50'lik).   |

#### Stok Politikaları ve Güvenlik
| **Alan Adı**            | **Açıklama**                                             |
|-------------------------|----------------------------------------------------------|
| **MaximumStockQty**     | Bu ürün için maksimum stok limiti.                      |
| **SafetyStockMethod**   | Sabit ya da günlük bazlı güvenlik stoku yöntemi.        |
| **SafetyStockValue**    | Güvenlik stoku miktarı.                                  |
| **SafetyTimeDays**      | Emniyet süresi: ürünün daha erken sipariş edilmesini sağlar. |
| **ScrapPercentage**     | Fire oranı (%) — üretimde kayıplar için.                |

#### Planlama Davranışı
| **Alan Adı**              | **Açıklama**                                                                 |
|---------------------------|------------------------------------------------------------------------------|
| **IsPhantom**             | Phantom ürün mü? (Yalancı ürün ağacı; üretim emri oluşturulmaz).             |
| **PlanningTimeFenceGun**  | Planlamaya kapalı zaman dilimi (ör. 7 gün içinde MRP değişiklik yapmaz).    |
| **DemandTimeFenceGun**    | Taleplerin geçerliliği için maksimum gün.                                    |
| **PlanlamaMetodu**        | Ürün bazında planlama tipi: MRP, ROP, Planlanmaz.                            |
| **ReorderPointQty**       | Yeniden sipariş noktası (ROP için geçerlidir).                               |

#### Bağlantılar ve Başlangıç Verisi
| **Alan Adı**             | **Açıklama**                                                                 |
|--------------------------|------------------------------------------------------------------------------|
| **VarsayilanRotaID**     | Üretim rotası (iş akışı) kimliği.                                           |
| **VarsayilanTedarikciID**| Ürünün varsayılan tedarikçisinin kimliği.                                   |
| **BaslangicStok**        | MRP çalışmasına başlarken sistemdeki mevcut stok miktarı.                   |
| **GuvenlikStogu**        | Sabit güvenlik stoku değeri (SafetyStockValue yerine override edebilir).    |
| **LowLevelCode**         | Ürün ağaçlarında kullanılan seviye kodu (malzeme çözümleme sırası).         |

#### 📌 Ek Bilgiler ve Öneriler
- **L4L (Lot for Lot):** Gerçek ihtiyaç kadar sipariş verir, stok fazlası yaratmaz.
- **FOQ (Fixed Order Quantity):** Her zaman sabit miktar sipariş edilir (örnek: 1000 adet).
- **MAX:** Belirli bir üst limite göre parti planlanır.
- **ROP (Reorder Point):** Yeniden sipariş noktası belirlenir, MRP algoritmasından bağımsız çalışabilir.
- **Phantom Ürün:** Üretim emri açılmaz, alt malzemeler doğrudan planlanır (sanal ürün).

Bu parametrelerin doğru şekilde tanımlanması, MRP motorunun verimli ve doğru çalışmasını sağlar. Planlama kalitesi doğrudan bu değerlerin doğruluğuna bağlıdır.
> "Garbage In, Garbage Out" prensibi unutulmamalıdır: Yanlış verilerle yapılan planlama, yanlış sonuçlar doğurur.
