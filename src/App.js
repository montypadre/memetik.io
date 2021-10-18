import Layout from './Layout';
import { PopupButton } from '@typeform/embed-react';


function App(props) {
  const subject = props.subject;

  return (
    <div className="App">
      <header className="App-header">
      <Layout />
      <div className="App-logo" id="app"></div>
      </header>
      <p className="hello">
          Hello, { subject }!<br />
          Please take a moment to complete our user <PopupButton id="c0zMT0hn" className="typeform-button">survey</PopupButton>.
      </p>
    </div>
  );
}

export default App;
