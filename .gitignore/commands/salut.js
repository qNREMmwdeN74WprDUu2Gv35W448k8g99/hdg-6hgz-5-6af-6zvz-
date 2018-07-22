exports.run = (bot, message, args, tools) => {
  
  random1()
  if (salut ==0){
      message.channel.send("Yooooooo");
      console.log(salut);
  }
  if (salut ==1){
      message.channel.send("Weshhh");
      console.log(salut);
  }

  if (salut ==2){
      message.channel.send("Bonsoir à tous les amiiiis pour ceux qui m’connaissent pas vos grands-mères les Bot qui mangent des saucisses !");
      console.log(salut);

  }

  function random1(min, max){
    min = Math.ceil(0);
    max = Math.floor(2);
    salut = Math.floor(Math.random() * (max - min +1)+ min);
}
}
 
  