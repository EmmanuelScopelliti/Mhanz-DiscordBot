const Discord = require("discord.js");
const { token, prefix } = require("./config.json");


const client = new Discord.Client({ 
    intents: [
        Discord.Intents.FLAGS.GUILD_MESSAGES, 
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS, 
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
    ],
});
new Discord.Permissions(BigInt(8));

var Hour, Min, Sec;

client.once("ready", () => {
    console.log("Online!");
    client.user.setActivity('!!help');
});
client.once("reconnecting", () => {
    console.log("Reconnecting!");
});

client.once("disconnect", () => {
    console.log("Disconnect!");
});
let queue = null;

function getDate() {
    Hour = new Date().getHours();
    Min = new Date().getMinutes();
    Sec = new Date().getSeconds();
    console.log(Hour + ":" + Min + ":" + Sec);
}

// a method to enqueue songs in Discord.js
function enqueue(song, songQueue) {
    if (null == songQueue) {
        songQueue = [];
        songQueue.push(song);
    } else {
        songQueue.push(song);
    }
    return songQueue;
}

async function playSong(message, songQueue) {
    console.log("Joining the channel ...");
    const connection = await message.member.voice.channel.join();
    console.log("Joined succesfully! At ");
    getDate();

    // console.log(songQueue[0]);
    const dispatcher = connection.play(songQueue[0]);
    console.log("Playing " + songQueue[0] + " at ");
    getDate();

    dispatcher.on("finish", () => {
        console.log("Finished playing " + songQueue[0] + " at ");
        getDate();
        dispatcher.destroy();
        songQueue.shift();
        if (0 < songQueue.length) {
            playSong(message, songQueue);
        } else {
            connection.voice.channel.leave();
        }
    });
}

// a method to skip the first song in the queue
async function skipSong(songQueue) {
    console.log("Skipping " + songQueue[0] + " at ");
    getDate();
    songQueue.shift();
    return songQueue;
}

// a method to loop the current song
async function playLoop(message, songQueue, times) {
    console.log("Looping " + songQueue[0] + " at ");
    getDate();
    for (var i = 0; i < times; i++) {
        songQueue.push(songQueue[0]);
        // playSong(message, songQueue);
    }
    playSong(message, songQueue);
    // return songQueue;
}

async function removeSong(songQueue, song) {
    if (song > songQueue.length) {
        console.log("Invalid position!");
    } else {
        console.log("Removing " + songQueue[song] + " at ");
        getDate();
        for (let i = 0; i < songQueue.length; i++) {
            if (songQueue[i] == song) {
                songQueue.splice(i, 1);
            }
        }
    }
    return songQueue;
}

async function leaveChannel(message, songQueue) {
    console.log("Leaving the channel ...");
    await message.member.voice.channel.leave();
    console.log("Left succesfully!");
    for (let i = 0; i < songQueue.length; i++) {
        songQueue.shift();
        // songQueue = null;
    }
    return songQueue;
}

async function createEmbed(songQueue) {
    const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Queue')
        .setAuthor({ name: 'Mhanz' })
        .setDescription('The queue is: ');
    for (let i = 0; i < queue.length; i++) {
        embed.addField({ name: 'Song', value: songQueue[i].title, inline: false });
    }
    return embed;
}

let x;
let song;

