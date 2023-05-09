function cloginClick(){
    document.getElementsByClassName("c-login")[0].style.display = 'block';
    document.getElementsByClassName("c-shadow")[0].style.display = 'block';
}
function cloginClose(){
    document.getElementsByClassName("c-login")[0].style.display = 'none';
    document.getElementsByClassName("c-shadow")[0].style.display = 'none';
}

function checkAll(){
    const cneccall = document.getElementById("c-necc-all");
    const cnecc1 = document.getElementById("c-necc-1");
    const cnecc2 = document.getElementById("c-necc-2");
    if(cnecc1.checked == true && cnecc2.checked == true){
        cneccall.checked =true;
    }
}
function cIs_Checked(){
    const cneccall = document.getElementById("c-necc-all");
    const cnecc1 = document.getElementById("c-necc-1");
    const cnecc2 = document.getElementById("c-necc-2");
    if(cneccall.checked == true){
        cnecc1.checked = true;
        cnecc2.checked = true;
    }else{
        cnecc1.checked = false;
        cnecc2.checked = false;
    }
}
function cgetDate(){
    const cyear = $("#c-year").val();
    const cmonth = $("#c-month").val();
    let cday = new Date(cyear, cmonth, 0).getDate();

    let strDay = "";
    strDay += `<select name="c-day" id="c-day">`;
    strDay += `<option value="">선택</option>`;
    
    for(i = 1; i <= cday; i++){
        strDay +=  `<option value="${i}">${i}</option>`;
    }
    strDay += `</select>
                <label for="c-day">일</label>`;
    document.getElementsByClassName("c-day")[0].innerHTML = strDay;

}

$(".c-signup-agree-btn").click(function(){
    let strYear = "";
    strYear += `<select name="c-year" id="c-year">`;
    strYear += `<option value="">선택</option>`;
    for(i = 2002; i > 1910; i--){
        strYear +=  `<option value="${i}">${i}</option>`;
    }
    strYear += `</select>
                <label for="c-year">년</label>`;
    document.getElementsByClassName("c-year")[0].innerHTML = strYear;

    let strMonth = "";
    strMonth += `<select name="c-month" id="c-month" class="c-month" onchange="cgetDate();">`;
    strMonth += `<option value="">선택</option>`;
    for(i = 1; i < 13; i++){
        strMonth +=  `<option value="${i}">${i}</option>`;
    }
    strMonth += `</select>
                <label for="c-month">월</label>`;
    document.getElementsByClassName("c-month")[0].innerHTML = strMonth;

})

$(".c-signup-agree-btn").click(function(){
    if(document.getElementById("c-necc-1").checked != true || document.getElementById("c-necc-2").checked != true){
        alert("필수 약관에 동의해주세요.");

    }else{
        document.getElementsByClassName("c-signup-agree")[0].style.display = "none";
        document.getElementsByClassName("c-signup-info")[0].style.display = "block";
        $(".c-signupnav li:first-child").css({
            "border-bottom" : "none"
        });
        $(".c-signupnav li:nth-child(2)").css({
            "border-bottom" : "2px solid"
        });
    }
    
})
$(".c-signup-info-btn").click(function(){
    document.getElementsByClassName("c-signup-info")[0].style.display = "none";
    document.getElementsByClassName("c-signup-welcome")[0].style.display = "block";
    $(".c-signupnav li:nth-child(2)").css({
        "border-bottom" : "none"
    });
    $(".c-signupnav li:last-child").css({
        "border-bottom" : "2px solid"
    });
})

function cloginSubmit(){
    const loginform = document.getElementById("c-loginform");
    const warning = document.getElementsByClassName("c-warning");
    if(loginform.userid.value == ""){
        warning[0].innerHTML = "아이디를 입력해주세요.";
        
    }
    else if(loginform.userpass.value == ""){
        warning[1].innerHTML = "비밀번호를 입력해주세요.";
    }else{
        loginform.submit();
    }
    
}