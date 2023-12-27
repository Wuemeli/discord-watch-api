import axios from 'axios';

class DiscordWatchAPI {
    private apiKey: string;
    private baseURL: string = 'https://discord.watch/api/v2';

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async getApplication(id: string) {
        try {
            const response = await axios.get(`${this.baseURL}/applications/${id}`, {
                headers: {
                    authorization: this.apiKey
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async getBot(id: string) {
        try {
            const response = await axios.get(`${this.baseURL}/bots/${id}`, {
                headers: {
                    authorization: this.apiKey
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async getPresence(id: string) {
        try {
            const response = await axios.get(`${this.baseURL}/presence/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async searchApplications(query: string, after_id?: string, sort?: string, after_sort?: number, limit?: number) {
        try {
            const response = await axios.get(`${this.baseURL}/search/applications`, {
                params: {
                    q: query,
                    after_id: after_id,
                    sort: sort,
                    after_sort: after_sort,
                    limit: limit
                },
                headers: {
                    authorization: this.apiKey
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default DiscordWatchAPI;