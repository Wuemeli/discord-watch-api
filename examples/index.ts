import DiscordWatchAPI from '../index';

const discordWatchAPI = new DiscordWatchAPI('your-api-key');

async function run() {
    const application = await discordWatchAPI.getApplication('application-id');
    console.log(application);

    const bot = await discordWatchAPI.getBot('bot-id');
    console.log(bot);

    const presence = await discordWatchAPI.getPresence('bot-id');
    console.log(presence);

    const applications = await discordWatchAPI.searchApplications('query');
    console.log(applications);
}

run();