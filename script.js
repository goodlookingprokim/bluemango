// HTML에서 id가 'myButton'인 요소와 'message'인 요소를 찾습니다.
const button = document.getElementById('myButton');
const messageParagraph = document.getElementById('message');

// 버튼 클릭 시 메시지 변경 및 네이버 뉴스 새 창 열기
button.addEventListener('click', () => {
    messageParagraph.textContent = '네이버 뉴스를 엽니다.';
    window.open('https://news.naver.com/', '_blank');
    console.log('버튼 클릭됨! 메시지 변경 및 새 창 열기 완료.');
});

// id가 'helloBtn'인 버튼 클릭 시 알림 표시
document.getElementById('helloBtn').addEventListener('click', function() {
    alert('안녕하세요!');
});
