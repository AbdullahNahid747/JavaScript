console.log('This is separate  js file');

// option 2
function makeRed(){
    document.body.style.backgroundColor='red';
}

// 3
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick=makeBlue;

function makeBlue (){
    document.body.style.backgroundColor = "blue";
}

// 4
const makePurpleButton = document.getElementById("make-purple");
makePurpleButton.onclick= function makepurple (){
document.body.style.backgroundColor = "purple";
}

// 
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener('click', makePink);

function makePink(){
    document.body.style.backgroundColor = "pink";
}

// another
const greenButton = document.getElementById("make-green");
greenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = "green";
})

//final
document.getElementById('make-goldenrod').addEventListener('click', function (){
    document.getElementById('make-goldenrod').addEventListener('click', function(){
        document.body.style.backgroundColor = 'goldenrod';
    })
}) 