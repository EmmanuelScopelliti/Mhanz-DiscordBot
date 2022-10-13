const { REST, SlashCommandBuilder, Routes } = require('discord.js');
const {clientId, token } = require('./config.json');

const commands = [
    new SlashCommandBuilder().setName('m').setDescription('Replies with a mhanz!'),
    new SlashCommandBuilder().setName('help').setDescription('Replies with a list of commands'),
    new SlashCommandBuilder().setName('arinza').setDescription('Play a cool song'),
    new SlashCommandBuilder().setName('crisi').setDescription('a cit. from a man in the wood'),
    new SlashCommandBuilder().setName('dimmi').setDescription('a cit. from Masseo'),
    new SlashCommandBuilder().setName('emotional').setDescription('an emotional damage'),
    new SlashCommandBuilder().setName('enio').setDescription('a cit. from Enio'),
    new SlashCommandBuilder().setName('jojo').setDescription('a JoJo reference'),
    new SlashCommandBuilder().setName('lollo').setDescription('a cit. from Lollo'),
    new SlashCommandBuilder().setName('mhanz').setDescription('surprise'),
    new SlashCommandBuilder().setName('motm').setDescription('music of the month'),
    new SlashCommandBuilder().setName('pezzo_di_merda').setDescription('an offense'),
    new SlashCommandBuilder().setName('saluta').setDescription('a greeting'),
    new SlashCommandBuilder().setName('spengo').setDescription('another cit. from a man in the wood'),
    new SlashCommandBuilder().setName('ultra').setDescription('activate the ultra instinct'),
    new SlashCommandBuilder().setName('ultratheme').setDescription('Dagonball theme'),
]
    .map(command => command.toJSON());

const rest = new REST({ version: '10' })
  .setToken(token);

rest.put(
    Routes.applicationCommands(clientId),
  { body: commands })
  .then((data) => console.log(`Succesfully registered ${data.length} application commands.`))
  .catch(console.error);