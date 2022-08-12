const client = require("../index");

client.on("guildCreate", (guild) => {
    console.log("Entrei na guild: ",guild.name);
});
