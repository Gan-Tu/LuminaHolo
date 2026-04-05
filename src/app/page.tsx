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
    description: "Open your world to digital space",
    Icon: SpatialIcon,
  },
  {
    title: "All-Day Comfort",
    description: "Lightweight and ready to wear",
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
    alt: "Person wearing Lumina glasses",
  },
  {
    title: "Interact",
    description: "Use natural gestures to control your world.",
    image: "/lumina-card-interact-light.png",
    alt: "Hands interacting with spatial panels",
  },
  {
    title: "Create",
    description: "Turn ideas into immersive spatial experiences.",
    image: "/lumina-card-create-light.png",
    alt: "Living room with holographic visuals",
  },
  {
    title: "Connect",
    description: "Be present, wherever you are.",
    image: "/lumina-card-connect-light.png",
    alt: "Person collaborating through holographic calls",
  },
] as const;

const specStats = [
  { value: "76g", label: "Battery weight" },
  { value: "4K", label: "Per-eye display" },
  { value: "70°", label: "Field of view" },
  { value: "8hrs", label: "Battery life" },
] as const;

const computeFeatures = [
  {
    title: "Real-time Mapping",
    description: "Understands your environment instantly.",
    Icon: MapFeatureIcon,
  },
  {
    title: "AI Assistance",
    description: "Your intelligent spatial companion.",
    Icon: SparkFeatureIcon,
  },
  {
    title: "Seamless Sync",
    description: "Works across your devices from day one.",
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
    description: "Enterprise-grade protection from the ground up.",
    Icon: ShieldPrivacyIcon,
  },
] as const;

const footerColumns = [
  {
    title: "Product",
    links: ["Overview", "Features", "Specs"],
  },
  {
    title: "Platform",
    links: ["Technology", "Developers", "Privacy"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "News"],
  },
] as const;

const socialLinks = ["X", "IG", "YT", "IN"] as const;

