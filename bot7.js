const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', async() => {
var server = "493627472647028745"; // ايدي السررفر
var channel = "493628074685104130";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** كس امك يابيليـــن الشرموطة كس امك يابيليـــن الشرموطة كس امك يابيليـــن الشرموطة كس امك يابيليـــن الشرموطة كس امك يابيليـــن الشرموطة كس امك يابيليـــن الشرموطة  كس امك يابيليـــن الشرموطة كس امك يابيليـــن الشرموطة كس امك يابيليـــن الشرموطة **')
    },305);
})


client.on('ready', async() => {
var server = "506883940204675103"; // ايدي السررفر
var channel = "509340824333713418";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#daily')
    },8.64e+7);
})

client.on('ready', async() => {
var server = "506883940204675103"; // ايدي السررفر
var channel = "509340824333713418";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#rep <@314135031029170197>')
    },8.64e+7);
})


client.on('message', message => {
if(message.content.startsWith('7s')) {
if(message.author.id !== "306464381775118336") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});
 





client.login(process.env.BOT_TOKEN7); 
