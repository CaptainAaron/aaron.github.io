let typer1 = document.getElementsByClassName("typer1")[0];
let dd = document.getElementsByClassName("holder")[0];

dd.style.opacity = 0;

function waiting(){ //function does nothing
    let db = 1
}


function animateholder(){
    let ani = dd.animate({ opacity: 1 }, 500);
    ani.onfinish = (event) => {
        dd.style.opacity = 1;
      };
};

let db = 1
function typer1func(){
    if (db===1){
        typer1.innerHTML = 'Welcome<br>I|'
        db = 2
    }else if(db===2){
        typer1.innerHTML = "Welcome<br>I'|"
        db = 3
    }else if(db===3){
        typer1.innerHTML = "Welcome<br>I'm|"
        db = 4
    }else if(db===4){
        typer1.innerHTML = "Welcome<br>I'm A|"
        db = 5
    }else if (db===5){
        typer1.innerHTML = "Welcome<br>I'm Aa|"
        db = 6
    }else if(db===6){
        typer1.innerHTML = "Welcome<br>I'm Aar|"
        db = 7
    }else if(db===7){
        typer1.innerHTML = "Welcome<br>I'm Aaro|"
        db = 8
    }else if(db===8){
        typer1.innerHTML = "Welcome<br>I'm Aaron"
        db = 1
        setTimeout(animateholder, 800)
        clearInterval(intervaltyper1)
    }
    
};

function Aaron(){
    intervaltyper1 = setInterval(typer1func, 150);
};

setTimeout(Aaron, 1500);
