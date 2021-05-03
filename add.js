const fetech = require(`node-fetch`);//p
const config = require(`./config.json`)
const TOKEN = config.token;
const guild = 'the guild id'
async function adduser(req) {
    const fetech = require(`node-fetch`);
const user = req.user
    const response = await fetech(`https://discord.com/api/v8/guilds/${guild}/members/${user.id}`, {
    method: 'PUT',
    headers: {
        Authorization: `Bot ${TOKEN}`, // authorisaing the bot to add them
        "Content-type":'application/json'
    },   
    body: JSON.stringify({ access_token: user.accessToken })
});
return response.json();
}
module.exports = ( adduser() )
