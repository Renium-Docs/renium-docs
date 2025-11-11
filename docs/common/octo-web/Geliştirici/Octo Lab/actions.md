---
sidebar_position: 4
---

# Actionlar

Actionlar, Octo Lab'da nesnelere (form, grid, vb.) eklenebilen etkileşimli öğelerdir. Kullanıcı arayüzünde butonlar, menü öğeleri veya diğer tetikleyiciler olarak görünürler.



## Temel Alanlar

### ObjectId
Action'ın bağlı olduğu nesnenin ID'si (Form, Grid, vb.)

**Geçerlilik:** ObjectId nin ObjectTypeId si 1,2 olanlara action tanımlanabilir.

### Action Tipleri (ActionTypeId)

Action'ın tipini belirler ve hangi özelliklerin kullanılabileceğini etkiler:

- **Action**: Standart aksiyon - Form açma, veri işleme gibi genel işlemler
- **Survey**: Anket formlarını açma
- **Report Designer**: Rapor tasarım ekranını açma (ObjectId.ReportId alanı varsa, raporu tasarım modunda açar)
- **Survey Designer**: Anket tasarım ekranını açma (???)

## Görünüm Özellikleri

### ActionName
Action'ın görünen adı. Kullanıcı arayüzünde buton veya menü öğesi olarak görüntülenir.

**Geçerlilik:** Tüm action tiplerinde kullanılır.

### ToolbarButton
Boolean değer. `true` ise, action araç çubuğunda (toolbar) buton olarak gösterilir.

**Geçerlilik:** Tüm action tiplerinde kullanılır.

### DisplayOrder
Action'ın nesnedeki actionlar arasındaki görüntülenme sırasını belirler. Düşük değerler önce gösterilir.

**Geçerlilik:** Tüm action tiplerinde kullanılır.

### ShowInTab
Boolean değer. `true` ise, action sekme (tab) alanında gösterilir.

**Geçerlilik:** Yalnızca **Action** tipinde ve `TargetObjectId` ile belirtilen nesnenin `ObjectTypeId`'si **1** veya **2** olduğunda kullanılır.

### StyleId
Action'a uygulanacak stil (renk, simge boyutu, vb.) ID'si.

**Geçerlilik:** Tüm action tiplerinde kullanılır.

### IconName
Action'da kullanılacak simgenin adı (örn: "add", "edit", "delete").

**Geçerlilik:** Tüm action tiplerinde kullanılır.


## Veri Kaynağı Özellikleri

### TargetObjectId
Action'ın hedef aldığı nesnenin ID'si. Action tetiklendiğinde hangi form veya ekranın açılacağını belirler.

**Geçerlilik:** Action ve Survey action tiplerinde kullanılır.

**Kısıtlamalar:**
- **Action**: [Nesneler](/docs/octo-web/Geliştirici/Octo%20Lab/nesne-ozellikleri.md) kütüphanesinden bir değer seçilmelidir
- **Survey**: `Tb_Rn_System_Surveys` tablosundan seçilmelidir


### ResultDataSourceObjectId
Action tamamlandıktan sonra yenilenecek veri kaynağının (DataSource) ID'si.

**Geçerlilik:** Yalnızca **Action** tipinde kullanılır.

**Kısıtlamalar:**
- `TargetObjectId` ile belirtilen nesnenin `ObjectTypeId`'si **3** (Form) olmalıdır
- `ResultDataSourceObjectId` ile belirtilen nesnenin `ObjectTypeId`'si **1** (DataSource) veya **2** (Grid) olmalıdır

## Filtreleme Özellikleri

### SourceFilterFieldName
Kaynak nesnedeki filtreleme için kullanılacak alan adı. Action tetiklenirken filtre değerinin alınacağı alan.

**Geçerlilik:** Yalnızca **Action** tipinde ve `TargetObjectId` ile belirtilen nesnenin `ObjectTypeId`'si **1** veya **2** olduğunda kullanılır.

**Kısıtlamalar:**
- Alan adı, `ObjectId` ile belirtilen nesnede mevcut olmalıdır

### TargetFilterFieldName
Hedef nesnedeki filtreleme için kullanılacak alan adı. `SourceFilterFieldName` değerinin eşleştirileceği hedef alan.

**Geçerlilik:** Yalnızca **Action** tipinde ve `TargetObjectId` ile belirtilen nesnenin `ObjectTypeId`'si **1** veya **2** olduğunda kullanılır.

