class User{
    private userId:number;
    userName: string;
    usercity: string;
    constructor(id:number,name: string,city:string){
        this.userId = id;
        this.userName = name;
        this.usercity = city;
    }
    display():void{
        console.log(`id: ${this.userId} and ${this.userName} and ${this.usercity}`);
    }
};

var user1 = new User(124491,'suresh','tirupati');
user1.display();

//inheritance
class PriviledgedUser extends User{
    points: number;
    constructor(points:number,id:number,name: string,city:string){
        super(id,name,city);
        this.points = points;
    }
    display():void{
super.display();
console.log('available points are' + this.points);
    }

}
var specialUser = new PriviledgedUser(100, 124491,'test', 'test');
specialUser.display();