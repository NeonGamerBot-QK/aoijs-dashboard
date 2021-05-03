const mongoose = require("mongoose");
const config = require('./config')
  mongoose.connect(config.monguri, {
   useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  keepAlive: true
})
const Schema = require("mongoose").Schema;
const schema = new Schema({
  key: Schema.Types.String,
  data: Schema.Types.String, // thats how it is ;-;
});
const bot_var = mongoose.model('main', schema);
function set(name, value) {
try {
    if(typeof name !== 'string') return console.error(`the name, ${JSON.stringify(name)} is not a string! `)
    if(typeof value !== 'string') return;
bot_var.updateOne({ key: name },{ $set: { data: value }}, function(err, res) {
  // Updated at most one doc, `res.modifiedCount` contains the number
  // of docs that MongoDB updated
  console.log(res)
});
// fetches a var
} catch (e) {
    return console.error(e)
}

} 
// below is unstable
async function get(name) {
    if(!name) return console.error('no name to find!')
if(typeof name !== 'string') return;
 try {
  const v =  bot_var.findOne({ key: name })
  return v;
} catch (e) {
    throw e;
}
}
module.exports = {
    set,
    get
}
