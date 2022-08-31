import BlogData from "./components/BlogData";
import CompanyList from "./components/CompanyList";
import Footer from "./components/Footer";
import Home from "./components/Home";

import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Teams from "./components/Teams";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <CompanyList />
      <Teams />
      <BlogData />
      <Offer />
      <Footer />
    </>
  );
};

export default App;
