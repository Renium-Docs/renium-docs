---
sidebar_position: 3
---

# Alanlar

Bu bölümde Octo Lab'da kullanılan alan özelliklerini detaylı olarak inceleyeceğiz.

## FieldName
---
- Nesnenin veritabanındaki alan isimlerini ifade eder
- **Önemli**: Veritabanı ile birebir aynı olmalıdır
- Farklı olması durumunda sistem hatalarına neden olabilir
- Büyük/küçük harf duyarlılığına dikkat edilmelidir

:::tip 
```
DB Alan Adı: CustomerName
FieldName: CustomerName ✅
FieldName: customername ❌
```
:::

## FieldCaption
---
- Son kullanıcının arayüzde göreceği alan başlığıdır
- Türkçe karakter içerebilir
- Kullanıcı dostu ve anlaşılır olmalıdır

:::tip 
```
FieldName: CustomerName
FieldCaption: Müşteri Adı
```
:::

## Lookup İşlemleri

Lookup alanları, kullanıcının bir listeden seçim yapmasını sağlayan alan türleridir.

### LookupDataSourceObjectId
---
- Lookup işleminde veri kaynağı olarak kullanılacak nesne ID'sini belirtir
- Bu nesne, seçim listesinde gösterilecek verileri içerir
- Geçerli bir ObjectId olmalıdır

:::tip 
```
LookupDataSourceObjectId: 15
// 15 numaralı nesne müşteri listesini içerir
```
:::

### LookupValueFieldName
---
- Kullanıcının seçiminden sonra kaydedilecek değeri belirtir
- Genellikle ID alanları için kullanılır
- LookupDataSource nesnesinde mevcut bir alan olmalıdır

:::tip 
```
LookupValueFieldName: CustomerId
// Kullanıcı "Ahmet Yılmaz" seçerse, CustomerId (örn: 123) kaydedilir
```
:::

### LookupTextFieldName
---
LookupDataSource ObjectFields.FieldCaption alanlarından seçilebilir.
Kullanıcıya gösterilecek metni belirtir.

:::tip 
```
LookupTextFieldName: CustomerName
// Kullanıcı dropdown'da "Ahmet Yılmaz" ismini görür
```
:::

### LookupPopupFieldNames
---
LookupDataSource ObjectFields.FieldCaption alanlarından seçilebilir.
Birden fazla alan gösterilebilir.
Seçimde kullanıcıya gösterilecek parametre ek bilgilerini ifade eder.

:::tip 
```
LookupPopupFieldNames: CustomerCode,CustomerName,City
// Popup'ta şu kolonlar görünür:
// Müşteri Kodu | Müşteri Adı | Şehir
// 001         | Ahmet Yılmaz | İstanbul
// 002         | Mehmet Ali   | Ankara
```
:::

## Lookup Kullanım Senaryosu

:::tip 
Müşteri seçimi için bir lookup alanı oluştururken:

```
LookupDataSourceObjectId: 15        // Müşteri listesi nesne ID'si
LookupValueFieldName: CustomerId     // Kaydedilecek değer (123)
LookupTextFieldName: CustomerName    // Görünecek metin (Ahmet Yılmaz)
LookupPopupFieldNames: CustomerCode,CustomerName,City
```

**Sonuç**: Kullanıcı "Ahmet Yılmaz" ismini görür, ancak sistemde "123" ID'si kaydedilir.
:::