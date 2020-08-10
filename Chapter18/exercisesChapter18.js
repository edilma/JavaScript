// Define your Book class here:
class Book{
    constructor (titulo,author,copyrightDate,iSBN,numberOfPages, checkoutTimes){
    this.title =titulo;
    this.author = author;
    this.copyrightDate =new Date(copyrightDate,11);
    this.iSBN = iSBN;
    this.numberOfPages = numberOfPages;
    this.checkoutTimes = checkoutTimes;
    }

}

class Catalog extends Book{
    constructor(titulo,author,copyrightDate,iSBN,numberOfPages,checkoutTimes){
        super(titulo,author,copyrightDate,iSBN,numberOfPages,checkoutTimes);
    }
        
     static isDiscarded= function(copyrightDate){
         let today = new Date();
         console.log(`Today date is ${today}`)
         let diff = copyrightDate - today;
                      
            if (diff > 60) {
                return "yes";
            }
            else{
                return "no";
            }

        }
    }

    


// Define your Manual and Novel classes here:
class Novel extends Book{
    constructor(titulo,author,copyrightDate,iSBN,numberOfPages,checkoutTimes){
        super(titulo,author,copyrightDate,iSBN,numberOfPages, checkoutTimes);  
    }
    static isDiscarded(){
        if (this.checkoutTimes>500) {
            return "yes";
        }else{
            return "No";
        }

    }
    
}

class Manual extends Book{
    constructor(titulo,author,copyrightDate,iSBN,numberOfPages){
        super(titulo,author,copyrightDate,iSBN,numberOfPages);
        }
    isDiscarded(){
        if (copyrightDate - Date.now > 5 ) {
            return "yes";
            
        } else {
            return "no";
        }
    }
    }

// Declare the objects for exercises 2 and 3 here:
let novel1 = new Novel('Pride and Prejudice',"Jane Austen", 1813,"1111111111111",432,32 );

//let book1 = new Book('Pride and Prejudice',"Jane Austen", 1813,"1111111111111",432,32 );
let catalog1 = new Catalog("nombre", "autor", 2000, "11111",500,3  );

// Code exercises 4 & 5 here:

console.log (novel1);
console.log(`The novel is discarded? ${Novel.isDiscarded(novel1)}`);
//console.log(book1);
console.log(catalog1);
console.log(`The catalog is discarde? ${Catalog.isDiscarded(catalog1)}`);