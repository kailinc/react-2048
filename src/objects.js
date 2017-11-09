// Object Constructor for Board
let GameObj = function () {
  this.map = []
  this.blocks = {}
  this.score = 0
  this.win = false
  this.lose = false
  this.initBoard()
}

// functions for Board Object

GameObj.prototype.move = function (direction) {
  this.cleanBlocks()
  this.updateMap(direction)
  let prevBoard = this.map
  this.removeZero()
  this.matchBlocks(direction)
  this.addZero(direction)
  this.updatePositions(direction)
  if (this.hasChanged(prevBoard)) {
    this.addNewBlock(direction)
  }
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
      this.blocks[id].upgraded = false
    })
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
  for ( let r = 0; r < this.map.length; r++) {
    let curRow = direction === 'right' || direction === 'down' ?  this.map[r].reverse() : this.map[r]
    let resultRow = []
    for (let target = 0; target < this.map.length; target++) {
      let targetBlock = curRow.length ? curRow.shift() : 0
      if (curRow.length > 0 && getValue(this, curRow[0]) === getValue(this, targetBlock)) {
        let block1 = targetBlock
        let block2 = curRow.shift()

        this.blocks[block1].value *= 2
        this.blocks[block1].upgraded = true
        this.blocks[block2].deleteMe = true
        this.blocks[block2].new = false
        this.blocks[block2].combined = this.blocks[block1]

        this.score += this.blocks[block1].value
        if (this.blocks[block1].value === 2048) {
          this.win = true
        }
      }
      resultRow[target] = targetBlock
    }
    this.map[r] = direction === 'right'|| direction ===  'down' ? resultRow.reverse() : resultRow;
  }
}

// addZero back to this.map so we can know the new position of the blocks
GameObj.prototype.addZero = function (direction) {
  let board = this.map
  for (let i = 0; i < board.length; i++) {
    while (board[i].length < 4) {
      if (direction === 'right' || direction === 'down') {
        board[i].unshift(0)
      } else {
        board[i].push(0)
      }
    }
  }
}

GameObj.prototype.updatePositions = function (direction) {
  let board = this.map
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board.length; c++) {
      let id = board[r][c]
      if (id !== 0) {
        this.blocks[id].updateCoords(r,c, direction)
        this.blocks[id].new = false
      }
    }
  }
}

// adds new block to the board
GameObj.prototype.addNewBlock = function (direction) {
  let emptySpots = this.findEmptySpots(direction)
  let ranIndex = Math.floor(Math.random() * emptySpots.length)
  let [value, r, c] = [twoOrFour(), emptySpots[ranIndex][0], emptySpots[ranIndex][1]]
  let newBlock = new Block(value, r, c)
  let id = newBlock.id
  this.blocks[id] = newBlock
}

// finds the empty spots in the board
GameObj.prototype.findEmptySpots = function (direction) {
  let emptySpaces = []
  let board = this.map
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board.length; c++) {
      if (board[r][c] === 0) {
        if (direction === 'right' || direction === 'left') {
          emptySpaces.push([r,c])
        } else {
          emptySpaces.push([c,r])
        }
      }
    }
  }
  return emptySpaces
}

// function to see if board has changed 
GameObj.prototype.hasChanged = function (prevBoard) {
  for (let r = 0; r < this.map.length; r++) {
    for (let c = 0; c < this.map.length; c++) {
      if (this.map[r][c] !== prevBoard[r][c]) {
        return true
      }
    }
  }
  return false
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

// returns the value of a blockg
const getValue = function (board, id) {
  if (id) {
    return  id !== 0 ? board.blocks[id].value : 0
  } else {
    return 0
  }
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
  this.combined = null
  this.upgraded = false
  this.deleteMe = false
}

Block.id = 1;

// doubles value of the block
Block.prototype.doubleValue = function () {
  this.value = this.value * 2
}

// method to update coordiates of block
Block.prototype.updateCoords = function (r,c,direction) {
  this.prevRow = this.curRow
  this.prevCol = this.curCol
  if (direction === 'right' || direction === 'left') {
    this.curRow = r
    this.curCol = c
  } else {
    this.curRow = c
    this.curCol = r
  }
}

Block.prototype.markDelete = function (direction) {
  this.deleteMe = true
}

Block.prototype.fromRow = function () {
  return this.combined ? this.curRow : this.prevRow
}

Block.prototype.toRow = function () {
  return this.combined ? this.combined.curRow : this.curRow
}

Block.prototype.fromCol = function () {
  return this.combined ? this.curCol : this.prevCol
}

Block.prototype.toCol = function () {
  return this.combined ? this.combined.curCol : this.curCol
}

Block.prototype.moved = function () {
  if (this.new) {
    return false
  } else if (this.curRow !== this.prevRow || this.curCol !== this.prevCol) {
    return true
  } else if (this.combined) {
    return true
  } else {
    return false
  }
}

module.exports = GameObj;
