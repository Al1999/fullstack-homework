const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 5001;

// Add your code here

// Use the express-session module
app.use(session({
  'store': new session.MemoryStore(),
  'secret': 'scrtttttt',
  'resave': false,
  'saveUninitialized': false,
  'cookie': { 
    'maxAge': 86400000,
  }
}));

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  req.session.route = `${req.originalUrl}`;
  console.log(req.session);
  res.write('<p>Currently on route: ' + req.session.route + '</p>');
  res.write('<p>Welcome to ' + `${req.protocol}://${req.header('host')}${req.originalUrl}` + '</p>');
  res.end();
});

app.get('*', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  req.session.route = `${req.originalUrl}`;
  res.write('<p>Currently on route: ' + req.session.route + '</p>');
  let list = req.sessionStore.sessions; 
  let len = Object.keys(list).length;
  if (len > 0 ) {
      let rl = [];
      let b = Object.values(list);
      let len2 = b.length;
      for (i=0;i<len2;i++){
        let r = b[i].split(',');
        r = r[4].split(':');
        r = r[1].replace('}','')
        r = r.replace('"','')
        r = r.replace('"','')
        rl.push(r);
        // console.log(r);
        
      }
      let len3 = rl.length;
      res.write(`<p>Previously visited:</p>`);
      for (i=0;i<len3;i++) {
        res.write(`<li> ${rl[i]}  </li>`);
      }  
  }
  res.end();
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
