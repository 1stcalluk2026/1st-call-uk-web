import FadeIn from "../components/FadeIn";
import PageHero from "../components/PageHero";

type LegalPageProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export default function LegalPage({ title, subtitle, children }: LegalPageProps) {
  return (
    <FadeIn>
      <div className="min-h-screen bg-white text-gray-900">
        <PageHero
          eyebrow="Legal"
          title={title}
          description={subtitle}
          imageSrc="/heroes/hero-legal.png"
          imageAlt={title}
        />
        <div className="mx-auto max-w-4xl px-6 py-20 text-gray-700 md:px-10">{children}</div>
      </div>
    </FadeIn>
  );
}
