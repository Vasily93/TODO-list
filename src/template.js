function template(todo) {
    return /*html*/`
    <li>
        <input type="checkbox">
        <label class="task">${todo.task}</label>
    </li>
    `;
}

export default template;