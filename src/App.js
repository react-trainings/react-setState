import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter/counter.component';

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <h4 className="app-title"> React setState(updaterFn, callback)</h4>
            </header>
            <main className="app-main">
                <Counter />
                <Counter init={1} value={5} />
            </main>
        </div>
    );
}

export default App;
