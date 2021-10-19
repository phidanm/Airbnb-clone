import Header from "../components/Header";
import Footer from "./Footer";

function search() {
  return (
    <div>
      <Header />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stays for 5 number of guests</p>
          <h1 className="text-3xl font-semibold mb-6 mt-2">Stays in Earth</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Instant Book</p>
            <p className="button">More Filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default search;
