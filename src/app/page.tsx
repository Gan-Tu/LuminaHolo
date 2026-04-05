import Image from "next/image";

const navigation = [
  { label: "Product", href: "#product" },
  { label: "Technology", href: "#technology" },
  { label: "Developers", href: "#developers" },
  { label: "Shop", href: "#preorder" },
] as const;

const heroHighlights = [
  {
    title: "Holographic Display",
    description: "True-to-life 3D visuals",
    Icon: DisplayIcon,
  },
  {
    title: "Spatial Computing",
    description: "Digital content in physical space",
    Icon: SpatialIcon,
  },
  {
    title: "All-Day Comfort",
    description: "Lightweight, ergonomically designed",
    Icon: ComfortIcon,
  },
  {
    title: "Privacy First",
    description: "Only you can see your content",
    Icon: PrivacyIcon,
  },
] as const;

const showcaseCards = [
  {
    title: "Visualize",
    description: "See 3D holograms in stunning detail.",
    image: "/lumina-card-visualize-light-2.png",
    alt: "Woman wearing Lumina glasses",
  },
  {
    title: "Interact",
    description: "Use natural gestures to control your world.",
    image: "/lumina-card-interact-light.png",
    alt: "Hands controlling floating holographic panels",
  },
  {
    title: "Create",
    description: "Turn ideas into immersive spatial experiences.",
    image: "/lumina-card-create-light.png",
    alt: "Immersive spatial scene in a living room",
  },
  {
    title: "Connect",
    description: "Be present, wherever you are.",
    image: "/lumina-card-connect-light.png",
    alt: "Person collaborating through holographic video windows",
  },
] as const;

const specStats = [
  { value: "76g", label: "Lightweight" },
  { value: "4K", label: "Per Eye" },
  { value: "70°", label: "Field of View" },
  { value: "8hrs", label: "Battery Life" },
] as const;

const designCallouts = [
  {
    title: "Holographic Waveguide Optics",
    description: "Crisp, vibrant, and immersive.",
    className: "left-[12%] top-[5%] text-left",
  },
  {
    title: "Ergonomic Fit",
    description: "Built for all-day comfort.",
    className: "right-[7%] top-[8%] text-right",
  },
  {
    title: "Spatial Sensors",
    description: "Understand your world in real time.",
    className: "left-[24%] bottom-[8%] text-left",
  },
  {
    title: "Privacy Shutters",
    description: "Instantly shield your view when needed.",
    className: "right-[6%] bottom-[10%] text-right",
  },
] as const;

const computeFeatures = [
  {
    title: "Real-time Mapping",
    description: "Understands your space instantly.",
    Icon: MapFeatureIcon,
  },
  {
    title: "AI Assistance",
    description: "Your intelligent spatial companion.",
    Icon: SparkFeatureIcon,
  },
  {
    title: "Seamless Sync",
    description: "Works across your devices.",
    Icon: SyncFeatureIcon,
  },
] as const;

const privacyCards = [
  {
    title: "Personal Viewing",
    description: "Holograms visible only to you.",
    Icon: ViewPrivacyIcon,
  },
  {
    title: "On-Device Processing",
    description: "Your data stays on your glasses.",
    Icon: ChipPrivacyIcon,
  },
  {
    title: "Secure by Design",
    description: "Enterprise-grade security from the ground up.",
    Icon: ShieldPrivacyIcon,
  },
] as const;

