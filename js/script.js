$(function(){
  //영화 이미지에 hover하면 영화 줄거리가 보이게 한다
  $(".h-imgbox").hover(function(){
      $(this).find(".h-movie-content").stop().fadeToggle(300);
  });
  
  $("#nav-movie").click(function(){
      let offset = $('#movie').offset();
      const scroll = $(document).scrollTop();
      
      if(scroll == 0){
        $('html').animate({scrollTop : offset.top-40}, 400);
      }else{
        $('html').animate({scrollTop : offset.top}, 400);
      }
  });


  $("#nav-upcoming").click(function(){
    let offset = $('#upcoming').offset();
    const scroll = $(document).scrollTop();

    if(scroll == 0){
      $('html').animate({scrollTop : offset.top-40}, 400);
    }else{
      $('html').animate({scrollTop : offset.top}, 400);
    }
  });

  $("#nav-top").click(function(){
    let offset = $('#top').offset();
    const scroll = $(document).scrollTop();
    
    if(scroll == 0){
      $('html').animate({scrollTop : offset.top-40}, 400);
    }else{
      $('html').animate({scrollTop : offset.top}, 400);
    }
  });

  $("#nav-animation").click(function(){
    let offset = $('#animation').offset(); 
    const scroll = $(document).scrollTop();
    
    if(scroll == 0){
      $('html').animate({scrollTop : offset.top-40}, 400);
    }else{
      $('html').animate({scrollTop : offset.top}, 400);
    }
  });

})//jquery

const movieList = document.querySelector(".h-movie-list");
const movieListHeight = movieList.offsetHeight;

const movie = document.querySelector('#nav-movie');
const movieHeight = window.pageYOffset + document.querySelector("#movie").getBoundingClientRect().top-movieListHeight-1;
const upcoming = document.querySelector("#nav-upcoming");
const upcomingHeight = window.pageYOffset + document.querySelector("#upcoming").getBoundingClientRect().top-movieListHeight-1;
const navTop = document.querySelector("#nav-top");
const navTopHeight = window.pageYOffset + document.querySelector("#top").getBoundingClientRect().top-movieListHeight-1;
const animation = document.querySelector("#nav-animation");
const animationHeight = window.pageYOffset + document.querySelector("#animation").getBoundingClientRect().top-movieListHeight-1;

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

$(window).scroll(function () { 
	const scroll = $(document).scrollTop(); 
  console.log(scroll);
  console.log(movieHeight);
  console.log(upcomingHeight);
  console.log(navTopHeight);
  console.log(animationHeight);

  if(scroll < movieHeight){
    movie.classList.remove("h-active");
  }else if(scroll >= movieHeight && scroll < upcomingHeight){
    movie.classList.add("h-active");
    upcoming.classList.remove("h-active");
  }else if(scroll >= upcomingHeight && scroll < navTopHeight){
    movie.classList.remove("h-active");
    upcoming.classList.add("h-active");
    navTop.classList.remove("h-active");
  }else if(scroll >= navTopHeight && scroll < animationHeight){
    upcoming.classList.remove("h-active");
    navTop.classList.add("h-active");
    animation.classList.remove("h-active");
  }else if(scroll >= animationHeight){
    navTop.classList.remove("h-active");
    animation.classList.add("h-active");
  }
    
});