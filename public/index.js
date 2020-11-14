const address = document.getElementById('address');
const subject = document.getElementById('subject');
const mailForm = document.getElementById('mailForm');
import { nanoid } from 'nanoid';

const item = nanoid(2);

mailForm.addEventListener('submit', (e) => {

e.preventDefault();

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
        }
    };
    xhttp.open("POST", "/send", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({
        address: address.value,
        subject: subject.value,
        body: tinyMCE.get('message').getContent()
    }));

});