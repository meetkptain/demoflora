/**
 * SEO Audit Script — Vérifie la cohérence SEO/GEO après build
 * Usage: node scripts/seo-audit.js
 * Run after `npm run build`
 */

const fs = require('fs');
const path = require('path');

const OUT = '.next/server/app';
const BASE = '/Users/nicolasvirin/Desktop/toto/mescodes/demoflora';

const checks = { pass: 0, fail: 0, warn: 0 };

function check(ok, msg, type = 'fail') {
  checks[type] += type === 'pass' ? 1 : 0;
  if (type === 'fail') checks.fail += 1;
  console.log(`${ok ? '✓' : (type === 'warn' ? '⚠' : '✗')} ${msg}`);
  if (!ok && type === 'fail') process.exitCode = 1;
}

// 1. Vérifier que tous les lib/data existent
console.log('\n=== DATA FILES ===');
const requiredDataFiles = [
  'lib/site.ts', 'lib/seo.ts', 'lib/categories.ts',
  'lib/reviews.ts', 'lib/blog-content.ts', 'lib/utils-seo.ts', 'lib/faq.ts'
];
for (const f of requiredDataFiles) {
  check(fs.existsSync(path.join(BASE, f)), `${f} existe`);
}

// 2. Vérifier qu'aucun hardcode URL ne subsiste
console.log('\n=== HARDCODED URLS ===');
const filesToScan = ['app/', 'components/'];
let found = 0;
for (const dir of filesToScan) {
  const fullDir = path.join(BASE, dir);
  if (!fs.existsSync(fullDir)) continue;
  const walk = (d) => {
    fs.readdirSync(d, { withFileTypes: true }).forEach(e => {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith('.tsx') || e.name.endsWith('.ts')) {
        const content = fs.readFileSync(p, 'utf8');
        const urls = content.match(/https:\/\/dr-flora-jullian\.fr/g);
        if (urls) {
          found += urls.length;
          console.log(`  ✗ ${path.relative(BASE, p)}: ${urls.length} occurrences`);
        }
      }
    });
  };
  walk(fullDir);
}
check(found === 0, `Aucune URL hardcodée restante (${found} trouvées)`);

// 3. Vérifier les fichiers JSON-LD dans les pages d'exemple
console.log('\n=== SCHEMA TYPES ===');
const schemaTypes = [
  'app/layout.tsx:Physician',
  'app/layout.tsx:WebSite',
  'app/layout.tsx:SpeakableSpecification',
  'app/interventions/[slug]/page.tsx:MedicalProcedure',
  'app/interventions/[slug]/page.tsx:FAQPage',
  'app/interventions/[slug]/page.tsx:BreadcrumbList',
  'app/interventions/[slug]/page.tsx:MedicalWebPage',
  'app/symptomes/[slug]/page.tsx:MedicalCondition',
  'app/symptomes/[slug]/page.tsx:FAQPage',
  'app/symptomes/[slug]/page.tsx:BreadcrumbList',
  'app/symptomes/[slug]/page.tsx:MedicalWebPage',
  'app/blog/[slug]/page.tsx:BlogPosting',
  'app/blog/[slug]/page.tsx:BreadcrumbList',
  'app/a-propos/page.tsx:AboutPage',
  'app/a-propos/page.tsx:Physician',
  'app/contact/page.tsx:MedicalClinic',
  'app/contact/page.tsx:ContactPoint',
  'app/tarifs/page.tsx:ItemList',
  'app/tarifs/page.tsx:MedicalWebPage',
  'app/parcours/page.tsx:HowTo',
  'app/parcours/page.tsx:MedicalWebPage',
  'app/interventions/page.tsx:CollectionPage',
  'app/interventions/page.tsx:ItemList',
  'app/symptomes/page.tsx:CollectionPage',
  'app/symptomes/page.tsx:ItemList',
  'app/symptomes/page.tsx:BreadcrumbList',
  'app/blog/page.tsx:Blog',
  'app/blog/page.tsx:CollectionPage',
  'components/ReviewCarousel.tsx:Review',
];
for (const entry of schemaTypes) {
  const [file, type] = entry.split(':');
  const fp = path.join(BASE, file);
  const content = fs.readFileSync(fp, 'utf8');
  const count = (content.match(new RegExp(`'@type':\\s*'${type}'`, 'g')) || []).length +
    (content.match(new RegExp(`"@type":\\s*"${type}"`, 'g')) || []).length;
  check(count > 0, `@type: ${type} dans ${file}`);
}

// 4. Vérifier les OG images
console.log('\n=== OG IMAGES ===');
const pngRefs = filesToScan.flatMap(dir => {
  const fullDir = path.join(BASE, dir);
  if (!fs.existsSync(fullDir)) return [];
  const results = [];
  const walk = (d) => {
    fs.readdirSync(d, { withFileTypes: true }).forEach(e => {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith('.tsx')) {
        const content = fs.readFileSync(p, 'utf8');
        if (content.includes('drjullian.png')) results.push(path.relative(BASE, p));
      }
    });
  };
  walk(fullDir);
  return results;
});
check(pngRefs.length === 0, `Aucune référence PNG restante (${pngRefs.length} dans ${pngRefs.join(', ')})`, pngRefs.length > 0 ? 'warn' : 'pass');

// 5. Vérifier les fichiers de builds
console.log('\n=== BUILD OUTPUT ===');
check(fs.existsSync(path.join(OUT, 'html')), 'Build output HTML existe');
check(fs.existsSync(path.join(BASE, 'public/sitemap.xml')), 'Sitemap existe', 'warn'); // Not static in SSG

console.log(`\n=== RÉSULTAT: ${checks.pass} ok, ${checks.fail} échecs, ${checks.warn} warnings ===`);
