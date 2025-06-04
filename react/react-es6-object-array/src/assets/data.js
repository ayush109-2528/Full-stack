const animals = [
  {
    name: "cat",
    sound: "meow",
    fedding: {
      food: 2,
      water: 3,
    },
  },
  { name: "dog", sound: "woof" },
];
function Useanimal(){
    return [
        animals.name,
        function(){
            console.log(animals.sound);

        }
    ]
}
export default animals;
export {Useanimal};