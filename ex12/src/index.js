function switchCaseSequential(num) {
var answer;
switch (answer) {
    case 1:
    case 2:
    case 3:    
    case 4: 
    case 5:
    case 6:
    case 7:
    case 8:
    result = "Low, Low, Low, Mid, Mid, Mid, High, High";

    break;
    case 9: 
    result = "High";
    
}
return answer; 
}
console.log(switchCaseSequential(1));
console.log(switchCaseSequential(2));
console.log(switchCaseSequential(3));
console.log(switchCaseSequential(4));
console.log(switchCaseSequential(5));
console.log(switchCaseSequential(6));
console.log(switchCaseSequential(7));
console.log(switchCaseSequential(8));
console.log(switchCaseSequential(9));

module.export = switchCaseSequential;