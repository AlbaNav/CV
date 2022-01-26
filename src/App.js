import { useState } from "react";
import "./App.css";
import { Hero, About, Education, Experience, More } from "./components";
import { CV } from "./CV/CV";

const { hero, education, experience, languages, habilities } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="App">
      <Hero hero={hero} />
       <About hero={hero} />
      <div>
       <button
        className="custom-btn btn-4"
        onClick={() => setShowEducation(true)}
      >
        Educación
      </button>
      <button
        className="custom-btn btn-4"
        onClick={() => setShowEducation(false)}
      >
        Experiencia
      </button>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      </div>
      <More languages={languages} habilities={habilities} /> 
    </div>
  );
}

export default App;
