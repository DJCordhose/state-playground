import logo from './logo.svg';
import './App.css';

import {createContext, useContext} from 'react';

const baseUrl = {
  host: "localhost",
  port: 8080
}

// https://reactjs.org/docs/hooks-reference.html#usecontext
const UrlContext = createContext(baseUrl)


function useUrl() {
  const {host, port} = useContext(UrlContext);

  return `${host}:${port}`;
}

function UrlDisplay() {
  return (
    <p>Url: {useUrl()}</p>
  );
}


// function UrlDisplay() {
//   const url = useContext(UrlContext);
//   const {host, port} = url;
//   return (
//     <p>Url: {host}:{port}</p>
//   );
// }



function App() {
  return (
    <div className="App">
      <UrlContext.Provider value={baseUrl}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <UrlDisplay /> 
      </header>
      </UrlContext.Provider>
    </div>
  );
}

export default App;
