$(function(){
  //영화 이미지에 hover하면 영화 줄거리가 보이게 한다
    $(".h-imgbox").hover(function(){
        $(this).find(".h-movie-content").stop().fadeToggle(300);
    });

})//jquery

const movieList = document.querySelector(".h-movie-list");
const movieListHeight = movieList.offsetHeight;

window.onscroll = function () {
  const windowTop = window.scrollY;
  	// 스크롤 세로값이 h-movie-list높이보다 크거나 같으면 
	// h-movie-list에 클래스 'drop'을 추가한다
  if (windowTop >= movieListHeight) {
    movieList.classList.add("drop");
  } 
  // 아니면 클래스 'drop'을 제거
  else {
    movieList.classList.remove("drop");
  }
};
