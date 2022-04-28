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
let div = document.querySelector("div");
let bouton = document.querySelector("button");
let n = 0;
let vie = 10;
let paragraphes = document.querySelectorAll("p");

bouton.addEventListener("click", function(){    
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
                paragraphes[2].textContent = `Vous avez trouvé en ${n} essais`;
                bouton.textContent="Recommencer ?";
                bouton.addEventListener("click", function (e){
                    window.location.reload();
                })
            }
            else if(nombre<sol){
                p.textContent = `Dommage le nombre est plus GRAND que ${nombre}`;
                n+=1;
                paragraphes[2].textContent = `Nombre d'essais : ${n}`;
            }
            else{
                p.textContent = `Raté le nombre est plus PETIT que ${nombre}`;
                n+=1;
                paragraphes[2].textContent = `Nombre d'essais : ${n}` 
            }
            div.append(p);
            document.querySelector("input").value='';
    })   
 
