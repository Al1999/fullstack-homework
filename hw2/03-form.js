/** Exercise 03 - Form **/

// Add your code here

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