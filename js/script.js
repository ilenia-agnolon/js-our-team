const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


/*
Consegna:
  Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
*/
console.log("tutti", teamMembers);


//1.selezioniamo il container delle card
const cardContainer = document.querySelector(".row")

//2. creo variabile di accumulo output (stringhe)
let cards = "";

//3. ciclo l'array degli oggetti (teamMembers)
for (let index = 0; index < teamMembers.length; index++) {
  const singleMember = teamMembers[index]; // -> con questo ciclo sto leggendo e memorizzando ogni membro, così sono pronto poi a farci qualcosa (in questo caso: generare le card)

 
  console.log("membro singolo del team", singleMember);
    
  
}



