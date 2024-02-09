const button = document.getElementById("get-todos");
button.addEventListener("click", (e) => {
    postService.findAll(postLayout.showList);
});