const footerColumns = [
  {
    title: "Product",
    links: ["Overview", "Specs", "Compare"],
  },
  {
    title: "Technology",
    links: ["Holographic Display", "Spatial Computing", "Privacy"],
  },
  {
    title: "Developers",
    links: ["SDK", "Docs", "Community"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Newsroom"],
  },
] as const;

const socialLinks = ["X", "YT", "IG", "IN"] as const;

export default function Home() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section
        id="product"
        className="lumina-hero relative isolate overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-95"
        >
          <div className="absolute -left-24 top-0 h-[28rem] w-[28rem] rounded-full bg-[#ffffff] blur-[120px]" />
          <div className="absolute right-[10%] top-[3%] h-[24rem] w-[24rem] rounded-full bg-[#ffffff] blur-[150px]" />
          <div className="absolute bottom-[6%] right-[18%] h-[16rem] w-[34rem] rounded-full bg-[#d7e4ff]/70 blur-[140px]" />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 left-[29%] hidden overflow-hidden lg:block"
        >
          <div className="relative h-full w-full animate-float-product">
            <Image
              src="/lumina-hero-light-4.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1280px) 70vw, (min-width: 1024px) 68vw, 100vw"
              className="object-cover object-[56%_50%]"
            />
            <div className="absolute inset-y-0 left-0 w-[28%] bg-[linear-gradient(90deg,#fcfcfd_0%,rgba(252,252,253,0.96)_54%,rgba(252,252,253,0)_100%)]" />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] bg-[linear-gradient(180deg,rgba(243,244,248,0)_0%,rgba(243,244,248,0.45)_50%,rgba(243,244,248,0.96)_100%)]"
        />

        <header className="absolute inset-x-0 top-0 z-30">
          <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-6 md:px-10 md:py-8">
            <a
              href="#product"
              className="cursor-pointer text-[0.95rem] tracking-[0.42em] text-[#14161b] transition-opacity duration-300 hover:opacity-75"
            >
              LUMINA
            </a>

            <nav className="hidden items-center gap-9 text-[0.95rem] text-black/72 lg:flex">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="cursor-pointer transition-colors duration-300 hover:text-black"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3 text-sm md:gap-5">
              <a
                href="#developers"
                className="cursor-pointer text-black/68 transition-colors duration-300 hover:text-black"
              >
                Sign in
              </a>
              <a
                href="#preorder"
                className="cursor-pointer rounded-full bg-[#4d87ff] px-5 py-3 font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Pre-order
              </a>
            </div>
          </div>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[43rem] w-full max-w-[1480px] flex-col justify-between px-6 pb-6 pt-[5.25rem] md:px-10 md:pt-24 lg:min-h-[35rem] lg:pb-5 xl:min-h-[36.5rem]">
          <div className="grid items-center gap-9 lg:grid-cols-[minmax(24rem,31rem)_minmax(0,1fr)] lg:gap-4 xl:grid-cols-[minmax(27rem,32.5rem)_minmax(0,1fr)]">
            <div className="max-w-[33rem] animate-reveal-up">
              <h1 className="text-[3.15rem] font-medium leading-[0.94] tracking-[-0.058em] text-[#14161c] sm:text-[4rem] lg:text-[4.5rem] xl:text-[4.9rem]">
                <span className="block">See the future.</span>
                <span className="block">Right now.</span>
              </h1>
              <p className="mt-8 max-w-[21rem] text-lg leading-8 text-black/68 sm:text-[1.28rem]">
                Holographic glasses that bring digital experiences into your
                world.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4 text-[0.98rem] sm:gap-6">
                <a
                  href="#preorder"
                  className="cursor-pointer rounded-[1.15rem] bg-[#4d87ff] px-8 py-4 font-medium text-white shadow-[0_18px_50px_rgba(77,135,255,0.22)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Pre-order
                </a>
                <a
                  href="#technology"
                  className="group inline-flex cursor-pointer items-center gap-3 text-black/78 transition-colors duration-300 hover:text-black"
                >
                  <span>Watch demo</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/18 text-[0.65rem] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:border-black/38">
                    <PlayIcon className="h-2.5 w-2.5 fill-current" />
                  </span>
                </a>
              </div>
            </div>

            <div className="relative flex min-h-[15rem] items-end justify-center lg:min-h-[26rem]">
              <div className="relative aspect-[1.52] w-full max-w-[44rem] animate-float-product lg:hidden">
                <Image
                  src="/lumina-hero-light-4.png"
                  alt="Lumina holographic glasses"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-[64%_52%]"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-5 pt-2 md:grid-cols-2 lg:mt-0 lg:grid-cols-4 lg:pt-5">
            {heroHighlights.map(({ title, description, Icon }, index) => (
              <article
                key={title}
                className="animate-reveal-up flex items-start gap-4 text-black/82"
                style={{ animationDelay: `${220 + index * 90}ms` }}
              >
                <div className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full border border-black/8 bg-white/80 text-[#4d87ff]">
                  <Icon className="h-[1.125rem] w-[1.125rem]" />
                </div>
                <div>
                  <h2 className="text-[1rem] leading-6 text-[#17181d]">
                    {title}
                  </h2>
                  <p className="mt-1 text-[0.94rem] leading-6 text-black/48">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-2 pb-2 sm:px-3">
        <div className="space-y-3">
          <section
            id="technology"
            className="overflow-hidden rounded-[2.4rem] border border-black/6 bg-white px-4 py-8 shadow-[0_16px_40px_rgba(15,23,42,0.045)] sm:px-8 sm:py-10 lg:px-12 lg:py-11"
          >
            <div className="mx-auto max-w-[52rem] text-center">
              <h2 className="text-balance text-[2.35rem] font-medium leading-[1.04] tracking-[-0.055em] text-[#181a20] sm:text-[3rem] lg:text-[3.45rem]">
                A new way to see, create, and connect.
              </h2>
              <p className="mx-auto mt-4 max-w-[42rem] text-[1rem] leading-8 text-black/56 sm:text-[1.05rem]">
                Lumina blends advanced holographic optics with intuitive spatial
                computing, unlocking experiences that feel natural, useful, and
                magical.
              </p>
            </div>

            <div className="mt-9 grid gap-5 lg:grid-cols-4">
              {showcaseCards.map((card) => (
                <article key={card.title} className="text-center">
                  <div className="overflow-hidden rounded-[1.55rem] border border-black/8 bg-[#f6f7fb]">
                    <div className="relative aspect-[1.08]">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="mt-4 text-[1.2rem] font-medium tracking-[-0.04em] text-[#181a20] sm:text-[1.32rem]">
                    {card.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-[15rem] text-[0.93rem] leading-7 text-black/50">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="overflow-hidden rounded-[2.4rem] border border-black/6 bg-white px-4 py-8 shadow-[0_16px_40px_rgba(15,23,42,0.045)] sm:px-8 sm:py-10 lg:px-12 lg:py-11">
            <div className="grid gap-10 lg:grid-cols-[minmax(18rem,0.36fr)_minmax(0,0.64fr)] lg:items-center">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h2 className="max-w-[10ch] text-[2.2rem] font-medium leading-[1.05] tracking-[-0.05em] text-[#181a20] sm:text-[3rem]">
                    Designed for the future.
                  </h2>
                  <p className="mt-6 max-w-[24rem] text-[1rem] leading-8 text-black/58">
                    Every detail of Lumina is engineered to disappear, so your
                    experiences can take center stage. From ultracrisp optics to
                    all-day comfort, we&apos;ve redefined what wearable computing
                    can be.
                  </p>
                </div>

                <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:mt-14 lg:grid-cols-3">
                  {specStats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="text-[2rem] font-medium tracking-[-0.05em] text-[#4d87ff]">
                        {stat.value}
                      </dt>
                      <dd className="mt-1 text-[0.95rem] leading-6 text-black/50">
                        {stat.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="relative">
                <div className="relative aspect-[1.38] overflow-hidden rounded-[2rem] bg-[#f7f8fc]">
                  <Image
                    src="/lumina-detail-light-2.png"
                    alt="Lumina glasses detail render"
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover object-center"
                  />
                  {designCallouts.map((callout) => (
                    <div
                      key={callout.title}
                      className={`absolute hidden max-w-[12rem] lg:block ${callout.className}`}
                    >
                      <p className="text-[0.88rem] font-medium text-[#181a20]">
                        {callout.title}
                      </p>
                      <p className="mt-1 text-[0.82rem] leading-6 text-black/48">
                        {callout.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            id="developers"
            className="overflow-hidden rounded-[2.4rem] border border-black/6 bg-white px-4 py-8 shadow-[0_16px_40px_rgba(15,23,42,0.045)] sm:px-8 sm:py-10 lg:px-12 lg:py-11"
          >
            <div className="grid gap-10 lg:grid-cols-[minmax(18rem,0.4fr)_minmax(0,0.6fr)] lg:items-center">
              <div>
                <h2 className="max-w-[12ch] text-[2.2rem] font-medium leading-[1.05] tracking-[-0.05em] text-[#181a20] sm:text-[3rem]">
                  Powered by spatial computing.
                </h2>
                <p className="mt-6 max-w-[28rem] text-[1rem] leading-8 text-black/58">
                  Our advanced system-on-chip and AI engine work together to
                  understand your environment, anchor digital content, and make
                  interactions feel effortless.
                </p>

                <div className="mt-10 space-y-5">
                  {computeFeatures.map(({ title, description, Icon }) => (
                    <article key={title} className="flex items-start gap-4">
                      <div className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-[0.95rem] border border-black/8 bg-[#f7f8fc] text-[#4d87ff]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-[1rem] font-medium text-[#181a20]">
                          {title}
                        </h3>
                        <p className="mt-1 text-[0.94rem] leading-6 text-black/48">
                          {description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2rem] border border-black/6 bg-[#f7f8fc]">
                <div className="relative aspect-[1.56]">
                  <Image
                    src="/lumina-chip-light.png"
                    alt="Lumina chip render"
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          <section
            id="privacy"
            className="overflow-hidden rounded-[2.4rem] border border-black/6 bg-[#f7f8fc] px-4 py-8 shadow-[0_16px_40px_rgba(15,23,42,0.045)] sm:px-8 sm:py-10 lg:px-12 lg:py-10"
          >
            <div className="grid gap-5 lg:grid-cols-[minmax(18rem,1.2fr)_repeat(3,minmax(0,1fr))]">
              <div className="rounded-[1.8rem] bg-white px-6 py-7 lg:bg-transparent lg:px-0 lg:py-0">
                <h2 className="max-w-[12ch] text-[2.15rem] font-medium leading-[1.08] tracking-[-0.05em] text-[#181a20] sm:text-[3rem]">
                  Built with privacy in mind.
                </h2>
                <p className="mt-5 max-w-[24rem] text-[1rem] leading-8 text-black/56">
                  What you see is yours alone. Lumina&apos;s displays are designed
                  so only you can see your holograms, keeping your world, your
                  business, and your data private.
                </p>
              </div>

              {privacyCards.map(({ title, description, Icon }) => (
                <article
                  key={title}
                  className="rounded-[1.8rem] border border-black/6 bg-white px-6 py-8 text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#4d87ff]/18 bg-[#edf3ff] text-[#4d87ff]">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 text-[1.4rem] font-medium tracking-[-0.03em] text-[#181a20]">
                    {title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-[13rem] text-[0.95rem] leading-7 text-black/48">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="preorder"
            className="overflow-hidden rounded-[2.4rem] border border-black/6 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.045)]"
          >
            <div className="relative px-4 py-12 sm:px-8 lg:px-12 lg:py-16">
              <div className="absolute inset-0">
                <Image
                  src="/lumina-earth-light.png"
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover object-[50%_58%]"
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.56)_0%,rgba(255,255,255,0.28)_48%,rgba(235,244,255,0.6)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(196,224,255,0.36),transparent_52%)]" />
              <div className="relative z-10 text-center">
                <h2 className="text-balance text-[2.4rem] font-medium leading-[1.05] tracking-[-0.05em] text-[#181a20] sm:text-[3.3rem]">
                  The future is closer than you think.
                </h2>
                <p className="mx-auto mt-4 max-w-[34rem] text-[1rem] leading-8 text-black/60">
                  Pre-order Lumina today and be among the first to experience
                  spatial computing.
                </p>
                <div className="mt-8">
                  <a
                    href="#product"
                    className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#4d87ff] px-8 py-4 font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Pre-order
                  </a>
                </div>
                <p className="mt-4 text-sm text-black/46">Ships early 2025</p>
              </div>
            </div>
          </section>

          <footer className="px-3 pb-8 pt-4 sm:px-4">
            <div className="grid gap-10 rounded-[2rem] border border-black/6 bg-white px-5 py-8 sm:px-7 lg:grid-cols-[minmax(14rem,1.2fr)_minmax(0,1.6fr)_auto] lg:items-start lg:px-10">
              <div>
                <a
                  href="#product"
                  className="cursor-pointer text-[1.55rem] tracking-[0.22em] text-[#17181d]"
                >
                  LUMINA
                </a>
                <p className="mt-4 text-[0.98rem] leading-7 text-black/54">
                  See the future. Right now.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {footerColumns.map((column) => (
                  <div key={column.title}>
                    <h3 className="text-[0.95rem] font-medium text-[#181a20]">
                      {column.title}
                    </h3>
                    <ul className="mt-4 space-y-3 text-[0.92rem] text-black/48">
                      {column.links.map((link) => (
                        <li key={link}>
                          <a
                            href="#product"
                            className="cursor-pointer transition-colors duration-300 hover:text-black/78"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-6 lg:items-end">
                <div className="flex items-center gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link}
                      href="#product"
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-black/8 text-[0.72rem] font-medium text-black/74 transition-colors duration-300 hover:border-black/18 hover:text-black"
                    >
                      {link}
                    </a>
                  ))}
                </div>
                <div className="text-[0.85rem] leading-6 text-black/42 lg:text-right">
                  <p>&copy; 2024 Lumina. All rights reserved.</p>
                  <p className="mt-2">Privacy Policy | Terms of Service</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}

function DisplayIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.75 9.25 9 5m6 14 4.25-4.25M15 5l4.25 4.25M9 19l-4.25-4.25" />
      <path d="M8 8h8v8H8z" />
    </svg>
  );
}

function SpatialIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3.5c3.8 0 7 2.5 7 5.5s-3.2 5.5-7 5.5-7-2.5-7-5.5 3.2-5.5 7-5.5Z" />
      <path d="M9.5 9A2.5 2.5 0 1 1 12 11.5" />
      <path d="M12 14.5V20.5" />
      <path d="M8 18.5h8" />
    </svg>
  );
}

function ComfortIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 4.5c2.4 3.2 5 5.7 5 9.1a5 5 0 0 1-10 0c0-3.4 2.6-5.9 5-9.1Z" />
      <path d="M6 20.5c1.3-1.5 3.2-2.5 6-2.5s4.7 1 6 2.5" />
    </svg>
  );
}

function PrivacyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className={className}
      aria-hidden="true"
    >
      <rect x="4.5" y="6" width="15" height="12" rx="2.25" />
      <path d="M8 10.5 10.5 13l5.5-5.5" />
    </svg>
  );
}

function MapFeatureIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.5 6.5 9 4l6 2.5 4.5-2v13L15 20l-6-2.5-4.5 2z" />
      <path d="M9 4v13.5M15 6.5V20" />
    </svg>
  );
}

function SparkFeatureIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3.5 9.5 9 4 11.5 9.5 14 12 19.5 14.5 14 20 11.5 14.5 9z" />
    </svg>
  );
}

function SyncFeatureIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className={className}
      aria-hidden="true"
    >
      <path d="M7.5 8.5A5 5 0 0 1 16 6l1.5 1.5" />
      <path d="M16.5 15.5A5 5 0 0 1 8 18l-1.5-1.5" />
      <path d="M17.5 5.5v4h-4M6.5 18.5v-4h4" />
    </svg>
  );
}

function ViewPrivacyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className={className}
      aria-hidden="true"
    >
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ChipPrivacyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className={className}
      aria-hidden="true"
    >
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9 2.5v3M15 2.5v3M9 18.5v3M15 18.5v3M18.5 9h3M18.5 15h3M2.5 9h3M2.5 15h3" />
    </svg>
  );
}

function ShieldPrivacyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3.5 19 6v5.5c0 4.1-2.8 7.8-7 9-4.2-1.2-7-4.9-7-9V6z" />
      <path d="m9.5 12 1.7 1.7 3.3-3.7" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} aria-hidden="true">
      <path d="M3.25 2.2v7.6L9.1 6 3.25 2.2Z" />
    </svg>
  );
}