// read from discrod chat and check if the message is a command
client.on("message", async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content === `${prefix}m`) {

        message.channel.send('Mhanz!');
        console.log("Answered Succesfully! At ");
        getDate;

    } else if (message.content === `${prefix}help`) {

        message.channel.send('use "!!m" for a chat answer' +
            '\nuse "!!mhanz" in a voice channel for a surprise' +
            '\nuse "!!arinza" for a cool song' +
            '\nuse "!!lollo" for a cit from lollo' +
            '\nuse "!!ultra" in order to activate the Ultra Instinct' +
            '\nuse "!!ultratheme" for theme in Dragonball' +
            '\nuse "!!emotional" for an emotional damage' +
            '\nuse "!!saluta" for a greeting' +
            '\nuse "!!dimmi" for a Masseo cit.' +
            // '\nuse "!!dloop" for a Masseo cit. in loop' +
            '\nuse "!!jojo" for a JoJo reference' +
            '\nuse "!!enio" for a cagagta pazzesca' +
            '\nuse "!!pezzo di merda" for an offense' +
            '\nuse "!!spengo" for a man in the wood' +
            '\nuse "!!crisi" for another man in the wood' +
            '\nuse "!!motm" for music of the month');
        // '\nuse "!!motm" for music of the month' +
        // '\nuse "!!mloop" for a loop of the "mhanz" command');
        console.log("Answered Succesfully! At ");
        getDate;

    } else if (message.content === `${prefix}mhanz`) {

        if (message.member.voice.channel) {
            // var messageSong = await message.member.voice.channel;
            queue = enqueue('./src/zeb.mp3', queue);
            playSong(message, queue);

        } else {
            message.reply('you need to be in a voice channel!');
        }
    } else if (message.content === `${prefix}arinza`) {

        if (message.member.voice.channel) {
            // var messageSong = await message.member.voice.channel;
            queue = enqueue('./src/arinza.mp3', queue);
            playSong(message, queue);

        } else {
            message.reply('you need to be in a voice channel!');
        }
    } else if (message.content === `${prefix}lollo`) {

        if (message.member.voice.channel) {
            // var messageSong = await message.member.voice.channel;
            queue = enqueue('./src/lollo.mp3', queue);
            playSong(message, queue);

        } else {
            message.reply('you need to be in a voice channel!');
        }
    } else if (message.content === `${prefix}ultra`) {

        if (message.member.voice.channel) {
            // var messageSong = await message.member.voice.channel;
            queue = enqueue('./src/ultra.mp3', queue);
            playSong(message, queue);

        } else {
            message.reply('you need to be in a voice channel!');
        }
    } else if (message.content === `${prefix}ultratheme`) {

        if (message.member.voice.channel) {
            // var messageSong = await message.member.voice.channel;
            queue = enqueue('./src/ultratheme.mp3', queue);
            playSong(message, queue);

        } else {
            message.reply('you need to be in a voice channel!');
        }
    } else if (message.content === `${prefix}emotional`) {

        if (message.member.voice.channel) {
            // var messageSong = await message.member.voice.channel;
            queue = enqueue('./src/emotional.mp3', queue);
            playSong(message, queue);

        } else {
            message.reply('you need to be in a voice channel!');
        }
    } else if (message.content === `${prefix}saluta`) {

        if (message.member.voice.channel) {
            // var messageSong = await message.member.voice.channel;
            queue = enqueue('./src/saluta.mp3', queue);
            playSong(message, queue);

        } else {
            message.reply('you need to be in a voice channel!');
        }
    } else if (message.content === `${prefix}dimmi`) {

        if (message.member.voice.channel) {
            // var messageSong = await message.member.voice.channel;
            queue = enqueue('./src/Say.mp3', queue);
            playSong(message, queue);

        } else {
            message.reply('you need to be in a voice channel!');
        }
    } else if (message.content === `${prefix}jojo`) {

        if (message.member.voice.channel) {
            // var messageSong = await message.member.voice.channel;
            queue = enqueue('./src/Jojo.mp3', queue);
            playSong(message, queue);

        } else {
            message.reply('you need to be in a voice channel!');
        }
    } else if (message.content === `${prefix}enio`) {

        if (message.member.voice.channel) {
            // var messageSong = await message.member.voice.channel;
            queue = enqueue('./src/enio.mp3', queue);
            playSong(message, queue);

        } else {
            message.reply('you need to be in a voice channel!');
        }
    } else if (message.content === `${prefix}pezzo di merda`) {

        if (message.member.voice.channel) {
            // var messageSong = await message.member.voice.channel;
            queue = enqueue('./src/scola.mp3', queue);
            playSong(message, queue);

        } else {
            message.reply('you need to be in a voice channel!');
        }
    } else if (message.content === `${prefix}spengo`) {

        if (message.member.voice.channel) {
            // var messageSong = await message.member.voice.channel;
            queue = enqueue('./src/spengo.mp3', queue);
            playSong(message, queue);

        } else {
            message.reply('you need to be in a voice channel!');
        }
    } else if (message.content === `${prefix}crisi`) {

        if (message.member.voice.channel) {
            // var messageSong = await message.member.voice.channel;
            queue = enqueue('./src/crisi.mp3', queue);
            playSong(message, queue);

        } else {
            message.reply('you need to be in a voice channel!');
        }
    } else if (message.content === `${prefix}motm`) {

        if (message.member.voice.channel) {
            // var messageSong = await message.member.voice.channel;
            queue = enqueue('./src/motm.mp3', queue);
            playSong(message, queue);

        } else {
            message.reply('you need to be in a voice channel!');
        }
    } else if (message.content === `${prefix}skip`) {

        if (message.member.voice.channel) {
            // var messageSong = await message.member.voice.channel;
            queue = skipSong(queue);
            if (0 === queue.length) {
                message.reply('There are no songs in the queue!');
            } else {
                playSong(message, queue);
            }
        } else {
            message.reply('you need to be in a voice channel!');
        }
    } else if (message.content === `${prefix}loop ` + x + ``) {

        if (message.member.voice.channel) {
            // var messageSong = await message.member.voice.channel;
            playLoop(message, queue, x);

        } else {
            message.reply('you need to be in a voice channel!');
        }
    } else if (message.content === `${prefix}leave`) {

        if (message.member.voice.channel) {
            // var messageSong = await message.member.voice.channel;
            queue = leaveChannel(message, queue);

        } else {
            message.reply('you need to be in a voice channel!');
        }
    } else if (message.content === `${prefix}remove ` + song + ``) {
        if (message.member.voice.channel) {
            // var messageSong = await message.member.voice.channel;
            queue = removeSong(queue, song);

        } else {
            message.reply('you need to be in a voice channel!');
        }
    } else if (message.content === `${prefix}queue`) {
        if (message.member.voice.channel) {
            // var messageSong = await message.member.voice.channel;

            message.channel.send({ embeds: [createEmbed(queue)] });
        } else {
            message.reply('you need to be in a voice channel!');
        }
    }
});
client.login(token);
