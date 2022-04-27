let n=0;
while(n==0){
    let b=null;
    let c=null;
    let d=null;
    let p=0;
    let a= prompt("Choisissez entre addition, soustraction, multiplication ou division");
    if(a){
        a= a.toLowerCase();
    }
    switch(a){
        case ("addition"):
            while(!b || b==null){
                b = prompt("Entrez un chiffre");
            }
            b= parseFloat(b);
            while(!c || c==null){
                c = prompt("Entrez un deuxieme chiffre");
            }
            c= parseFloat(c);
            alert(add(b,c));
            break;
        case ("soustraction"):
            while(!b || b==null){
                b = prompt("Entrez un chiffre");
            }
            b= parseFloat(b);
            while(!c || c==null){
                c = prompt("Entrez un deuxieme chiffre");
            }
            c= parseFloat(c);
            alert(sous(b,c));
            break;
        case ("multiplication"):
            while(!b || b==null){
                b = prompt("Entrez un chiffre");
            }
            b= parseFloat(b);
            while(!c || c==null){
                c = prompt("Entrez un deuxieme chiffre");
            }
            c= parseFloat(c);
            alert(mult(b,c));
            break;
        case ("division"):
            while(!b || b==null){
                b = prompt("Entrez un chiffre");
            }
            b= parseFloat(b);
            c = prompt("Entrez un deuxieme chiffre");
            while(!c || c==null){
                c = prompt("Entrez un deuxieme chiffre");
            }
            c= parseFloat(c);
            if(c==0){
                alert("division par 0 impossible");
            }
            else {
                alert(div(b,c));
            }
            break;
        default:
            p=1;
            break;
    }
    if(p==0){
        d= prompt("Voulez-vous recommencer? Oui/Non");
        let m=0;
        if(d){
            d=d.toLowerCase();
        }
        while(m==0){
            switch(d){
                case "oui":
                    m=1;
                    break;
                case "non":
                    m=1;
                    n=1;
                    break;
                default:
                    d= prompt("Voulez-vous recommencer? Oui/Non");
                    break;
            }
        } 
    }
        
}

function add(a,b){
    return a+b;
}
function sous(a,b){
    return a-b;
}
function mult(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
let mot ="Gabriel Ortega";
