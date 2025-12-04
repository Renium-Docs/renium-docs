---
sidebar_position: 7
---

# Dosyalar

Bu bölüm, tablolarınızda **dosya alanlarının** nasıl oluşturulacağını ve sistemde dosya yönetiminin nasıl yapılandırıldığını açıklamaktadır.

## Dosya Nesnesinin Oluşturulması

Herhangi bir tablonuza **dosya alanı** eklemek için **Geliştirici Modülü → Nesne Yönetimi → FileTables (789)** ekranına gidiniz. Bu ekran üzerinden oluşturmak istediğiniz dosya tablosuna ait temel ayarları yapılandırabilirsiniz.

Yeni bir dosya nesnesi oluşturmak için sağ üstte bulunan **“File Table Oluştur”** butonuna tıklayınız. Açılan formdaki alanları aşağıdaki açıklamalara göre doldurunuz:

---

#### **@SpFileTableName**
Dosya alanının bağlı olacağı tablo adının belirlendiği alandır.

:::tip
Aşağıdaki isimlendirme formatını kullanmanız önerilir:

**Ft_(FirmaKısaKodu)_Modül_İstenilenİsim**

Örneğin: `Ft_Rn_Sales_OrderFiles`

Bu yapı, sistemde standart bir düzen sağlar ve tabloların daha kolay yönetilmesine yardımcı olur.
:::

---

#### **@SpFileTableAlias**
Dosya tablosu için kullanılacak **kısa ad (alias)** bilgisidir.  
Sistem içinde sorgular veya ilişkilerde tabloyu daha anlaşılır biçimde temsil etmek için kullanılır. Genellikle tablo adının mantıklı bir kısaltması tercih edilir.

---

#### **@SPMaxFileSizeKB**
Yüklenebilecek dosyalar için **maksimum boyut sınırının (KB cinsinden)** belirlendiği alandır.  
Bu değer, kullanıcıların sisteme yükleyebileceği en büyük dosya boyutunu kontrol etmeyi sağlar.

---

#### **@SPAllowedFileTypes**
Sisteme yüklenmesine izin verilen **dosya uzantılarını** tanımladığınız alandır.  
**Örnek:**  
`jpg,png,pdf,docx,xlsx`

Bu sayede yalnızca belirlediğiniz türlerdeki dosyaların sisteme yüklenmesine izin verilmiş olur.

---

Bu alanları doldurduktan sonra **Tamam** butonuna tıklayınız. İşlem tamamlandığında oluşturduğunuz **FileTable** listede görüntülenecektir.

> **Not:** Listede yer alan **FileTableID**, dosya alanını farklı tablolara eklerken kullanacağınız kritik bir bilgidir. Bu değeri mutlaka not etmeyi unutmayınız.

---

## Dosya Nesnesinin İlgili Ekranla Bağlantısının Yapılması

Oluşturduğunuz dosya tablosunun bir ekranda kullanılabilmesi için, ilgili ekran ile ilişkilendirme yapmanız gerekir. Bu işlem, ekranda dosya yükleme, görüntüleme ve indirme fonksiyonlarının aktif hale gelmesini sağlar.

Bağlantıyı yapmak için dosya alanını eklemek istediğiniz ekrana gidiniz.  
Ekranın üst kısmında bulunan araç çubuğundan **⚙️ ikonuna** tıklayın ve **“Octo Lab’e Git”** seçeneğini seçin. Bu işlem sizi ekranın yapılandırma (Octo Lab) alanına yönlendirecektir.

Octo Lab ekranında, sayfanın alt bölümünde yer alan **Nesne Alanları** listesinden dosya nesnesiyle ilişkilendirmek istediğiniz alanı bulunuz.  
Ardından **FileTableID** kolonuna, [daha önce oluşturduğunuz](./dosyalar.md#dosya-nesnesinin-oluşturulması) dosya tablosunun **ID değerini** giriniz.

İşlemleri tamamladıktan sonra **Kaydet** butonuna tıklayınız.  
Bu sayede ilgili nesne alanı ile dosya tablosu doğru şekilde ilişkilendirilmiş olur.

---