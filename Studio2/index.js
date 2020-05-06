// Code your orbitCircumference function here:
function calculateCircunference(orbitRadius){
    return (2*Math.PI*orbitRadius);
}

// Code your missionDuration function here:
function missionDuration (numberOrbits,orbitRadius=2000,orbitalSpeed=28000){
    return ((numberOrbits*orbitRadius)/orbitalSpeed).toFixed(2);

}


// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(idNumbers ){
    let selectedEntry; 
    selectedEntry = idNumbers[(Math.floor(Math.random()*idNumbers.length))];
    return selectedEntry;
}


// Code your oxygenExpended function here:

function oxygenExpended(candidate){
    let spaceWalk = missionDuration(3);
    let o2Used = candidate.o2Used(spaceWalk).toFixed(3);
    let message =  `${candidate.name} will perform the spacewalk, which will last ${spaceWalk} hours and require ${o2Used} kg of oxygen.`;
    return message;

    
}

let idNumbers = [291, 414, 503, 599, 796, 890];

// Candidate data & crew array.
let candidateA = {
    'name':'Gordon Shumway',
    'species':'alf',
    'mass':90,
    'o2Used':function(hrs){return 0.035*hrs},
    'astronautID':414
  };
  let candidateB = {
    'name':'Lassie',
    'species':'dog',
    'mass':19.1,
    'o2Used':function(hrs){return 0.030*hrs},
    'astronautID':503
  };
  let candidateC = {
    'name':'Jonsey',
    'species':'cat',
    'mass':3.6,
    'o2Used':function(hrs){return 0.022*hrs},
    'astronautID':796
  };
  let candidateD = {
    'name':'Paddington',
    'species':'bear',
    'mass':31.8,
    'o2Used':function(hrs){return 0.047*hrs},
    'astronautID':291
  };
  let candidateE = {
    'name':'Pete',
    'species':'tortoise',
    'mass':417,
    'o2Used':function(hrs){return 0.010*hrs},
    'astronautID':599
  };
  let candidateF = {
    'name':'Hugs',
    'species':'ball python',
    'mass':2.3,
    'o2Used':function(hrs){return 0.018*hrs},
    'astronautID':890
  };
  
let crew = [candidateA,candidateC,candidateE];
let circunference = Math.round(calculateCircunference(200))
let missionFiveOrbits = missionDuration (5)
console.log(`The mission will travel ${circunference} km around the planet, and it will take ${missionFiveOrbits} hours to complete.`)


console.log(oxygenExpended(candidateF));
