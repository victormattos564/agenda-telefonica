class Agenda {
    constructor(nome, tel, celular, URL, email, CEP, cidade, estado, github) {
        this.nome = nome;
        this.tel = tel;
        this.celular = celular;
        this.URL = URL;
        this.email = email;
        this.CEP = CEP;
        this.cidade = cidade;
        this.Instagram = Instagram;
        this.github = github;
        this.age = this.calculateAge();
        this.zodiacSign = this.getZodiacSign();
        this.possibleClient = this.isPossibleClient();
        console.log("Passou pelo construtor da class Agenda")
    }
    calculateAge() {
        let today = new Date();
        let birthDate = new Date(this.dataNasc);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) { age--; };
        console.log("Passou pelo calculateAge() da class User");
        return age;
    }
    getZodiacSing() {
        let today = new Date(this.dataNasc)
        let day = today.getDate();
        let month = today.getMonth() + 1;

        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }
}

class AllUsers {
    constructor() {
        this.users = [];
        console.log("Passou pelo constructor da class AllUsers");
    }
    add(user) {
        console.log("Passou pelo add() da class AllUsers");

        if (isAnyInputEmpty()) {
            sendErrorMsg("Preencha todos os campos");
        } else if (!valida_cpf(user.cpf)) {
            sendErrorMsg("CPF inválido");
        } else if (isAlreadyRegistered(user.cpf)) {
            sendErrorMsg("CPF já cadastrado");
        } else {
            this.users.push(user);
            successMsg("Parabéns, você entrou na lista de espera!");
            clearInputs();
        }
    }
    getAll() {
        console.log("Passou pelo getAll() da class AllUsers");

        return this.users;
    }

    countNumber() {
        console.log("Passou pelo countNumber() da class AllUsers");

        return this.users.length;
    }
}

const allUsers = new AllUsers();
console.log("Instanciou a class AllUsers");

function createUser() {
    console.log("Passou pela funcao createUser()");
    const nome = document.getElementById("nome").value;
    const tel = document.getElementById("tel").value;
    const celular = document.getElementById("celular").value;
    const URL = document.getElementById("URL").value;
    const email = document.getElementById("email").value;
    const CEP = document.getElementById("CEP").value;
    const cidade = document.getElementById("cidade").value;
    const Instagram = document.getElementById("Instagram").value;
    const github = document.getElementById("github").value;

}

function clearInputs() {
    console.log("Passou pela funcao clearInputs()");
    document.getElementById("nome").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("celular").value = "";
    document.getElementById("URL").value = "";
    document.getElementById("email").value = "";
    document.getElementById("CEP").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("Instagram").value = "";
    document.getElementById("github").value = "";

}

function showRegister() {
    console.log("Passou pela funcao showRegister()");
    document.getElementById("register").classList.add = ("hidden");
    document.getElementById("list").classList.remove = ("hidden");
    document.getElementById("about").classList.remove = ("hidden");
    console.log("Passou pela funçao showRegiser()");
}

function dateinPTBR(params) {
    console.log("Passou pela funcao dateinPTBR()");

    let dateArray = date.split("-");
    let datePTBR = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
    return datePTBR;
}
function gerarLinkWhatsaap() {
    let link = "https://api.whatsapp.com/send"
        + telefone;
    return link;
}

function formatedCEP(CEP) {
    console.log("Passou pela funcao formatedCEP()");

    let CEPArray = cpf.split("");
    let CEPFormated = CEPArray[0] + CEPArray[1] + CEPArray[2]
        + "." + CEPArray[3] + CEPArray[4] + CEPArray[5] + "."
        + CEPArray[6] + CEPArray[7] + CEPArray[8] + "-" + CEPArray[9] + CEPArray[10];
    return CEPFormated;
}

function formatedcelular(celular) {
    console.log("Passou pela funcao formatedCellphone()");

    let celularArray = celular.split("");
    let celularFormated = "(" + celularArray[0] + celularArray[1] + ")"
        + " " + celularArray[2] + celularArray[3] + celularArray[4]
        + celularArray[5] + celularArray[6] + "-"
        + celularArray[7] + celularArray[8]
        + celularArray[9] + celularArray[10];
    return celularFormated;
}

