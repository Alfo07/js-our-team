//Creo un array di oggetti in cui inserisco nome, ruolo e immagine di profilo 
//Creo una funzione che mi stampa dinamicamente la card per ogni memebro

//Creo l'array con i dati
let memberData = [

    {

        name: "Wayne Barnett",
        role: "Founder & CEO",
        imgProfile: "./img/wayne-barnett-founder-ceo.jpg", 

    },

    {

        name: "Angela Caroll",
        role: "Chief Editor",
        imgProfile: "./img/angela-caroll-chief-editor.jpg", 

    },

    {

        name: "Walter Gordon",
        role: "Office Manager",
        imgProfile: "./img/walter-gordon-office-manager.jpg", 

    },

    {

        name: "Angela Lopez",
        role: "Social Media Manager",
        imgProfile: "./img/angela-lopez-social-media-manager.jpg", 

    },

    {

        name: "Scott Estrada",
        role: "Developer",
        imgProfile: "./img/scott-estrada-developer.jpg", 

    },

    {

        name: "Barbara Ramos",
        role: "Graphic Designer",
        imgProfile: "./img/barbara-ramos-graphic-designer.jpg", 

    },

];

//Creo la funzione per creare le card

function cardGenerator(){

    let containerTeam = document.querySelector('.team-container');
    for (let i = 1; i < memberData.length; i++){

        containerTeam.innerHTML += 
        `
        <div class="team-card">
            <div class="card-image">
                <img src="${memberData[i].imgProfile}"/>
            </div>
            <div class="card-text">
                <h3>
                    ${memberData[i].name}
                </h3>
                <p>
                    ${memberData[i].role}
                </p>
            </div>
        </div>
        `;
    }

}
cardGenerator();