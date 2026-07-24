const CareerApp = () => (
  <>
    <site-header></site-header>
    <main id="product-main">
      <div className="flex flex-col">
        <CareerHeroSection />
        <LifeatVepolink />
        <SectProduPlan />
      </div>
    </main>
    <site-footer></site-footer>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<CareerApp />);
