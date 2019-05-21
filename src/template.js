function template(todo) {
    //let checked = '';

    // if(task.completed) {
    //     checked = 'checked';
    // } 

    // const task = /*html*/`
    // <li>
    //     <input ${checked}>
    // </li>
    // `;
    return /*html*/`
    <li>
        <input type="checkbox">
        <label class="task">${todo.task}</label>
    </li>
    `;
}

export default template;