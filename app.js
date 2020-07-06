
const gameHolder = document.getElementById("game");
let selected = null;
let points = 0;
const cardHolder = document.getElementById("cards")

const turnFaceDown = (card) =>{
    card.sideShown = "back";
    card.node.classList.remove("back")
    if(card.node.firstChild){
        card.node.addEventListener("click", cardClicked)
        card.node.removeChild(card.node.firstChild)
    }
}

const turnFaceUp = (card) =>{
    card.node.removeEventListener('click', cardClicked);
    card.sideShown = "front";
    card.node.classList.add("back")
    let img = document.createElement("img");
    img.src = card.faceImage;
    card.node.append(img)
}

const reset = () =>{
    selected= null;
    cards.forEach(card=>turnFaceDown(card))
}
    let buttonDiv = document.createElement("div")
    buttonDiv.setAttribute("class", "buttonDiv")
    let button = document.createElement("button")
    button.setAttribute("onClick", "window.location.reload();")
    button.innerText = "Reset"
    let lineBreak = document.createElement("br");
    buttonDiv.append(button)
    buttonDiv.append(lineBreak)
    gameHolder.append(buttonDiv)
    

    let pointsCounter = document.getElementById("points")
    pointsCounter.innerText = points

const cardClicked = (evt)=>{
    let cardNode = evt.target    
    let card = cards.find(card=>card.id == cardNode.id)
    turnFaceUp(card)    
    if(!selected){
        selected = card;
    } else if(selected.value == card.value){
        points = points + 1 
        pointsCounter = document.getElementById("points")
        pointsCounter.innerText = points   

        window.setTimeout(()=>{
            card.node.parentNode.removeChild(card.node)
            selected.node.parentNode.removeChild(selected.node)
            reset()
        }, 800)
    } else {
        window.setTimeout(reset, 800)
    }
}

const createCard = (id) =>{
    let newCard = document.createElement("div");
    newCard.setAttribute("id", id);
    newCard.className = 'card';    newCard.addEventListener("click", cardClicked)    
    return newCard
}

let cards = [
    ['card1',"cat", 'images/cat.png'],
    ['card2',"cat", 'images/cat.png'],
    ['card3',"dog", 'images/dog.png'],
    ['card4','dog', 'images/dog.png'],
    ['card5','bear', 'images/bear.png'],
    ['card6','bear', 'images/bear.png'],
    ['card7','frog', 'images/frog.png'],
    ['card8','frog', 'images/frog.png'],
    ['card9','duck', 'images/duck.png'],
    ['card10','duck', 'images/duck.png']
].map(cardArr=>{
    return {
        id:cardArr[0],
        node:createCard(cardArr[0]),
        sideShown:'front',
        value:cardArr[1],
        faceImage:cardArr[2]
    }
})
let cardDiv = document.createElement("div")
cardDiv.setAttribute("class", "cardDiv")
cards.forEach(card=>cardDiv.append(card.node))
gameHolder.append(cardDiv)