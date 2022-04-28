/* 
  - Creare un array per ogni membro del team
  - Controllare se col log funziona tutto
  - Stampare dinamicamente dal js le card e togliere la card di esempio dall'html
*/

// Array dei membri
const team = [

  {
    immagineuno: "wayne-barnett-founder-ceo.jpg",
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
  },
  
  {
    immagineuno: "angela-caroll-chief-editor.jpg",
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
  },

  {
    immagineuno: "walter-gordon-office-manager.jpg",
    nome: "Walter Gordon",
    ruolo: "Office Manager",
  },

  {
    immagineuno: "angela-lopez-social-media-manager.jpg",
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
  },

  {
    immagineuno: "scott-estrada-developer.jpg",
    nome: "Scott Estrada",
    ruolo: "Developer",
  },

  {
    immagineuno: "barbara-ramos-graphic-designer.jpg",
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
  }

];

// Ciclo in in log dei membri
for(let index in team){
  const card = team[index];
  console.log("nome: ", card.nome);
  console.log("ruolo: ", card.ruolo);
  console.log("-------------------------");
}

// Stampo i miei dati dentro l'html
const teamcontainer = document.querySelector(".team-container");
stampaTeam();

function stampaTeam(){

  for(let teamSingolMember of team){
    stampaTeamMember(teamSingolMember)
  }

}

function stampaTeamMember(teamSingolMember){

  let divStampa = teamcontainer.innerHTML;

  const {immagineuno, nome, ruolo} = teamSingolMember;

  divStampa += `
  <div class="team-card">
    <div class="card-image">
      <img
      src= img/${immagineuno}
      alt= ${nome}
      />
    </div>
    <div class="card-text">
      <h3>${nome}</h3>
      <p>${ruolo}</p>
    </div>
  </div>
  `;

  teamcontainer.innerHTML = divStampa;
  /* console.log(divStampa); */
}

