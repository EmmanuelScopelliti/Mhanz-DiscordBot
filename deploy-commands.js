const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require("./config.json");

const commands = [
    new SlashCommandBuilder().setName('m').setDescription('replies with "Mhanz"'),
    new SlashCommandBuilder().setName('help').setDescription('replies with a list of commands'),
    new SlashCommandBuilder().setName('mhanz').setDescription('replies with an audio')
].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), {body: commands})
    .then(() => console.log('Commands updated'))
    .catch(console.error);