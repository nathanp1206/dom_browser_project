const createCard = () => {
    let newCard = document.createElement("div")
    newCard.setAttribute("class", "card")

    let newH2 = document.createElement("h2")
    
    newH2.innerText = "Title"

    let newP = document.createElement("p")
    newP.append("Content")

    let newEp = document.createElement("p")
    newEp.setAttribute("class", "extra")
    newEp.innerText = "Extra Content"

    newCard.append(newH2, newP, newEp)

    document.getElementById("cards").append(newCard)
}


function difficulty() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function diffSelection() {
    let selection = document.getElementById("myDropdown")

    switch (selection){
        case "Easy":
            let tiles = 10
            break;
        case "Medium":
            let tiles = 20
            break;
        case "Hard":
            let tiles = 30
            break;
    }
    for (let i = 0; i < tiles; i++) {
        createCard()
    }
}