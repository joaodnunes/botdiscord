require("dotenv").config();
const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection
} = require("discord.js");
const { TOKEN } = require("./settings/config");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
  ],
});

// global variables
client.scommands = new Collection();
client.mcommands = new Collection();


module.exports = client;

// handlers
["event_handler","slash_handler","cmd_handler"].forEach((file) => {
  require(`./handlers/${file}`)(client);
});

// login bot
client.login(TOKEN);
