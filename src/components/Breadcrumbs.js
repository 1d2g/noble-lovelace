import Link from 'next/link';

export default function Breadcrumbs({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://dg.tools${item.path}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem' }}>
        <ol style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', listStyle: 'none', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          {items.map((item, index) => (
            <li key={item.path} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {index > 0 && <span>/</span>}
              {index === items.length - 1 ? (
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{item.name}</span>
              ) : (
                <Link href={item.path} style={{ color: 'var(--text-secondary)' }}>
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
