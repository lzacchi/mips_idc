const registerMap = {
  '00000': '$zero',
  '00001': '$at',
  '00010': '$v0',
  '00011': '$v1',
  '00100': '$a0',
  '00101': '$a1',
  '00110': '$a2',
  '00111': '$a3',
  '01000': '$t0',
  '01001': '$t1',
  '01010': '$t2',
  '01011': '$t3',
  '01100': '$t4',
  '01101': '$t5',
  '01110': '$t6',
  '01111': '$t7',
  '10000': '$s0',
  '10001': '$s1',
  '10010': '$s2',
  '10011': '$s3',
  '10100': '$s4',
  '10101': '$s5',
  '10110': '$s6',
  '10111': '$s7',
  '11000': '$t8',
  '11001': '$t9',
  '11010': '$k0',
  '11011': '$k1',
  '11100': '$gp',
  '11101': '$sp',
  '11110': '$fp',
  '11111': '$ra'
}

const functMap = {
  '100000': 'add',
  '100001': 'addu',
  '100100': 'and',
  '001000': 'jr',
  '100111': 'nor',
  '100101': 'or',
  '101010': 'slt',
  '101011': 'sltu',
  '000000': 'sll',
  '000010': 'srl',
  '000011': 'sra',
  '100010': 'sub',
  '100011': 'subu',
  '010000': 'mfhi',
  '010010': 'mflo',
  '011010': 'div',
  '011011': 'divu',
  '011000': 'mult',
  '011001': 'multu'

}

const aluMap = {
  '001000': 'addi',
  '001001': 'addiu',
  '001100': 'andi',
  '001111': 'lui',
  '001101': 'ori',
  '001010': 'slti',
  '001011': 'sltiu',
  '001110': 'xori',
}

const branchMap = {
  '000100': 'beq',
  '000101': 'bne',
  '000010': 'j',
  '000011': 'jal',
  '011000': 'mfc0',
}

const memoryMap = {
  '100000': 'lb',
  '100100': 'lbu',
  '100001': 'lh',
  '100101': 'lhu',
  '100011': 'lw',
  '101000': 'sb',
  '101001': 'sh',
  '101011': 'sw'
}

function hexToAssembly(input) {
  input = parseInt(input.slice(2), 16).toString(2).padStart(8, '0');
  var rem = 32 - input.length;
  var instruction;

  for (var i = 0; i < rem; ++i) {
    input = '0' + input;
  }

  var opcode = input.slice(0, 6);

  if (opcode === '000000') {
    instruction = translateTypeR(input);
  }

  if (opcode in memoryMap) {
    instruction = translateMemory(input);
  }

  if (opcode in aluMap) {
    instruction = translateAlu(input);
  }

  if (opcode in branchMap) {
    instruction = translateBranch(input);
  }

  if (instruction === undefined) {
    instruction = "Not a valid instruction";
  }

  document.getElementById('hex').innerHTML = instruction;

}

function binToAssembly(input) {

  var instruction;
  var opcode = input.slice(0, 6);

  if (opcode === '000000') {
    instruction = translateTypeR(input);
  }

  if (opcode in memoryMap) {
    instruction = translateMemory(input);
  }

  if (opcode in aluMap) {
    instruction = translateAlu(input);
  }

  if (opcode in branchMap) {
    instruction = translateBranch(input);
  }

  if (instruction === undefined) {
    instruction = "Not a valid instruction";
  }

  document.getElementById('bin').innerHTML = instruction;

}

function translateTypeR(instr) {
  var rs = instr.slice(6, 11);
  var rt = instr.slice(11, 16);
  var rd = instr.slice(16, 21);
  var shamt = instr.slice(21, 26);
  var funct = instr.slice(26);
  var shift = ['sll', 'srl'];

  var mnemonic = functMap[funct];



  var instruction = mnemonic + ' ' + registerMap[rd] + ', ' + registerMap[rs] + ', ' + registerMap[rt];

  if (mnemonic === 'jr') {
    instruction = mnemonic + ' ' + registerMap[rs];
  }

  if (shift.includes(mnemonic)) {
    var instruction = mnemonic + ' ' + registerMap[rd] + ', ' + registerMap[rt] + ', ' + parseInt(shamt, 2);
  }

  return instruction;

}

function translateAlu(input) {
  var instruction;
  return instruction;
}

function translateBranch(input) {
  var instruction;
  return instruction;
}

function translateMemory(input) {
  var opcode = input.slice(0,6);
  var rs = input.slice(6,11);
  var rt = input.slice(11,16);
  var offset = binaryToHex(input.slice(16)).result;

  var mnemonic = memoryMap[opcode];

  var instruction = mnemonic + ' ' + registerMap[rt] + ' 0x' + offset + '(' + registerMap[rs] + ')';

  return instruction;
}


// const memoryMap = {
//   '100000': 'lb',
//   '100100': 'lbu',
//   '100001': 'lh',
//   '100101': 'lhu',
//   '100011': 'lw',
//   '101000': 'sb',
//   '101001': 'sh',
//   '101011': 'sw'
// }

function assemblyToMachine() {
  var instruction = "Coming soon!";
  document.getElementById('assembly').innerHTML = instruction;
}
