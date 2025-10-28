---
sidebar_position: 9
---
# Paketli Ürünler

## Ürün Kodu - Adı

---

Paket stok tipinde Kod ve Ad otomatik oluşur.


Kod ve oluşumda temel olarak Ürün ağacı bileşenlerinin;

- **Bileşen sayısı** *(alt grupta “isim oluşumunda kullanılacak” işaretli satırlar sayılır)*:
  - **Bileşen Sayısı = 1** 
  - **Bileşen Sayısı > 1**
    - **Farklı alt grup sayısı = 1**
    - **Farklı alt grup sayısı > 1**
      
dikkate alınır. Aşağıda kurallar detaylıca açıklanmıştır.

:::danger

Kod ve Ad oluşması için **Hammadde seçimi zorunludur.**
Hiç hammadde yoksa işlem **hata verir**: "**Hammadde Seçilmeden Paket Tanımlanamaz**".

Örneğin, **Konfeksiyon Malzemeleri** isim oluşumuna dahil değildir. **Banyo Perdesi, masa örtüsü, runner, supla** vb. dahildir.

:::

### Tek Bileşen

---

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

:::info Örnek

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

:::


### Birden Fazla Bileşen

---

**Ürün Kodu** şu şekilde oluşturulur:

  ```
  <BilesenUrunId>-<UrunAgaciMiktar>; ... ; <BilesenUrunId>-<UrunAgaciMiktar>
  ```

**Ürün Adı** ara listeler ile şu şekilde oluşturulur:

#### Birden Fazla Bileşen Ürün Alt Grup

```
<<BilesenUrunTipKodu> & ...> | <<KonfOlcuKodu>/<UrunAgaciBirimMiktar> &...>  | <<BilesenVaryantKodu> - ...>

Örn:
<MS & RN & PC> | <150X240/1 & 40X160/1 & 40X40/10> | V1 - V2 -V3
```
    ```
:::info

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
:::

#### Tek Bileşen Ürün Alt Grup

---

```
<BilesenUrunAltTipKodu> | <BilesenKonfOlcuKodları> & <Toplam(UrunAgaciMiktar)> AD | <DikişTipi> | <BaskıDesenKodu> / <VaryantNo;VaryantNo;...>

Örn:
KR | 43X43 & 4 AD | STD | AFROWOMAN/1;2;3;4
```

:::info Örnek

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

:::



## Insert Ürün

---

## Kanat Sayısı

---

## Konfeksiyon Ambalaj Tipi

---

## Ambalaj Ürünü

---

## Insert Ürünü

---

## Etiket Ürünü

---




