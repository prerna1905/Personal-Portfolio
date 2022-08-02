let cel = document.getElementById("cel");
let fah = document.getElementById("fah");

cel.addEventListener('input', function(){
    let c = this.value;
    // formula of celsius to fahrenheit
    let f = (c * 9/5) + 32;
    // here, if value of f is not integer then it will show only 4 digit after decimal
    if(!Number.isInteger(f)){
        f = f.toFixed(4);
    }
    fah.value = f;
});

fah.addEventListener('input', function(){
    let f = this.value;
    // Formula of fahrenheit to celsius
    let c = (f - 32) * 5/9;
    // here, if value of c is not integer then it will show only 4 digit after decimal
    if(!Number.isInteger(c)){
        c = c.toFixed(4);
    }
    cel.value = c;
});