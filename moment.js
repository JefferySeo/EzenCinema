const momtest = document.getElementById('mom_test');
const dt = document.getElementById("dt");
const dtt= document.getElementById("dtt");
const yt = document.getElementById("yt");

let date = new Date();
let dd = dayjs();
momtest.innerHTML = dd.$d;

console.log(dd);
const nowDate = dd.get("D");
const nowDay = dd.get("d");

let dd1 = dayjs();
let ddd = "";
dt.innerHTML = dd.add(4, "day").$d;
// console.log(dd.add(1, "day").$d)
for(let i = 1 ; i < 30 ; i++){
    ddd = (dd1.add(i,"day").$d).toString();
    yt.innerHTML += ddd.slice(0,3) + ddd.slice(8,10) + "<br>";
}