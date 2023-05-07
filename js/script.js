function cloginClick(){
    document.getElementsByClassName("c-login")[0].style.display = 'block';
    document.getElementsByClassName("c-shadow")[0].style.display = 'block';
}
function cloginClose(){
    document.getElementsByClassName("c-login")[0].style.display = 'none';
    document.getElementsByClassName("c-shadow")[0].style.display = 'none';
}
function cIs_Checked(){
    if(document.getElementById("c-necc-all").checked == true){
        document.getElementById("c-necc-1").checked = true;
        document.getElementById("c-necc-2").checked = true;
    }else{
        document.getElementById("c-necc-1").checked = false;
        document.getElementById("c-necc-2").checked = false;
    }
}
function cmonthClick(){
    let strDay = "";
    strDay += `<select name="c-day" id="c-day">`;
    strDay += `<option value="">선택</option>`;
    if(document.getElementById("c-month").value % 2 == 1){
        for(i = 1; i < 31; i++){
            strDay +=  `<option value="${i}">${i}</option>`;
        }
        strDay += `</select>
                    <label for="c-day">일</label>`;
        document.getElementsByClassName("c-day")[0].innerHTML = strDay;
    }else{
        for(i = 1; i < 32; i++){
            strDay +=  `<option value="${i}">${i}</option>`;
        }
        strDay += `</select>
                    <label for="c-day">일</label>`;
        document.getElementsByClassName("c-day")[0].innerHTML = strDay;
    }
}
$(function(){
    let strYear = "";
    strYear += `<select name="c-year" id="c-year">`;
    strYear += `<option value="">선택</option>`;
    for(i = 2002; i > 1900; i--){
        strYear +=  `<option value="${i}">${i}</option>`;
    }
    strYear += `</select>
                <label for="c-year">년</label>`;
    document.getElementsByClassName("c-year")[0].innerHTML = strYear;

    let strMonth = "";
    strMonth += `<select name="c-month" id="c-month" onclick="cmonthClick();">`;
    strMonth += `<option value="">선택</option>`;
    for(i = 1; i < 13; i++){
        strMonth +=  `<option value="${i}">${i}</option>`;
    }
    strMonth += `</select>
                <label for="c-month">월</label>`;
    document.getElementsByClassName("c-month")[0].innerHTML = strMonth;

})

$(".c-signup-agree-btn").click(function(){
    document.getElementsByClassName("c-signup-agree")[0].style.display = "none";
    document.getElementsByClassName("c-signup-info")[0].style.display = "block";
    $(".c-signupnav li:first-child").css({
        "border-bottom" : "none"
    });
    $(".c-signupnav li:nth-child(2)").css({
        "border-bottom" : "2px solid"
    });
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