import Navigation from "../components/Navigation";
import Heading from "../components/Heading";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="layout">
      <Navigation></Navigation>
      <Heading></Heading>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
};

export default Home;
