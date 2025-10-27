---
sidebar_position: 1
---

# Ürünler


# Ürün Kod-Ad Oluşumu

Bu rehber, **Ürün Kodu** ve **Ürün Adı** alanlarının nasıl OLUŞTUĞUNU ve sizin hangi alanları DOLDURMANIZ gerektiğini sade bir dille açıklar. Amaç, koddaki sembollerin kaynağını görünür kılmak ve yanlış/eksik veri girişini önlemektir.

## Paket Ürünler

Ürün ağacı bileşenlerinin **alt grup tanımında**, **isim oluşumunda kullanılacak** olanları sayar. İsim oluşumunda kullanılacak ham madde sayısı sayısına göre aşağıdaki kurallar işletilir.

Mevcutta, **Konfeksiyon Malzemeleri** isim oluşumuna dahil değildir. **Banyo Perdesi, masa örtüsü, runner, supla** vb. dahildir.


### Tek Hammadde (Hammadde sayısı = 1)

**Ürün Kodu** şu şekilde oluşturulur:
```
<BilesenUrunKodu>.<KanatSayisiAdet>.<AmbalajTipID>.<InsertUrunTID>.<AmbalajUrunTID>.<EtiketUrunTID>
```

**Ürün Adı** şu şekilde oluşturulur:

```
<BilesenUrunAdi> | <KanatSayisiAdet> | <AmbalajTipKodu> | <Insert BeytugUrunKodu> | <Ambalaj BeytugUrunKodu> | <Etiket BeytugUrunKodu>
```

:::tip 
Insert / Ambalaj / Etiket ürünlerinin **BeytugUrunKodu** tanımlı olmalı; aksi halde isimde boş kalabilir.
:::

#### Örnek
* Bileşen: `ÜRÜN 1 (Id=1)`
* Kanat: `2`
* Amb. Tipi: `KUTU (ID=5)`
* Insert: `INS-7001 (UrunTID=7001)`
* Ambalaj: `AMB-7100 (UrunTID=7100)`
* Etiket: `ETK-7200 (UrunTID=7200)`

**Ürün Kodu:**

```
1.2.5.7001.7100.7200
```

**Ürün Adı:**

```
ÜRÜN 1 | 2 | KUTU | INS-7001 | AMB-7100 | ETK-7200
```

---

**Alan Açıklamları:**

* **Hammadde seçimi zorunludur.**

1. `RN06_StokHammadde` tablosunda **en az 1 satır** olmalı. **(Zorunlu)**
    - Hiç hammadde yoksa işlem **hata verir**: "**Hammadde Seçilmeden Paket Tanımlanamaz**".
2. **Kanat Sayısı** → `KanatSayilari.Adet`
2. **Konfeksiyon Ambalaj Tipi** → `KonfeksiyonAmbalajTipleri.KonfeksiyonAmbalajTipId` ve `...Kodu`
3. **Ambalaj Ürünü** (AmbUrun) → `Ürünler (BeytugUrunKodu gösterimi)`
4. **Insert Ürünü** (InsertUrun) → `Ürünler`
5. **Etiket Ürünü** (EtiketUrun) → `Ürünler`

---
### Birden Fazla Hammadde (Hammadde sayısı > 1)
**Ürün Kodu** şu şekilde oluşturulur:

  ```
  <BilesenUrunId>-<UrunAgaciMiktar>; ... ; <BilesenUrunId>-<UrunAgaciMiktar>
  ```

**Ürün Adı** ara listeler ile şu şekilde oluşturulur:

```
<BilesenUrunTipKodları> | <BilesenKonfOlcuKodlarıveUrunAgaciMiktar>  | <BilesenVaryantKodları>
```

**Oluşan ara listeler:**

* **Bileşen Urun Tipleri (BilesenUrunTipKodları):**
    * Tek tip ise: `UrunTipKodu`
        * Örn: `BP (Banyo Perdesi)`
    * Birden fazla ise: `UrunTipKodu & UrunTipKodu & ...`
        * Örn: `BP & SP` (Banyo Perdesi, Suppla)

* **Bileşen Konf Olcu Kodları ve Ürün Ağaci Miktar:**

  ```
  <KonfOlcuKodu>/<UrunAgaciBirimMiktar> & <KonfOlcuKodu>/<UrunAgaciBirimMiktar> & ...
  ```
    * Örn: `150X240/1 & 40X160/1 & 40X40/10`
* **Bileşen Varyant Kodları:**
  * Genel durumda: `BaskiDesenVaryantKodu-BaskiDesenVaryantKodu-...`
      * Örn:  `V1 - V2 -V3`
  * **Grup=1** özel durumda: `VaryantNo;VaryantNo;...`

**Grup Sayısı (özel durum):**

* Sistem, tip/desen/ölçü kombinasyonlarına bakarak **Grup Sayısı** hesaplar.
* **Grup = 1** ise **Ürün Adı** şu özel formatta oluşur:

  ```
  <UrunTipKodu> | <OlcuKodu> & <Toplam Adet> AD | <DikisTipKodu> | <BaskiDesenNo> / <VaryantNo;VaryantNo;...>
  ```
* **Grup ≠ 1** ise **Ürün Adı** genel formatta oluşur:

  ```
  <UrunTipKodu [& ...]> | <OlcuKodu/Birim [& ...]> | <VaryantKodu-...>
  ```

---

#### Örnek (Genel)

* 2 satır hammadde, SıraNo: 1,2,3
* Ürün Tipleri: `SATEN`, `POPELİN`
* Ölçüler/Birim: `36/AD`, `38/AD`
* Varyant Kodları: `V001`, `V008`

**Ürün Kodu:**

```
123-AD;456-MT;789-AD
```

**Ürün Adı:**

```
SATEN & POPELİN | 36/AD & 38/AD | V001-V008
```

---

#### Örnek (Grup = 1 – Özel)

* Tek kombinasyon: `POPELİN`, `OlcuKodu=36`, `Toplam Adet=12`, `DTK-05`, `BaskiDesenNo=BD-101`
* Varyant No’ları: `10;12;14`

**Ürün Kodu:**

```
123-AD;456-MT
```

**Ürün Adı:**

```
POPELİN | 36 & 12 AD | DTK-05 | BD-101 / 10;12;14
```
---
