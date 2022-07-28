/**
 * TODO: Tableau avec cinq ennemis
 * * 1 - Il devra contenir le nécéssaire pour instancier
 * * 2 - Un ennemis et une image
 * * 3 - Déplacer le tableau dans un fichier data.js
 */
//  let enemiesList = [
//     ["le baveu", 140, 15, 6, "img/barzork_brave.png"],
//     ["le chetif", 70, 25, 3, "img/barzork_chetif.png"],
//     ["le bourrin", 140, 14, 0, "img/barzork_bourrin.png"],
//     ["l'invisible", 40, 35, 0, "img/barzork_invisible.png"],
//     ["l'admin", 180, 45, 50, "img/barzork_admin.png"],
//     [],
//   ];


// function fetchMonster(){
//     return fetch('http://localhost/fighting_surface_api/monsters')
//         .then((r) => {
//           return r.json();
//         });
//   }

// async function listeMonster(){
 
//   fetchMonster()
//   .then(data=>{
//     let list =[];
//     for(let i = 3;i<Object.keys(data).length+3;i++){
//       let nouveau = [data[i].name,data[i].life,data[i].att,data[i].def,data[i].img];
//       list.push(nouveau); 
//     }
//     return list;
//   })
// }

// let enemiesList = listeMonster();

// export {enemiesList};

function fetchAllMonsters(){
    return fetch(allMonstersUrl);
}

async function getAllMonsters(){
  const response = await fetch('http://localhost/fighting_surface_api/monsters');
  const monsters = await response.json();
  return monsters;
}

const enemiesList = await getAllMonsters();

console.log(enemiesList);

export {enemiesList};