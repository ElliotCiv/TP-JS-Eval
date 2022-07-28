/**
 * TODO: Tableau avec cinq ennemis
 * * 1 - Il devra contenir le nécéssaire pour instancier
 * * 2 - Un ennemis et une image
 * * 3 - Déplacer le tableau dans un fichier data.js
 */
 let enemiesList = [
    ["le baveu", 140, 15, 6, "img/barzork_brave.png"],
    ["le chetif", 70, 25, 3, "img/barzork_chetif.png"],
    ["le bourrin", 140, 14, 0, "img/barzork_bourrin.png"],
    ["l'invisible", 40, 35, 0, "img/barzork_invisible.png"],
    ["l'admin", 180, 45, 50, "img/barzork_admin.png"],
    [],
  ];
let liste =[];

  async function fetchMonster(){
    return fetch('http://localhost/fighting_surface_api/monsters')
        .then((r) => {
          return r.json();
        });
  }

function listeMonster(){
  fetchMonster()
  .then(data=>{
        let myObj = Object.keys(data).length;
        pushData(myObj,data);
  })
}
console.log(liste);
  export {enemiesList};