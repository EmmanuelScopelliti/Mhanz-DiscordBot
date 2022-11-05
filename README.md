<div align="center">
  <br />
  <p>
    <a href="https://discord.js.org"><img src="https://discord.js.org/static/logo.svg" width="546" alt="discord.js" /></a>
  </p>
  <br />
  <p>
    <a href="https://discord.gg/djs"><img src="https://img.shields.io/discord/222078108977594368?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://discord.gg/tVq2w5cmyR"><img src="https://img.shields.io/discord/333319887223128065?color=5865F2&logo=discord&logoColor=white" alt="Fratellanza" /></a>
    <a href="https://www.npmjs.com/package/discord.js"><img src="https://img.shields.io/npm/v/discord.js.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/discord.js"><img src="https://img.shields.io/npm/dt/discord.js.svg?maxAge=3600" alt="NPM downloads" /></a>
  </p>
</div>

## Add this bot to your server

### this bot will do the same thing as a horn, but it will say "Mhanz"

#### [discord bot](https://discord.com/oauth2/authorize?client_id=826425108460863528&scope=bot) (V. 3.0.0)

## News!! 

#### Bot version 3.0 is out now !!
#### With Discord.js v14

## Feel free to personalize this bot

### Access the Portal and create a new bot

*  Access the [Discord Developer Portal](https://discord.com/developers/applications) with your Discord credentials.
  (do not be afraid, is a discord platform)
*  Create a new Application.
  (This would be the platform where you will be able to create your bot)
* Fill the **General Information** tab.
  (Here you can modify the name, the description, the icon of your bot and many other things)
* Fill the **OAuth2** tab. 
  * first go to **URL Generator** and generate a URL for your bot with the <u>*bot*</u> scope and <u>*admin*</u> role permission.
  * then copy the URL and paste it in the **General** Tab.
  * paste the link also in a new tab and invit the bot to your server.
* Now head to the **Bot** tab.
  * Give a *username* and an *icon* to your bot.
  * Copy the **Bot Token** and paste it somewhere you can access later.
* If you want, you can add a *cover image* to your bot in the **Rich Presence** tab and **Art Assets** subsection.
* You can also invite a friend in the **App Testers** tab.

### Set up your bot
* If you don't have it, download [Visual Studio](https://visualstudio.microsoft.com/it/downloads/), [visual studio code](https://code.visualstudio.com/download), [git](https://git-scm.com/downloads) and [node.js](https://nodejs.org/en/download/) and install them.
* On **Visual Studio**: install the "_Desktop Development with C++_" Workload;
* clone this repository in your local machine with the help of git documentation.
* open the local repository with **visual studio code**.
* now rename the file [myconfig.json](myconfig.json) to config.json and fill it with your prefix an token (the one you previously saved) and save (TIP: use ctrl+s or ⌘+s).
* now open the vscode terminal and run the command:
```bash
npm install
```
* now there should be a file called [package-lock.json](package-lock.json) in the repository.
* now run the command: `node Mhanz.js` and you should be able to see the bot in your server.

### Modify the bot
* You can modify the bot by editing the files [Mhanz.js](Mhanz.js) and [deploy-commands.js](deploy-commands.js)
* add your own slash commands in [deploy-commands.js](deploy-commands.js) with the class `slashCommandBuilder()`
* in [Mhanz.js](Mhanz.js), modify only the section inside the
```js
client.on('interactionCreate', async interaction => {
  // your code here
});
```
* you have to stop the bot by typing `ctrl+c` or `⌘+c` in the terminal, in order to apply the modifications.
* then run again the command: `node Mhanz.js`.

## About

discord.js is a powerful [Node.js](https://nodejs.org) module that allows you to easily interact with the
[Discord API](https://discord.com/developers/docs/intro).

- Object-oriented
- Predictable abstractions
- Performant
- 100% coverage of the Discord API

## Installation

**Node.js 16.9.0 or newer is required.**

```sh-session
npm install discord.js
yarn add discord.js
pnpm add discord.js
```

### Optional packages

- [zlib-sync](https://www.npmjs.com/package/zlib-sync) for WebSocket data compression and inflation (`npm install zlib-sync`)
- [erlpack](https://github.com/discord/erlpack) for significantly faster WebSocket data (de)serialisation (`npm install discord/erlpack`)
- [bufferutil](https://www.npmjs.com/package/bufferutil) for a much faster WebSocket connection (`npm install bufferutil`)
- [utf-8-validate](https://www.npmjs.com/package/utf-8-validate) in combination with `bufferutil` for much faster WebSocket processing (`npm install utf-8-validate`)
- [@discordjs/voice](https://www.npmjs.com/package/@discordjs/voice) for interacting with the Discord Voice API (`npm install @discordjs/voice`)

## Example usage

Install discord.js:

```sh-session
npm install discord.js
yarn add discord.js
pnpm add discord.js
```

Register a slash command against the Discord API:

```js
const { REST, Routes } = require('discord.js');

const commands = [
	{
		name: 'ping',
		description: 'Replies with Pong!',
	},
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();
```

Afterwards we can create a quite simple example bot:

```js
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'ping') {
		await interaction.reply('Pong!');
	}
});

client.login(TOKEN);
```

## Links

- [Website][website] ([source][website-source])
- [Documentation][documentation]
- [Guide][guide] ([source][guide-source])
  See also the [Update Guide][guide-update], including updated and removed items in the library.
- [discord.js Discord server][discord]
- [Discord API Discord server][discord-api]
- [GitHub][source]
- [npm][npm]
- [Related libraries][related-libs]

### Extensions

- [RPC][rpc] ([source][rpc-source])

## Contributing

Before creating an issue, please ensure that it hasn't already been reported/suggested, and double-check the
[documentation][documentation].  
See [the contribution guide][contributing] if you'd like to submit a PR.

## Help

If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle
nudge in the right direction, please don't hesitate to join our official [discord.js Server][discord].

[website]: https://discord.js.org/
[website-source]: https://github.com/discordjs/discord.js/tree/main/apps/website
[documentation]: https://discord.js.org/#/docs
[guide]: https://discordjs.guide/
[guide-source]: https://github.com/discordjs/guide
[guide-update]: https://discordjs.guide/additional-info/changes-in-v14.html
[discord]: https://discord.gg/djs
[discord-api]: https://discord.gg/discord-api
[source]: https://github.com/discordjs/discord.js/tree/main/packages/discord.js
[npm]: https://www.npmjs.com/package/discord.js
[related-libs]: https://discord.com/developers/docs/topics/community-resources#libraries
[rpc]: https://www.npmjs.com/package/discord-rpc
[rpc-source]: https://github.com/discordjs/RPC
[contributing]: https://github.com/discordjs/discord.js/blob/main/.github/CONTRIBUTING.md
