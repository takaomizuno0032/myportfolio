import './App.css';
import ResponsiveAppBar from './components/NavBar';
import Card from './components/Card';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import TopImage from './static/img/top_img.jpg';


const card = {
  title: 'Takao Mizuno',
  description:
    "I am a Software Engineer",
  descriptionTwo: "C#, Python, Typescript, React",
  image: TopImage,
  imageText: 'main image description',
}

function App() {
  return (
    <div className="App">
      <header>
        <ResponsiveAppBar />
      </header>
      <main>
        <Card post={card} />
        <div id="skills">
          <Skills />
        </div>
        <div id='experiences'>
          <Experiences />
        </div>
      </main>
    </div>
  );
}

export default App;
