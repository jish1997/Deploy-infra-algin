const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
const sendMail = require('./api/mail');
const path = require('path');
const app = express();
app.use(cors())
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// API
app.post('/submitCareer', (req, res) => {
    console.log(req.body.filename);
    sendMail(req.body,(err, data) => {
        if(err) {
            res.status(500).json({ message : "Internal Error",status:500 });
        }else {
            res.json({message : data, status:200});
        }
    });
})
// Serve static assets if in production
//if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
//}
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});