export default function Home() {
  return (
    <main className="overflow-x-hidden text-[var(--foreground)]">
      <section
        id="product"
        className="lumina-hero relative isolate overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-90"
        >
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white blur-[110px]" />
          <div className="absolute right-[8%] top-0 h-80 w-80 rounded-full bg-[#dbe7ff] blur-[140px]" />
          <div className="absolute bottom-10 left-[55%] h-48 w-96 rounded-full bg-[#d5e4ff]/65 blur-[130px]" />
        </div>

        <header className="relative z-20">
          <div className="mx-auto flex w-full max-w-[1380px] items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
            <a
              href="#product"
              className="cursor-pointer text-[0.82rem] font-semibold tracking-[0.4em] text-[#11161f]"
            >
              LUMINA
            </a>

            <nav className="hidden items-center gap-8 text-[0.92rem] text-[#5a6473] lg:flex">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#11161f]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3 text-[0.92rem]">
              <a
                href="#developers"
                className="cursor-pointer text-[#5a6473] transition-colors duration-300 hover:text-[#11161f]"
              >
                Sign in
              </a>
              <a
                href="#preorder"
                className="cursor-pointer rounded-full bg-[#4b82ff] px-4 py-2.5 font-medium text-white shadow-[0_14px_36px_rgba(75,130,255,0.22)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Pre-order
              </a>
            </div>
          </div>
        </header>

        <div className="relative z-10 mx-auto w-full max-w-[1380px] px-5 pb-8 pt-8 sm:px-8 lg:px-10 lg:pb-10 lg:pt-10">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(20rem,28rem)_minmax(0,1fr)] lg:gap-8">
            <div className="max-w-[31rem] animate-reveal-up">
              <h1 className="text-[3.45rem] font-semibold leading-[0.94] tracking-[-0.065em] text-[#131821] sm:text-[4.35rem] lg:text-[5.15rem]">
                <span className="block">See the future.</span>
                <span className="block">Right now.</span>
              </h1>

              <p className="mt-6 max-w-[19rem] text-[1.05rem] leading-7 text-[#5d6878] sm:text-[1.14rem]">
                Holographic glasses that bring digital experiences into your
                world.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-[0.96rem]">
                <a
                  href="#preorder"
                  className="cursor-pointer rounded-full bg-[#4b82ff] px-6 py-3.5 font-medium text-white shadow-[0_20px_40px_rgba(75,130,255,0.2)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Pre-order
                </a>
                <a
                  href="#technology"
                  className="group inline-flex cursor-pointer items-center gap-3 text-[#4b5565] transition-colors duration-300 hover:text-[#11161f]"
                >
                  <span>Watch demo</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d1d9e6] bg-white/85 transition-transform duration-300 group-hover:translate-x-0.5">
                    <PlayIcon className="h-3 w-3 fill-current" />
                  </span>
                </a>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative aspect-[2.13] w-full max-w-[64rem] animate-float-product">
                <Image
                  src="/glass-hero.png"
                  alt="Lumina holographic glasses hero render"
                  fill
                  priority
                  sizes="(min-width: 1280px) 66vw, (min-width: 1024px) 60vw, 100vw"
                  className="object-contain object-center drop-shadow-[0_30px_48px_rgba(34,46,74,0.1)]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_56%,rgba(255,255,255,0.96),rgba(255,255,255,0)_22%),radial-gradient(circle_at_88%_16%,rgba(255,255,255,0.86),rgba(255,255,255,0)_18%),linear-gradient(90deg,rgba(255,255,255,0.82)_0%,rgba(255,255,255,0)_16%,rgba(255,255,255,0)_86%,rgba(255,255,255,0.74)_100%)]"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 border-t border-[#e5ebf4]/70 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {heroHighlights.map(({ title, description, Icon }, index) => (
              <article
                key={title}
                className="animate-reveal-up flex items-start gap-3"
                style={{ animationDelay: `${140 + index * 80}ms` }}
              >
                <div className="mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-full border border-[#dce4f1] bg-white/90 text-[#5c84ea] shadow-[0_8px_18px_rgba(78,111,184,0.08)]">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h2 className="text-[0.96rem] font-semibold text-[#151b24]">
                    {title}
                  </h2>
                  <p className="mt-1 text-[0.88rem] leading-6 text-[#677283]">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1380px] px-5 pb-10 pt-8 sm:px-8 lg:px-10">
        <section id="technology" className="rounded-[2rem] bg-white/78 px-3 py-6 sm:px-4 lg:px-0">
          <div className="mx-auto max-w-[48rem] text-center">
            <h2 className="text-balance text-[2.3rem] font-semibold leading-[1.02] tracking-[-0.055em] text-[#181e28] sm:text-[3.15rem]">
              A new way to see, create, and connect.
            </h2>
            <p className="mx-auto mt-4 max-w-[41rem] text-[1rem] leading-8 text-[#667284]">
              Lumina blends advanced holographic optics with intuitive spatial
              computing, unlocking experiences that feel natural, useful, and
              genuinely immersive.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-4">
            {showcaseCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.7rem] border border-[#e5ebf4] bg-white px-3 pb-5 pt-3 text-center shadow-[0_16px_34px_rgba(27,39,71,0.05)]"
              >
                <div className="overflow-hidden rounded-[1.35rem] bg-[#f4f7fb]">
                  <div className="relative aspect-[1.12]">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 44vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="mt-4 text-[1.28rem] font-semibold tracking-[-0.04em] text-[#171c26]">
                  {card.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[14rem] text-[0.93rem] leading-7 text-[#667284]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-8 overflow-hidden rounded-[2rem] border border-[#eaf0f8]/70 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] px-5 py-6 shadow-[0_18px_40px_rgba(24,33,56,0.032)] sm:px-7 sm:py-8 lg:grid-cols-[minmax(17.5rem,0.32fr)_minmax(0,0.68fr)] lg:items-center lg:gap-4 lg:px-10">
          <div className="relative z-10 min-w-0 lg:pr-2">
            <h2 className="max-w-[10ch] text-[2.2rem] font-semibold leading-[1.04] tracking-[-0.055em] text-[#181e28] sm:text-[3rem]">
              Designed for the future.
            </h2>
            <p className="mt-5 max-w-[27rem] text-[1rem] leading-8 text-[#667284]">
              Every detail of Lumina is engineered to disappear, so your
              experiences can take center stage. From waveguide optics to
              ergonomic balance, each element is tuned for long-form wear.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 lg:mt-10 lg:grid-cols-2">
              {specStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[2rem] font-semibold tracking-[-0.06em] text-[#4b82ff]">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-[0.94rem] leading-6 text-[#667284]">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative z-0 overflow-hidden bg-transparent lg:-my-8 lg:-mr-10 lg:w-[calc(100%+2.5rem)]">
            <div className="relative aspect-[1.85] min-h-[15rem]">
              <Image
                src="/glass-annotated-cropped.png"
                alt="Annotated Lumina glasses render with callouts"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-contain object-[50%_50%] scale-[1.015]"
              />
            </div>
          </div>
        </section>

        <section
          id="developers"
          className="mt-8 grid gap-8 overflow-hidden rounded-[2rem] border border-[#eaf0f8]/70 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] px-5 py-6 shadow-[0_18px_40px_rgba(24,33,56,0.032)] sm:px-7 sm:py-8 lg:grid-cols-[minmax(17.5rem,0.32fr)_minmax(0,0.68fr)] lg:items-center lg:gap-4 lg:px-10"
        >
          <div className="relative z-10 min-w-0 lg:pr-2">
            <h2 className="max-w-[12ch] text-[2.2rem] font-semibold leading-[1.04] tracking-[-0.055em] text-[#181e28] sm:text-[3rem]">
              Powered by spatial computing.
            </h2>
            <p className="mt-5 max-w-[27rem] text-[1rem] leading-8 text-[#667284]">
              Our advanced system-on-chip and AI engine work together to
              understand your environment, anchor digital content, and make
              interactions feel effortless.
            </p>

            <div className="mt-8 space-y-5">
              {computeFeatures.map(({ title, description, Icon }) => (
                <article key={title} className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-[0.95rem] border border-[#dce4f1] bg-[#f5f8fd] text-[#5c84ea]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-[1rem] font-semibold text-[#181e28]">
                      {title}
                    </h3>
                    <p className="mt-1 text-[0.94rem] leading-6 text-[#667284]">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="relative z-0 overflow-hidden bg-transparent lg:-my-8 lg:-mr-10 lg:w-[calc(100%+2.5rem)]">
            <div className="relative aspect-[1.9] min-h-[16rem]">
              <Image
                src="/chip.png"
                alt="Lumina spatial computing chip render"
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-contain object-[50%_52%] scale-[1.02]"
              />
            </div>
          </div>
        </section>

        <section
          id="privacy"
          className="mt-8 rounded-[2rem] border border-[#e5ebf4] bg-white px-5 py-6 shadow-[0_18px_40px_rgba(24,33,56,0.045)] sm:px-7 sm:py-8 lg:px-10"
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(18rem,1.2fr)_repeat(3,minmax(0,1fr))] lg:items-start">
            <div className="max-w-[28rem]">
              <h2 className="max-w-[12ch] text-[2.2rem] font-semibold leading-[1.04] tracking-[-0.055em] text-[#181e28] sm:text-[3rem]">
                Built with privacy in mind.
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-[#667284]">
                What you see is yours alone. Lumina&apos;s displays are designed
                so only you can see your holograms, keeping your work, your
                business, and your data private.
              </p>
            </div>

            {privacyCards.map(({ title, description, Icon }) => (
              <article
                key={title}
                className="rounded-[1.55rem] border border-[#e8edf5] bg-[#fbfcfe] px-5 py-6 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#dbe5f3] bg-white text-[#5c84ea] shadow-[0_10px_24px_rgba(92,132,234,0.08)]">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-[1.22rem] font-semibold tracking-[-0.04em] text-[#171c26]">
                  {title}
                </h3>
                <p className="mx-auto mt-2 max-w-[14rem] text-[0.92rem] leading-7 text-[#667284]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="preorder"
          className="relative mt-8 overflow-hidden rounded-[2rem] border border-[#dfe8f5] bg-white shadow-[0_18px_40px_rgba(24,33,56,0.045)]"
        >
          <div className="absolute inset-0">
            <Image
              src="/lumina-earth-light.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-[50%_74%] opacity-[0.94]"
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.86),rgba(255,255,255,0)_34%),linear-gradient(180deg,rgba(255,255,255,0.56)_0%,rgba(255,255,255,0.26)_42%,rgba(226,237,255,0.32)_100%)]" />
          <div className="relative z-10 px-6 py-5 text-center sm:px-8 sm:py-6 lg:px-10 lg:py-4">
            <h2 className="text-balance text-[1.55rem] font-semibold leading-[1.06] tracking-[-0.05em] text-[#181e28] sm:text-[1.9rem]">
              The future is closer than you think.
            </h2>
            <p className="mx-auto mt-1.5 max-w-[30rem] text-[0.72rem] leading-5 text-[#667284] sm:text-[0.8rem]">
              Pre-order Lumina today and be among the first to experience
              spatial computing.
            </p>
            <div className="mt-2.5">
              <a
                href="#product"
                className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#4b82ff] px-4 py-1.5 text-[0.74rem] font-medium text-white shadow-[0_14px_30px_rgba(75,130,255,0.18)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Pre-order
              </a>
            </div>
            <p className="mt-1 text-[0.63rem] text-[#7d8899]">Ships early 2025</p>
          </div>
        </section>

        <footer className="mt-8 rounded-[2rem] border border-[#e5ebf4] bg-white px-5 py-8 shadow-[0_18px_40px_rgba(24,33,56,0.04)] sm:px-7 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(14rem,1.25fr)_minmax(0,1.5fr)_auto]">
            <div>
              <a
                href="#product"
                className="cursor-pointer text-[1.15rem] font-semibold tracking-[0.32em] text-[#141922]"
              >
                LUMINA
              </a>
              <p className="mt-4 max-w-[15rem] text-[0.95rem] leading-7 text-[#667284]">
                Holographic glasses for the next era of computing.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="text-[0.95rem] font-semibold text-[#181e28]">
                    {column.title}
                  </h3>
                  <ul className="mt-4 space-y-3 text-[0.92rem] text-[#667284]">
                    {column.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#product"
                          className="cursor-pointer transition-colors duration-300 hover:text-[#181e28]"
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
              <div className="flex items-center gap-2.5">
                {socialLinks.map((link) => (
                  <a
                    key={link}
                    href="#product"
                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#dce4f1] text-[0.72rem] font-semibold text-[#4f5968] transition-colors duration-300 hover:border-[#bfcde2] hover:text-[#181e28]"
                  >
                    {link}
                  </a>
                ))}
              </div>
              <div className="text-[0.84rem] leading-6 text-[#8893a5] lg:text-right">
                <p>&copy; 2026 Lumina. All rights reserved.</p>
                <p className="mt-1">Privacy Policy | Terms of Service</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
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
