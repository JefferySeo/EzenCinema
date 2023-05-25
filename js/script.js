function showLoginPopup(){
    const loginPopup = document.getElementsByClassName("c-login")[0];
    const shadow = document.getElementsByClassName("c-shadow")[0];
    loginPopup.style.display = "block";
    shadow.style.display = "block";
}

function idFunc(){
    $(".c-login-userid .move").css({
        fontSize: "1px",
        transition : "0.3s",
        top: "3px",
    });
    $(".c-login-userid input").css({
        border: "2px solid #5c7ef7",
        transition : "0.3s",
    })
}


$(".c-login-userid").mouseleave(function(){
    const userid = document.getElementById("userid").value;
    // 값이 없으면
    if(userid == ""){
        $(".c-login-userid .move").css({
            fontSize: "14px",
            transition : "0.3s",
            top: "25%",
        });
        $(".c-login-userid input").css({
            border: "2px solid #ccc",
            transition : "0.3s",
        })
        $(".c-login-userid input").blur();
    // 값이 있으면
    }else{
        
    }
})


function passFunc(){
    $(".c-login-userpass .move").css({
        fontSize: "1px",
        transition : "0.3s",
        top: "3px",
    });
    $(".c-login-userpass input").css({
        border: "2px solid #5c7ef7",
        transition : "0.3s",
    })
}

$(".c-login-userpass").mouseleave(function(){
    const userpass = document.getElementById("userpass").value;
    // 값이 없으면
    if(userpass == ""){
        $(".c-login-userpass .move").css({
            fontSize: "14px",
            transition : "0.3s",
            top: "20%",
        });
        $(".c-login-userpass input").css({
            border: "2px solid #ccc",
            transition : "0.3s",
        })
        $(".c-login-userpass input").blur();
    // 값이 있으면
    }else{
    }
})


// 아이디 저장 
$(".c-id-not-save").click(function(){
    document.getElementsByClassName("c-id-not-save")[0].style.display = "none";
    document.getElementsByClassName("c-id-save")[0].style.display = "inline-block";
})
$(".c-id-save").click(function(){
    document.getElementsByClassName("c-id-not-save")[0].style.display = "inline-block";
    document.getElementsByClassName("c-id-save")[0].style.display = "none";
})

// 배경 선택시 팝업 종료
$(".c-shadow").click(function(){
    const loginPopup = document.getElementsByClassName("c-login")[0];
    const shadow = document.getElementsByClassName("c-shadow")[0];
    loginPopup.style.display = "none";
    shadow.style.display = "none";
})


// 로그인 제출
function loginSubmit(){
    const userid = document.getElementById("userid").value;
    const userpass = document.getElementById("userpass").value;
    fetch("로그인 확인 경로 서블릿", {
        headers : {"Content-Type" : "Application/json"},
        method : "post",
        body : JSON.stringify({
            userid : userid, userpass : userpass
        }).then((res) => res.json())
        .then((result) =>{

        })
    })
}

// 카카오 로그인
function loginWithKakao() {
	Kakao.init('502aa2d5333877f0e0a0673017e24bf2'); // 사용하려는 앱의 JavaScript 키 입력
    Kakao.Auth.authorize({
        redirectUri: 'http://localhost:8080/board/KakaoOauth',
        scope: 'account_email, profile_nickname'
    });
    Kakao.Auth.setAccessToken(token);
}

// 네이버 로그인



// 구글 로그인
/*
window.onload = function () {
    google.accounts.id.initialize({
        client_id: "664366376528-akqm43rhadquji4s4uip3h3353ior23r.apps.googleusercontent.com",
        ux_mode: "redirect",
        login_uri : "http://localhost:8080/board/GoogleOauth"
    });
    google.accounts.id.prompt(); // also display the One Tap dialog
}
*/





