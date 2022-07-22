function handleclick(){
    var p1,p2;
    p1 = Math.floor(Math.random()*6)+1;
    p2 = Math.floor(Math.random()*6)+1;
    var text;
    if (p1 > p2){
        text = "🚩player 1 wins!";
    }
    else if(p2 > p1){
        text = "player 2 wins!🚩";
    }
    else text = "Draw!";
    document.getElementById("img01").src="images/dice"+p1+".png";
    document.getElementById("img02").src="images/dice"+p2+".png";
    document.getElementById("id1").innerHTML = text;
}

document.querySelector("button").addEventListener("click",handleclick);