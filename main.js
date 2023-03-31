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



// let value = "D";
// switch(value) {
//     case "A":
//     console.log("A다");
//     break;
//     case "B":
//     console.log("B다");
//     break;
//     case "C":
//     console.log("C다");
//     break;
//     case "D":
//     console.log("D다");
//     break;
//     default :
//     console.log("암것도아님.")
// }

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} 
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++ ) {
        for(let j = i + 1; j < nums.length; j++ ) {
            if(nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
};  