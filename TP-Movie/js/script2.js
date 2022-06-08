let id = sessionStorage.getItem("id");

fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c7bdda37a2ba81dce05c948bf57b042e&language=fr`)
.then(response =>{
    if (!response.ok) {
        throw new Error('Network response was not OK');
    }
    else{
        return response.json();
    }
            
})
.then(data=>{
    console.log(data);

    let section = document.createElement("section");
    let article = document.createElement("article");
    let h1 = document.createElement("h1");
    let img = document.createElement("img");
    let synopsis = document.createElement("p");
    let listeGenre = document.createElement("p");
    let durée = document.createElement("p");
    let bouton = document.createElement("button");
    let genre = ' ';
    let date = document.createElement("p");
    let ligneConnue = document.createElement("p");

    bouton.textContent = "Retourner a la recherche"
    h1.textContent = `${data.title}`;
    synopsis.textContent = data.overview;
    data.genres.forEach(element => {
        genre=genre+`${element.name} `;
    });
    listeGenre.textContent = `Genres : ${genre}`;
    durée.textContent = `Durée : ${data.runtime} min`;
    img.setAttribute("src",`https://image.tmdb.org/t/p/w500${data.poster_path}`);
    date.textContent = `Année de sortie : ${data.release_date.substr(0,4)}`;
    ligneConnue.textContent = `Phrase d'accroche : ${data.tagline}`

    article.append(h1);
    article.append(synopsis);
    article.append(date);
    article.append(listeGenre);
    article.append(durée);
    if(data.belongs_to_collection){
        let saga = document.createElement("p");
        saga.textContent = `Fait partie de : ${data.belongs_to_collection.name}`;
        article.append(saga);
    }
    article.append(ligneConnue);
    article.append(bouton);
    section.append(img);
    section.append(article);
    document.body.append(section);
    bouton.addEventListener("click",function(){
        sessionStorage.clear();
        location.replace('index.html')
    })
})