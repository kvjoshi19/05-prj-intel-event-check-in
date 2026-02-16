const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

const greeting = document.getElementById("greeting");
const attendeeCountText = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");

const teamIds = {
  water: "waterCount",
  zero: "zeroCount",
  power: "powerCount",
};

let count = 0;
const maxCount = 50;

form.addEventListener("submit", function (event) {
  event.preventDefault();


  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions?.[0]?.text || "";

  if (!name || !team) return;
  count += 1;
  attendeeCountText.textContent = count;

  const percentage = Math.round((count / maxCount) * 100);
  progressBar.style.width = `${percentage}%`;           
  progressBar.setAttribute("aria-valuenow", percentage);


  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

 greeting.textContent = `Welcome, ${name} from ${teamName}. You have checked in.`;

  form.reset();
});