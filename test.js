// const isVerified = "";

// // if(isVerified == true){
// //     console.log("User is verified");
// // }else{
// //     console.log("user is not verified");
// // }

// console.log(

//      `${isVerified === true ? "User is verified" : "User is not verified" }`
// )
   

function getTimeString(time){
    const hour = parseInt(time / 3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60; 
    return `${hour} hour ${minute} minute ${remainingSecond} second ago`;
}
console.log(getTimeString(7865));
