---
sidebar_position: 1
---

# Nesneler

```Tb_Rn_SystemObjects```


## Ortak Özellikler
---

### ObjectId
- Nesnenin benzersiz kimlik numarası

### ObjectName
- Nesnenin adı

### ObjectAlias
- Nesnenin takma adı

### ObjectTypeId
- Nesne tipini belirler (1:Table, 2:View, 3:Stored Procedure)

### RequeryAfterChange
- Değişiklik sonrası yeniden sorgulanıp sorgulanmayacağını belirler

### DocumentUrl
- İlgili doküman URL'si

## Table/View
---

### BaseObjectId
- Temel nesne kimlik numarası

### ComponentTypeId
- Grid
- Tree

:::danger
ComponentTypeId tree seçildi ise alanlarında TreeId TreeParentId yapısında olması ve TreeId alanının unique olması gerekmektedir.
:::

### EditModeId
- Düzenleme modunu belirler

#### Grid Inline Row
- Satır bazında işlem yapılır
- Her satırda "Düzenle" butonu görünür
- Düzenleme aktif edildiğinde satır düzenleme moduna geçer
- "Kaydet" veya "İptal" butonları ile işlem sonlandırılır

#### GridPopupForm
- Ekran popup şeklinde açılır
- Ayrı bir pencerede düzenleme yapılır

#### Grid Inline Cell
- Hücre varsayılan olarak düzenlenebilir moddadır
- Doğrudan hücreye tıklayarak düzenleme yapılır
- Otomatik kaydetme işlemi gerçekleştirir

#### Grid Inline Form
- Form tüm satır genişliğinde açılır
- Satır altında düzenleme formu görüntülenir

### ReadOnly
- Nesnenin sadece okunabilir olup olmadığını belirler

### WhereClause
- SQL WHERE koşulu

### OrderByClause
- SQL ORDER BY sıralaması

### HtmlCardTemplateId
- HTML kart şablonu ID'si

### HtmlSummaryTemplateId
- HTML özet şablonu ID'si

### HtmlSummaryObjectId
- HTML özet nesne ID'si

### RazorTemplateId
- Razor şablonu ID'si

### SplitterPercentage
- Ayırıcı yüzde değeri

### InfoMessage
- Bilgi mesajı

### DeleteMessage
- Silme mesajı

## Stored Procedure (Sp)

---

### BeforeSPObjectId
- Önceki SP nesne ID'si



