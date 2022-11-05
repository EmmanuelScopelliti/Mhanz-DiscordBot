const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus } = require('@discordjs/voice');
const { join } = require('node:path');
const { token } = require('./config.json');

const helpText = 'Text chat commands:' +
  '\nUse "/m" for a chat respose' +
  '\nUse "/help" for prompt this list' +
  '\n' +
  '\nVoice chat commands:' +
  '\nUse "/arinza" in a voice channel for a cool song' +
  '\nUse "/crisi" in a voice channel for a man in the wood' +
  '\nUse "/dimmi" in a voice channel for a cit. from Masseo' +
  '\nUse "/emotional" in a voice channel for an emotional damage' +
  '\nUse "/enio" in a voice channel for a "cagata pazzesca"' +
  '\nUse "/jojo" in a voice channel for a JoJo reference' +
  '\nUse "/lollo" in a voice channel for a cit. from Lollo' +
  '\nUse "/mhanz" in a voice channel for a surprise' +
  '\nUse "/motm" in a voice channel for music of the month' +
  '\nUse "/pezzo_di_merda" in a voice channel for an offense' +
  '\nUse "/saluta" in a voice channel for a greeting' +
  '\nUse "/spengo" in a voice channel for another man in the wood' +
  '\nUse "/ultra" in a voice channel in order to activate the ultra instinct' +
  '\nUse "/ultratheme" in a voice channel for theme in Dagonball';

function playSong(file, connection){
    const player = createAudioPlayer();
    let resource = createAudioResource(join(__dirname, file), { inlineVolume: true });
    resource.volume.setVolume(1);
    player.play(resource);
    connection.subscribe(player);

    player.on(AudioPlayerStatus.Idle, () => {
        player.stop();
        connection.destroy();
    });

    player.on('error', error => {
        console.error('error '+error.message+'with resource '+error.resource.metadata.title+'!');
    });
}
function joinChannel(interaction){
    const channel = interaction.options.getChannel('channel').id;
    return joinVoiceChannel({
        channelId: channel,
        guildId: interaction.guild.id,
        adapterCreator: interaction.guild.voiceAdapterCreator,
    });
}

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates
    ]
});

client.once('ready', () => {
    client.user.setActivity('/help', { type: ActivityType.Watching });
    client.user.setStatus('online');
    console.log('Online!');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    var connection;
    if (interaction.commandName === "m") {
        await interaction.reply({ content: 'Mhanz!', ephemeral: true });
    }
    else if(interaction.commandName === "help") {
        await interaction.reply({ content: helpText, ephemeral: true });
    }
    else {
        connection = await joinChannel(interaction);
        switch (interaction.commandName){
            case "arinza":
                playSong('src/ArinzaArunza.mp3', connection);
                break;
            case "crisi":
                playSong('src/crisi.mp3', connection);
                break;
            case "dimmi":
                playSong('src/Say.mp3', connection);
                break;
            case "emotional":
                playSong('src/emotional.mp3', connection);
                break;
            case "enio":
                playSong('src/enio.mp3', connection);
                break;
            case "jojo":
                playSong('src/Jojo.mp3', connection);
                break;
            case "lollo":
                playSong('src/lollo.mp3', connection);
                break;
            case "mhanz":
                playSong('src/zeb.mp3', connection);
                break;
            case "motm":
                playSong('src/motm.mp3', connection);
                break;
            case "pezzo_di_merda":
                playSong('src/scola.mp3', connection);
                break;
            case "saluta":
                playSong('src/saluta.mp3', connection);
                break;
            case "spengo":
                playSong('src/spengo.mp3', connection);
                break;
            case "ultra":
                playSong('src/Ultra.mp3', connection);
                break;
            case "ultratheme":
                playSong('src/UltraTheme.mp3', connection);
                break;
            default:
                interaction.reply({ content: 'Wrong command!', ephemeral: true });
        }
    }
});

client.login(token);