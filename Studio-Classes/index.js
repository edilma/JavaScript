//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. 
//Note that scores will be an array of test results.
class CrewCandidate {
    constructor ( name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore){
        return this.scores.push(newScore);
    }

    average(){
        let total =0;
        for (let index = 0; index < this.scores.length; index++) {
            total = total + this.scores[index];
        }
        return (total / this.scores.length).toFixed(1);
    }
    
    status(){
        let myStatus;
        if (this.average() >89) {
            myStatus = "Accepted";
             
        }else{if (this.average()>80) {
            myStatus = "Reserve" ;
        } else {if (this.average()>70) {
            myStatus = "Probationary"
        }else{
            myStatus = "Rejected";
        }
            
        }
        }
        return `${this.name} earned an average test score of ${this.average()} % and has a status of ${myStatus}.`
    }
}


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

let bubbaBear = new CrewCandidate("Bubba Bear", 135,[88,85,90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5,[93,88,97]);
let gladGator = new CrewCandidate("Glad Gator", 225,[75,78,62]);
bubbaBear.addScore(83);

// console.log(bubbaBear);
// console.log(merryMaltese);
// console.log(gladGator);
// console.log (bubbaBear.average());
console.log (bubbaBear.status());
//console.log(merryMaltese.average());
console.log(merryMaltese.status());
//console.log (gladGator.average());
console.log (gladGator.status());