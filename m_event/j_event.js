const button = document.getElementById("get-photo");
const buttonPhotos =document.getElementById("get")

button.addEventListener("click", () => {
    photoService.getPhotos(photoLayout.showPhotos);
});

// 3
// 1. html에서 id가 get-photo를 찾아 변수에 할당
// 2. id가 "get"인 요소를 찾아 buttonPhotos 변수에 할당합
// 버튼 클릭시 photoLayout.showPhotos 실행
