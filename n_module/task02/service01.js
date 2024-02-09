// 1. 데이터 가져오기
const postService = (() => {
    const findAll = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );
        const todos = await response.json();
        callback(todos);
    };
    return { findAll: findAll };
})();
