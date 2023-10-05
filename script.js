//Live session Task to Generate a Password based upon user options
function generatePwd(total_length, options) 
{
    let chars = '';

    if (options.uppercase) {
        chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (options.lowercase) {
        chars += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (options.numbers) {
        chars += '0123456789';
    }
    if (options.special) {
        chars += '@#$!_';
    }

    let pwd = '';
    for (let i = 0; i < total_length; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    alert(`Hey Your Password: ${pwd}`);
}

function acceptInputs() {
    const inputOptions = {
        uppercase: confirm("Include Uppercase Letters?"),
        lowercase: confirm("Include Lowercase Letters?"),
        numbers: confirm("Include Numbers?"),
        special: confirm("Include Special Characters?")
    };

    if (inputOptions.uppercase || inputOptions.lowercase || inputOptions.digits || inputOptions.special) {
        const input_len = prompt("Let's fix the length?");
        generatePwd(input_len, inputOptions);
    } else {
        alert("At least one character type should be selected.");
        acceptInputs();
    }
}

function greet() {
    alert("Many Thanks");
}
alert("Welcome to Password Generator");

let userOption = confirm("Generate Your Own Password");
userOption ? acceptInputs() : greet();