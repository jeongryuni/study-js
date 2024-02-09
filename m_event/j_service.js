const photoService = (() => {
    const getPhotos = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/photos"
        );
        const photos = await response.json();
        callback(photos);
    };

    return { getPhotos: getPhotos };
})();

// 1

// 1. photoService 정의
// 2. getPohtos 정의 = callback에 async를 붙여 프로미스로 반환
// 3. await를 사용하여 비동기 fetch를 동기처럼 작성하게 함
// 4. 순차적으로 가져온 데이터 값을 response에 할당
// 5. await response.json()로 json형태로 photos에 할당
// 6. 외부의 콜백함수를 호출하고 photos를 콜백을 통해 전달
// 7. 콜벡을 통헤 getPhotos에 담긴 photos의 데이터를 리턴
// 8. 리턴하면 photoService에 키:값 형태로 전달