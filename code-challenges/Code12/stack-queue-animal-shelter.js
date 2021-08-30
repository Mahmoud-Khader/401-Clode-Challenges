const Queue = require("./Queue");

class AnimalShelter{
    constructor(){
        this.dog=new Queue();
        this.cat=new Queue();
        

    }

    enqueue(animal){
        if(animal.type==='dog'){
            this.dog.enqueue(animal.name)

        }
        else if(animal.type==='cat')
        {
            this.cat.enqueue(animal.name)
        }
        else return -1
        
    }

    dequeue(pref){
        if(pref==='dog'){
            return  this.dog.dequeue(pref)
             
        }else if(pref==='cat'){
            return  this.cat.dequeue(pref)
             
        }
        else return null 
    }
    
}

module.exports=AnimalShelter