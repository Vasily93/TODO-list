import todos from '../data/todos.js';
import template from '../src/template.js';
import htmlToDOM from '../src/html-to-dom.js';

const list = document.getElementById('todos');

todos.forEach(todo => {
    const html = template(todo);

    const dom = htmlToDOM(html);

    list.appendChild(dom);
});