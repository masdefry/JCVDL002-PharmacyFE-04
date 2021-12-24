
export const EmailValidator = (email) => {
    let number = '0123456789';
    let symbol = '!#$%&*';

    if (number.includes(email[0])) return false;

    for (let i = 0; i < email.length; i++) {
        if (email[i] === ' ') return false;
        if (symbol.includes(email[i])) return false;
    }

    let emailSplit = email.split('@');
    console.log(emailSplit);
    if (emailSplit.length !== 2 || emailSplit[1] === '') return false;

    let hostingName = emailSplit[1].split('.');
    if (hostingName.length < 2 || hostingName.length > 3 || hostingName[1] === '') return false;

    return true;
};