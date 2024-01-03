import reactImg from "./assets/react-core-concepts.png";

import { CORE_CONCEPTS } from "./data";

const reactDescription = ["Fundamental", "Crucial", "Core "];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescription[getRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept({concept}) {
  return (
    <li>
      <img src={concept.image} alt={concept.title} />
      <h3>{concept.title}</h3>
      <p>{concept.description}</p>
    </li>
  );
} 

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept,index) => (
              <CoreConcept
                concept={CORE_CONCEPTS[index]}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
