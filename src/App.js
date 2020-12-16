import './App.css';
import UserFC from './UserFC'
import UserCC from './UserCC'

function App() {
  return (
    <div className="App">
      <h1><UserFC>Riaz Functional</UserFC></h1>
      <h1><UserCC>Riaz Class</UserCC></h1>
    </div>
  );
}

export default App;
