const client = require("../index");

client.on("ready", () => {
  //console.log(`bot is ready for work !!`);

  function randomStatus() {
    let status = [ 
    "Leu é gay",
    "fds",
    "Comer, beber agua e respirar",
    "Status",
    "Sussy imposter baka",
    ]
    let rstatus = Math.floor(Math.random() * status.length);

    client.user.setActivity(status[rstatus]);
  }; setInterval(randomStatus, 20000)
  

  console.log(`
      ╔══════════════════════════════╗
      ║                              ║
      ║       Aplicação pronta!      ║
      ║                              ║
      ╚══════════════════════════════╝`);

  console.log("A utilizar o aliases de ",client.user.tag)
  console.log("Dentro de ",client.guilds.cache.size," grupos")
  console.log("Dentro dos grupos:")
  client.guilds.cache.forEach(g =>{
    console.log("   ",g.name);
  })




  /*client.guilds.cache.forEach(g =>{
    console.log("=============================================================")
    console.log(g.commands)
  })

  let guilds = client.guilds.size;
  for(i=0;guilds=i;i++){
    
  }*/


});
