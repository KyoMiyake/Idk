const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('messageCreate', msg => {
 if (msg.content === '!AvaBeLike') {
 msg.reply('Ava be like "I like penis"');
 }
 });
client.on('messageCreate', msg => {
 if (msg.content === '!AmongUs') {
 msg.reply('STOP POSTING ABOUT AMONG US! I’M TIRED OF SEEING IT! MY FRIENDS ON TIKTOK SEND ME MEMES, ON DISCORD IT’S FUCKING MEMES! I was in a server, right? and ALL OF THE CHANNELS were just among us stuff. I-I showed my champion underwear to my girlfriend and t-the logo I flipped it and I said "hey babe, when the underwear is sus HAHA DING DING DING DING DING DING DING DI DI DING" I fucking looked at a trashcan and said "THAT’S A BIT SUSSY" I looked at my penis I think of an astronauts helmet and I go "PENIS? MORE LIKE PENSUS" AAAAAAAAAAAAAAHGESFG');
 }
 });
client.on('messageCreate', msg => {
 if (msg.content === '!Shrek2') {
 msg.reply('https://cdn.discordapp.com/attachments/870808823252783215/939655591310278756/Shrek_2.webm');
 }
 });
client.on('messageCreate', msg => {
 if (msg.content === '!SpongeBob') {
 msg.reply('https://cdn.discordapp.com/attachments/809694292288602124/939102674811490314/sbob_movie-1.mp4');
 }
 });
client.login('OTQwMTcyNTI0ODQ5ODcyOTA2.YgDh5Q._LZSIj6-gXNrtdqJz5euMtLvPio');