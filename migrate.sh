#!/bin/bash

# Renium Docs Klasör Yapısı Migration Script
# Bu script mevcut dokümanlarınızı yeni yapıya taşır

echo "🚀 Renium Docs Migration Başlıyor..."
echo ""

# Yedek al
echo "📦 Yedek alınıyor..."
if [ -d "docs" ]; then
    cp -r docs docs-backup-$(date +%Y%m%d-%H%M%S)
    echo "✅ Yedek alındı: docs-backup-$(date +%Y%m%d-%H%M%S)"
else
    echo "❌ docs klasörü bulunamadı!"
    exit 1
fi

# Common klasörünü oluştur
echo ""
echo "📁 Common klasörü oluşturuluyor..."
mkdir -p docs/common

# Mevcut dokümanları common'a taşı
echo ""
echo "📦 Mevcut dokümanlar common'a taşınıyor..."

# octo-desktop varsa taşı
if [ -d "docs/octo-desktop" ]; then
    mv docs/octo-desktop docs/common/
    echo "  ✅ octo-desktop → common/"
fi

# octo-web varsa taşı
if [ -d "docs/octo-web" ]; then
    mv docs/octo-web docs/common/
    echo "  ✅ octo-web → common/"
fi

# intro.md varsa taşı
if [ -f "docs/intro.md" ]; then
    mv docs/intro.md docs/common/
    echo "  ✅ intro.md → common/"
fi

# Diğer .md dosyalarını da taşı
for file in docs/*.md; do
    if [ -f "$file" ]; then
        mv "$file" docs/common/
        echo "  ✅ $(basename $file) → common/"
    fi
done

# Companies klasörünü oluştur
echo ""
echo "🏢 Companies klasörü oluşturuluyor..."
mkdir -p docs/companies/renium/renium-special
mkdir -p docs/companies/aws/aws-special
mkdir -p docs/companies/azure/azure-special

echo "  ✅ docs/companies/renium/renium-special/"
echo "  ✅ docs/companies/aws/aws-special/"
echo "  ✅ docs/companies/azure/azure-special/"

# Örnek dosyalar oluştur
echo ""
echo "📝 Örnek şirket dokümanları oluşturuluyor..."

# renium örnek
cat > docs/companies/renium/renium-special/intro.md << 'EOF'
---
title: renium Özel Özellikler
sidebar_position: 1
---

# renium İçin Özel Özellikler

Bu bölüm sadece renium şirketi için özel özellikleri içerir.

## Özellikler

- Özel Dashboard
- API Entegrasyonu
- Gelişmiş Raporlama

Daha fazla doküman eklemek için bu klasöre yeni .md dosyaları ekleyebilirsiniz.
EOF

echo "  ✅ renium örnek doküman oluşturuldu"

# aws örnek
cat > docs/companies/aws/aws-special/intro.md << 'EOF'
---
title: aws Özel Özellikler
sidebar_position: 1
---

# aws İçin Özel Özellikler

Bu bölüm sadece aws şirketi için özel özellikleri içerir.
EOF

echo "  ✅ aws örnek doküman oluşturuldu"

# azure örnek
cat > docs/companies/azure/azure-special/intro.md << 'EOF'
---
title: azure Özel Özellikler
sidebar_position: 1
---

# azure İçin Özel Özellikler

Bu bölüm sadece azure şirketi için özel özellikleri içerir.
EOF

echo "  ✅ azure örnek doküman oluşturuldu"

# clients klasörünü kontrol et
echo ""
if [ -d "docs/clients" ]; then
    echo "⚠️  UYARI: docs/clients klasörü bulundu."
    echo "   Bu klasörü manuel olarak incelemeniz gerekebilir."
    echo "   Eğer bu klasör şirkete özel dokümanlar içeriyorsa,"
    echo "   docs/companies/ altına taşıyabilirsiniz."
fi

echo ""
echo "✅ Migration tamamlandı!"
echo ""
echo "📋 Sonraki adımlar:"
echo "   1. Yeni dosyaları repo'nuza ekleyin (merge-docs.js, docusaurus.config.js, vb.)"
echo "   2. package.json'ı güncelleyin"
echo "   3. npm install çalıştırın"
echo "   4. npm run merge && npm start ile test edin"
echo ""
echo "📁 Yeni yapı:"
echo "   docs/"
echo "   ├── common/           # Ortak dokümanlar (eski docs/ içeriği)"
echo "   ├── companies/        # Şirket özel dokümanlar"
echo "   │   ├── renium/"
echo "   │   ├── aws/"
echo "   │   └── azure/"
echo "   └── merged/           # Otomatik oluşturulacak (git'e ekleme!)"
echo ""