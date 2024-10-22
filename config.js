const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "https://trendybeatz.com" ;  
global.video= "www.youtube.com" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email =""
global.location="Africa,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/calabar";
global.github=process.env.GITHUB|| "https://chat.whatsapp.com/KEG60dJcOVVH4kbGkwUkKE";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/KEG60dJcOVVH4kbGkwUkKE";
global.website=process.env.GURL || "https://chat.whatsapp.com/KEG60dJcOVVH4kbGkwUkKE" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d2b7e8ddee4ff96395242.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝔼MMY HENZ²²¹-𝕏-𝕎ℍ𝔸𝕋𝕊𝔸ℙℙ 𝔹𝕆𝕋!" 


global.devs = "2349125042727" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349125042727";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/cf7a4f512266ede997652.mp4" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234912504272";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349125042727,923xxxxxxxx";

global.api_smd = "https://chat.whatsapp.com/KEG60dJcOVVH4kbGkwUkKE" //  || "https://https://chat.whatsapp.com/KEG60dJcOVVH4kbGkwUkKE" // expires
global.scan = "https://chat.whatsapp.com/KEG60dJcOVVH4kbGkwUkKE";


global.SESSION_ID = process.env.SESSION_ID  || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0pVMmhsaXJnVTc2cit0S2h0bWFJTDhuWis4MVFnNVlPMWkzV09pc1JrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1E3S0QwL3VVMHh1bjU4NjZDQWpEVkUxNHp4WW9JQUVVOURna21EYUwwVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDUFhvdzFKd3VZZnBUandUeGlVUm5BM3BwdTByUm52SnNESGhYWCtYdldJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1aWdseEFWVFNUeWVOV0VJNnlXRWg1clBHQ0ZQazhxT2h5amgwQlhDY1hrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhPMGphRXB5YndxbDB3SGk0OEdBZy9PTjRKZVh1UFZKek5HY2RFZFBYbkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdmVmNYblo4dWUvd2tHZWFLMUNwaUcrRXFmdEtHa3FOWkc2NUoyZytqQms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUNMWk1IbUs3RDZEdlpKT0J5c0RzSk1rdWZpaWpyS3h6TW9aelY3b2tFST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1J1VVloaitNQXlEK3N5aGhKSi95bDhwS3NEczB5WXhUcUVWVVRrWkpBbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjYvTlVCdUFNaFBqbWJ3Z1BzVWpRNXl3Z0pMRVArRzlxaU9yZEV2WkhCVklFSVorYW51ZTBGN2VML0lHbER1ZTlBR0lSQVhRWk5sZkdpdWpCYVVqQUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIzLCJhZHZTZWNyZXRLZXkiOiJMTFFtc1pRVDhyNjVJUVVYWWUvRWwrazNiQ3hLSVVRY2I5OXQ1K0tIWHdVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtNVdWdGJ6ZlRkZVY0akJWa3pVQWNBIiwicGhvbmVJZCI6ImY1OTJlMTVhLTgzNGUtNDQ5YS04Y2QzLWVhZjM0NGY2M2M4NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TnI3Nm5uUnJHcTZuMWU4eTd3OUVJUWduT2c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1RNcm1haHBJNjlvQkplYnZ4ek9Nb0YwdWlRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ikw4SENSSjVBIiwibWUiOnsiaWQiOiIyMzQ3MDcxOTc1MzU3OjVAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tQVjlKMEhFTlhCMzdnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Inlkb0tQRkVDSVd5U2FGalJHbG82WW9DbHRIeUNIQ01BOGE2cTRCQk5Id3M9IiwiYWNjb3VudFNpZ25hdHVyZSI6InZUUTcwalcyK1U2MFd4cmhDczlaMEUzN202M2pmYTNKUXhLTzBDd1ExYVp2RENMWGNOeHVpZ3lCVEJnZSswelhLT3RqSStvNnEzT2VIL294b1JNYUJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJXTjhlam05aFAwTVpiS05XditzQ1c3MDJGWjl4VXpTUWtCKzRJaVl5RUlnS3dJMkx5TURpS0VyQUdlWDJsRTI3M2pGVTVJZGJLWGVDTlhXM3JBTUNEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNzE5NzUzNTc6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjbmFDanhSQWlGc2ttaFkwUnBhT21LQXBiUjhnaHdqQVBHdXF1QVFUUjhMIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5NjE4MTQ2fQ=="

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝔼MMY HENZ-𝕍1👑 』```", //*『sᴜʙsᴄʀɪʙᴇ • 𝔼MMY HENZ-𝕍1👑』*\n youtube.com/"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝔼MMY HENZ MEDIA-𝕍1👑",
  ownername:process.env.OWNER_NAME|| "𝔼MMY HENZ👑",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝔼MMY HENZ-𝕍1👑"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
