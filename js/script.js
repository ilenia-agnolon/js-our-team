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
   // -> con questo ciclo sto leggendo e memorizzando ogni membro, così sono pronto poi a farci qualcosa (in questo caso: generare le card)

    //a. estrapolo ogni oggetto
    const singleMember = teamMembers[index];
    console.log("membro singolo del team", singleMember);

    //b. per ogni oggetto creo una card (stringa) e la aggiungo alla var di accumulo
    cards += `
     <div class="row">
                <!-- card team member (da generare via js) -->
                <div class="col">
                    <div class="card">
                        <div class="card-img"><img src="img/male1.png" alt="marco designer"></div>
                        
                        <div class="card-content">
                            <h3>Marco Bianchi</h3>
                            <span>Designer</span>
                            <a href="mailto:marcorovero@team.com">marcobianchi@team.com</a>
                        </div>
                    </div>
                </div>
             
            </div>`;

 
 
    
  
}



