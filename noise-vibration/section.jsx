const NoiseVibrationHero = () => {
  return (
    <div className="shell p-5">
      <div className="split-heading pt-10 pb-15">
        <div>
          <span className="status-pill mb-2">
            <span></span> Our Products & Solutions
          </span>
          <h2>Online Noise Monitoring System (ONMS)</h2>
        </div>
        <p className="text-[17px] text-(--muted)">
          The Online Noise Monitoring System (ONMS) continuously measures
          environmental noise levels and provides real-time data for effective
          noise management. Ideal for industrial facilities, construction sites,
          urban areas, and infrastructure projects, it helps organizations stay
          compliant with regulations through accurate monitoring, instant
          alerts, and easy-to-access reporting.
        </p>
      </div>
      <Listing />
    </div>
  );
};

const Listing = () => {
  const data = [
    {
      id: 1,
      img: "/assets/images/noise/iDB.png",
      link: "/idb.html",
      h: "Continuous environmental noise monitoring for regulatory compliance and analysis.",
      p: "NOISE Monitor iDB",
    },
    {
      id: 2,
      img: "/assets/images/noise/iVIBEseismic.png",
      link: "/ivi-beseismic",
      h: "Accurate vibration monitoring for structural safety and industrial applications.",
      p: "VIBRATION Monitor iVIBE",
    },
  ]
  return (
    <div className="py-10 border-t border-(--line)">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data && data.length === 0 ? (
          <div className="card text-center col-span-4">No Record Found</div>
        ) : (
          data.map((item) => (
            <div key={item.id} className="col-span-1 h-full">
              <div className="rounded border border-(--line) h-full">
                <a href={item.link} className="block p-3 ">
                  <div className="w-full p-4 flex flex-col items-center justify-center min-h-[286px]">
                    <img src={item.img} className="max-h-[254px]" />
                  </div>
                  <div className="p-3 prod_card_">
                    {/* <div className="text-md font-bold text-(--vilet)">
                      {item.h}
                    </div> */}
                    <div
                      title={item.p}
                      className="text-md font-medium text-(--muted-2-) text-center"
                    >
                      {item.p}
                    </div>
                    <p className="text-center ">{item.h}</p>
                  </div>
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

Object.assign(window, { NoiseVibrationHero });
