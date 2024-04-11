const h1 = React.createElement('h1', {className: 'text-red'}, 'Hello World from React');
const h2 = React.createElement('h2', {}, 'I am h2 tag');
const child = React.createElement('div', {id: 'child'}, [h1, h2]);
const parent = React.createElement('div', {id: 'parent'}, child);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);