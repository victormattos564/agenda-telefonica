class Contato {
    constructor(nome, telefoneFixo, telefoneCelular, URL, data, email, cep, cidade, Instagram, github) {
        this.nome = nome;
        this.telefoneFixo = telefoneFixo;
        this.telefoneCelular = telefoneCelular;
        this.URL = URL;
        this.data = data;
        this.email = email;
        this.cep = cep;
        this.cidade = cidade;
        this.Instagram = Instagram;
        this.github = github;
        this.id = this.generetedid();
        this.signo = this.getZodiacSign();
    }
    generetedid() {
        return Math.floor(Math.random() * 99000);
    }
    getZodiacSign() {
        let birthdate = new Date(this.data);
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;
        console.log("Passou pelo getSigno() da class User");

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
class ListaDeContatos{
    constructor(){
        this.lista = [];
    }
    addContato(contato){
        this.lista.push(contato);
    }
}

let listaDeContatos = new ListaDeContatos();

function pegarInformacoes() {
    let nome = document.getElementById("nome").value;
    let telefoneFixo = document.getElementById("telefoneFixo").value;
    let telefoneCelular = document.getElementById("telefoneCelular").value;
    let URL = document.getElementById("URL").value;
    let data = document.getElementById("data").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let cidade = document.getElementById("cidade").value;
    let Instagram = document.getElementById("Instagram").value;
    let github = document.getElementById("github").value;
    let contato = new Contato(nome, telefoneFixo, telefoneCelular, URL, data, email, cep, cidade, Instagram, github);
    listaDeContatos.addContato(contato);
}

function mostrarInformacoes() {
    let div = document.getElementById("informacoes");
    div.innerHTML = "";
    let array = listaDeContatos.lista;

    array.forEach(contact => {
        const contactDiv = `<button style="background: transparent;border: none;" onclick="exibir(${contact.id})"><div class="contacts-concluded" id="div${contact.id}">
        <div><img src="${contact.URL}" alt=""></div>
        <div>
            <p><b>${contact.nome}</b></p>
            <p>Telefone Fixo: ${contact.telefoneFixo}</p>
            <p>Telefone Celular: ${contact.telefoneCelular}</p>
        </div>
    </div></button>`;
        div.innerHTML += contactDiv;

    })
    
}