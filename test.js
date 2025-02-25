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



//console.log(getTimeString(1762656000));

function getTimeString(time) {
    const secondsInMinute = 60;
    const secondsInHour = 3600;
    const secondsInDay = 86400;
    const secondsInMonth = 30 * secondsInDay; // Approximate, as months vary in length
    const secondsInYear = 365 * secondsInDay; // Approximate, ignoring leap years

    const years = Math.floor(time / secondsInYear);
    time %= secondsInYear;

    const months = Math.floor(time / secondsInMonth);
    time %= secondsInMonth;

    const days = Math.floor(time / secondsInDay);
    time %= secondsInDay;

    const hours = Math.floor(time / secondsInHour);
    time %= secondsInHour;

    const minutes = Math.floor(time / secondsInMinute);
    const seconds = time % secondsInMinute;

    return `${years} year(s) ${months} month(s) ${days} day(s) ${hours} hour(s) ${minutes} minute(s) ${seconds} second(s) ago`;
}

console.log(getTimeString(1762656000)); // Example usage