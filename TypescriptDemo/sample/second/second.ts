var gretting = ():string => 'Hello...'
console.log(gretting());

var gretting1 = (id:number,name:string):any =>{
    return `user name ${id} and name ${name}`
}
console.log(gretting1(124491,'suresh'));

var gretting2 = (id:number,name:string='default name'):any =>{
    return `user name ${id} and name ${name}`
}
console.log(gretting2(124491));