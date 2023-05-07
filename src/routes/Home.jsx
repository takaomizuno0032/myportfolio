import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Profile from "../components/Profile";

function Home() {
  return (
    <div>
      <Hero />
      <Profile />
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
