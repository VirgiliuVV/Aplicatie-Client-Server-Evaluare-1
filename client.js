document.addEventListener('DOMContentLoaded', () => {
    const clickAddDiv = document.getElementById('clickAdd');
    const resultAddDiv = document.getElementById('resultAdd');

    clickAddDiv.addEventListener('click', () => {
        const nr1 = +prompt('nr1:');
        const nr2 = +prompt('nr2:');
        const nr3 = +prompt('nr3:');
            axios.patch('http://localhost:3000/add', { nr1, nr2, nr3 })
                .then((response) => {
                    if (response.status === 200) {
                        resultAddDiv.textContent = `${response.status}: ${response.data.result}`;
                    }
                })
                .catch((error) => {
                    resultAddDiv.textContent = `${error.response.status} ${error.response.statusText}: ${error.response.data.message}`;
                });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const clickSubtractDiv = document.getElementById('clickSubtract');
    const resultSubtractDiv = document.getElementById('resultSubtract');

    clickSubtractDiv.addEventListener('click', () => {
        const nr1 = +prompt('nr1:');
        const nr2 = +prompt('nr2:');
            axios.patch('http://localhost:3000/subtract', { nr1, nr2 })
                .then((response) => {
                    resultSubtractDiv.textContent = `${response.status}: ${response.data.result}`;
                })
                .catch((error) => {
                    resultSubtractDiv.textContent = `${error.response.status} ${error.response.statusText}: ${error.response.data.message}`;
                });

    });
});

document.addEventListener('DOMContentLoaded', () => {
    const clickMultiplyDiv = document.getElementById('clickMultiply');
    const resultMultiplyDiv = document.getElementById('resultMultiply');

    clickMultiplyDiv.addEventListener('click', () => {
        const nr1 = +prompt('nr1:');
        const nr2 = +prompt('nr2:');
            axios.patch('http://localhost:3000/multiply', { nr1, nr2 })
                .then((response) => {
                    resultMultiplyDiv.textContent = `${response.status}: ${response.data.result}`;
                })
                .catch((error) => {
                    resultMultiplyDiv.textContent = `${error.response.status} ${error.response.statusText}: ${error.response.data.message}`;
                });

    });
});

document.addEventListener('DOMContentLoaded', () => {
    const clickDivideDiv = document.getElementById('clickDivide');
    const resultDivideDiv = document.getElementById('resultDivide');

    clickDivideDiv.addEventListener('click', () => {
        const nr1 = +prompt('nr1:');
        const nr2 = +prompt('nr2:');
            axios.patch('http://localhost:3000/divide', { nr1, nr2 })
                .then((response) => {
                    resultDivideDiv.textContent = `${response.status}: ${response.data.result}`;
                })
                .catch((error) => {
                    resultDivideDiv.textContent = `${error.response.status} ${error.response.statusText}: ${error.response.data.message}`;
                });
    });
});