/* *********** 약관동의 *********** */
function cShowLaw(n){
    const shadow = document.getElementById("c-shadow");
    const lawPopup = document.getElementsByClassName("c-showLaw")[n];
    shadow.style.display = "block";
    lawPopup.style.display = "block";
}
function cLawClose(n){
    const shadow = document.getElementById("c-shadow");
    const lawPopup = document.getElementsByClassName("c-showLaw")[n];
    shadow.style.display = "none";
    lawPopup.style.display = "none";
}
function cCheckAll(){
    const clickNotAgree = document.getElementsByClassName("c-law-hide");
    if(clickNotAgree[1].style.display == "flex" 
    && clickNotAgree[2].style.display == "flex" 
    && clickNotAgree[3].style.display == "flex"){
        $(".c-law-hide:eq(0)").css({
            display : "block"
        });
        $(".c-law-show:eq(0)").css({
            display : "none"
        });
        $(".c-signup-agree-btn").css({
            backgroundColor : "#5c7ef7"
        });
    }
}
function cNotCheckAll(){
    const clickAgree = document.getElementsByClassName("c-law-show");
    if(clickAgree[1].style.display == "flex" 
    && clickAgree[2].style.display == "flex" 
    && clickAgree[3].style.display == "flex"){
        $(".c-law-hide:eq(0)").css({
            display : "none"
        });
        $(".c-law-show:eq(0)").css({
            display : "block"
        });
        $(".c-signup-agree-btn").css({
            backgroundColor : "#ccc"
        });
    }
}
$(".c-law-hide:eq(1)>a:eq(0)").click(function(){
    const clickAgree = document.getElementsByClassName("c-law-show")[1];
    const clickNotAgree = document.getElementsByClassName("c-law-hide")[1];
    clickAgree.style.display = "flex";
    clickNotAgree.style.display = "none";
})
$(".c-law-hide:eq(2)>a:eq(0)").click(function(){
    const clickAgree = document.getElementsByClassName("c-law-show")[2];
    const clickNotAgree = document.getElementsByClassName("c-law-hide")[2];
    clickAgree.style.display = "flex";
    clickNotAgree.style.display = "none";
})
$(".c-law-hide:eq(3)>a:eq(0)").click(function(){
    const clickAgree = document.getElementsByClassName("c-law-show")[3];
    const clickNotAgree = document.getElementsByClassName("c-law-hide")[3];
    clickAgree.style.display = "flex";
    clickNotAgree.style.display = "none";
})

$(".c-law-show:eq(1)>a:eq(0)").click(function(){
    const clickAgree = document.getElementsByClassName("c-law-show")[1];
    const clickNotAgree = document.getElementsByClassName("c-law-hide")[1];
    clickAgree.style.display = "none";
    clickNotAgree.style.display = "flex";
})
$(".c-law-show:eq(2)>a:eq(0)").click(function(){
    const clickAgree = document.getElementsByClassName("c-law-show")[2];
    const clickNotAgree = document.getElementsByClassName("c-law-hide")[2];
    clickAgree.style.display = "none";
    clickNotAgree.style.display = "flex";
})
$(".c-law-show:eq(3)>a:eq(0)").click(function(){
    const clickAgree = document.getElementsByClassName("c-law-show")[3];
    const clickNotAgree = document.getElementsByClassName("c-law-hide")[3];
    clickAgree.style.display = "none";
    clickNotAgree.style.display = "flex";
})

function cEssentialAgreeAll(){
    const clickAgree = document.getElementsByClassName("c-law-show");
    const clickNotAgree = document.getElementsByClassName("c-law-hide");
    for(i = 0; i < 4; i++){
        clickAgree[i].style.display = "none";
        clickNotAgree[i].style.display = "flex";
        $(".c-signup-agree-btn").css({
            backgroundColor : "#5c7ef7"
        });
    }
}
function cEssentialNotAgreeAll(){
    const clickAgree = document.getElementsByClassName("c-law-show");
    const clickNotAgree = document.getElementsByClassName("c-law-hide");
    for(i = 0; i < 4; i++){
        clickAgree[i].style.display = "flex";
        clickNotAgree[i].style.display = "none";
        $(".c-signup-agree-btn").css({
            backgroundColor : "#ccc"
        });
    }
}
function cChoiceAgree(){
    const clickAgree = document.getElementsByClassName("c-law-show");
    const clickNotAgree = document.getElementsByClassName("c-law-hide");
    clickAgree[4].style.display = "none";
    clickNotAgree[4].style.display = "flex";
    for(i = 5; i < 7; i++){
        clickAgree[i].style.display = "none";
        clickNotAgree[i].style.display = "inline-block";
    }
}
function cChoiceNotAgree(){
    const clickAgree = document.getElementsByClassName("c-law-show");
    const clickNotAgree = document.getElementsByClassName("c-law-hide");
    clickAgree[4].style.display = "flex";
    clickNotAgree[4].style.display = "none";
    for(i = 5; i < 7; i++){
        clickAgree[i].style.display = "inline-block";
        clickNotAgree[i].style.display = "none";
    }
}

