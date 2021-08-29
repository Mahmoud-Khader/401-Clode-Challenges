'use strict'
const Node=require('./node')
class Stack{
    constructor(){
        this.top=null;

    }


    push(value){
        let newNode=new Node(value)
        if(this.top){
            newNode.next=this.top
            this.top=newNode
        }
        this.top=newNode

        
    }

    pop(){
        if(!this.top) return 'there is no nodes'
        let top =this.top 
        this.top=this.top.next
        return top.value
        
    }
    peek(){
        if(!this.top) return -1 
        return this.top.value
    }
    isEmpty(){
        if(!this.top){
            return true
        }
    
          return  false
        
    }

}



module.exports = Stack;