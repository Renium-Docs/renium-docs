---
sidebar_position: 2
---

# Ekran Yönetimi
### Görünüm Özellikleri

![Ekran Yetki](./assets/anaMenu.webp) 

Aşağıda belirtilen özellikler tüm ekran tipleri için tanımı zorunlu olan alanlardır. Açıklamaları aşağıdaki gibidir:
- **Aktif:** Aktif olmayan kayıtlar menüde görünmez. Checkbox işaretlenmelidir.
- **Modül Alt Grup:** Bu alan, tanımın menüde hangi modül ve modül alt grubu altında görüneceğini belirtir. Eğer istenen değer listede yer almıyorsa, `...` tuşları ile tanım ekranı açılarak gerekli tanım eklenebilir. Tanımlama işlemi tamamlandıktan sonra, ekran tanımında uygun değer seçimi yapılmalıdır.

    Her modülün en az bir alt modülü bulunmak zorundadır. Modül Alt Grup tanımında zaten modül bilgisi yer aldığı için, ekran tanımı sırasında ayrıca modül seçimi yapılmasına gerek yoktur.
- **Sıra No:** Ekranın Modül içinde hangi sırada görüneceğini ifade eder.
- **Ekran İsmi:** Ekranın menüde görüneceği ismi ifade eder.

![Ekran Yetki](./assets/ekran_tanımı.webp) 

- **İcon:** Ekranın menüde hangi iconla görüneceğini ifade eder. İstenen icon yoksa tanım ekranına gidilerek tanımı yapılabilir. İcon görselleri `.png/.jpg/.jpeg` formatında `16px` ve `32px` alanlarına resim yüklenmelidir.


### Ek Özellikler

**DocUrl:** Ekran tanımında kayıt için tanımlanan DocUrl'i temsil eder. Ekran ile ilgili dokümana ulaşmanızı sağlar.

![Ekran Yetki](./assets/doc_url.webp) 

## Standart/Master-Detay Ekran

Standart/Master-Detay tanımı için [ekran tanımı](./ekran_yönetimi.md#ekran-yönetimi) kurallarına ek olarak, aşağıdaki tanımlar yapılır:
- **Veri nesnesi:** Ekran tanımındaki en önemli alandır. Ekranın veri kaynağını ifade eder. Açılır listede table ve view tipinde olan veri tabanı nesneleri gözükecektir. Sistem ekran tıklandığında aşağıdaki sorguyu çalıştıracaktır.
    ```sql showLineNumbers
    SELECT * FROM [VeriNesnesi]
- **Detay Veri Nesnesi:** Master-Detay Ekran tipli ekran tanımındaki en önemli alandır. Detay ekranın veri kaynağını ifade eder. Açılır listede table ve view tipinde olan veri tabanı nesneleri gözükecektir. Sistem ekran tıklandığında detay ekran için aşağıdaki sorguyu çalıştıracaktır.

    ```sql showLineNumbers
    SELECT * FROM [DetayVeriNesnesi] 

:::info
Veri nesnesi PK alanı (nesnenin ilk alanı), Detay Veri nesnesi alanları içinde olmalıdır. Aksi halde, veri nesneleri arasında bağlantı sağlanamayacak ve ekran istenildiği gibi çalışamayacaktır.
:::

- **Master Where Text:** Veri nesnesi alanında tanımlanan nesnenin ekran açılışında tanımlanan filtre ile açılacağını ifade eder.
Sistem ekran tıklandığında aşağıdaki sorguyu çalıştıracaktır.
    ```sql showLineNumbers
    SELECT * FROM [Veri nesnesi] WHERE [MasterWhereText]

![Master Where Text](./assets/master-detay.webp)
