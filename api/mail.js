var nodemailer = require('nodemailer');
const path = require('path');

var transporter  = nodemailer.createTransport({
    host: "p3p1cpn10803.prod.phx3.secureserver.net",
    port: 465,
    auth: {
      user: "arunbose@aligninfra.com",
      pass: "Amma@123"
    }
  });

const sendMail = (data, callback) => {
  var mailOptions = {
    from: 'arunbose@aligninfra.com',
    to: 'jishnuunnikrishnan97@gmail.com',
    subject: 'Career',
    html:htmlMaker(data),
    attachments: [
      {   
          filename: "Resume."+path.extname(data.filename),
          //content: data.resume,
          //encoding: 'base64'
          path:data.resume
      }]
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      callback(error, null)
    } else {
      callback(null, info)
    }
  });
}
function htmlMaker (data)
{
  var html ="";
  html+='<!DOCTYPE html><html lang="en">'
  html+='<body style="font-family: monospace;>';
  html+='<div style="margin: 7px; padding: 7px;">';
  html+='<div style=" margin: 3% 4%; padding: 30px; background-color: white;border-radius:10px;border:black solid 0.5px">';
  html+='<h1 style="text-align: center;margin-top: 0;">CAREER</h1>';          
  html+='<div style="padding: 7px;">';
  html+='<table style="width: 50%;margin: auto;">';
  html+='<tbody style="width:100%">';
  html+='<tr><td style="width:40%;text-align: left;"><b>First Name</b></td><td style="width:20%"><b>:<b></td><td style="width:40%;text-align: left;" >'+data.fullname+'</td></tr>';
  html+='<tr><td style="width:40%;text-align: left;"><b>Email ID</b></td><td style="width:20%"><b>:<b></td><td style="width:40%;text-align: left;" >'+data.email+'</td></tr>';
  html+='<tr><td style="width:40%;text-align: left;"><b>Date of Birth</b></td><td style="width:20%"><b>:<b></td><td style="width:40%;text-align: left;" >'+data.dob+'</td></tr>';
  html+='<tr><td style="width:40%;text-align: left;"><b>Preferred Job Categories</b></td><td style="width:20%"><b>:<b></td><td style="width:40%;text-align: left;">'+data.jobcategory+'</td></tr>';
  html+='<tr><td style="width:40%;text-align: left;"><b>Preferred Job Location</b></td><td style="width:20%"><b>:<b></td><td style="width:40%;text-align: left;" >'+data.location+'</td></tr>';
  html+='<tr><td style="width:40%;text-align: left;"><b>Current Annual Salary</b></td><td style="width:20%"><b>:<b></td><td style="width:40%;text-align: left;" >'+data.salary+'</td></tr>';
  html+='<tr><td style="width:40%;text-align: left;"><b>Mobile Number</b></td><td style="width:20%"><b>:<b></td><td style="width:40%;text-align: left;" >'+data.mobileno+'</td></tr>';
  html+='<tr><td style="width:40%;text-align: left;"><b>Permanent Address</b></td><td style="width:20%"><b>:<b></td><td style="width:40%;text-align: left;" >'+data.paddress+'</td></tr>';
  html+='<tr><td style="width:40%;text-align: left;"><b>Language</b></td><td style="width:20%"><b>:<b></td><td style="width:40%;text-align: left;" >'+data.language+'</td></tr>';
  html+='<tr><td style="width:40%;text-align: left;"><b>Professional Qualification</b></td><td style="width:20%"><b>:<b></td><td style="width:40%;text-align: left;" >'+data.proqualification+'</td></tr>';
  html+='<tr><td style="width:40%;text-align: left;"><b>Additional Qualification</b></td><td style="width:20%"><b>:<b></td><td style="width:40%;text-align: left;" >'+data.addqualification+'</td></tr>';
  html+='<tr><td style="width:40%;text-align: left;"><b>Key Skills</b></td><td style="width:20%"><b>:<b></td><td style="width:40%;text-align: left;" >'+data.skills+'</td></tr>';
  html+='<tr><td style="width:40%;text-align: left;"><b>Professional Experience</b></td><td style="width:20%"><b>:<b></td><td style="width:40%;text-align: left;" >'+data.proexp+'</td></tr>';
  html+='<tr><td style="width:40%;text-align: left;"><b>Any Other Specilization</b></td><td style="width:20%"><b>:<b></td><td style="width:40%;text-align: left;" >'+data.otherexp+'</td></tr>';
  
  html+='</tbody></table></div>';
  html+='<div style="margin-top: 25px; text-align: center; font-size: 10px;">';
  html+='<p style="color: #868585;">Do not reply to this message.This mailbox is not monitored</p>';
  html+='</div></div></div></body></html>';
  return html;
}
module.exports = sendMail;