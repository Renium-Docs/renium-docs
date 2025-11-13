---
sidebar_position: 10
---

# Konf. Ürünler

Ürün tipi  Konf. Malzemeler ve Alt tipi Paket ve Banyo Perdesi olmayan ürünler görüntülenir ve tanımlanır.


## Alanlar

### Ürün Tipi

Sadece Konf. Malzeme seçilebilir.

### Ürün Alt Tipi

Konf. Malzeme ürün tipindeki alt tipler seçilebilir. Paket hariç 

### Ürün Kodu - Adı
---

Konf. ürünlerinin paket hariç stok tipinde Kod ve Ad otomatik oluşur.


**Ürün Kodu** şu şekilde oluşturulur:
```
<Ürün Alt Tipi Kodu> | <Kumaş Tipi Kodu> |  <Dokuma Desen Pano Kodu>  | <BASKI DESEN VR> veya <Renk adı>  | <Konf. ÖLÇÜ> | <DİKİŞ TİPİ> | < MARKA>
```

**Ürün Adı** şu şekilde oluşturulur:

```
<Ürün Alt Tipi Adı> | <Kumaş Tipi> |  <Dokuma Desen Pano Adı> | <BASKI DESEN VR> veya <Renk adı>  | <Konf. ÖLÇÜ> | <DİKİŞ TİPİ> | < MARKA>
```


:::danger

Baskı Desen Vr. ve Renk aynı anda dolu olamaz.

Kod ve ad içeriğinde geçen alanlar zorunludur. Bir ürün için o özellik bulunmuyorsa yok seçilir.

:::


### Özellikleri

Ürün tipi  Konf. Malzemeler ve Alt tipi Paket olmayan ürünleri ifade ederler.


#### Marka

:::tip

[Detaylı bilgi için ->](/docs/octo-web/Ürünler/Ana%20Tanımlar/markalar.md)

:::

#### Konf. Ölçü

#### Ölçü Birimi

#### Kumaş Tipi

#### Koleksiyon

#### Baskı Desen Var.

:::tip

[Detaylı bilgi için ->](/docs/octo-web/Ürünler/Ana%20Tanımlar/baski_desen_tanimlari.md)

:::

#### Renk

#### Dikiş Tipi

## İşlemler

### Paketli Ürün Oluştur

- Yeni ürün oluştur
- Ürün ağacı oluşturur

##### Önkoşullar

Bir ürün tanımı üzerinden çalıştırmalıdır.
Paketleme rotası tanımlanmalıdır.

#### Alanlar










