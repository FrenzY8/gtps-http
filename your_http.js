const http = require("http");
const { connect } = require("http2");
var blacklist = new Map();
let req_URL = "req.method";
let Post_Method = "POST";
let Get_Method = "GET";
const tanggal = new Date();
// then => {
// let res = "res";
// }
// eter and path
var eter = 0;
let path = "/growtopia/server_data.php";

const your_http = http.createServer(function(req, res) {
    // var koneksi = "connection";
var ip = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || 
req.connection.remoteAddress || 
req.socket.remoteAddress || 
req.connection.socket.remoteAddress  
    if (req_URL == path) {
        if (req.method = Get_Method) {
            var visit = 0;
            visit++;
            let ipAddress = req.connection.remoteAddress;
            ipAddress = ipAddress.split(/::ffff:/g).filter(a => a).join('');
            res.write(`
server|$ip
port|17091
type|1
#maint|Currently server is maintenance, try again later FrenzySG - Public HTTP     
#fixbug|Currently server is under repair, try again later :3                               

http_dns|servers.privategt.net
http_port|80
beta_server|127.0.0.1
beta_port|17091

solo_test|127.0.0.1
beta_port|17091
beta_type|1
meta|localhost
RTENDMARKERBS1001`);
            res.end();
            console.log(`
${tanggal}
=====================================
- Announcement
Ip : ${ipAddress}
Send a : ${req.method}
in : ${req.url}
- Ethernet
Receive : ${eter} Kbps, ${eter} Mbps, ${eter} Gbps
Sending : 0 Kbps, 0 Mbps, 0 Gbps
=====================================`);
        }
    } else {
        if(req_URL == Get_Method) {
            res.writeHead(302, "FrenzYXTeam");
            console.log(`
            ${tanggal}
=====================================
- Announcement
Send a : ${req.method}
in : ${req.url}
- Ethernet
Receive : ${eter} Kbps, ${eter} Mbps, ${eter} Gbps
Sending : 0 Kbps, 0 Mbps, 0 Gbps
=====================================`);
            res.write(`<!DOCTYPE html>
            <html>
    <body style="background-color:yellow;">
    <head>
    <marquee behavior="scroll" direction="left" scrollamount="5">Dm .FrenzySG#9999 on Discord to buy...</marquee>
    <title>FrenzYXTeam Protection (Version 1)</title>
    <h1 style="text-align:center;">FrenzYXTeam Protection</h1>
    <p style="text-align:center;">This Servers is Protected!</p>
            </body>
            </html>
            `);
            res.end();
        } else {
            console.log(`
            ${tanggal}
=====================================
- Announcement
Send a : ${req.method}
in : ${req.url}
- Ethernet
Receive : ${eter} Kbps, ${eter} Mbps, ${eter} Gbps
Sending : 0 Kbps, 0 Mbps, 0 Gbps
=====================================`);
            // `)
            res.writeHead(302, "FrenzYXTeam");
            res.write(`<!DOCTYPE html>
            <html>
    <body style="background-color:yellow;">
    <head>
    <marquee behavior="scroll" direction="left" scrollamount="5">Dm .FrenzySG#9999 on Discord to buy...</marquee>
    <title>FrenzYXTeam Protection (Version 1)</title>
    <h1 style="text-align:center;">FrenzYXTeam Protection</h1>
    <p style="text-align:center;">This Servers is Protected!</p>
            </body>
            </html>
            `);
            res.end();
        }
    }
})

your_http.listen(80)
console.log(`Waiting a logs...`)
