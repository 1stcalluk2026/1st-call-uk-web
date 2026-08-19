import Link from "next/link";

type CtaBandProps = {
  title: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export default function CtaBand({
  title,
  description,
  primaryHref = "/book",
  primaryLabel = "Book a consultation",
}: CtaBandProps) {
  return (
    <section className="bg-blue-900 px-6 py-16 text-center text-white md:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className={`text-3xl font-bold md:text-4xl ${description ? "mb-6" : "mb-8"}`}>{title}</h2>
        {description ? (
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-100">{description}</p>
        ) : null}
        <Link
          href={primaryHref}
          className="inline-block rounded-full bg-[#f5c23c] px-10 py-4 text-lg font-bold text-[#1e2e68] transition hover:bg-[#e0b02e]"
        >
          {primaryLabel}
        </Link>
      </div>
    </section>
  );
}
