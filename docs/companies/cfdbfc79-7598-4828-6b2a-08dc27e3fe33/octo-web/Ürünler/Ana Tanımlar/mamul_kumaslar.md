---
sidebar_position: 950

---
# Mamul Kumaşlar


Ürün tipi  Mamul Kumaş olan ürünleri ifade ederler.


## İşlemler

Aşağıdaki [alanlar](./mamul_kumaslar.md#alanlar) ile standart Yeni, Düzenle, Sil işlemi yapılabilir.


### Banyo Perdesi Oluştur

mamul kumaş üzerinden banyo perdesi oluşturulabilir. Bu işlemde;
- Ürün karşıla şekli üretim kabul edilir.
- Ürün ağacı bilgileri istenir. İşlemle ürün ağacı da oluşturulur.


## Alanlar
---

### Ürün Kodu - Adı

Kod ve oluşumda temel olarak Ürün Karşılama Yöntemine göre belirlenir.
- Satın alma ise aşağıdaki kural çalışır.
- Üretim ise ```ÜA ONAYI İLE OLUŞACAK-Ürün no``` oluşur. Ürün ağacı onayı aşağıdaki kurala yeni kod yapısı oluşur.

#### Satın alma

**Ürün Kodu** şu şekilde oluşturulur:
```
<Kumaş Tipi Kodu>.<Dokuma Desen Panel Kodu*>.<Mamul En>|<Renk Kodu**>.<Baskı Desen Varyant Kodu***>

```

**Ürün Adı** şu şekilde oluşturulur:

```
<Kumaş Tipi Adı>.<Dokuma Desen Panel Adı(1)>.<Mamul En>|<Renk Adı(2)>.<Baskı Desen Varyant Adı(3)>

```

:::warning Uyarı

- (1) Panel tanımında **Tanımda geçmesin** işaretli kayıtlar İsimde yer almaz. Sadece Dokuma Deseni yer alır.
- (2) Renk tanımında **Tanımda geçmesin** işaretli kayıtlar İsimde yer almaz.
- (3) Baskı Desen Varyant tanımında **Tanımda geçmesin** işaretli kayıtlar İsimde yer almaz.
:::
