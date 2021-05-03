const app = require('express')();
const config = require('./config')
const passport = require('passport')
var DiscordStrategy = require('passport-discord').Strategy;
const session = require('express-session')
const getBotGuilds  = require('./api.js')
const bot = new dbd.Bot({
token: config.token,
prefix: ['dash']
})
const bot_info = {
name: bot.client.user.username,
avatar: bot.client.user.avatarURL({ dynamic: true, size: 1024}),
tag: bot.client.user.tag,
id: bot.client.user.id
}
app.set('view engine', 'ejs')
app.get('/', (req,res) => {
res.render('index', {
bot: bot_info,
client: bot.client,
req: req,
avatar: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`
})
})
var scopes = ['identify', 'guilds', 'guilds.join'];
  app.use(session({
   secret: config.secret,
   resave: false,
   saveUninitialized: false,
   cookie: { 
       httpOnly: true,
       secure: false,
       maxAge: 48 * 60 * 60 * 1000, // cookies will last for 48h = 2 days after 2 days  you will be logged out
    },
 }))
  app.use(passport.initialize());
 app.use(passport.session());
 // pasport 
  passport.serializeUser(function (user,cb)  {
     cb(null, user);
     // db.set('user_' + user.id, user) <-- optional
  });
 
 
 
  passport.deserializeUser(function (id,cb) {
     cb(null, id);
     db.delete('user_' + id)
  });
 
 passport.use(new DiscordStrategy({
     clientID: config.id,
     clientSecret: config.secret,
     callbackURL: config.uri,
     scope: scopes
 },
 
 async function(accessToken, refreshToken, profile, cb) {
   cb(null, profile)
 // await db.set('last_user', profile)
  const guilds = profile.guilds

  const keys = [accessToken, refreshToken]
  const data = {akey: keys[1], rkey: keys[2] }
  if(guilds.length == 100) {
      return;
  }
 const adduser = require('./add.js');
  await adduser()
 }));

 const isAuth = (req,res,next) => {
     if(req.user) {
         next()
     } else {
          res.redirect('back')
     }
 }
 app.get('/auth/discord', passport.authenticate('discord'));
 app.get('/auth/discord/callback', passport.authenticate('discord', {
     failureRedirect: '/'
 }), function( 
     req, res) {
     res.redirect('/') // Successful auth
 });
