function stringToArray(string) {
    return Array.from(string);
}

function sumDig(cpfArr) {
    return cpfArr.reduce((acc, value, index) => acc + Number(value) * ((cpfArr.length + 1) - index), 0);
}

function generateDig(acc) {
    return (11 - (acc % 11) > 9) ? 0 : 11 - (acc % 11);
}

function cpfCompare(cpf, cpfCopy) {
    return cpf.join("") === cpfCopy.join("");
}

function isSequence(cpfArr) {
    cpfArr = cpfArr.join("");
    const sequence = cpfArr[0].repeat(cpfArr.length);
    return sequence === cpfArr;
}

function validateCpf(cpf) {
    if (typeof cpf !== "string") return false;
    let cpfString = cpf.replace(/\D+/g, "");
    let cpfArray = stringToArray(cpfString);
    let cpfCopy = [...cpfArray];

    if (typeof cpfCopy === "undefined" || cpfCopy.length !== 11) return false;
    if (isSequence(cpfCopy)) return false;

    cpfCopy = cpfCopy.splice(0, 9);

    cpfCopy.push(String(generateDig(sumDig(cpfCopy))));
    cpfCopy.push(String(generateDig(sumDig(cpfCopy))));

    return cpfCompare(cpfArray, cpfCopy);
}

// let cpf = "111.111.111-11";
// let cpf = "705.484.450-52";

// if (validateCpf(cpf))
//     console.log("Valid CPF");
// else
//     console.log("Invalid CPF");