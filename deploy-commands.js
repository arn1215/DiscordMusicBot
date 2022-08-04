import { SlashCommandBuilder, Routes } from 'discord.js'
import 'dotenv/config'
import { REST } from '@discordjs/rest';



const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
  new SlashCommandBuilder().setName('grjt').setDescription('Replies with grjt info!'),
  new SlashCommandBuilder().setName('realitycheck').setDescription('Get you some perspective sweaty'),
  new SlashCommandBuilder().setName('michael').setDescription('AYAYA'),
	new SlashCommandBuilder().setName('fakename').setDescription('get you a new name'),
	new SlashCommandBuilder().setName('moo').setDescription('what kinda dog is that?'),
	new SlashCommandBuilder().setName('gort').setDescription('gort'),
	new SlashCommandBuilder().setName('skomp').setDescription('skomp'),
]

	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);

