const useReveal = (delay = 0) => {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setShown(true), delay);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    io.observe(ref.current);
    return () => io.disconnect();
  }, [delay]);

  return [ref, shown];
};

const Reveal = ({
  children,
  delay = 0,
  y = 18,
  as: As = "div",
  style,
  className = "",
}) => {
  const [ref, shown] = useReveal(delay);

  return (
    <As
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : `translateY(${y}px)`,
        transition:
          "opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1)",
        ...(style || {}),
      }}
    >
      {children}
    </As>
  );
};

const HeroSection = () => {
  return (
    <div className="w-full py-15 bg-(--card) rounded border border-(--line)">
      <div className="shell">
        <div className="flex flex-col md:flex-row gap-10 md:gap-8 lg:gap-12 items-center">
          <div className="w-full md:w-[35%] flex justify-center items-center">
            <div className="w-full flex flex-row items-center justify-center">
              <img src="/assets/images/prod_1.png" className="max-w-[300px]" />
            </div>
          </div>
          <div className="w-full md:w-[65%]">
            <div className="p-5 w-full md:w-[80%] ml-auto mr-auto md:mr-0">
              <Reveal delay={120 * 1}>
                <h1
                  style={{
                    fontSize: "clamp(2rem, 4.5vw, 4.5rem)",
                    lineHeight: window.screen.width < 767 ? 1.3 : 1.02,
                    letterSpacing: "-0.03em",
                    margin: 0,
                    textWrap: "balance",
                  }}
                >
                  Online Water Quality Analyzer
                </h1>
              </Reveal>
              <Reveal delay={120 * 2}>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-end md:mt-[28px] mt-[15px]">
                  <p
                    style={{
                      fontSize: "clamp(1rem, 1.4vw, 1.1475rem)",
                      lineHeight: 1.55,
                      color: "var(--mute)",
                      margin: 0,
                      maxWidth: 620,
                      textWrap: "pretty",
                    }}
                  >
                    Monitor BOD, COD, TSS and other critical water quality
                    parameters with high accuracy for industrial and
                    environmental applications.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={120 * 3}>
                <FeaturesSlides />
              </Reveal>
              <div
                className="flex flex-col sm:flex-row sm:flex-wrap"
                style={{ gap: 12, marginTop: 24 }}
              >
                <button
                  onClick={() => (window.location.href = "/product/")}
                  className="button button-dark cursor-pointer"
                >
                  View Detail →
                </button>
                <button
                  onClick={() => (window.location.href = "")}
                  className="button button-light cursor-pointer"
                >
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const AppListing = () => {
  const data = [
    {
      text: "Continuous pH measurement for reliable water quality monitoring.",
      parameter: ["pH Analog"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/img003.png",
      datasheet: "/water-analyzer.pdf",
    },
    {
      text: "Accurate ORP monitoring for effective oxidation-reduction process control.",
      parameter: ["ORP Analog"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/img003.png",
      datasheet: "/water-analyzer.pdf",
    },
    {
      text: "Continuous electrical conductivity monitoring for water quality analysis.",
      parameter: ["EC Analog"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/img003.png",
      datasheet: "/water-analyzer.pdf",
    },
    {
      text: "High-precision digital pH monitoring for industrial water applications.",
      parameter: ["pH Digital"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/imgpH.png",
      datasheet: "/water-analyzer.pdf",
    },
    {
      text: "Real-time digital conductivity measurement for precise process monitoring.",
      parameter: ["EC Digital"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/imgpH.png",
      datasheet: "/water-analyzer.pdf",
    },
    {
      text: "Optical dissolved oxygen monitoring for accurate and maintenance-free measurement.",
      parameter: ["Optical Dissolved Oxygen (ODO)"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/img009.png",
      datasheet: "/water-analyzer.pdf",
    },
    {
      text: "Reliable residual chlorine monitoring for safe water disinfection control.",
      parameter: ["Residual Chlorine Sensor (RCL)"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/imgpH.png",
      datasheet: "/water-analyzer.pdf",
    },
    {
      text: "Continuous UV COD measurement for efficient organic pollution monitoring.",
      parameter: ["UV COD"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/imgpH.png",
      datasheet: "/water-analyzer.pdf",
    },
    {
      text: "Accurate suspended solids monitoring for wastewater and sludge management.",
      parameter: ["Suspended Solids/Sludge (SS)"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/img014.png",
      datasheet: "/water-analyzer.pdf",
    },
    {
      text: "Real-time chlorophyll monitoring for aquatic ecosystem and algae analysis.",
      parameter: ["Chlorophyll (CPHL)"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/img016.png",
      datasheet: "/water-analyzer.pdf",
    },
    {
      text: "Continuous turbidity monitoring for accurate water clarity assessment.",
      parameter: ["Turbidity"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/img014.png",
      datasheet: "/water-analyzer.pdf",
    },
    {
      text: "Monitor blue-green algae levels for improved water quality management.",
      parameter: ["Blue Green Algae (BGA)"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/img016.png",
      datasheet: "/water-analyzer.pdf",
    },
    {
      text: "Continuous oil-in-water monitoring for environmental compliance and protection.",
      parameter: ["Oil in Water (OIW)"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/img018.png",
      datasheet: "/water-analyzer.pdf",
    },
    {
      text: "Accurate ammonia nitrogen monitoring for wastewater treatment optimization.",
      parameter: ["Ammonia Nitrogen (NH4N)"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/img019.png",
      datasheet: "/water-analyzer.pdf",
    },
    {
      text: "Real-time nitrate nitrogen measurement for nutrient and water quality analysis.",
      parameter: ["Nitrate Nitrogen (NO3N)"],
      href: "product-detail.html?slug=water-analyzer",
      image: "/assets/images/imgnon3.png",
      datasheet: "/water-analyzer.pdf",
    },

    // {
    //   text: "Water Analyzers",
    //   parameter: ["Residual Chlorine"],
    //   href: "product-detail.html?slug=water-analyzer",
    //   image: "/assets/images/img010.png",
    //   datasheet: "/water-analyzer.pdf",
    // },

    // {
    //   text: "Water Analyzers",
    //   parameter: ["Digital Conductivity"],
    //   href: "product-detail.html?slug=water-analyzer",
    //   image: "/assets/images/imgpH.png",
    //   datasheet: "/water-analyzer.pdf",
    // },
    // {
    //   text: "Water Analyzers",
    //   parameter: ["Analog Conductivity"],
    //   href: "product-detail.html?slug=water-analyzer",
    //   image: "/assets/images/img003.png",
    //   datasheet: "/water-analyzer.pdf",
    // },

    // {
    //   text: "Water Analyzers",
    //   parameter: ["Analog TDS"],
    //   href: "product-detail.html?slug=water-analyzer",
    //   image: "/assets/images/img003.png",
    //   datasheet: "/water-analyzer.pdf",
    // },
    // {
    //   text: "Water Analyzers",
    //   parameter: ["Ammonia"],
    //   href: "product-detail.html?slug=water-analyzer",
    //   image: "/assets/images/img019.png",
    //   datasheet: "/water-analyzer.pdf",
    // },
    // {
    //   text: "Water Analyzers",
    //   parameter: ["Cyanide"],
    //   href: "product-detail.html?slug=water-analyzer",
    //   image: "/assets/images/img003.png",
    //   datasheet: "/water-analyzer.pdf",
    // },
    // {
    //   text: "Water Analyzers",
    //   parameter: ["Fluoride (F-)"],
    //   href: "product-detail.html?slug=water-analyzer",
    //   image: "/assets/images/img003.png",
    //   datasheet: "/water-analyzer.pdf",
    // },
    // {
    //   text: "Water Analyzers",
    //   parameter: ["Sodium (Na+)"],
    //   href: "product-detail.html?slug=water-analyzer",
    //   image: "/assets/images/img003.png",
    //   datasheet: "/water-analyzer.pdf",
    // },
    // {
    //   text: "Water Analyzers",
    //   parameter: ["Chloride (Cl-)"],
    //   href: "product-detail.html?slug=water-analyzer",
    //   image: "/assets/images/img003.png",
    //   datasheet: "/water-analyzer.pdf",
    // },
    // {
    //   text: "Water Analyzers",
    //   parameter: ["Water Hardness"],
    //   href: "product-detail.html?slug=water-analyzer",
    //   image: "/assets/images/img003.png",
    //   datasheet: "/water-analyzer.pdf",
    // },
  ];
  return (
    <div className="shell">
      <div className="py-15">
        <div className="mb-13">
          <h2>Compatible with Sensor Probes.</h2>
        </div>
        <div className="py-10 border-t border-(--line)">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {data &&
              data.map((item) => (
                <div key={item.id} className="col-span-1 h-full">
                  <div className="rounded border border-(--line) h-full">
                    <a href={item.href} className="block p-3 ">
                      <div className="w-full p-4 flex flex-col items-center justify-center min-h-[286px]">
                        <img src={item.image} className="max-h-[254px]" style={{ mixBlendMode: "multiply" }} />
                      </div>
                      <div className="p-3 prod_card_">
                        {/* <div className="text-md font-bold text-(--vilet)">
                      {item.h}
                    </div> */}
                        <div
                          title={item.parameter.join(", ")}
                          className="text-md font-medium text-(--muted-2-) text-center"
                        >
                          {item.parameter.join(", ")}
                        </div>
                        <p className="text-center ">{item.text}</p>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { HeroSection, AppListing });
const FeaturesSlides = () => {
  const features_list = [
    "✓ Real-Time Monitoring",
    "✓ High Accuracy",
    "✓ Remote Access",
    "✓ Low Maintenance",
  ];
  return (
    <section
      style={{
        padding: window.screen.width < 767 ? "0px" : "15px 0",
        marginTop: window.screen.width < 767 ? "0px" : "25px",
      }}
    >
      <div
        style={{
          overflow: "hidden",
          borderTop: "1px solid var(--mute)",
          borderBottom: "1px solid var(--mute)",
          maskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 28,
            animation: "vepoScroll 30s linear infinite",
            width: "max-content",
            padding: "12px 24px",
          }}
        >
          {[...features_list, ...features_list, ...features_list].map(
            (p, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "Geist",
                  fontSize: "clamp(14px, 2vw, 18px)",
                  fontWeight: 600,
                  color: "var(--ink-3)",
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  className="w-[6px] h-[6px] bg-[var(--ink-3)] mr-2.5 inline-block"
                  style={{ verticalAlign: "middle" }}
                ></span>
                {p}
              </span>
            ),
          )}
        </div>
        <style>{`@keyframes vepoScroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </div>
    </section>
  );
};
