# Octo Veri Tabanı Nesne İsimlendirme Kuralları

## Nesneler

- Tablo
- View
- Store Procedure
- Funciton
- Trigger
- Index
- FK
- Default Constarit
- Sequence

## Genel Şablon

`[Prefix]_[Rn | RnPj]_[Modul Kodu]_[Nesne Adı]`

### Prefixler

| **Prefix** | **Modul** | **** |
| --- | --- | --- |
| **Tablolar** |  |  |
| **Tb** | Tablo |  |
| **Tmp** | Temporary Table (Geçici Tablolar) |  |
| **View** |  |  |
| **Pv** | View |  |
| **Sv** | Seçim (Lookup) Viewleri | Kullanılmıyor |
| **Cv** | Rapor Katalog Viewleri | Kullanılmıyor |
| **TmpPv** | Temporary View (Geçici tablo içeren view) |  |
| **Stored Procedure** |  |  |
| **Sp** | Stored Procedure |  |
| **Function** |  |  |
| **Fn** | Function |  |

### Modül Kodları

| **Prefix**    | **Modül**           | **Örnek**              |
|---------------|---------------------|------------------------|
| **Ana Modüller** |                     |                        |
| **Sales**     | Sipariş             | Tb_Rn_Sales...         |
| **Planning**  | Planlama            | Tb_Rn_Planning...      |
| **Inventory** | Stok & Ürün Ağacı   | Tb_Rn_Inventory...     |
| **Production**| Üretim              | Tb_Rn_Production...    |
| **Purchase**  | Satın Alma          | Tb_Rn_Purchase...      |
| **System**    | Sistem              | Tb_Rn_System...        |

### Diğer Veri Tabanı Nesneleri

| **Adı**         | **Syntax**                                                        | **Örnek**                                 |
|-----------------|-------------------------------------------------------------------|-------------------------------------------|
| Trigger         | [Tablo Adı]_[İşlevi]                                              | Tb_Rn_Sales_Update                      |
| Index           | Ix_[Tablo Adı]_[index birincil kolonları ...]| Ix_Tb_Rn_Sales_Orders_OrderCode|
| Foreign Key     | Fk_[Tablo Adı]_[Referans Tablo Adı]_[Alan Adı]| Fk_Tb_Rn_Sales_Orders_Tb_Rn_Sales_Inventory      |
| Default Constraint | Df_[Tablo Adı]||
| Unique Key      | Uix_[Tablo Adı]_[index birincil kolonları ...]| Uix_...|
| Sequence        | S_[Tablo Adı]_ ||