function cCheckSnsAll(){
    const clickNotAgree = document.getElementsByClassName("c-law-hide");
    if(clickNotAgree[5].style.display == "inline-block" 
    && clickNotAgree[6].style.display == "inline-block" ){
        $(".c-law-hide:eq(4)").css({
            display : "flex"
        });
        $(".c-law-show:eq(4)").css({
            display : "none"
        });
    }
}
function cNotCheckSnsAll(){
    const clickAgree = document.getElementsByClassName("c-law-show");
    if(clickAgree[5].style.display == "inline-block" 
    && clickAgree[6].style.display == "inline-block" ){
        $(".c-law-hide:eq(4)").css({
            display : "none"
        });
        $(".c-law-show:eq(4)").css({
            display : "flex"
        });
    }
}
$(".c-law-hide:eq(5)").click(function(){
    const clickAgree = document.getElementsByClassName("c-law-show")[5];
    const clickNotAgree = document.getElementsByClassName("c-law-hide")[5];
    clickAgree.style.display = "inline-block";
    clickNotAgree.style.display = "none";
})
$(".c-law-hide:eq(6)").click(function(){
    const clickAgree = document.getElementsByClassName("c-law-show")[6];
    const clickNotAgree = document.getElementsByClassName("c-law-hide")[6];
    clickAgree.style.display = "inline-block";
    clickNotAgree.style.display = "none";
})

$(".c-law-show:eq(5)").click(function(){
    const clickAgree = document.getElementsByClassName("c-law-show")[5];
    const clickNotAgree = document.getElementsByClassName("c-law-hide")[5];
    clickAgree.style.display = "none";
    clickNotAgree.style.display = "inline-block";
})
$(".c-law-show:eq(6)").click(function(){
    const clickAgree = document.getElementsByClassName("c-law-show")[6];
    const clickNotAgree = document.getElementsByClassName("c-law-hide")[6];
    clickAgree.style.display = "none";
    clickNotAgree.style.display = "inline-block";
})

function cAgreeAll(){
    const clickNotAgree = document.getElementsByClassName("c-law-hide");
    const alert = document.getElementsByClassName("c-agree-alert")[0];
    
    if(clickNotAgree[1].style.display != "flex" 
    || clickNotAgree[2].style.display != "flex" 
    || clickNotAgree[3].style.display != "flex"){
        alert.style.color = "red";
        alert.innerHTML = "!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; EZEN CINEMA 가입을 위해서 [필수] 약관에 동의해주세요.";
    }else{
        alert.innerHTML = "";
        $(".c-signup-agree-btn").css({
            backgroundColor : "#5c7ef7"
        });
        $(".c-part1").css({
            display : "none"
        });
        $(".c-part2").css({
            display : "block"
        });
        $(".c-sign-show:eq(0)").css({
            display: "none"
        });
        $(".c-sign-hide:eq(0)").css({
            display: "block"
        });
        $(".c-sign-show:eq(1)").css({
            display: "block"
        });
        $(".c-sign-hide:eq(1)").css({
            display: "none"
        });
        $(".c-sign-show:eq(1)>div>span:eq(1)").css({
            display: "block"
        })
    }
}
/* *********** 회원가입 *********** */
$(document).ready(function(){
    let strYear = "";
    strYear += `<select name="year" id="year" class="year">`;
    strYear += `<option value="">년</option>`;
    for(i = 2002; i > 1910; i--){
        strYear +=  `<option value="${i}">${i}</option>`;
    }
    strYear += `</select>`;
    document.getElementsByClassName("c-year")[0].innerHTML = strYear;

    let strMonth = "";
    strMonth += `<select name="month" id="month" class="month" onchange="cgetDate();">`;
    strMonth += `<option value="">월</option>`;
    for(i = 1; i < 13; i++){
        strMonth +=  `<option value="${i}">${i}</option>`;
    }
    strMonth += `</select>`;
    document.getElementsByClassName("c-month")[0].innerHTML = strMonth;

    /////////////////////////////////////////////////////
    if(document.getElementsByClassName("c-part2-sns")[0].style.display == "block"){
        
    }
})
function cgetDate(){
    const cyear = $("#year").val();
    const cmonth = $("#month").val();
    let cday = new Date(cyear, cmonth, 0).getDate();

    let strDay = "";
    strDay += `<select name="day" id="day">`;
    strDay += `<option value="">선택</option>`;
    
    for(i = 1; i <= cday; i++){
        strDay +=  `<option value="${i}">${i}</option>`;
    }
    strDay += `</select>`;
    document.getElementsByClassName("c-day")[0].innerHTML = strDay;

}

