// Create a Student Interface , and printStudent function
interface Student{
    name:string
    age:number,
    isCompleted:boolean,
    address:{
        city : string,
        state : string,
        country :string
    }
}

let std1:Student = {
    name:'John',
    age:25,
    isCompleted:true,
    address:{
        city : 'Hyderabad',
        state : 'Telangana',
        country :'India'
    }
};

console.log(std1);
