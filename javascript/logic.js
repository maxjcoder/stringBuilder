const populationDropdown = document.getElementById("population-dropdown");
const termDropdown = document.getElementById("term-dropdown");
const staffDropdown = document.getElementById("staff-dropdown");
const populationStatementResult = document.getElementById("populationstatement-text");
const generatePopulationStatementBtn = document.getElementById("generate-populationstatement-btn");

let population;
let term;
let staff;


populationDropdown.addEventListener("change", (e) => (population = e.target.value));
termDropdown.addEventListener("change", (e) => (term = e.target.value));
staffDropdown.addEventListener("change", (e) => (staff = e.target.value));

const resetValues = () => {
  populationDropdown.selectedIndex = 0;
  termDropdown.selectedIndex = 0;
  staffDropdown.selectedIndex = 0;
  population = undefined;
  term = undefined;
  staff = undefined;
};

generatePopulationStatementBtn.addEventListener("click", () => {
  const madLibsArr = [
    `I'd like to reach ${population} interested in ${term} assigned to ${staff}.`
  ];

  const randomIndex = Math.floor(Math.random() * madLibsArr.length);

  if (
    [population, term, staff].some(
      (userSelection) => userSelection === undefined
    )
  ) {
    alert("Please choose a selection from each of the dropdowns");
    return;
  }
  populationStatementResult.innerText = madLibsArr[randomIndex];
  resetValues();
});
