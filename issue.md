## Error Type
Build Error

## Error Message
Expected '}', got 'ident'

## Build Output
./src/app/[slug]/[[...path]]/page.tsx:261:7
Expected '}', got 'ident'
  259 |
  260 |       const content = <SubRoute slug={slug} context={context} data={subR
> 261 |       outeData} />;
      |       ^^^^^^^^
  262 |       if (template.wrapsOwnLayout) return content;
  263 |
  264 |       const customHeader = template.CustomHeader ? <template.CustomHe...

Parsing ecmascript source code failed

Next.js version: 16.2.6 (Turbopack)
