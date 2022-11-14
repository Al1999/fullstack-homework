const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Use middleware static() to serve all static files in the given folder
app.use(express.static('public'));

// Use middleware urlencoded() to parse an incoming request with a urlencoded payload and return an objectß
app.use(express.urlencoded({ extended: false }));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  res.end();
});
// POST request
app.post('/submit', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>Submitted Form</h1>`);
  let name = req.body.name;
  let email = req.body.email;
  let feedback = req.body.feedback;
  let check = req.body.check;
  res.write(`<p>Name: ${name}</p>`);
  res.write(`<p>Email: ${email}</p>`);
  res.write(`<p>Feedback: ${feedback}</p>`); 
  if (check == 'on') {
    res.write(`<p>Newsletter: Yes, sign me up for the newsletter</p>`);
  } else {
    res.write(`<p>Newsletter: No, Thank you!</p>`);
  }
  res.end();

});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
