exports.run = (bot, message, args, tools) => {
  
    random2()
if (scar ==0){
    message.channel.send("Il te reste 2 coffres avant de trouver une scar");
    console.log(salut);
}
if (scar ==1){
    message.channel.send("Il te reste 3 coffres avant de trouver une scar");
    console.log(scar);
}

if (scar ==2){
    message.channel.send("Tu trouveras une scar dans ton prochain coffre");
    console.log(scar);
}
function random2(min, max){
    min = Math.ceil(0);
    max = Math.floor(2);
    scar = Math.floor(Math.random() * (max - min +1)+ min);
}
}