//네비게이션 바 클래스들을 const변수에 할당
const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');
//클릭하면 함수를 호출하도록 함
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});

//유부브 링크 class로 묶는 jQuery
jQuery( document ).ready( function( $ ) {
    $( 'iframe[src^="https://www.youtube.com/"]' ).wrap( '<div class="youtubeWrap"></div>' );
} );

//메인 페이지 Welcome to Chan's GYM 글자 색 변경
function over(obj) {
    obj.style.color="pink";
}
function out(obj) {
    obj.style.color="white";
}