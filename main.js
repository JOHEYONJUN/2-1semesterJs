// 클릭시 투명도 변환
// const myDiv = document.getElementById("myDiv");
// let b = 0;
// myDiv.addEventListener("click", function() {
//     const myP = myDiv.getElementsByTagName("p")[0];
//         myP.style.opacity = 1;
//     }
// )
// 클릭시 투명도 변환

// 마우스포인터 올릴시 반응
const myBox = document.getElementById("myBox");

myBox.addEventListener("mouseover", function() {
    myBox.innerHTML = "시1발~";
});

myBox.addEventListener("mouseout", function() {
    myBox.innerHTML = "잠온다";
});