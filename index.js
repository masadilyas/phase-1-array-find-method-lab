// code your solution here
// function superbowlWin(array){
//     for(let item of array){
//         if(item.result === "W"){
//             return item.year;
//         }
//     }
// }

function superbowlWin(record){
    const win = record.find(game => game.result === 'W')
    if (win) {
        return win.year
    }
    else {
        return undefined
    }
}