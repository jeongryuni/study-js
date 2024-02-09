const photoLayout = (() => {
    const wrap = document.getElementById("photo-wrap");

    const showPhotos = (photos) => {
        wrap.innerHTML = `<div><img src=${photos[0].thumbnailUrl}></div>`;
    };

    return { showPhotos: showPhotos };
})();

// 2. 

// photoLayout 정의
// wrap에 j_fetch.HTML에 있는 photo-wrap을 가져옴
// showPhotos 메소드정의
// photos[0] 의 데이터를 thumbnailUrl로 생성하고 
// wrap에 div에 넣은채로 추가 
// showPhoros를 키값 형태로 반환
