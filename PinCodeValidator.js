let arguments = process.argv;
arguments.splice(0, 2);

// UC 1
{
    let pinCodeRegex = RegExp('[0-9]{6}');
    arguments.forEach(element => {
        console.log(element + " :", pinCodeRegex.test(element));
    });
}
// UC 2
{
    let pinCodeRegex = RegExp('^[0-9]{6}');
    arguments.forEach(element => {
        console.log(element + " :", pinCodeRegex.test(element));
    });
}

// UC 3
{
    let pinCodeRegex = RegExp('^[0-9]{6}$');
    arguments.forEach(element => {
        console.log(element + " :", pinCodeRegex.test(element));
    });
}

// UC 4
let pinCodeRegex = RegExp('^[0-9]{3}\\s{0,1}[0-9]{3}$');
arguments.forEach(element => {
    console.log(element + " :", pinCodeRegex.test(element));
});