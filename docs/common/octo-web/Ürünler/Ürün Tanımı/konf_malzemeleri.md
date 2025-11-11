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

Paket stok tipinde Kod ve Ad otomatik oluşur.

Kod ve oluşumda temel olarak Ürün Karşılama Yöntemine göre belirlenir.
- Satın alma ise aşağıdaki kural çalışır.
- Üretim ise ```ÜA ONAYI İLE OLUŞACAK-Ürün no``` oluşur. Ürün ağacı onayı aşağıdaki kurala yeni kod yapısı oluşur.

#### Satın alma

**Ürün Kodu** şu şekilde oluşturulur:
```
<Ürün Alt Tipi Kodu> | <Kumaş Tipi Kodu> | <BASKI DESEN VR> veya <Renk adı>  | <Konf. ÖLÇÜ> | <DİKİŞ TİPİ> | < MARKA>
```

**Ürün Adı** şu şekilde oluşturulur:

```
<Ürün Alt Tipi Adı> | <Kumaş Tipi> | <BASKI DESEN VR> veya <Renk adı>  | <Konf. ÖLÇÜ> | <DİKİŞ TİPİ> | < MARKA>
```


:::danger

Baskı Desen Vr. ve Renk aynı anda dolu olamaz.

Kod ve ad içeriğinde geçen alanlar zorunludur. Bir ürün için o özellik bulunmuyorsa yok seçilir.

:::

### Üretim

Geliştme aşamasındadır.



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

#### İşlemler

- Rota varsayılan paketleme rotası getirilir. Yoksa Paketleme rotası tanımlanır.
- Pa


#### Alanlar










