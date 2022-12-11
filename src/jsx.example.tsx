import {createElement as e, useState} from "react";

function App() {
    const [count, setCount] = useState(0); // setCount is a function that changes 'count' state

    return e('div', {className: 'menu'}, [
        e('li', {className: 'menu-item', key: 1}, 'HOME'),
        e('li', {className:'menu-item', key: 2}, 'SERVICES'),
        e('li', {className:'menu-item py-2 px-4 border', key: 3}, 'ABOUT'),
        e('button', {
            className: 'menu-item py-2 px-4',
            key: 4,
            onClick: () => setCount(count + 1)
        }, 'Click me!'),
        e('li', {className:'menu-item', key: 5}, `Tested JSX ${count} times`),
    ]);
}