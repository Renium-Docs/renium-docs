---
sidebar_position: 3
---
# Rapor Tasarımı

Rapor tasarımı, sistemdeki verileri ve tasarım aracını kullanarak dilediğiniz raporları oluşturmanıza ve görüntülemenize olanak tanır.

## Rapor Tanımları

*Geliştirici* modülü altında yer alan *Rapor Tanımları* ekranı ile tanımladığınız raporları detaylı olarak görüntüleyebilir ve yönetebilirsiniz. Bu ekranda;
- Yeni rapor oluşturabilir,
- Daha önce oluşturduğunuz raporları düzenleyebilir,
- İhtiyaç kalmadığında raporları silebilirsiniz.

## Yeni Rapor Oluşturma

Yeni bir rapor oluşturmak için aşağıdaki adımları izleyebilirsiniz:

1. **Rapor Tasarlayıcısı** butonuna tıklayınız.  
   Bu işlem sizi **Rapor Tasarımı** ekranına yönlendirecektir.  
2. Sol üst köşede bulunan ☰ (**Hamburger menü**) ikonuna tıklayınız.  
3. Açılan menüden **New** seçeneğini seçiniz.  
   Bu adım sonucunda ekranda **boş bir rapor sayfası** oluşturulacaktır.  
4. Raporunuzu kaydetmek için tekrar ☰ (**Hamburger menü**) ikonuna tıklayınız.  
5. Menüden **Save** seçeneğini seçiniz.  
6. Açılan pencerede raporunuza anlamlı bir **isim verin** ve ardından **Save** butonuna tıklayarak kaydedin.  

:::tip
Raporunuza isim vermeden kaydederseniz, daha sonra bu rapora erişemeyebilirsiniz. Bu nedenle, kolay hatırlanabilir ve içeriği yansıtan bir isim kullanmanız önerilir.
:::

### Veri Kaynağı Bağlantısı

Raporunuzda göstermek istediğiniz verileri, ilgili tablolardan **SQL sorguları** aracılığıyla *Rapor Tasarlayıcısına* dahil etmeniz gerekmektedir.  

Bu işlemi gerçekleştirmek için aşağıdaki adımları izleyebilirsiniz:

1. Sağ tarafta bulunan menüden **Field List** sekmesine tıklayınız.  
2. **SqlDataSource** başlığı yanında yer alan **Add Query** butonuna basınız.  
3. Açılan pencerede sorgunuza bir **isim** veriniz.  
4. İsterseniz SQL sorgunuzu doğrudan yazabilirsiniz, ancak tabloları ve alan adlarını daha net görebilmek için **Run Query Builder** butonuna tıklayarak **Query Builder** ekranını açmanız önerilir.  
5. Açılan Query Builder ekranında sağ tarafta bulunan **View** ve **Table** listelerinden  
   raporunuza dahil etmek istediğiniz alanları seçiniz.  
6. Seçtiğiniz alanlar, **rapor tasarım aracında** erişilebilir hale gelecektir.  

İçeri aktardığınız veriler, **Field List** alanının altında **hiyerarşik bir yapı** şeklinde görüntülenir.   
Buradan istediğiniz tablo veya alanı **sürükle-bırak (drag & drop)** yöntemiyle doğrudan rapor tasarım alanına ekleyebilirsiniz.  

### Raporun Tasarımı

- Sol tarafata bulunan tasarım aracından istediğiniz bileşeni raporunuza ekleyebilirsiniz. (grafik, resim, text, imza etc.)
- **Report Explorer** kısmında, oluşturduğunuz raporun tüm bileşenlerinin **hiyerarşik yapısını** inceleyebilirsiniz. Bu yapı, raporun genel organizasyonunu kolayca yönetmenizi sağlar.
