import "./App.css";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Modality } from "./components/modality/Modality";
import { TypesOfStudies } from "./components/types-of-studies/TypesOfStudies";
import { ProfileSection } from "./components/profile/ProfileSection";
import { Layout } from "./layout/Layout";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <Hero />
        <TypesOfStudies />
        <Modality />
        <ProfileSection />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
