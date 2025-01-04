/*
'It is certain'
'It is decidedly so'
'Reply hazy try again'
'Cannot predict now'
'Do not count on it'
'My sources say no'
'Outlook not so good'
'Signs point to yes'
If the randomNumber is 0, then save an answer to 
the eightBall variable; 
if randomNumber is 1, then save the next answer, and so on. 
If you’re feeling creative, make your own responses!
*/



let randomNumber=Math.floor(Math.random()*8);
let eightBall='';



if(randomNumber===0){
    eightBall='It is certain';
    console.log(eightBall);
} else if (randomNumber===1) {
    eightBall='It is decidedly so';
    console.log(eightBall);
} else if(randomNumber===2) {
    eightBall='Reply hazy try again';
    console.log(eightBall);
}else if(randomNumber===3) {
    eightBall='Cannot predict now';
    console.log(eightBall);
}else if(randomNumber===4) {
    eightBall='Do not count on it';
    console.log(eightBall);
}else if(randomNumber===5) {
    eightBall='My sources say no';
    console.log(eightBall);
}else if(randomNumber===6) {
    eightBall='Outlook not so good';
    console.log(eightBall);
} else {
    eightBall='Signs point to yes';
    console.log(eightBall);
}