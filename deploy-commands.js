const { REST, SlashCommandBuilder, Routes, ChannelType } = require('discord.js');
const {clientId, token } = require('./config.json');

const commands = [
    new SlashCommandBuilder().setName('m').setDescription('Replies with a mhanz!'),
    new SlashCommandBuilder().setName('help').setDescription('Replies with a list of commands'),
    new SlashCommandBuilder().setName('arinza').setDescription('Play a cool song')
      .addChannelOption((option) =>
        option.setName('channel').setDescription('The channel to join').setRequired(true)
          .addChannelTypes(ChannelType.GuildVoice)
      ),
    new SlashCommandBuilder().setName('crisi').setDescription('a cit. from a man in the wood')
      .addChannelOption((option) =>
        option.setName('channel').setDescription('The channel to join').setRequired(true)
          .addChannelTypes(ChannelType.GuildVoice)
      ),
    new SlashCommandBuilder().setName('dimmi').setDescription('a cit. from Masseo')
      .addChannelOption((option) =>
        option.setName('channel').setDescription('The channel to join').setRequired(true)
          .addChannelTypes(ChannelType.GuildVoice)
      ),
    new SlashCommandBuilder().setName('emotional').setDescription('an emotional damage')
      .addChannelOption((option) =>
        option.setName('channel').setDescription('The channel to join').setRequired(true)
          .addChannelTypes(ChannelType.GuildVoice)
      ),
    new SlashCommandBuilder().setName('enio').setDescription('a cit. from Enio')
      .addChannelOption((option) =>
        option.setName('channel').setDescription('The channel to join').setRequired(true)
          .addChannelTypes(ChannelType.GuildVoice)
      ),
    new SlashCommandBuilder().setName('jojo').setDescription('a JoJo reference')
      .addChannelOption((option) =>
        option.setName('channel').setDescription('The channel to join').setRequired(true)
          .addChannelTypes(ChannelType.GuildVoice)
      ),
    new SlashCommandBuilder().setName('lecca').setDescription('another cit. from masseo')
      .addChannelOption((option) =>
        option.setName('channel').setDescription('The channel to join').setRequired(true)
          .addChannelTypes(ChannelType.GuildVoice)
      ),
    new SlashCommandBuilder().setName('lollo').setDescription('a cit. from Lollo')
      .addChannelOption((option) =>
        option.setName('channel').setDescription('The channel to join').setRequired(true)
          .addChannelTypes(ChannelType.GuildVoice)
      ),
    new SlashCommandBuilder().setName('mhanz').setDescription('surprise')
      .addChannelOption((option) =>
        option.setName('channel').setDescription('The channel to join').setRequired(true)
          .addChannelTypes(ChannelType.GuildVoice)
      ),
    new SlashCommandBuilder().setName('motm').setDescription('music of the month')
      .addChannelOption((option) =>
        option.setName('channel').setDescription('The channel to join').setRequired(true)
          .addChannelTypes(ChannelType.GuildVoice)
      ),
    new SlashCommandBuilder().setName('pezzo_di_merda').setDescription('an offense')
      .addChannelOption((option) =>
        option.setName('channel').setDescription('The channel to join').setRequired(true)
          .addChannelTypes(ChannelType.GuildVoice)
      ),
    new SlashCommandBuilder().setName('saluta').setDescription('a greeting')
      .addChannelOption((option) =>
        option.setName('channel').setDescription('The channel to join').setRequired(true)
          .addChannelTypes(ChannelType.GuildVoice)
      ),
    new SlashCommandBuilder().setName('spengo').setDescription('another cit. from a man in the wood')
      .addChannelOption((option) =>
        option.setName('channel').setDescription('The channel to join').setRequired(true)
          .addChannelTypes(ChannelType.GuildVoice)
      ),
    new SlashCommandBuilder().setName('ultra').setDescription('activate the ultra instinct')
      .addChannelOption((option) =>
        option.setName('channel').setDescription('The channel to join').setRequired(true)
          .addChannelTypes(ChannelType.GuildVoice)
      ),
    new SlashCommandBuilder().setName('ultratheme').setDescription('Dagonball theme')
      .addChannelOption((option) =>
        option.setName('channel').setDescription('The channel to join').setRequired(true)
          .addChannelTypes(ChannelType.GuildVoice)
      ),
]
    .map(command => command.toJSON());

const rest = new REST({ version: '10' })
  .setToken(token);

rest.put(
    Routes.applicationCommands(clientId),
  { body: commands })
  .then((data) => console.log(`Succesfully registered ${data.length} application commands.`))
  .catch(console.error);