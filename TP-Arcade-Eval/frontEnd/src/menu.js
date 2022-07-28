import {changeMessageStatus} from "./generate.js";

async function fetchScores(){
    return fetch('http://localhost/fighting_surface_api/scores')
        .then((r) => {
            return r.json();
        });
  }
  
  function tabScores(){
    let tab = [];
    fetchScores()
    .then(json => {
      for (const [key, highScore] of Object.entries(json)) {
          tab.push([highScore.name,highScore.score]);
      }
      fillScores(tab);
    });
  }
  
  function fillScores(tab){
    let tbody = document.querySelector("tbody");
    if(tab.length<6){
      tab.forEach(element => {
        let tr = document.createElement("tr");
        let thName = document.createElement("th");
        let thScore = document.createElement("th");
        
        thName.textContent = element[0];
        thScore.textContent = element[1];
        tr.append(thName,thScore);
        tbody.append(tr);
      });
      
    }
    
    else{
      for(let i = tab.length-6; i<tab.length; i++){
        let tr = document.createElement("tr");
        let thName = document.createElement("th");
        let thScore = document.createElement("th");
        thName.textContent = tab[i][0];
        thScore.textContent = tab[i][1];
        tr.append(thName,thScore);
        tbody.append(tr);
      }
    }
  }
  
  let articleMenu = document.querySelector("#articleMenu");
  let articleScore = document.querySelector("#articleScores");
  let articleCredits = document.querySelector("#articleCredits");
  let buttonScore = document.querySelector("#btnScores");
  let mainEndgame = document.querySelector("#mainEndgame");
  
  buttonScore.addEventListener("click", function(){
    disable(articleMenu);
    undisable(articleScore);
    tabScores();
  })
  
  let buttonReturnScore = document.querySelector('#btnReturnScore');
  
  buttonReturnScore.addEventListener("click",function(){
    undisable(articleMenu);
    disable(articleScore);
    let tbody = document.querySelector("tbody");
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
  })
  
  let buttonCredits = document.querySelector("#btn-Credits");
  
  buttonCredits.addEventListener("click",function(){
    disable(articleMenu);
    undisable(articleCredits);
  })
  
  let buttonReturnCredits = document.querySelector("#btnReturnCredits");
  
  buttonReturnCredits.addEventListener("click",function(){
    undisable(articleMenu);
    disable(articleCredits);
  })

let buttonJouer = document.querySelector('#btn-Jouer');
let mainJeu = document.querySelector("#mainJeu");
let mainMenu = document.querySelector("#mainMenu");
let header = document.querySelector("#header");

// buttonJouer.addEventListener("click",function(){
//   mainMenu.setAttribute("class","zoomOut");
//   disable(articleMenu);
//   setTimeout(function(){undisable(mainJeu)},2000);
// })

function undisable(element){
  element.setAttribute("class","");
}

function disable(element){
  element.setAttribute("class","disable");
}

let btnEndgameQuit = document.querySelector("#btnEndgameQuit");
let btnEndgameSend = document.querySelector("#btnEndgameSend");

btnEndgameQuit.addEventListener("click",function(){
  disable(mainEndgame);  
  changeMessageStatus("Bienvenue dans fighting surface");
  undisable(header);
  undisable(articleMenu);
})

btnEndgameSend.addEventListener("click",function(){
  let input = document.querySelector(".nes-input");
  let inputValue = input.value;
  let pScore = document.querySelector(".pScoreEndgame");
  let score = pScore.value;
  
  disable(mainEndgame);  
  changeMessageStatus("Bienvenue dans fighting surface");
  undisable(header);
  undisable(articleMenu);

})


export {undisable,disable,mainJeu,articleMenu,mainMenu,mainEndgame,header,articleScore,articleCredits,buttonJouer};