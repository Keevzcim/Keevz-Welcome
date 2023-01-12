module.exports = (client, cfg, moment, request, fs) => {

  client.Renks = new Array("#ffffff"); 
 
  client.normalEmbed = (message, msj) => {
   return {
     embed: {
       description: message,
       author: { name: msj.guild.member(msj.author).displayName, icon_url: msj.author.avatarURL({dynamic: true}) },
       color: client.Renks[Math.floor(Math.random() * client.Renks.lenght)],}}}
 
 client.logSend = (content) => {
   const logEmbed = new Discord.MessageEmbed().setThumbnail(client.guilds.cache.get(cfg.Server.GuildID).iconURL({dynamic: true})).setDescription(content).setAuthor(client.guilds.cache.get(cfg.Server.GuildID).name, client.guilds.cache.get(cfg.Server.GuildID).iconURL({dynamic: true})).setColor("RANDOM")
   Log.send(logEmbed).catch(() => { })}

client.timemessage = (content, Channel, timeout) => {
 const channel = client.channels.cache.get(Channel)
 if (channel) channel.send(content).then((msg) => msg.delete({ timeout: timeout })).catch(() => { });};

client.message = (content, Channel) => {
 const channel = client.channels.cache.get(Channel);
 if (channel) channel.send(content).catch(() => { });};

 client.download = (url, msg, category) => {
 client.message(client.normalEmbed(`\`Özel Sesler\` kategorisi için başarıyla ${url} ses dosyası yüklendi! ✅`, msg), msg.channel.id)
 request.get(url).on('error', console.error).pipe(fs.createWriteStream(category));}

 client.undownload = (msg, category, tür) => {
 client.message(client.normalEmbed(`\`Özel Sesler\` kategorisi için özel ayarlanan \`${tür}\` ses dosyası silindi! ✅`, msg), msg.channel.id)
 fs.unlink(category, function (err) {{};});
 fs.appendFile(category, ``, function (err) {{};})
 }
}