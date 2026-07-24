const ContactApp = () => (
  <>
    <site-header></site-header>
    <main id="contact-main">
      <div className="flex flex-col">
        <HeroSection />
        <ContactInformation />
        <ContactFormSection />
        <ContactFAQ />
        <ContactCTA />
      </div>
    </main>
    <site-footer></site-footer>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<ContactApp />);
