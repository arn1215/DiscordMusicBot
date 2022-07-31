// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config()


const bunnies = ["https://media.giphy.com/media/eMNaIlKXWAjsho9CbA/giphy.gif", "https://tenor.com/view/bunny-cute-squishy-gif-23788023", "https://media3.giphy.com/media/c7aiXUaT5MYDK/giphy.gif?cid=ecf05e470p71dvy9ropujv9nsbczna8nqb6r7ecisr6sjbys&rid=giphy.gif&ct=g" ]
// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});


client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	} else if (commandName === 'grjt') {
		await interaction.reply("Number one stand up guy, please come back for more grjt update later");
	} else if (commandName === 'realitycheck') {
		await interaction.reply("https://www.youtube.com/watch?v=41ckNivfT8I");
	} else if (commandName === 'michael') {
		await interaction.reply(`${bunnies[Math.floor(Math.random()*bunnies.length)]}`);
	}
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);


