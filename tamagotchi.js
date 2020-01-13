class Tamagotchi {
  constructor(toyName) {
    this.name = toyName;
    this.isHatched = false;
    this.happyMeter = 0;
    this.hungerMeter = 0; 
    this.bracelet = null; 
    this.disciplineMeter = 0;
    this.age = 0; 
    this.weight = ['light', 'medium', 'big'];
    this.isIll = false;
    this.isAlive = true;
    this.numberOfPoops = 0;
    this.lifeCycle = ['baby', 'toddler', 'kid', 'adult'];
    this.isPottyTrained = false;
    this.gender = ['male', 'female'];
    this.family = 'Dekelver';
    this.birthdate = new Date();
  }
  hatch() {
    console.log("Our egg is hatching! The miracle of life!");
    this.isHatched = true;
  }
  poop() {
    console.log('Pooping!');
    this.numberOfPoops++;
    this.hungerMeter++;
  }
  toilet() {
    this.numberOfPoops = 0;
    this.isPottyTrained = true;
  }
  meal() {
    this.hungerMeter--;
  }
  snack() {
    this.hungerMeter--;
    this.happyMeter++;
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      console.log("oh no our pet become ill");
      this.isIll = true;
    }
    console.log(`Is our pet ill?`, this.isIll);
  }
}
const pet = new Tamagotchi('bobo');
console.log(pet);
pet.hatch();
console.log(pet);

//Feed: We should be able to feed our tamagotchi a meal or a snack
//meal: decreases the hunger meter
//snack: decreases the hunger meter and increases the happiness meter, but the tamagotchi might become ill
