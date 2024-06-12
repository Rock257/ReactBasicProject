import './App.css';
// import FormProject from './Projects/FormProject';
import JokeApp from './Projects/Joke/JokeApp';

function App() {
  return (
    <div className="App">
      <div className="form-projet">
          {/* <FormProject/>
           */}
      </div>

      <div className="joke-project">
          <JokeApp/>
      </div>
      
    </div>
  );
}

export default App;
