import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Solutions } from "./components/Solutions";
import { WeHelp } from "./components/WeHelp";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <WeHelp />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
