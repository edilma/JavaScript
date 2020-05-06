function selectRandomEntry(idNumbers ){
    let selectedEntry; 
    selectedEntry = idNumbers[(Math.floor(Math.random()*idNumbers.length))];
    return selectedEntry;
}
const animalSelected = function(idNumbers){
    const animalsChoosen=[];
    for (let i = 0; i < 3; i++) {
        let animal = selectRandomEntry(idNumbers );
        animalsChoosen[i] = animal;
        if (!animalsChoosen.includes(animal)) {
            animalsChoosen[i] = animal;
        }
    }
    return animalsChoosen;
}


let idNumbers = [291, 414, 503, 599, 796, 890];
//let select = console.log(selectRandomEntry(idNumbers));

//console.log ( `${select[0]} ,${select[1]} , and ${select[2]} are going to space!`)

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
  let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
  let select = animalSelected(idNumbers);

  function buildCrew( select ,animals){
    const crew = [];  

    for (const astronautID in animals){
        console.log (astronautID);
        for (let index = 0; index < 3; index++) {
            console.log(select[index])
            if (animals.astronautID == select[index]) {
               
                crew.includes(item);
            };
            
        }     
      }
    return crew;
  }

  console.log(buildCrew(select,animals));

  //console.log (candidateE.astronautID );
 