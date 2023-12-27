# Discord Watch API

This is a Node.js package for interacting with the Discord Watch API. It provides a simple and easy-to-use interface for fetching data from the Discord Watch API.

## Installation

You can install this package using npm:

```bash
npm install discord-watch-api
```

## Usage

First, import the `DiscordWatchAPI` class from the package:

```javascript
import DiscordWatchAPI from 'discord-watch-api';
```

Then, create a new instance of the `DiscordWatchAPI` class, passing your API key as a parameter to the constructor:

```javascript
const discordWatchAPI = new DiscordWatchAPI('your-api-key');
```

Now you can use the methods provided by the `DiscordWatchAPI` class to interact with the Discord Watch API. Here are some examples:

```javascript
// Get an application by its ID
const application = await discordWatchAPI.getApplication('application-id');
console.log(application);

// Get a bot by its ID
const bot = await discordWatchAPI.getBot('bot-id');
console.log(bot);

// Get a presence by its ID
const presence = await discordWatchAPI.getPresence('bot-id');
console.log(presence);

// Search for applications
const applications = await discordWatchAPI.searchApplications('query');
console.log(applications);
```

## Methods

The `DiscordWatchAPI` class provides the following methods:

- `getApplication(id: string)`: Fetches an application by its ID.
- `getBot(id: string)`: Fetches a bot by its ID.
- `getPresence(id: string)`: Fetches a presence by its ID.
- `searchApplications(query: string, after_id?: string, sort?: string, after_sort?: number, limit?: number)`: Searches for applications.

All methods are asynchronous and return a Promise that resolves with the data from the Discord Watch API.

## Examples
Examples can be found in the `examples` directory.

## License

This package is licensed under the MIT License. See the `LICENSE` file for more details.
