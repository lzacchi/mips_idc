/*  Range de beq(Somar PC+4 e depois:):
    Hex:    [ (-) 0x20000, (+) 0x1FFFC]*/


function branchRange(input) {
    maxValid = "0x1FFFC";
    minValid = "0x20000"

    var maxRange = (parseInt(input.slice(2), 16)  + parseInt(maxValid, 16)).toString(16);

    var minRange = (parseInt(input.slice(2), 16)  - parseInt(minValid, 16)).toString(16);

    document.getElementById('branch-max').innerHTML = "The maximum reachable address by this branch instruction is 0x" + maxRange.padStart(8, '0');
    document.getElementById('branch-min').innerHTML = "The minimum reachable address by this branch instruction is 0x" + minRange.padStart(8, '0');

}
