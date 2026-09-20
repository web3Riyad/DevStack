import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Card from "./card/Card";
import { Suspense } from "react";

const CardFetch = async () => {
  const res = await fetch("/Data.json");
  const data = await res.json();
  return data;
}
function App() {
  const cardPromise = CardFetch();
  // console.log(cardPromise);
  return (
    <section>
      <Nav></Nav>

      {/* body part */}
      <div className="container m-auto">
        <Hero></Hero>

        <main>
          <div className="gap-5 my-2 py-2 my-10">
            {/* This is our Card Section */}
            <h1 className="text-3xl font-bold">
              Explore the <span className="text-pink-500">Technologies</span>
            </h1>
            <p className="text-gray-500">
              Pick one technology per category to build your ideal stack
            </p>
          </div>


          {/* Card Container */}
          <Suspense fallback={<h2>Loading....</h2>}>
            <div className="w-full my-6">
              <Card cardPromise={cardPromise}></Card>
            </div>
          </Suspense>
        </main>
      </div>

      {/* footer */}
      <Footer></Footer>
    </section>
  );
}

export default App
