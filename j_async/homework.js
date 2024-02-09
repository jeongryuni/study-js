// post 전부 불러오기
// fetch("https://jsonplaceholder.typicode.com/posts/")
//     .then((response) => response.json())
//     .then((posts) => {
//         posts.forEach((post) => {
//             console.log(post);
//         });
//     });

fetch("https://jsonplaceholder.typicode.com/posts/")
    .then((response) => response.json())
    .then((posts) => {
        posts.forEach((post) => {
            console.log(Post);
        });
    });

// ===================================================================================
// jsonplaceholder.typicode.com/albums
// id전체 불러오기
// fetch("https://jsonplaceholder.typicode.com/albums")
//     .then((response) => response.json())
//     .then((albums) => {
//         albums.forEach((albums) => {
//             console.log(albums.id);
//         });
//     });

// 제목 전체 불러오기
// https://jsonplaceholder.typicode.com/albums
// fetch("https://jsonplaceholder.typicode.com/albums")
//     .then((response) => response.json())
//     .then((albums) => {
//         albums.forEach((albums) => {
//             console.log(albums.title);
//         });
//     });

// 앨범 한 줄씩 불러오기
// https://jsonplaceholder.typicode.com/albums
// fetch("https://jsonplaceholder.typicode.com/albums")
//     .then((response) => response.json())
//     .then((albums) => {
//         console.log(albums[1]);
//     });

// 타이틀만 불러오기
// fetch("https://jsonplaceholder.typicode.com/albums")
//     .then((response) => response.json())
//     .then((albums) => {
//         console.log(albums[1].title);
//     });

// id만 불러오기
// fetch("https://jsonplaceholder.typicode.com/albums")
//     .then((response) => response.json())
//     .then((albums) => {
//         console.log(albums[1].id);
//     });
// =====================================================================================

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) => {
//         users.forEach((user) => console.log(user.address.zipcode));
//     });

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => response.json())
//     .then((comments) => {
//         console.log(comments);
//     });

// fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
//     .then((response) => response.json())
//     .then((comments) => {
//         console.log(comments[0]);
//     });
