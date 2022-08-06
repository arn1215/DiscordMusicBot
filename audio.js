// Require the necessary discord.js classes
import { Client, DiscordAPIError, GatewayIntentBits, Message, VoiceChannel } from 'discord.js';
import {
	joinVoiceChannel,
	createAudioPlayer,
	createAudioResource,
	entersState,
	StreamType,
	AudioPlayerStatus,
	VoiceConnectionStatus,
}

const client = new Discord.Client();
const player = createAudioPlayer();

function playSong() {
    let resource = createAudioResource(join(__dirname, 'E://Documents//jam.mp3'));
	
	

	player.play(resource);

	return entersState(player, AudioPlayerStatus.Playing, 5e3);
}


client.on('ready', () => {
    let channel = client.channels.get('726323960622350340');
    channel.join()
    playSong()
  });

