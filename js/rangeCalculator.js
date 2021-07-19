/*  Range de beq(Somar PC+4 e depois:):
    Hex:    [ (-) 0x20000, (+) 0x1FFFC]*/

function branchRange(input) {
    maxValid = "1FFFC";
    minValid = "20000"

    if (document.getElementById('pc_checkbox').checked) {
        var maxRange = (parseInt(input.slice(2), 16) + parseInt(maxValid, 16)).toString(16);
        var minRange = parseInt(input.slice(2), 16) - parseInt(minValid, 16);
    } else {
        var maxRange = (parseInt(input.slice(2), 16) + 4 + parseInt(maxValid, 16)).toString(16);
        var minRange = parseInt(input.slice(2), 16) + 4 - parseInt(minValid, 16);
    }

    if (minRange < 0) {
        minRange = 0;
    }

    minRange = minRange.toString(16);

    document.getElementById('branch-max').innerHTML = "The maximum reachable address by this branch instruction is 0x" + maxRange.padStart(8, '0');
    document.getElementById('branch-min').innerHTML = "The minimum reachable address by this branch instruction is 0x" + minRange.padStart(8, '0');

}

function jumpRange(input) {
    var maxRange = input.slice(2, 3) + "FFF FFFC";
    var minRange = input.slice(2, 3) + "000 0000";

    document.getElementById('jump-max').innerHTML = "The maximum reachable address by this branch instruction is 0x" + maxRange.padStart(8, '0');
    document.getElementById('jump-min').innerHTML = "The minimum reachable address by this branch instruction is 0x" + minRange.padStart(8, '0');

}
