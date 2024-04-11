import React from 'react';
import ReactDOM from 'react-dom/client';

const Heading = () => (<h1>I am heading</h1>);

const PageTitle = () => (
    <Heading/>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PageTitle/>);