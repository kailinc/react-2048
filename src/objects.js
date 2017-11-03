// Object Constructor for Board
let GameObj = function () {
  this.map = [[],[],[],[]]
  this.blocks = []
  this.score = 0
  this.win = false
  this.initBoard()
}

// functions for Board Object


GameObj.prototype.initBoard = function () {
  let [row1, row2, col1, col2] = [ranNum(), ranNum(), ranNum(), ranNum()]
  while (row1 === row2 && col1 === col2) {
    [row1, row2, col1, col2] = [ranNum(), ranNum(), ranNum(), ranNum()]
  }
  let [value1, value2] = [twoOrFour(), twoOrFour()]
  let block1 = new Block (value1, row1, col1)
  let block2 = new Block (value2, row2, col2)
  this.blocks.push(block1, block2)
}

const ranNum = function () {
  return Math.floor(Math.random() * 4)
}

const twoOrFour = function () {
  return Math.random() >= 0.05 ? 2 : 4
}

// Object Constructor for Block
function Block(value, curRow, curCol) {
  this.id = Block.id++
  this.value = value || 0
  this.curRow = curRow
  this.curCol = curCol
  this.prevRow = -1
  this.prevCol = -1
  this.new = true
  this.combined = false
  this.alphaBlock = false
}

Block.id = 0;

module.exports = GameObj;
