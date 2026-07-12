import { Button } from "@/components/ui/button";
import img1 from "../../../assets/landing1.jpg";
import hero from "../../../assets/hero-video.mp4";
import { useTranslation } from "react-i18next";

export function HeroVideo() {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={img1}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={hero} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          {t("hero.mission")}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
          {t("hero.cta")}
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="rounded-full px-8">
            {t("hero.donate")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-white bg-transparent px-8 text-white hover:bg-white hover:text-black"
          >
            {t("hero.detail")}
          </Button>
        </div>
      </div>
    </section>
  );
}
