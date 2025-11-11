const fs = require('fs-extra');
const path = require('path');

// Şirket listesi - buraya yeni şirketler ekleyebilirsiniz
const companies = ['renium', 'aws', 'azure'];

console.log('📦 Dokümantasyon birleştirme işlemi başlatılıyor...\n');

// Önce eski merged klasörlerini temizle
const mergedBaseDir = path.join(__dirname, 'docs', 'merged');
if (fs.existsSync(mergedBaseDir)) {
  fs.removeSync(mergedBaseDir);
  console.log('🧹 Eski merged klasörleri temizlendi');
}

// Her şirket için dokümanları birleştir
companies.forEach(company => {
  console.log(`\n🏢 ${company.toUpperCase()} için dokümanlar hazırlanıyor...`);
  
  const targetDir = path.join(__dirname, 'docs', 'merged', company);
  const commonDir = path.join(__dirname, 'docs', 'common');
  const companySpecificDir = path.join(__dirname, 'docs', 'companies', company);
  
  // Target klasörünü oluştur
  fs.ensureDirSync(targetDir);
  
  // 1. Ortak dokümanları kopyala
  if (fs.existsSync(commonDir)) {
    fs.copySync(commonDir, targetDir);
    console.log(`  ✅ Ortak dokümanlar kopyalandı`);
  } else {
    console.log(`  ⚠️  Ortak doküman klasörü bulunamadı: ${commonDir}`);
  }
  
  // 2. Şirkete özel dokümanları ekle (üzerine yazmadan)
  if (fs.existsSync(companySpecificDir)) {
    // Şirkete özel tüm dosyaları recursive olarak kopyala
    copyRecursive(companySpecificDir, targetDir);
    console.log(`  ✅ ${company} özel dokümanları eklendi`);
  } else {
    console.log(`  ℹ️  ${company} için özel doküman bulunamadı`);
  }
  
  console.log(`  ✨ ${company} dokümanları hazır: /docs/merged/${company}/`);
});

// Public (ortak) dokümanlar için ayrı bir kopya
console.log('\n📚 Public dokümanlar hazırlanıyor...');
const publicDir = path.join(__dirname, 'docs', 'merged', 'public');
const commonDir = path.join(__dirname, 'docs', 'common');

if (fs.existsSync(commonDir)) {
  fs.ensureDirSync(publicDir);
  fs.copySync(commonDir, publicDir);
  console.log('  ✅ Public dokümanlar hazır: /docs/merged/public/');
}

console.log('\n✅ Tüm dokümanlar başarıyla birleştirildi!\n');

// Yardımcı fonksiyon: Recursive copy with merge
function copyRecursive(src, dest) {
  const items = fs.readdirSync(src);
  
  items.forEach(item => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    const stat = fs.statSync(srcPath);
    
    if (stat.isDirectory()) {
      // Klasör varsa içine kopyala, yoksa oluştur
      fs.ensureDirSync(destPath);
      copyRecursive(srcPath, destPath);
    } else {
      // Dosyayı kopyala (mevcut dosyanın üzerine yaz)
      fs.copySync(srcPath, destPath, { overwrite: true });
    }
  });
}