require('dotenv').config();
const fs = require('fs');
const { color } = require('./lib/myfunc');

const toBool = (value) => value === "true";

// Owner details
global.owner = process.env.OWNER_NUMBER;
global.nomerowner = process.env.OWNER_NUMBERS;

// Public mode
global.public = toBool(process.env.PUBLIC);

// Watermark
global.packname = process.env.PACK_NAME;
global.author = process.env.AUTHOR;

// Auto functions
global.unavailable = toBool(process.env.UNAVAILABLE);
global.available = toBool(process.env.AVAILABLE);
global.autoreadmessages = toBool(process.env.AUTO_READ_MESSAGES);
global.chatbot = toBool(process.env.CHATBOT);
global.autoreact = toBool(process.env.AUTO_REACT);
global.autoTyping = toBool(process.env.AUTO_TYPING);
global.autoViewStatus = toBool(process.env.AUTO_STATUS_VIEW);
global.autoStatusReact = toBool(process.env.AUTO_STATUS_REACT);
global.welcome = toBool(process.env.WELCOME);
global.anticall = toBool(process.env.ANTI_CALL);
global.autobio = toBool(process.env.AUTO_BIO);

// Prefix
global.prefix = process.env.PREFIX;

// Don't change this
global.antibot = false;

// Auto-reload config when file changes
let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(color(`Update '${__filename}'`));
    delete require.cache[file];
    require(file);
});