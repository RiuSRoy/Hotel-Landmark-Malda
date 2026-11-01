import Image from "next/image";

// Photo header used at the top of inner pages.
export default function PageHero({ image, alt, eyebrow, title, children, imageClassName = "" }) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-ink">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className={`object-cover -z-10 ${imageClassName}`}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-ink/90 via-brand-ink/70 to-brand-ink/30" />
      <div className="container-site py-20 md:py-28">
        <div className="max-w-2xl text-white">
          {eyebrow && <p className="eyebrow !text-brand-amber">{eyebrow}</p>}
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight !text-white">{title}</h1>
          {children && <div className="mt-5 text-lg text-stone-200 leading-relaxed">{children}</div>}
        </div>
      </div>
    </section>
  );
}