**Kısıtlamalar:**
- Alan adı, `TargetObjectId` ile belirtilen nesnede mevcut olmalıdır

### ResultDataSourceWhereClause
Action sonucunda veri kaynağına uygulanacak ek WHERE koşulu (SQL).

**Geçerlilik:** Yalnızca **Action** tipinde ve `TargetObjectId` ile belirtilen nesnenin `ObjectTypeId`'si **1** veya **2** olduğunda kullanılır.

## Gruplama Özellikleri

### GroupName
Action'ların gruplandırılması için kullanılan grup adı. Aynı gruptaki actionlar birlikte gösterilir.

**Geçerlilik:** Tüm action tiplerinde kullanılır.

### BeginGroup
Boolean değer. `true` ise, bu action'dan önce görsel bir ayırıcı (separator) eklenir.

**Geçerlilik:** Tüm action tiplerinde kullanılır.
## Onay ve Çoklu Seçim

### Approved
Boolean değer. Action'ın onaylanıp kullanıma hazır olduğunu belirtir.

**Geçerlilik:** Yalnızca **Action** tipinde ve `TargetObjectId` ile belirtilen nesnenin `ObjectTypeId`'si **3** (Form) olduğunda kullanılır.

### MultiSelect
Boolean değer. `true` ise, action birden fazla kayıt seçiliyken de çalışabilir.

**Geçerlilik:** Yalnızca **Action** tipinde kullanılır.

**Kısıtlamalar:**
- `TargetObjectId` ile belirtilen nesnenin `ObjectTypeId`'si **3** (Form) olmalıdır

### DataSourceRequery
Boolean değer. `true` ise, action tamamlandıktan sonra ilgili veri kaynağı otomatik olarak yeniden sorgulanır.

**Geçerlilik:** Yalnızca **Action** tipinde kullanılır.


## Kullanıcı Etkileşimi

### ConfirmationMessage
Action çalıştırılmadan önce kullanıcıya gösterilecek onay mesajı.

**Geçerlilik:** Tüm action tiplerinde kullanılır.

---

## Action Tipi - Özellik Matrisi

Aşağıdaki tablo, her action tipinde hangi özelliklerin kullanılabileceğini göstermektedir:

| Özellik | Action | Survey | Report Designer | Survey Designer |
|---------|:------:|:------:|:---------------:|:---------------:|
| **Temel Alanlar** |
| ObjectId | ✅*** | ✅*** | ✅*** | ✅*** |
| ActionTypeId | ✅*** | ✅*** | ✅*** | ✅*** |
| **Veri Kaynağı** |
| TargetObjectId | ✅ | ✅ | ❌ | ❌ |
| ResultDataSourceObjectId | ✅ | ❌ | ❌ | ❌ |
| **Filtreleme** |
| SourceFilterFieldName | ✅* | ❌ | ❌ | ❌ |
| TargetFilterFieldName | ✅* | ❌ | ❌ | ❌ |
| ResultDataSourceWhereClause | ✅* | ❌ | ❌ | ❌ |
| **Gruplama** |
| GroupName | ✅ | ✅ | ✅ | ✅ |
| BeginGroup | ✅ | ✅ | ✅ | ✅ |
| **Onay ve Seçim** |
| Approved | ✅** | ❌ | ❌ | ❌ |
| MultiSelect | ✅** | ❌ | ❌ | ❌ |
| DataSourceRequery | ✅ | ❌ | ❌ | ❌ |
| **Görünüm** |
| ActionName | ✅ | ✅ | ✅ | ✅ |
| DisplayOrder | ✅ | ✅ | ✅ | ✅ |
| ShowInTab | ✅* | ❌ | ❌ | ❌ |
| ToolbarButton | ✅ | ✅ | ✅ | ✅ |
| StyleId | ✅ | ✅ | ✅ | ✅ |
| IconName | ✅ | ✅ | ✅ | ✅ |
| **Kullanıcı Etkileşimi** |
| ConfirmationMessage | ✅ | ✅ | ✅ | ✅ |

### Notlar:
- ✅: Özellik kullanılabilir
- ❌: Özellik kullanılamaz
- ✅*: Sadece TargetObjectId'nin ObjectTypeId'si 1 veya 2 olduğunda kullanılabilir
- ✅**: Sadece TargetObjectId'nin ObjectTypeId'si 3 olduğunda kullanılabilir
