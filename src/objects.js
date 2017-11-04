// Object Constructor for Board
let GameObj = function () {
  this.map = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
  ]
  this.blocks = {}
  this.score = 0
  this.win = false
  this.initBoard()
}

// functions for Board Object

GameObj.prototype.move = function (direction) {
  this.cleanBlocks()
  this.updateMap(direction)
  // this.removeZero()
  // this.matchBlocks(direction)
  return this
}

// function to add 2 new blocks to the game
GameObj.prototype.initBoard = function () {
  let [row1, row2, col1, col2] = [ranNum(), ranNum(), ranNum(), ranNum()]
  while (row1 === row2 && col1 === col2) {
    [row1, row2, col1, col2] = [ranNum(), ranNum(), ranNum(), ranNum()]
  }
  let [value1, value2] = [twoOrFour(), twoOrFour()]
  let block1 = new Block (value1, row1, col1)
  let block2 = new Block (value2, row2, col2)
  let id1 = block1.id
  let id2 = block2.id
  this.blocks[id1] = block1
  this.blocks[id2] = block2
}

// function to get the current state of the board
GameObj.prototype.updateMap = function (direction) {
  this.map = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
    Object.keys(this.blocks).forEach((id) => {
      let r = this.blocks[id].curRow
      let c = this.blocks[id].curCol
      direction === 'right' || direction === 'left' ? this.map[r][c] = id : this.map[c][r] = id
    })
    console.log('from GameObj this.maps is ', this.map)
}

// function that delete previous blocks that merged into other blocks and are now under
GameObj.prototype.cleanBlocks = function () {
  for (let key in this.blocks) {
    if (this.blocks[key].deleteMe) {
        delete this.blocks[key]
    }
  }
}

// removes zero from map
GameObj.prototype.removeZero = function () {
  let newBoard = []
  for (let i = 0; i < this.map.length; i ++) {
    let row = this.map[i].filter((cur) => cur !== 0)
    newBoard.push(row)
  }
  this.map = newBoard
}

// will match adj blocks if they are of the same value
GameObj.prototype.matchBlocks = function (direction) {
  let board = this.map
  let block = this.block
  for (let i = 0; i < board.length; i++) {
    if (block[board[i][0]] === block[board[i][1]] && board[i][1]) {
      block[board[i][0]].updateValue()
      if (block[board[i][2]] === block[board[i][3]] && board[i][3]) {
        block[board[i][0]].updateValue()
      } else {
      }
    } else if (block[board[i][1]] === block[board[i][2]] && board[i][2]) {
      block[board[i][0]].updateValue()
    } else if (block[board[i][2] === board[i][3]] && board[i][3]) {
      block[board[i][0]].updateValue()
    }
  }
}

// generates random number 0-3
// use for assigning random cell to a location
const ranNum = function () {
  return Math.floor(Math.random() * 4)
}

// generate random number (2 || 4)
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
  this.alpha = false
  this.deleteMe = false
}

Block.id = 1;

Block.prototype.updateValue = function () {
  this.value = this.value * 2
}

module.exports = GameObj;
