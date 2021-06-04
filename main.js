(function (window, document) { 
    'use strict';  // 엄격한 자바스크립트 문법 선언 의미

    const $toggles = document.querySelectorAll('.toggle');
    const $toggleBtn = document.getElementById('toggle-btn');

    // 사용자가 발생하는 event를 감지
    // 클릭 될때 toggleElements 함수 실행
    $toggleBtn.addEventListener('click', function() {
        toggleElements();
    });

    // 브라우저가 늘어나거나 줄어들때 resize 실행
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            // 1024보다 커지면 toggle 끄기
            offElements();
        }
    });

    function toggleElements() {
        [].forEach.call($toggles, function(toggle) {
            // toggle이라는 클래스를 가진 요소에 on이라는 클래스를 가진 클래스를 토글
            // toggleElements라는 요소가 실행될 떄
            toggle.classList.toggle('on')
        });
    }

    function offElements() {
        [].forEach.call($toggles, function(toggle) {
            toggle.classList.remove('on')
    }
})(window, document)