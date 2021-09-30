// Question 1A
const jedi = []

// Question 1B
jedi[0] = "Luke"

// Question 1C
jedi.push("Obi-Wan Kenobi")

// Quesiton 1D
jedi.unshift("Yoda")

// Question 1E
console.log(jedi[1])

// Question 1F
jedi.splice(2, 1)

// Question 1G
jedi.shift()
console.log(jedi)

// Question 2A
const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"]

// Question 2B
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"]

// Question 2C
const starWarsVillains = sithLords.concat(imperialOfficers)
console.log(starWarsVillains)

// Question 2D
// console.log(starWarsVillains.splice(0, 2))

// Question 3A
const droids = {astromech: "R2-D2", protocol: "C-3PO", assassin: "IG-88"}

// Question 3B
console.log(droids['astromech'])

// Question 3C
console.log(droids.protocol)

// Question 3D
droids["assassin"] = "IG-11"

// Question 4A
console.log(starWarsVillains[0].slice(6, 7))

// Question 5
console.log(sithLords.slice(-2, -1));

// Question 6A 
const starWarsMovies = [
    {
        episodeOne: "The Phantom Menace",
        episodeTwo: "Attack of the Clones",
        episodeThree: "Revenge of the Sith"
    },
    {
        episodeFour: "A New Hope",
        episodeFive: "The Empire Strikes Back",
        episodeSix: "Return of the Jedi"
    },
    {
        episodeSeven: "The Force Awakens",
        episodeEight: "The Last Jedi",
        episodeNine: "The Rise of Skywalker"
    }
]

// Question 6B
starWarsMovies.splice(1, 0, "Solo", "Rogue One");