function cSignUp(){
    const userid = document.getElementById("userid").value;
    const userpass = document.getElementById("userpass").value;
    const reuserpass = document.getElementById("reuserpass").value;
    const username = document.getElementById("username").value;
    const nickname = document.getElementById("nickname").value;
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;
    const tel = document.getElementById("tel").value;
    const postcode = document.getElementById("postcode").value;
    const addr = document.getElementById("addr").value;
    const detailaddr = document.getElementById("detailaddr").value;
    const email1 = document.getElementById("email1").value;
    const email2 = document.getElementById("email2").value;

    const alert = document.getElementsByClassName("c-warning");

    if(userid == ""){
        alert[0].style.color = "red";
        alert[0].innerHTML = "아이디를 입력해주세요.";
    }else{
        alert[0].innerHTML = "";
    }
    if(userpass == ""){
        alert[1].style.color = "red";
        alert[1].innerHTML = "비밀번호를 입력해주세요.";
    }else{
        alert[1].innerHTML = "";
    }
    if(reuserpass == ""){
        alert[2].style.color = "red";
        alert[2].innerHTML = "비밀번호를 확인해주세요.";
    }else{
        alert[2].innerHTML = "";
    }
    if(username == ""){
        alert[3].style.color = "red";
        alert[3].innerHTML = "이름을 입력해주세요.";
    }else{
        alert[3].innerHTML = "";
    }
    if(nickname == ""){
        alert[4].style.color = "red";
        alert[4].innerHTML = "닉네임을 입력해주세요.";
    }else{
        alert[4].innerHTML = "";
    }
    if(year == "" || month == "" || day == ""){
        alert[5].style.color = "red";
        alert[5].innerHTML = "생년월일을 입력해주세요.";
    }else{
        alert[5].innerHTML = "";
    }
    if(tel == ""){
        alert[6].style.color = "red";
        alert[6].innerHTML = "전화번호를 입력해주세요.";
    }else{
        alert[6].innerHTML = "";
    }
    if(postcode == "" || addr == "" || detailaddr == ""){
        alert[7].style.color = "red";
        alert[7].innerHTML = "주소를 입력해주세요.";
    }else{
        alert[7].innerHTML = "";
    }
    if(email1 == "" || email2 == ""){
        alert[8].style.color = "red";
        alert[8].innerHTML = "이메일을 입력해주세요.";
    }else{
        alert[8].innerHTML = "";
    }

    let list = [userid, userpass, reuserpass, username, nickname, year, month, day, tel, addr, detailaddr, email1, email2];
    let cnt = 0;
    for(i = 0; i < list.length; i++){
        if(list[i] == ""){
            cnt += 1;
        }
        
    }
    if(cnt == 0){
        $(".c-part2").css({
            display : "none"
        });
        $(".c-part3").css({
            display : "block"
        });
        $(".c-sign-show:eq(1)").css({
            display: "none"
        });
        $(".c-sign-hide:eq(1)").css({
            display: "block"
        });
        $(".c-sign-show:eq(2)").css({
            display: "block"
        });
        $(".c-sign-hide:eq(2)").css({
            display: "none"
        });
        $(".c-sign-show:eq(1)>div>span:eq(1)").css({
            display: "none"
        })
        $(".c-sign-show:eq(2)>div>span:eq(1)").css({
            display: "block"
        })
    }
    
}
/************************************** */