let score1 =0;
let score2 = 0;


let player1_name = document.getElementById("player1js").innerHTML;

function generate1()
{
    document.getElementById("main-js").innerHTML = "its "+document.getElementById("player2js").innerHTML +"  turn";
    let rand1 = Math.floor(Math.random()*7);
    if(rand1==1)
    {
        document.getElementById("dice1-js").src = "https://i.ibb.co/0JTLjft/dice-six-faces-one.png";
    }
    else if(rand1==2)
    {
        document.getElementById("dice1-js").src = "https://i.ibb.co/qxFMFnp/dice-six-faces-two.png";

    }
    else if(rand1==3)
    {
        document.getElementById("dice1-js").src = "https://i.ibb.co/rp7FHT3/dice-six-faces-three.png";

    }
    else if(rand1==4)
    {
        document.getElementById("dice1-js").src = "https://i.ibb.co/wWmLxnm/dice-six-faces-four.png";

    }
    else if(rand1==5)
    {
        document.getElementById("dice1-js").src = "https://i.ibb.co/HYr9Rbj/dice-six-faces-five.png";

    }
    else if(rand1==6)
    {
        document.getElementById("dice1-js").src = "https://i.ibb.co/rc9DwYn/dice-six-faces-six.png";

    }
    else if(rand1==0)
    {
        document.getElementById("dice1-js").src = "https://img.freepik.com/free-vector/realistic-egg_1217-756.jpg";
    }
    score1 += rand1;

    document.getElementById("score1js").innerHTML =  score1;

    if(score1>40)
    {
        document.getElementById("dice1-js").src = "https://i.ibb.co/Bgvsmwb/happy.jpg";
        document.getElementById("dice2-js").src = "https://img.freepik.com/free-vector/gradient-sad-emoji-illustration_23-2150769968.jpg";
        document.getElementById("score1js").innerHTML =  0;
        document.getElementById("score2js").innerHTML =  0;
        document.getElementById("main-js").innerHTML = "Congratulations!! "+document.getElementById("player1js").innerHTML +" You Win Reload For A New Game";
    }

}


function generate2()
{
    document.getElementById("main-js").innerHTML = "its "+document.getElementById("player1js").innerHTML +"  turn";
    let rand2 = Math.floor(Math.random()*7);
    if(rand2==1)
    {
        document.getElementById("dice2-js").src = "https://i.ibb.co/0JTLjft/dice-six-faces-one.png";
    }
    else if(rand2==2)
    {
        document.getElementById("dice2-js").src = "https://i.ibb.co/qxFMFnp/dice-six-faces-two.png";

    }
    else if(rand2==3)
    {
        document.getElementById("dice2-js").src = "https://i.ibb.co/rp7FHT3/dice-six-faces-three.png";

    }
    else if(rand2==4)
    {
        document.getElementById("dice2-js").src = "https://i.ibb.co/wWmLxnm/dice-six-faces-four.png";

    }
    else if(rand2==5)
    {
        document.getElementById("dice2-js").src = "https://i.ibb.co/HYr9Rbj/dice-six-faces-five.png";

    }
    else if(rand2==6)
    {
        document.getElementById("dice2-js").src = "https://i.ibb.co/rc9DwYn/dice-six-faces-six.png";

    }
    else if(rand2==0)
    {
        document.getElementById("dice2-js").src = "https://img.freepik.com/free-vector/realistic-egg_1217-756.jpg";
    }
    score2 += rand2;
    document.getElementById("score2js").innerHTML =  score2;

    if(score2>40)
    {
        document.getElementById("dice2-js").src = "https://i.ibb.co/Bgvsmwb/happy.jpg";
        document.getElementById("dice1-js").src = "https://img.freepik.com/free-vector/gradient-sad-emoji-illustration_23-2150769968.jpg";
        document.getElementById("score1js").innerHTML =  0;
        document.getElementById("score2js").innerHTML =  0;
        document.getElementById("main-js").innerHTML = "Congratulations!! "+document.getElementById("player2js").innerHTML +" You Win Reload For A New Game";
    }


}