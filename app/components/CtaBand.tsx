import Link from "next/link";

type CtaBandProps = {
  title: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function CtaBand({
  title,
  description,
  primaryHref = "/book",
  primaryLabel = "Book a Consultation",
  secondaryHref,
  secondaryLabel,
}: CtaBandProps) {
  return (
    <section className="bg-blue-900 px-6 py-24 text-center text-white">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">{title}</h2>
        {description ? (
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-100">{description}</p>
        ) : null}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="rounded-full bg-[#2d459c] px-12 py-4 text-lg font-bold text-white transition hover:bg-[#1e2e68]"
          >
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link
              href={secondaryHref}
              className="rounded-full border border-white/20 bg-white/10 px-12 py-4 text-lg font-bold text-white transition hover:bg-white/20"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
