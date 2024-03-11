const sent = "I am learning Web Dev."

let revars = ''
for(const letter of sent){
    // console.log(letter);
    revars = letter + revars;
}
// console.log(revars);

let rev = ''
for(let i = 0; i <sent.length; i++){
    // console.log(i);
    // console.log(sent[i]);
    const letter = sent[i];
    rev = letter + rev;
}
console.log(rev);
