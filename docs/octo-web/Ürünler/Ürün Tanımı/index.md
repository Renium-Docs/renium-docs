---
sidebar_position: 1
---

# Ürün Tanımı


## İşlemler

### Yeni

### Düzenle

### Sil

### Stok Oluştur

### Ürün Ağacı - Operasyonlu

## Alanlar

### Ürün Kodu*
---
```[A-Z]``` 

Boş bırakılamaz. Benzersiz olmalıdır.

:::info

Tanımlanacak kurallar ile sistem tarafından otomatik oluşturulması sağlanabilir.

:::

### Ürün Adı *
---
```[A-Z]``` 

Boş bırakılabilir. Benzersiz olma kuralı yoktur.

:::info

Tanımlanacak kurallar ile sistem tarafından otomatik oluşturulması sağlanabilir.

:::

### Ürün Tipi
---
```[▼]```


Ürünleri kategorilendiren temel tanımdır. Listeden seçilir. Kullanıcı tarafından özelleştirilebilir ve çoğaltılabilir.

Ürün tanımında pek çok ana tanım, ürün tipine bağlı olarak varsayılan değerlerle gelebilir. Bu sayede tekrarlayan veri girişleri azaltılır ve standardizasyon sağlanır.

:::tip Tekstil Sektörü Örneği
**"İplik"** ürün tipi seçildiğinde:
- Karşılama Yöntemi otomatik olarak **"Satın Alma"** gelir
- Takip Tipi otomatik olarak **"Lot Takipli"** olarak işaretlenir
- Ölçü Birimi varsayılan olarak **"kg"** seçilir

**"Kumaş"** ürün tipi seçildiğinde:
- Karşılama Yöntemi otomatik olarak **"Üretim"** gelir
- Takip Tipi otomatik olarak **"Lot Takipli"** olarak işaretlenir
- Ölçü Birimi varsayılan olarak **"metre"** seçilir

**"Çözgü"** ürün tipi seçildiğinde:
- Karşılama Yöntemi otomatik olarak **"Üretim"** gelir
- Takip Tipi otomatik olarak **"Lot Takipli"** olarak işaretlenir
- Ölçü Birimi varsayılan olarak **"metre"** seçilir
:::


### Ölçü Birimi*
---
Ürünün temel ölçü birimi (adet, kg, m, vb.). Kullanıcı tarafından özelleştirilebilir  ve çoğaltılabilir.

### Takip Tipi*
---
Ürünün stok takip şeklini belirler:

- **Ürün**: Sadece ürün bazında takip edilir, lot/seri numarası kullanılmaz.
- **Lot**: Aynı üretim partisindeki ürünler lot numarası ile gruplandırılır ve takip edilir.
- **Seri**: Her ürün tekil seri numarası ile takip edilir (özellikle değerli/kritik ürünler için).

:::tip Hangi Takip Tipi Seçilmeli?
- **Ürün takibi**: Standart malzemeler, düşük değerli ürünler (vida, civata vb.)
- **Lot takibi**: Hammaddeler, kimyasallar, ilaçlar (aynı üretim partisinin takibi önemli)
- **Seri takibi**: Elektronik cihazlar, makineler, araçlar (her birim tekil ve değerli)
:::

### Karşılama Yöntemi
---
Satın alma, üretim değelerini alabilir.
 

### Muhasebe Kodu
---
- Her muhasebe kodu sistemde **tekil** olmalıdır
- Daha önce kullanılmış bir muhasebe kodu girdiğinizde sistem uyarı verecektir.

### Benzersiz Kod
---

- Sistem aynı özelliklere sahip ürünlerin tekrar oluşturulmasını kontrol edebilir.
- Birleştirilmiş kod (ItemUnifiedCode) bazında kontrol yapılır
- Aynı özelliklerde ürün bulunursa, mevcut ürün bilgileri gösterilir

---

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
