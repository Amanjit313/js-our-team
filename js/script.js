/* 
  - Creare un array per ogni membro del team
  - Controllare se col log funziona tutto
  - Stampare dinamicamente dal js le card e togliere la card di esempio dall'html
*/

// Immagini
/* var immagineuno = document.createElement("img");;
img.src = "img/wayne-barnett-founder-ceo.jpg"; */

// Array dei membri
const team = [

  {
    immagineuno: "Text",
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
  },
  
  {
    immagineuno: "Text",
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
  },

  {
    immagineuno: "Text",
    nome: "Walter Gordon",
    ruolo: "Office Manager",
  },

  {
    immagineuno: "Text",
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
  },

  {
    immagineuno: "Text",
    nome: "Scott Estrada",
    ruolo: "Developer",
  },

  {
    immagineuno: "Text",
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

