const { AoiClient } = require("aoi.js");

const client = new AoiClient({
  token: "token",
  prefix: "!",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "a-32-characters-long-string-here",
  }
});

client.loadCommands("./commands/", true);

client.variables({
  blacklisted: false,
  subs: 0,
  developers: {},
  title: "none",
});

client.variables(
  {
    blacklisted: false,
    like: 0,
    developers: {},
    title: "none",
  },
  "main",
);

client.variables({
  blacklisted: false,
  comm: 0,
  developers: {},
  title: "none",
});

client.variables({
  blacklisted: false,
  donate: 0,
  developers: {},
  title: "none",
});

client.variables({
    blacklisted: false,
    money: 666440,
    developers: {},
    title: "none",
});

client.variables({
    blacklisted: false,
    bronze: "❌",
    developers: {},
    title: "none",
});

client.variables({
    blacklisted: false,
    iron: "❌",
    developers: {},
    title: "none",
});

client.status({

  name: "meow <3",

  type: "PLAYING",

  status: "idle",



});