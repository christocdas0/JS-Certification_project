// slider
$(document).ready(function () {
  $(".scrollsection").slick({
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});

var cardsDiv = document.querySelector(".cards");
// Our Team cards
var cardsDiv = document.querySelector(".cards");

// show the create Team form
var creteTeamBnt = document.getElementById("crete_team_btn");

creteTeamBnt.addEventListener("click", showTeamCreateForm);
// team create form;
var teamCreateForm = document.getElementById("team_crete_form");
// team crteat closing btn
var teamClosingFormBtn = document.getElementById(
  "team_create_form_closing_btn"
);
teamClosingFormBtn.addEventListener("click", () => {
  teamCreateForm.style.visibility = "hidden";
});

function showTeamCreateForm() {
  teamCreateForm.style.visibility = "visible";
}

// player create form
var createPlayerBnt = document.getElementById("create_player_btn");

createPlayerBnt.addEventListener("click", showPlayerCreateForm);
// team create form;
var playerCreateForm = document.getElementById("player_crete_form");
// team crteat closing btn
var playerClosingFormBtn = document.getElementById(
  "player_create_form_closing_btn"
);
playerClosingFormBtn.addEventListener("click", () => {
  playerCreateForm.style.visibility = "hidden";
});

function showPlayerCreateForm() {
  playerCreateForm.style.visibility = "visible";
}

// passing to localstorage

// get team  datas from user
var team_Name = document.getElementById("team_name");
var team_icon = document.getElementById("team_icon");
//  console.log(team_icon);
var team_Player_Count = document.getElementById("team_Player_Count");
var team_Top_batsman = document.getElementById("team_Top_batsman");
var team_Top_Bowler = document.getElementById("team_Top_Bowler");
var team_Champoins_cup = document.getElementById("team_Champoins_cup");
var team_create_submit_btn = document.getElementById("team_create_submit_btn");

team_create_submit_btn.addEventListener("click", team_creating);
function team_creating(e) {
  e.preventDefault();
  let team_Nam = team_Name.value;
  var teamIcon = team_icon.value;
  let teamPleyerCount = team_Player_Count.value;
  let teamTopBatsman = team_Top_batsman.value;
  let teamTopBowler = team_Top_Bowler.value;
  var teamChampionsCup = team_Champoins_cup.value;

  var ourTeam = {
    team_Nam: team_Nam,
    teamIcon: teamIcon,
    teamTopBatsman: teamTopBatsman,
    teamTopBowler: teamTopBowler,
    teamPleyerCount: teamPleyerCount,
    teamChampionsCup: teamChampionsCup,
  };

  //   adding teams
  if (localStorage.getItem("ourTeams") === null) {
    var productDeatilsArr = [];
    productDeatilsArr.push(ourTeam);
    localStorage.setItem("ourTeams", JSON.stringify(productDeatilsArr));
  } else {
    var data = JSON.parse(localStorage.getItem("ourTeams"));
    data.push(ourTeam);
    localStorage.setItem("ourTeams", JSON.stringify(data));
  }

  // adding players

  location.reload();
}

function addingTeams() {
  var teamDetails = JSON.parse(localStorage.getItem("ourTeams"));

  for (let i = 0; i < teamDetails.length; i++) {
    cardsDiv.innerHTML += `
     <div class="card">
        <div class="img">
            <img src=${teamDetails[i].teamIcon} alt=${teamDetails[i].team_Nam}>
        </div>
        <div class="details">
    <p>Team Name      <span> &#10132; ${teamDetails[i].team_Nam}
    </span> </p>
    <p>Player Count <span> &#10132;  ${teamDetails[i].teamPleyerCount}  </span> </p>
    <p>Top Batsman <span> &#10132;  ${teamDetails[i].teamTopBatsman} </span> </p>
    <p>Top Bowler <span> &#10132; ${teamDetails[i].teamTopBowler}  </span></p>
    <p>Championship Won Count <span> &#10132;${teamDetails[i].teamChampionsCup} </span></p>

      <button id='card${i}' onclick="teamCardCliked('card${i}')" class="btn">
            <a  href="#">
                View Details
            </a>
        </button>
        </div>
    </div>
    `;
  }
}
addingTeams();

// got to team details page
var mainSlider = document.querySelector(".main_slider");
var ourTeamGridSection = document.getElementById("our_teams_section");
let teamDisplayVisible = document.querySelector(".team_details_page");

function teamCardCliked(e) {
  //  img slider and our team cards gone

  mainSlider.classList.add("none");
  ourTeamGridSection.classList.add("none");
  teamDisplayVisible.classList.remove("none");

  //  team details disaplay visible

  var teamCardDetailsBtn = document.getElementById(e);

  var localStorageDatas = JSON.parse(localStorage.getItem("ourTeams"));

  var curentCardID = teamCardDetailsBtn.id;
  var cardIndex = curentCardID.slice(curentCardID.length - 1);

  var curentTeamcard = localStorageDatas[cardIndex];

  //   team page details
  var team_details_page = document.querySelector(".team_details_page");

  var team_details_left_img = document.getElementById("team_details_left_img");
  var __teamName = document.getElementById("__teamName");
  var __team_heading = document.getElementById("__team_heading");
  var __player_Count = document.getElementById("__player_Count");
  var __batsMan_name = document.getElementById("__batsMan_name");
  var __bowler_Name = document.getElementById("__bowler_Name");
  var __winning_Count = document.getElementById("__winning_Count");

  __teamName.textContent = curentTeamcard.team_Nam;
  team_details_left_img.src = curentTeamcard.teamIcon;
  __team_heading.textContent = curentTeamcard.team_Nam;
  __player_Count.textContent = curentTeamcard.teamPleyerCount;
  __batsMan_name.textContent = curentTeamcard.teamTopBatsman;
  __bowler_Name.textContent = curentTeamcard.teamTopBowler;
  __winning_Count.textContent = curentTeamcard.teamChampionsCup;

  adding_Players(__team_heading);
}

// player entering
var player_creating_submit_btn = document.getElementById(
  "player_creating_submit_btn"
);
player_creating_submit_btn.addEventListener("click", player_creating);
var playerName = document.getElementById("playerName");
var playerPhoto = document.getElementById("playerPhoto");
var playerTeam = document.getElementById("playerTeam");
var playerPrice = document.getElementById("playerPrice");
var playerRole = document.getElementById("playerRole");
var playerOnPlay = document.getElementById("playerOnPlay");

function player_creating(e) {
  e.preventDefault();
  let Name = playerName.value;
  let Photo = playerPhoto.value;
  let Team = playerTeam.value;
  let Price = playerPrice.value;
  let Role = playerRole.value;
  let OnPlay = playerOnPlay.value;

  var ourPlayers = {
    Name: Name,
    Photo: Photo,
    Team: Team,
    Price: Price,
    Role: Role,
    OnPlay: OnPlay,
  };

  //   adding teams
  if (localStorage.getItem("ourPlayers") === null) {
    var productDeatilsArr = [];
    productDeatilsArr.push(ourPlayers);
    localStorage.setItem("ourPlayers", JSON.stringify(productDeatilsArr));
  } else {
    var data = JSON.parse(localStorage.getItem("ourPlayers"));
    data.push(ourPlayers);
    localStorage.setItem("ourPlayers", JSON.stringify(data));
  }

  // adding players

  location.reload();
}

// players card grid
let players_grid = document.querySelector(".players_grid");

function adding_Players(teamHaeding) {
  var playerDatas = JSON.parse(localStorage.getItem("ourPlayers"));

  var teamDatas = JSON.parse(localStorage.getItem("ourTeams"));

  var teamName = teamHaeding.textContent;

  for (let i = 0; i < playerDatas.length; i++) {
    if (teamName == playerDatas[i].Team) {
      players_grid.innerHTML += `
   <div class="player">
              <div class="img">
                <img
                  src="${playerDatas[i].Photo}"
                  alt="${playerDatas[i].Name}"
                />
              </div>
              <div class="details">
                <p id="name"> ${playerDatas[i].Name}</p>
                <p> ${playerDatas[i].Team}</p>
               
             
               
              </div>
                 <a href="#">
          <button onclick="playerCardCliked('${playerDatas[i].Role}, ${playerDatas[i].Price},${playerDatas[i].Team},${playerDatas[i].OnPlay},${playerDatas[i].Name},${playerDatas[i].Photo}')" id="card${i}">Player Details</button>
    </a>
           
            </div>
`;
    }
  }
}
// we got the player details and crete new page and paste all the information with that

function playerCardCliked(Role) {
  var playerDatas_Final = Role.split(",");
  console.log(playerDatas_Final);

  var payer_details_section_Contanier = document.getElementById(
    "payer_details_section_Contanier"
  );
  var team_details_page = document.getElementById("team_details_page");
  team_details_page.classList.add("none");
  payer_details_section_Contanier.classList.remove("none");
  // console.log(Name);
  payer_details_section_Contanier.innerHTML = `
     <div class="payer_details_section_Contanier ">
     <div class="left">
         <div class="img">
             <img src="${playerDatas_Final[5]}" alt="">
         </div>
         <div class="name">
             <h3>${playerDatas_Final[4]}</h3>
         </div>
     </div>
     <div class="right">
         <p>Player Name <span>&#10132; ${playerDatas_Final[4]} <span/> </p>
         <p> Team   <span>&#10132;${playerDatas_Final[2]}<span/>  </p>
         <p> Price <span>&#10132; ${playerDatas_Final[1]} Cr<span/></p>
         <p> Playing Satus <span>&#10132; Yes <span/> </p>
         <p>  Role <span>&#10132; ${playerDatas_Final[0]}<span/></p>

     </div>
        </div>

`;
}

var player_secrh_nav_input = document.getElementById("player_secrh_nav");
var pleyer_Search_btn = document.getElementById("pleyer_Search_btn");
pleyer_Search_btn.addEventListener("click", playerSearch);

function playerSearch() {
  if (player_secrh_nav_input.value != "") {
    var main_slider = document.querySelector(".main_slider");
    var our_teams_section = document.getElementById("our_teams_section");
    var payer_details_section_Contanier = document.getElementById(
      "payer_details_section_Contanier"
    );
    main_slider.classList.add("none");
    our_teams_section.classList.add("none");
    payer_details_section_Contanier.classList.add("none");

    // players details
    let playerDetails = JSON.parse(localStorage.getItem("ourPlayers"));

    let inputValue = player_secrh_nav_input.value;

    var searching_players = document.querySelector(".searching_players");

    for (let i = 0; i < playerDetails.length; i++) {
      let team = playerDetails[i].Team;

      if (inputValue == team) {
        console.log(playerDetails[i]);

        searching_players.innerHTML += `
            <div class="players">
        <div class="img">
            <img src="${playerDetails[i].Photo}" alt="">
        </div>
        <div class="details">
            <h3>${playerDetails[i].Name}</h3>
            <p>${playerDetails[i].Team}</p>
        </div>
    </div>
          `;
      }
    }
  } else {
    alert("PLz Enter Correct Team Name eg : Punjab Kings");
  }
  player_secrh_nav_input.value = "";
  player_secrh_nav_input.focus();
}

var refresh = document.getElementById("refresh");
refresh.addEventListener("click", () => {
  location.reload();
});
