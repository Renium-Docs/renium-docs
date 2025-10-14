# Octo Veri Tabanı Nesne İsimlendirme Kuralları

## Temel Kurallar (PascalCase)

* **Genel ilke:** Tüm isim parçaları **PascalCase** (her kelimenin ilk harfi büyük, bitişik yazım) kullanılarak oluşturulur.
* **Bölümlü yapı:** Nesne adları `_` (alt çizgi) ile ayrılan **segmentlerden** oluşur. Her segment **PascalCase** olmalıdır.

  * Şablon: `[Prefix]_[Rn | RnPj]_[ModulKodu]_[NesneAdi]`
  * Örnek: `Tb_Rn_Inventory_Items`, `Sp_RnPj_Production_CreateBomCost`
* **İngilizce ifade edilir:** İsimlerde İngilizce kullanılır.
* **Türkçe karakter yok:** İsimlerde `Ç, Ğ, İ, Ö, Ş, Ü` ve boşluk kullanılmaz; ASCII karakterler tercih edilir.
* **Çoğul isimler:** Tablo adları çoğul olur: `Items`, `Orders`.
* **Birincil anahtarlar:** `[TekilTabloAdi]Id`  biçimindedir (ör. `ItemId`, `OrderId`).
* **Tarih/zaman alanları:** `Date`, `DateTime`, `UtcDateTime` son ekleri kullanılır (ör. `AddDate`, `UpdateDate`, `UpdateDateTime`).
* **Mantıksal alanlar:** `Is*` ile başlar ve bit tipindedir(ör. `IsActive`, `IsFinished`).
* **Sabit/standart kısaltmalar:** Kullanılmamaya çalışılır.
* **Virgüllü Sayılar:** decimal(18,6) tipi kullanılır.
* **Geçici yapılar:** Geçici tablo/view adları ilgili `Tmp` öneki ile başlar.
* **BypassTrig:** Bir tabloda Update trigger' ı varsa 'BypassTrig' adında bir alan açılır.
---

## Nesne Türleri

* Tablo
* View
* Stored Procedure
* Function
* Trigger
* Index
* Foreign Key (FK)
* Default Constraint
* Sequence

---

## Genel Şablon

```
[Prefix]_[Rn | RnPj]_[ModulKodu]_[NesneAdi]
```

### Prefixler

| **Prefix**           | **Tür**             | **Not**                      |
| -------------------- | ------------------- | ---------------------------- |
| **Tablolar**         |                     |                              |
| **Tb**               | Tablo               | Kalıcı tablolarda kullanılır |
| **Tmp**              | Geçici Tablo        | Oturum/geçici içerikler      |
| **View**             |                     |                              |
| **Pv**               | View                | Primary (operasyonel) view   |
| **Sv**               | Seçim (Lookup) View | *Şimdilik kullanılmıyor*     |
| **Cv**               | Rapor Katalog View  | *Şimdilik kullanılmıyor*     |
| **TmpPv**            | Geçici View         | Geçici tablolara bakan view  |
| **Stored Procedure** |                     |                              |
| **Sp**               | Stored Procedure    | İş kuralı/proses             |
| **Function**         |                     |                              |
| **Fn**               | Function            | Skalar/table-valued          |

### Modül Kodları

| **Prefix**       | **Modül**         | **Örnek**                  |
| ---------------- | ----------------- | -------------------------- |
| **Ana Modüller** |                   |                            |
| **Sales**        | Sipariş           | `Tb_Rn_Sales_Order`        |
| **Planning**     | Planlama          | `Tb_Rn_Planning_WorkOrder` |
| **Inventory**    | Stok & Ürün Ağacı | `Tb_Rn_Inventory_Item`     |
| **Production**   | Üretim            | `Tb_Rn_Production_Bom`     |
| **Purchase**     | Satın Alma        | `Tb_Rn_Purchase_Order`     |
| **System**       | Sistem            | `Tb_Rn_System_User`        |

---

## Diğer Nesneler İçin İsim Şablonları

| **Adı**            | **Sözdizimi (Syntax)**                  | **Örnek**                                          |
| ------------------ | --------------------------------------- | -------------------------------------------------- |
| Trigger            | `[TabloAdi]_[Islev]`                    | `Tb_Rn_Sales_Order_UpdateAudit`                    |
| Index              | `Ix_[TabloAdi]_[Kolon1]_[Kolon2]...`    | `Ix_Tb_Rn_Sales_Order_OrderCode`                   |
| Unique Index       | `Uix_[TabloAdi]_[Kolon1]_[Kolon2]...`   | `Uix_Tb_Rn_System_User_UserName`                   |
| Foreign Key        | `Fk_[TabloAdi]_[RefTabloAdi]_[AlanAdi]` | `Fk_Tb_Rn_Sales_Order_Tb_Rn_Inventory_Item_ItemId` |
| Default Constraint | `Df_[TabloAdi]_[KolonAdi]`              | `Df_Tb_Rn_System_User_IsActive`                    |
| Sequence           | `S_[TabloAdi]_[AlanAdi]`                | `S_Tb_Rn_Sales_Order_OrderNo`                      |

> **Not:** `TabloAdi`, `RefTabloAdi`, `AlanAdi` segmentlerinin tümü **PascalCase** olmalıdır.

---

## Örnekler

* **Tablo:** `Tb_Rn_Inventory_Item`
* **View:** `Pv_Rn_Production_BomTree`
* **SP:** `Sp_Rn_Purchase_CreateOrder`
* **FN:** `Fn_Rn_System_DivideByZero`
* **Trigger:** `Tb_Rn_Quality_SsTransactionItems_UpdateLock`
* **Index:** `Ix_Tb_Rn_Inventory_Item_ItemCode`
* **FK:** `Fk_Tb_Rn_Production_Bom_Tb_Rn_Inventory_Item_ItemId`
* **DF:** `Df_Tb_Rn_System_User_AddDate`
* **Sequence:** `S_Tb_Rn_Finance_ExchangeRate_RateNo`

---

## Stil Denetim Listesi (Hızlı Kontrol)

* [ ] Segmentler `_` ile ayrıldı mı?
* [ ] Her segment **PascalCase** mi?
* [ ] Türkçe karakter yok mu?
* [ ] Entity adları tekil mi?
* [ ] PK/FK, tarih ve bit alan isimleri kurala uygun mu?
* [ ] Prefix ve modül kodu doğru mu?
