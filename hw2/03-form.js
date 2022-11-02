/** Exercise 03 - Form **/

// Add your code here
const http = require('http');
const quarystring = require('node:querystring');
const port = process.env.PORT || 5001;


const HTMLform = `<html><head><title>Form</title></head><body>
<form method="POST" action="/submit">
  <label for="name">Name*</label>
  <input type="text" class="form-control" name="name" id="name" aria-describedby="name" placeholder="Enter name"><br/>

  <label for="email">Email*</label>
  <input type="email" class="form-control" name="email" id="email" placeholder="Email"><br/>

  <label class="form-check-label" for="exampleCheck1" >Submit your message:</label>
  <textarea type="text" class="form-control" name="message" id="message" placeholder="Enter feedback" rows="5"></textarea><br/>

  <input type="checkbox" class="form-check-input" name="check" id="Check1" >
  <label class="form-check-label" for="Check1" >Sign up for the newsletter</label><br/>

  <input type='submit' value='Submit'>

</form></body></html>`

const server = http.createServer((req, res) => {
    
    let url = new URL(req.url, `http://${req.headers.host}`);

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<h1>Exercise 03</h1>`);
        res.write(`<a href="${'/form'}">${'/form'}</a>`);
    }

    else if (req.method === 'GET' && req.url === '/form') {
        res.writeHead(200);
        res.end(HTMLform);
    }

    else if (req.method === 'POST' && req.url === '/submit') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<h1>Submitted Form</h1>`);
        let body = '';
        req.on('data', (chunk) => {
            body += chunk ;
            
            const fo = body.split('&');
            const name = fo[0].split('=')[1];
            const email = fo[1].split('=')[1];
            const feedback = fo[2].split('=')[1];
            
            res.write(`<p>Name: ${name}</p>`);
            res.write(`<p>Email: ${email}</p>`);
            res.write(`<p>Feedback: ${feedback}</p>`); 
            res.end(); 
        });
        return ;
    }

    res.end();
});
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });


  function Form() {

    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let feedback = document.querySelector('#message').value;
    let newsletter = document.querySelector('#Check1').value;
    
    console.log('========= form Submission =========')
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    if (feedback == ''){
        console.log(`Feedback: no feedback was submitted.`);

    } else {
        console.log(`Feedback: ${feedback}`);
    }
    if (newsletter == 'on') {
        console.log(`Newsletter: Yes, I would like to join the newsletter!`);
    } else {
        console.log(`Newsletter: No, thank you!`);

    }
    
};