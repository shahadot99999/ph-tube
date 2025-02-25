// const isVerified = "";

// // if(isVerified == true){
// //     console.log("User is verified");
// // }else{
// //     console.log("user is not verified");
// // }

// console.log(

//      `${isVerified === true ? "User is verified" : "User is not verified" }`
// )
   

// function getTimeString(time){
//     const year = parseInt(time/31622400)
//     let remainingmonth = time % 31622400;
//     const month = parseInt(remainingmonth/2592000);
//     let remainingday = time % 2592000; 
//     const day = parseInt(remainingday/86400);
//     let remaininghour = time % 86400;
//     const hour = parseInt(remaininghour / 3600);
//     let remainingSecond = time % 3600;
//     const minute = parseInt(remainingSecond / 60);
//     remainingSecond = remainingSecond % 60; 
//     return `${month}month ${day}day ${hour} hour ${minute} minute ${remainingSecond} second ago`;
// }
// console.log(getTimeString(1762656000));


function getTimeString(time){
    
    //const month = parseInt(time/2592000);
    //let remainingSecond = time % 2592000;

    const day = parseInt(time/86400);
   let remainingSecond = time % 86400;
   const hour = parseInt(remainingSecond / 3600);
   // const hour = parseInt(time / 3600);
    //let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60; 
    
    return ` ${day} day ${hour} hour ${minute} minute ${remainingSecond} second ago`;
}

console.log(getTimeString(1762656000));