import Layout from './Layout';
import './App.css';


function App(props) {
  const subject = props.subject;

  return (
    <div className="App">
      <header className="App-header">
      <Layout />
      <div className="App-logo" id="app"></div>
      </header>
      <p className="App-hello">
          Hello, {subject}!
      </p>
    </div>
  );
}

export default App;
