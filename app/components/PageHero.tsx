import Image from "next/image";

type PageHeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description: string;
  imageSrc?: string;
  imageAlt: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  imageSrc = "/home-banner.png",
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20 pb-16 text-white md:pt-18 md:pb-20">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover brightness-[0.55]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#2d459c]/80 via-[#2d459c]/50 to-[#1e2e68]/60" />
      <div className="relative z-20 w-full px-6 md:px-10">
        <div className="mx-auto max-w-5xl text-center">
          {eyebrow ? (
            <p className="mb-5 inline-flex rounded-full border border-blue-200/60 bg-[#2d459c]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-100 shadow-lg backdrop-blur-md md:text-sm">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">{title}</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-100 md:text-2xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
