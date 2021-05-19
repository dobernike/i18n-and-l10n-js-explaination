import logo from './i18nextlogo.png';
import './App.css';
import { useEffect, useState } from 'react';
import { initI18n } from './i18n';
import i18next from 'i18next';

function App() {
  const [isLocaleLoaded, setIsLocaleLoaded] = useState(false);

  useEffect(() => {
      initI18n().then(() => setIsLocaleLoaded(true));
  }, []);

  const textForButton = i18next.t('global.GO')

  return !isLocaleLoaded ? null : (
    <div className="App">
      <header className="App-header">
        <h1>{i18next.t('header')}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Andersen
        </p>
        <div style={{display: 'flex'}}>
        <button>{textForButton}</button>
        <button>{textForButton}</button>
        <button>{textForButton}</button>
        </div>
        <a
          className="App-link"
          href="https://www.i18next.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn i18next
        </a>
        <ul style={{overflow: 'hidden', backgroundColor: 'white', color: 'black', width: 170, height: 100, marginBlockStart: 10, listStyle: 'none' , padding: 0}}>
          <li>First option</li>
          <li>Second option</li>
          <li>Third option</li>
          {/* className="App-li" */}

        </ul>
      </header>
    </div>
  );
}

export default App;
