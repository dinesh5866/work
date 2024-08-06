let download = document.getElementById('download-cv');
download.addEventListener("click",()=>{
    let link = document.createElement('a');
    link.href = "https://drive.google.com/file/d/16gdWOe9gNLSG1q_8RJhtUtcOKdnzKCAD/view?usp=drivesdk";
    link.download = "Dinesh-Resume.pdf";
    link.click();
});

let numberElements = document.getElementsByClassName("number");
let numberElement = numberElements[0];
let counter = 0;
let interval = setInterval(() => {
    if (counter == 70) {
        clearInterval(interval);
    } else {
        counter += 1;
        numberElement.innerHTML = counter + "%";
    }
}, 30);

let numberElementss = document.getElementsByClassName("number1");
let numbersElemen = numberElementss[0];
let counters = 0;
let interva = setInterval(()=>{
    if (counters == 85){
        clearInterval(interva);
    }else {
        counters += 1;
        numbersElemen.innerHTML = counters + "%";
    }
},30);

let numberElementsss = document.getElementsByClassName("number2");
let numbersElementss = numberElementsss[0];
let counterss = 0;
let intervals = setInterval(()=>{
    if (counterss == 90){
        clearInterval(intervals);
    }else {
        counterss += 1;
        numbersElementss.innerHTML = counterss + "%";
    }
},30);

let form = document.getElementById("myform");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let name = document.getElementById('name').value;
    let mobile = document.getElementById('mobile').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    console.log(`Name: ${name} Mobile: ${mobile} Email: ${email} Message: ${message}`);
    form.reset();
});