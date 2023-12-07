
var randomMax= 100
var total=0
function getRandomInt() {
    return valor= Math.floor(Math.random() * 100)
    
    
  }

function random(valor){
    if(valor === 1){
        var random=getRandomInt()
        console.log(random)
        total += random
        document.getElementById('uno').innerText= random;
        document.getElementById('resultado').innerText= total;
    }
    else if(valor === 2){
       var random=getRandomInt()
        console.log(random)
        total += random
        document.getElementById('dos').innerText= random;
        document.getElementById('resultado').innerText= total;
    }
    else if(valor === 3){
        var random=getRandomInt()
        console.log(random)
        total += random
        document.getElementById('tres').innerText= random;
        document.getElementById('resultado').innerText= total;
    }
    else if(valor === 4){
        var random=getRandomInt()
        console.log(random)
        total += random
        document.getElementById('cuatro').innerText= random;
        document.getElementById('resultado').innerText= total;
    }
    else if(valor === 5){
        var random=getRandomInt()
        console.log(random)
        total += random
        document.getElementById('cinco').innerText= random;
        document.getElementById('resultado').innerText= total;
    }
    else if(valor === 6){
        var random=getRandomInt()
        console.log(random)
        total += random
        document.getElementById('seis').innerText= random;
        document.getElementById('resultado').innerText= total;
    }
    else if(valor === 7){
        var random=getRandomInt()
        console.log(random)
        total += random
        document.getElementById('siete').innerText= random;
        document.getElementById('resultado').innerText= total;
    }
    else if(valor === 8){
        var random=getRandomInt()
        console.log(random)
        total += random
        document.getElementById('ocho').innerText= random;
        document.getElementById('resultado').innerText= total;
    }
    else if(valor === 9){
        var random=getRandomInt()
        console.log(random)
        total += random
        document.getElementById('nueve').innerText= random;
        document.getElementById('resultado').innerText= total;
    }
}  

  
  function sobreponer(valor){
        if(valor === 1){
            document.getElementById('uno').innerText= 'X';
        }
        else if(valor === 2){
            document.getElementById('dos').innerText= 'X';
        }
        else if(valor === 3){
            document.getElementById('tres').innerText= 'X';
        }
        else if(valor === 4){
            document.getElementById('cuatro').innerText= 'X';
        }
        else if(valor === 5){
            document.getElementById('cinco').innerText= 'X';
        }
        else if(valor === 6){
            document.getElementById('seis').innerText= 'X';
        }
        else if(valor === 7){
            document.getElementById('siete').innerText= 'X';
        }
        else if(valor === 8){
            document.getElementById('ocho').innerText= 'X';
        }
        else if(valor === 9){
            document.getElementById('nueve').innerText= 'X';
        }
  }

  function clean(valor){
    if(valor === 1){
        document.getElementById('uno').innerText= ' ';
    }
    else if(valor === 2){
        document.getElementById('dos').innerText= ' ';
    }
    else if(valor === 3){
        document.getElementById('tres').innerText= ' ';
    }
    else if(valor === 4){
        document.getElementById('cuatro').innerText= ' ';
    }
    else if(valor === 5){
        document.getElementById('cinco').innerText= ' ';
    }
    else if(valor === 6){
        document.getElementById('seis').innerText= ' ';
    }
    else if(valor === 7){
        document.getElementById('siete').innerText= ' ';
    }
    else if(valor === 8){
        document.getElementById('ocho').innerText= ' ';
    }
    else if(valor === 9){
        document.getElementById('nueve').innerText= ' ';
    }
  }

