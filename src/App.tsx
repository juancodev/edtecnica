import "./App.css";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Modality } from "./components/modality/Modality";
import { TypesOfStudies } from "./components/types-of-studies/TypesOfStudies";
import { Layout } from "./layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <Hero />
        <TypesOfStudies />
        <Modality />
      </Layout>
    </>
  );
}

export default App;
