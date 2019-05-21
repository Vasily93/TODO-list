function template(todo) {
    let checked = '';

    if(todo.completed) {
        checked = 'checked';
    } 
    return /*html*/`
    <li>
        <input type="checkbox"${checked}>
        <label class="task">${todo.task}</label>
    </li>
    `;
}

export default template;