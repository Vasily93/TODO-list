import template from '../src/template.js';
const test = QUnit.test;

QUnit.module('template');

test('todo template', assert => {
    const todo = {
        input: true,
        task: 'Learn JavaScript'
    };
    const expected = /*html*/`
    <li>
        <input type="checkbox">
        <label class="task">Learn JavaScript</label>
    </li>
    `;

    const html = template(todo);

    assert.htmlEqual(html, expected);
});
