// Require the necessary discord.js classes
import { Client, GatewayIntentBits, Message } from 'discord.js';
import fetch from 'node-fetch';
import 'dotenv/config'
import { faker } from '@faker-js/faker';

// Create a new client instance

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessageReactions] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});


client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;
	
	const { commandName } = interaction;
	const bunnies = ["https://media.giphy.com/media/eMNaIlKXWAjsho9CbA/giphy.gif", "https://tenor.com/view/bunny-cute-squishy-gif-23788023", "https://media3.giphy.com/media/c7aiXUaT5MYDK/giphy.gif?cid=ecf05e470p71dvy9ropujv9nsbczna8nqb6r7ecisr6sjbys&rid=giphy.gif&ct=g"]
	
	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	} else if (commandName === 'grjt') {
		await interaction.reply("Number one stand up guy,  HE JUST GOT 7:02 PB ON HADES please come back for more grjt update later");
	} else if (commandName === 'realitycheck') {
		await interaction.reply("https://www.youtube.com/watch?v=41ckNivfT8I");
	} else if (commandName === 'michael') {
		await interaction.reply(`${bunnies[Math.floor(Math.random() * bunnies.length)]}`);
	} else if (commandName === 'fakename') {
		await interaction.reply(`${faker.name.findName()}`);
	} else if (commandName === 'moo') {
		await interaction.reply(`${faker.image.cats()}`);
	}	else if (commandName === 'gort') {
		await interaction.reply(`gort`);
	}	else if (commandName === 'skomp') {
		await interaction.reply(`skomp`);
	}
});


// youtube search api
client.on("messageCreate", message => {
  if (message.content.slice(0, 3) === "!yt") {
    let data = fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apikey}&type=video&q=${message.content.slice(3)}`)
      .then(response => response.json())
      .then(data => {
        client.channels.cache.get("726323960622350339").send(`https://www.youtube.com/watch?v=${data.items[0].id.videoId}`)
      })
  }
})


//responses

let arr = ["GAMING", "WE ARE GAMERS", "FUCK YEAH DUDE", "THIS IS VARIETY GAMING"]

const randomInd = (arr) => {
	let index = Math.floor(Math.random() * arr.length)
	return arr[index]
}

client.on("messageCreate", (message) => {

	if (message.content === "stupid fuck") {
		client.channels.cache.get("726323960622350339").send("you rang?")
	}
	else if (message.username !== "skomp" && message.content === "gaming" || message.content === "GAMING" || message.content === "Gaming") {
		client.channels.cache.get("726323960622350339").send(randomInd(arr))
	}
	else if (message.content === "gay") {
		client.channels.cache.get("726323960622350339").send("https://vxtwitter.com/chunghasbff/status/1554361317384851456?s=21&t=jy8xUUq0VefMgO31eu4mmg")
	}
	else if (message.content === "W" || message.content === "w") {
		client.channels.cache.get("726323960622350339").send("https://cdn.discordapp.com/attachments/726323960622350339/1004577038138617920/20220728_042642.jpg")
	}
	else if (message.content === "yo") {
		message.react("🦥")
	}

})


// pokemon api stuff

client.on("messageCreate", message => {
	if (message.content === "!pokemon") {
		let data = fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 200)}`)
			.then(response => response.json())
			.then(data => {
				client.channels.cache.get("726323960622350339").send(`${data.sprites.front_default}`)
			})
	}
})


// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);


