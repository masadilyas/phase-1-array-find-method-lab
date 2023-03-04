// code your solution here
function superbowlWin(array){
    for(let item of array){
        if(item.result === "W"){
            return item.year;
        }
    }
}

