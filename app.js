const playerInfo = document.querySelectorAll('.playerName')
const board = document.querySelector('.board')
const popUp = document.querySelector('.popUp')
const body = document.querySelector('body')
const playerNamesIn = document.querySelector('.playerNamesIn')
const playerOne = document.querySelector('#p1')
const playerTwo = document.querySelector('#p2')
const restart = document.querySelector('.restart')
const congo = document.querySelector('.congo')
const textCongo = document.querySelector('.textCongo')

body.onload = popUp.showModal()

const players = (name)=>{
    return {name}
}

const player1 = players()
const player2 = players()

playerNamesIn.addEventListener('submit',(e)=>{
    e.preventDefault()
    popUp.close()
    player1.name = `Player1 - ${playerOne.value}`
    player2.name = `Player2 - ${playerTwo.value}`
    changingThePlayerNames()
})

const changingThePlayerNames = ()=>{
    for(let i=0; i<playerInfo.length; i++){
        if(i==0){
            playerInfo[i].innerText = player1.name
        }else{
            playerInfo[i].innerText = player2.name
        }
    }
}

const game = (()=>{
    const gameBoard = {
        gameboard : [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
    const creatingBoard = ()=>{
        for(place in gameBoard.gameboard){
            const box = document.createElement('div')
            box.className = "box"
            box.value = gameBoard.gameboard[place]
            board.appendChild(box)
        }
    }
    const playFunctionality = ()=>{
        const boxes = document.querySelectorAll('.box')
        let count = 1
        let marker = "X"
        boxes.forEach((box)=>{
            box.addEventListener('click',()=>{
                if((box.innerText == "X" || box.innerText == "O") && checkResult(boxes)){
                    //do nothing
                }
                else if(count % 2 == 0){
                    if((box.innerText != "X" && box.innerText != "O" && checkResult(boxes))){
                        box.innerText = marker
                    }
                    count++
                    marker = "X"
                    checkResult(boxes)
                }
                else{
                    if(box.innerText != "X" && box.innerText != "O" && checkResult(boxes)){
                        box.innerText = marker
                    }
                    count++ 
                    marker = "O"
                    checkResult(boxes)
                } 
            })
        })
    }
    return{
        creatingBoard,
        playFunctionality
    }
})()

const checkResult= (boxes)=>{
    if((boxes[0].innerText == "X" && boxes[1].innerText == "X" && boxes[2].innerText == "X") || (boxes[0].innerText == "O" && boxes[1].innerText == "O" && boxes[2].innerText == "O")){
        console.log(`${boxes[0].innerText} won`)
        congoPopUp(boxes[0].innerText)
        return false
    }
    else if((boxes[3].innerText == "X" && boxes[4].innerText == "X" && boxes[5].innerText == "X") || (boxes[3].innerText == "O" && boxes[4].innerText == "O" && boxes[5].innerText == "O")){
        console.log(`${boxes[3].innerText} won`)
        congoPopUp(boxes[3].innerText)
        return false
    }
    else if((boxes[6].innerText == "X" && boxes[7].innerText == "X" && boxes[8].innerText == "X") || (boxes[6].innerText == "O" && boxes[7].innerText == "O" && boxes[8].innerText == "O")){
        console.log(`${boxes[6].innerText} won`)
        congoPopUp(boxes[6].innerText)
        return false
    }
    else if((boxes[0].innerText == "X" && boxes[3].innerText == "X" && boxes[6].innerText == "X") || (boxes[0].innerText == "O" && boxes[3].innerText == "O" && boxes[6].innerText == "O")){
        console.log(`${boxes[0].innerText} won`)
        congoPopUp(boxes[0].innerText)
        return false
    }
    else if((boxes[1].innerText == "X" && boxes[4].innerText == "X" && boxes[7].innerText == "X") || (boxes[1].innerText == "O" && boxes[4].innerText == "O" && boxes[7].innerText == "O")){
        console.log(`${boxes[1].innerText} won`)
        congoPopUp(boxes[1].innerText)
        return false
    }
    else if((boxes[2].innerText == "X" && boxes[5].innerText == "X" && boxes[8].innerText == "X") || (boxes[2].innerText == "O" && boxes[5].innerText == "O" && boxes[8].innerText == "O")){
        console.log(`${boxes[2].innerText} won`)
        congoPopUp(boxes[2].innerText)
        return false
    }
    else if((boxes[0].innerText == "X" && boxes[4].innerText == "X" && boxes[8].innerText == "X") || (boxes[0].innerText == "O" && boxes[4].innerText == "O" && boxes[8].innerText == "O")){
        console.log(`${boxes[0].innerText} won`)
        congoPopUp(boxes[0].innerText)
        return false
    }
    else if((boxes[6].innerText == "X" && boxes[4].innerText == "X" && boxes[2].innerText == "X") || (boxes[6].innerText == "O" && boxes[4].innerText == "O" && boxes[2].innerText == "O")){
        console.log(`${boxes[6].innerText} won`)
        congoPopUp(boxes[6].innerText)
        return false
    }
    else{
        return true
    }
}

const congoPopUp = (playerWhoWon)=>{
    congo.style.visibility = "visible"
    if(playerWhoWon == "X"){
        textCongo.innerText = `Congratulations ${player1.name} Won!`
    }
    else{
        textCongo.innerText = `Congratulations ${player2.name} Won!`
    }
    restart.addEventListener('click',()=>{
        congo.style.visibility = "hidden"
        textCongo.innerText = ""
        window.location.reload()
    })
}

game.creatingBoard()
game.playFunctionality()
