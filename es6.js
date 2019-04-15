//CONST
const person = {
    name : 'Rasika',
    age : 25
}
person.name = 'weragoda';
console.log(person.name);
/*--------------------------- */
const nums = [1,2,3,4];
nums.push(5);
console.log(nums);

//foreach

const fruits = ['apple','oranges','grapes'];
fruits.forEach((item)=>{
    console.log(item); //it does not return anything just looping
})

//map
//it return the array and allow us to change items in array
const newfruit = fruits.map((item)=>
    item.toUpperCase()
)
console.log(newfruit);

//filter

const people = [
    {id:1, name:'Rasika'},
    {id:2, name:'Supun'},
    {id:3, name:'Kanishka'},
];

const peopleCpy = people.filter((people_item)=>{
    return people_item.id !== 2;
});

console.log(peopleCpy);

//spread

const arr = [1,2,3];
const arr2 = [...arr,4,5];
const arr3 = [...arr.filter(item =>(item !== 2 ))]
console.log(arr2);
console.log(arr3);

const animal = {
    name :'cat',
    age : 3
}

const newAnimal = {
    ...animal,
    sex : 'female'
};
console.log(newAnimal);

//desrtucting

const profile = {
    fullname : 'Rasika weragoda',
    address : {
        street : '391/A',
        city1 : 'Batuwatta',
        city2 : 'Ragama'
    },
    hobbies : ['movies', 'music']
};

const {fullname, address, hobbies} = profile;
const {street} = profile.address;
console.log(fullname,street);
