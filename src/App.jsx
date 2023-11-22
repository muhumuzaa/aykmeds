import {
  Connect,
  Footer,
  Hero,
  HowItWorks,
  InstallApp,
  Services,
  Medicines,
  Testimonials,
} from "./sections";
import Navbar from "./components/Navbar";

// purple: #D9D9FF
// brown: #FEE4C9
//emgreen: #a7f3d0
//white backgroubd: #f8fafc
//blue: #1d4ed8

const App = () => (
  <main className="relative">
    <Navbar />
    <section>
      <Hero />
    </section>
    <section>
      <Services />
    </section>
    <section>
      <InstallApp />
    </section>
    <section>
      <HowItWorks />
    </section>
    <section>
      <Medicines />
    </section>
    <section>
      <Testimonials />
    </section>
    <section>
      <Connect />
    </section>
    <section>
      <Footer />
    </section>
  </main>
);

export default App;
