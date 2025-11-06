---
sidebar_position: 940

---
# Ham Kumaşlar


Ürün tipi  Ham Kumaş olan ürünleri ifade ederler.


## İşlemler

Aşağıdaki [alanlar](./kumaslar.md#alanlar) ile standart Yeni, Düzenle, Sil işlemi yapılabilir.

### Mamul Kumaş Oluştur

Ham kumaş üzerinden mamul kumaş oluşturulabilir. Bu işlemde;
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
<Kumaş Tipi Kodu>.<Dokuma Desen Panel Kodu>.<En>.<Atkı Sıklığı>

```

**Ürün Adı** şu şekilde oluşturulur:

```
<Kumaş Tipi Adı> | <Dokuma Desen Panel Kodu(1)>

```

:::warning Uyarı

- (1)Panel tanımında İsim **"Tanımda geçmesin"** işaretli kayıtlar İsimde yer almaz. Sadece Dokuma Deseni yer alır.

:::



