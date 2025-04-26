import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Layout from "./layouts/Layout";

function App() {
  return (
    <>
      <Layout>
        <About />
        <Skills />
        <Projects />
      </Layout>
    </>
  );
}

export default App;
