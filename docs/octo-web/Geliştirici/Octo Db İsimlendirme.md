# Octo Veri Tabanı Nesne İsimlendirme Kuralları

## Nesneler

- Tablo
- View
- Store Procedure
- Funciton
- Trigger
- [Index]
- [FK]
- [Default Constarit]
- [Sequence]

## Genel Şablon

`[[Prefix]]` `[[Modul Kodu]]` `[_]` `[Nesne Adı]`

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

| **Prefix** | **Modul** | **Örnek** |
| --- | --- | --- |
| **Ana Moduller** |  |  |
| **Sales** | Sipariş | Tb_Rn_Sales... |
| **Planinng** | Planlama | Tb_Rn_Planning... |
| **Inventory** | Stok & Ürün Ağacı | Tb_Rn_Inventory... |
| **Production** | Üretim | IT07_GerCikanMalzeme |
| **Purchase** | Satın Alma | Tb_Rn_Purchase... |
| **System** | Sistem | Tb_Rn_System... |

### Diğer Veri Tabanı Nesneleri
