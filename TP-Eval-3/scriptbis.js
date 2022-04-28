/*
Pour ceux qui ne sont pas familiers avec ce jeu, il s'agit de
deviner le prix d'un produit. Ici, trois possibilités :
- C'est plus cher
- C'est moins cher
- C'est le juste prix !
Dans cette version du "Juste prix", nous générerons un
prix aléatoire, et nous calculerons le nombre de coups
qu'il faut à un joueur pour retrouver le juste prix.
Ainsi, il pourra se confronter à ses amis pour tenter de
voir qui retrouve le bon prix avec le moins de coups
possibles !
Je vous attends dans la prochaine session !
Etape 1 - Sélectionner nos éléments
Etape 2 - Cacher l'erreur
Etape 3 - Générer un nombre aléatoire
Etape 4 - Vérifier que l'utilisateur donne bien un nombre
Etape 5 - Agir à l'envoi du formulaire
Etape 6 - Créer la fonction vérifier

Couleur:
#004a6f
#2b9f88
*/
let sol = Math.floor(Math.random()*1000)+1;
let div = document.querySelectorAll("div");
let bouton = document.querySelector("button");
let n = -1;
let vie = 0;
let paragraphes = document.querySelectorAll("p");
let jeu = document.getElementsByClassName("jeu")

bouton.addEventListener("click", function(){
        if (n>-1){   
            div = document.querySelectorAll("div");
            let input = document.getElementById("answer").value;
            let p = document.createElement("p");
            let nombre = parseInt(input);
            if(!input){
                p.textContent = "Veuillez entrez un nombre";
            }
            else if(isNaN(input)){
                p.textContent = "Veuillez entrez un nombre";
            }
            else if(nombre>1000 || nombre<1){
                p.textContent = "Vous n'avez pas entrez un nombre entre 1 et 1000";
            }
            else if(nombre==sol){
                p.textContent = `BRAVO vous avez trouvé le nombre qui étais ${sol}`;
                n+=1;
                paragraphes[3].textContent = `Vous avez trouvé en ${n} essais`;
                bouton.textContent="Recommencer ?";
                bouton.addEventListener("click", function (){
                    window.location.reload();
                })
            }
            else if(nombre<sol){
                p.textContent = `Dommage le nombre est plus GRAND que ${nombre}`;
                n+=1;
                paragraphes[3].textContent = `Nombre d'essais : ${n}`;
                div[vie].style.backgroundColor = "#004a6f";
                vie-=1;
            }
            else{
                p.textContent = `Raté le nombre est plus PETIT que ${nombre}`;
                n+=1;
                paragraphes[3].textContent = `Nombre d'essais : ${n}` 
                div[vie].style.backgroundColor = "#004a6f";
                vie-=1;
            }
            div[div.length-1].append(p);
            if (vie==0){
                let fin = document.createElement("p");
                fin.textContent = "Vous n'avez plus de vie vous avez perdu!";
                div[div.length-1].append(fin);
                bouton.textContent="Recommencer ?";
                n=-2;
                bouton.textContent="Recommencer ?";
                bouton.addEventListener("click", function (){
                    window.location.reload();
                })
            }
            document.querySelector("input").value='';
            console.log(vie)
        }
    })    

bouton.addEventListener("click",function(){
        
        if (n==-1){
            let p = document.createElement("p"); 
            vie = document.getElementById("answer").value;
            if (!vie){
                p.textContent ="Veuillez entrer une valeur";
            }
            else if(isNaN(vie)){
                p.textContent ="Veuillez entrer un nombre";
            }
            else if (vie<1){
                p.textContent ="Impossible de mettre un nombre de vie inférieur à 1";
            }
            else if(vie>12){
                p.textContent ="Trop de vies demandés 12 est le maximum pour plus de difficulté!";
                vie = 12;
                for(let i=0; i<vie;i++){
                    let coeur = document.createElement("div");
                    coeur.classList.add("vie");
                    div[0].append(coeur);
                }
                document.querySelector("input").value='';
                bouton.textContent = "Démarrer le jeu";
                n+=1;
            }
            else{
                for(let i=0; i<vie;i++){
                    let coeur = document.createElement("div");
                    coeur.classList.add("vie");
                    div[0].append(coeur);
                }
                
                bouton.textContent = "Démarrer le jeu";
                n+=1;
            }
            div[1].append(p);
            document.querySelector("input").value='';
        }
}) 

