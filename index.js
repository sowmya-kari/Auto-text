const containerE1 = document.querySelector(".container");
const careers = ["developer","Web designer","Engineer"]
let careerIndex = 0;
let characterIndex = 0;
updateText();
function updateText(){
  characterIndex++;
  containerE1.innerHTML= `<h1> Iam  ${careers[careerIndex].slice(0,1) === "E" ? "An" :"A"} ${careers[careerIndex].slice(0,characterIndex)} </h1>`;
  if(characterIndex === careers[careerIndex].length){
     careerIndex++
     characterIndex = 0;
}
  if(careerIndex === careers.length){
    careerIndex = 0;
  }
setTimeout(updateText,400);
}