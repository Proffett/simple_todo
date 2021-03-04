import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ToDo from "./components/todo";

const HEADER = "To Do";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDo header={HEADER} />
      </header>
    </div>
  );
}

export default App;
