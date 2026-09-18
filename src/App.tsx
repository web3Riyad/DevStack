import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {

  return (
    <section>
      <Nav></Nav>

      {/* body part */}
      <div className="container m-auto">
        <Hero></Hero>

        {/* This is our Card Section */}

        <h2 className="bg-pink-100 h-40">This is Card section</h2>

      </div>



    {/* footer */}
      <Footer></Footer>
    </section>
  );
}

export default App
