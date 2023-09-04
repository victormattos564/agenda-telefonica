class Agenda {
    constructor(nome,tel,celular,URL,email,CEP,cidade,estado,github) {
        this.nome = nome;
        this.tel = tel;
        this.celular = celular;
        this.URL = URL;
        this.email = email;
        this.CEP = CEP;
        this.cidade = cidade;
        this.estado = estado;
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
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {age--;};
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
    isPossibleClient() {
        const age = this.age;
        console.log("Passou pelo isPossibleClient? da class Agenda");
        if (age >= 18 && age <= 26) {
            return "Sim ✅";
        }
        return "Não ❌";
    }
}

class AllUsers {
    constructor() {
        this.users = [];
        console.log("Passou pelo constructor da class AllUsers");
    }
}