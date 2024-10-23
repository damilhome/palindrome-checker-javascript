const checkButton = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

function removeNonAlphabetic(str) {
    const regex = /[^a-zA-Z]/g;
    return str.replace(regex, '');
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function updateResult(bool) {
    const paragraph = document.createElement('p');

    if(bool) {
        paragraph.innerHTML = `<b>${textInput.value}</b> is a palindrome.`
    } else {
        paragraph.innerHTML = `<b>${textInput.value}</b> is not a palindrome.`
    }

    result.appendChild(paragraph);

    result.style.display = 'block';
}

function checkPalindrome() {
    const textValue = textInput.value;

    console.log(textValue);

    if(!textValue) {
        alert('Please input a value');
    } else {
        const textValueFormated = removeNonAlphabetic(textValue).toLowerCase();
        console.log(textValueFormated);
        const reversedText = reverseString(textValueFormated);
        console.log(reversedText)

        if(textValueFormated === reversedText) {
            console.log(textValueFormated === reversedText)
            updateResult(true);
        } else {
            console.log(textValueFormated === reversedText)
            updateResult(false)
        }
    }
}

checkButton.addEventListener('click', checkPalindrome);