function valida_cep() {
    console.log("Passou pela funcao valida_cep()");

    var numeros, digitos, soma, i, resultado, digitos_iguais
    digitos_iguais = 1;
    if (CEP.length < 11)
        return false;
    for (i = 0; i < CEP.length - 1; i++)
        if (CEP.charAt(i) != CEP.charAt(i + 1)) {
            digitos_iguais = 0;
            break;
        }
    if (!digitos_iguais) {
        numeros = CEP.substring(0, 9);
        digitos = CEP.substring(9);
        soma = 0;
        for (i = 10; i > 1; i--)
            soma += numeros.charAt(10 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        numeros = CEP.substring(0, 10);
        soma = 0;
        for (i = 11; i > 1; i--)
            soma += numeros.charAt(11 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        return true;
    }
    else {
        return false;
    }
}

function valida_celular() {
    console.log("Passou pela funcao valida_celular()");

    var numeros, digitos, soma, i, resultado, digitos_iguais
    digitos_iguais = 1;
    if (celular.length < 11)
        return false;
    for (i = 0; i < celular.length - 1; i++)
        if (celular.charAt(i) != celular.charAt(i + 1)) {
            digitos_iguais = 0;
            break;
        }
    if (!digitos_iguais) {
        numeros = celular.substring(0, 9);
        digitos = celular.substring(9);
        soma = 0;
        for (i = 10; i > 1; i--)
            soma += numeros.charAt(10 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        numeros = celular.substring(0, 10);
        soma = 0;
        for (i = 11; i > 1; i--)
            soma += numeros.charAt(11 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        return true;
    }
    else {
        return false;
    }
}

function valida_tel() {
    console.log("Passou pela funcao valida_tel()");

    var numeros, digitos, soma, i, resultado, digitos_iguais
    digitos_iguais = 1;
    if (tel.length < 11)
        return false;
    for (i = 0; i < tel.length - 1; i++)
        if (tel.charAt(i) != tel.charAt(i + 1)) {
            digitos_iguais = 0;
            break;
        }
    if (!digitos_iguais) {
        numeros = tel.substring(0, 9);
        digitos = tel.substring(9);
        soma = 0;
        for (i = 10; i > 1; i--)
            soma += numeros.charAt(10 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        numeros = tel.substring(0, 10);
        soma = 0;
        for (i = 11; i > 1; i--)
            soma += numeros.charAt(11 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        return true;
    }
    else {
        return false;
    }
}

function isAlreadyRegistered(CEP) {
    console.log("Passou pela funcao isAlreadyRegistered()");

    let users = allUsers.getAll();
    let isRegistered = false
    users.forEach((users) => {
        if (users.CEP == CEP) {
            isRegistered = true;
        }
    });
    return isRegistered;
}

function showUsers() {
    console.log("Passou pela funcao showUsers()");

    if (allUsers.getAll().length == 0) {
        sendErrorMsg("Nenhum usuário cadastrado");
        return;
    } else {
        document.getElementById("sub-div").classList.remove("hidden")
        document.getElementById("title-page").classList.add("hidden")
        document.getElementById("main-div").classList.add("hidden")

        console.log(allUsers.getAll());

        const users = allUsers.getAll();

        users.forEach((user) => {
            html += `
            <div class="list-eachUser">
              <p><strong>Nome:</strong> ${user.nome}</p>
              <p><strong>Telefone:</strong> ${user.tel}</p>
              <p><strong>Celular:</strong> ${user.celular}</p>
              <p><strong>URL:</strong> ${user.URL}</p>
              <p><strong>Email:</strong> ${user.email}</p>
              <p><strong>CEP:</strong> ${user.CEP}</p>
              <p><strong>Cidade:</strong> ${user.cidade}</p>
              <p><strong>Instagram:</strong> ${user.Instagram}</p>
              <p><strong>GitHub:</strong> ${user.github}</p>
              </div>
              `;
        });
        document.getElementById("list").innerHTML = html;
    }
    const contador = allUsers.countNumber()
    document.getElementById("contador").innerHTML = `Total: ${contador};`
}

function isAnyInputEmpty() {
    console.log("Passou pela funcao isAnyInputEmpty()");

    const nome = document.getElementById("nome").value;
    const tel = document.getElementById("tel").value;
    const celular = document.getElementById("celular").value;
    const URL = document.getElementById("URL").value;
    const email = document.getElementById("email").value;
    const CEP = document.getElementById("CEP").value;
    const cidade = document.getElementById("cidade").value;
    const Instagram = document.getElementById("Instagram").value;
    const github = document.getElementById("github").value;

    if (nome == "" || tel == "" || celular == "" || URL == "" || email == "" || CEP == "" || cidade == "" || Instagram == "" || github == "") {
        return true;
    } else {
        return false;
    }
}

function sendErrorMsg(msg) {
    console.log("Passou pela funcao sendErrorMsg()");

    document.getElementById("error-msg").innerHTML = msg;
    document.getElementById("error-msg").classList.remove("hidden");
    setTimeout(() => {
        document.getElementById("error-msg").classList.add("hidden");
    }, 2000);
}

function successMsg(msg) {
    console.log("Passou pela funcao successMsg()");

    document.getElementById("success-msg").innerHTML = msg;
    document.getElementById("success-msg").classList.remove("hidden");
    setTimeout(function() {
        document.getElementById("success-msg").classList.add("hidden");
    }, 2000);
}

function clearInputs () {
    console.log("Passou pela funcao clearInputs()");

    document.getElementById("nome").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("celular").value = "";
    document.getElementById("URL").value = "";
    document.getElementById("email").value = "";
    document.getElementById("CEP").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("Instagram").value = "";
    document.getElementById("github").value = "";
}