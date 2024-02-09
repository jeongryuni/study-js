const postLayout = (() => {
    // showlist 함수정의
    const showList = (todos) => {
        const table = document.querySelector("table.todos");
        let text = ``;
        todos = todos.slice(0, 10);
        todos.forEach((todo) => {
            if (todo.completed) {
                text += `<tr class ="red" ><td>${todo.id}</td><td>${todo.title}</td><td>${todo.completed}</td></tr>`;
            }
            text += `<tr class="blue"><td>${todo.id}</td><td>${todo.title}</td><td>${todo.completed}</td></tr>`;
        });
        table.innerHTML = text;
    };

    return { showList: showList };
})();
