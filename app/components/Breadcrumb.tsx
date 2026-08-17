import Link from "next/link";

type Crumb = {
  href?: string;
  label: string;
};

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-gray-100 bg-white px-6 py-4 md:px-10">
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 text-sm text-gray-600">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <span className="text-gray-400">/</span> : null}
              {item.href && !isLast ? (
                <Link href={item.href} className="transition hover:text-[#2d459c]">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "font-semibold text-[#2d459c]" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
