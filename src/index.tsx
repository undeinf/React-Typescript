import React from 'react'
import ReactDOM from 'react-dom';

export default function App():JSX.Element {
    const greet = (name:string):string => `Hello, ${name}`
    return (
        <h1>
            {greet('REACT-TS')}
        </h1>
    )
}

const root = document.getElementById('app-root');

ReactDOM.render(<App/>, root);