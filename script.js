//1 
//a 
const jedi = [];
//b
jedi[0] = `Luke`;
//c 
jedi.push(`Obi-Wan Kenobi`);
//d
jedi.unshift(`Yoda`);
//e 
console.log(jedi[1]);
//f
jedi.pop();
console.log(jedi);
//g 
jedi.shift();
console.log(jedi);

//2
//a
const sithLords = [`Darth Vader`, `Darth Sidious`, `Darth Maul`];
//b
const imperialOfficers = [`Grand Moff Tarkin`, `Orson Krennic`]
//c 
const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);
//d
console.log(starWarsVillains.slice(0, 2));  

//3
//a
const droids = {
    astromech: `R2-D2`,
    protocol: `C3P0`,
    assassin: `IG-88`
}
//b 
console.log(droids[`astromech`]);
//c
console.log(droids.protocol);
//d
droids.assassin = `IG-11`;

//BONUS
//4
//console.log(starWarsVillains[0].slice(6, 7));
console.log(starWarsVillains[0][6]); 

//5 
console.log(sithLords.slice(-2, -1));

//6 
//a 
const starWarsMovies = [
    {
        episodeOne: `The Phantom Menace`,
        episodeTwo: `Attack of the Clones`,
        episodeThree: `Revenge of the Sith`
    },
    {
        episodeFour: `A New Hope`,
        episodeFive: `The Empire Strikes Back`,
        episodeSix: `Return of the Jedi`
    },
    {
        episodeSeven: `The Force Awakens`,
        episodeEight: `The Last Jedi`,
        episodeNine: `The Rise of Skywalker`
    },
];

//b 
starWarsMovies.splice(1, 0, `Solo`, `Rogue One`);
console.log(starWarsMovies);