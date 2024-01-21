let person:{
    name:string
    age:number
    greet:(name:string)=>void
}={
    name:'jack',
    age:18,
    greet(name){},
}

console.log('person',person);

interface Props{
    id:string
    children:number[]
  }
  
type PartialProps=Partial<Props>

