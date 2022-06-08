   
fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=c7bdda37a2ba81dce05c948bf57b042e&language=fr&page=1`)
.then(response =>{
    if (!response.ok) {
        throw new Error('Network response was not OK');
    }
    else{
        return response.json();
    }
            
})
.then(list =>{
    console.log(list.results);
    list.results.forEach(data => {
        let section = document.createElement("section");
        let article = document.createElement("article");
        let h1 = document.createElement("h1");
        let img = document.createElement("img");
        let p = document.createElement("p");
        let hr = document.createElement("hr");
        let bouton = document.createElement("button");
        bouton.textContent = "Voir la fiche du film"
        h1.textContent = `${data.title}`;
        p.textContent = data.overview;
        img.setAttribute("src",`https://image.tmdb.org/t/p/w500${data.poster_path}`);
        article.append(h1);
        article.append(p);
        article.append(bouton);
        section.append(img);
        section.append(article);
        document.body.append(section);
        document.body.append(hr);
        bouton.addEventListener("click",function(){
            sessionStorage.setItem("id",data.id);
            location.replace("film.html");
        })
    });      
});  




//https://api.themoviedb.org/3/movie/157336?api_key=c7bdda37a2ba81dce05c948bf57b042e&language=fr

//https://api.themoviedb.org/3/movie/157336/similar?api_key=c7bdda37a2ba81dce05c948bf57b042e&language=fr&page=1