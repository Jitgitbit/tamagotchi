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
    this.lifeLeft = ['baby', 'child', 'teen', 'adult', 'your pet is DEAD!'];
    this.lifeCycle = null;
    this.isPottyTrained = false;
    this.gender = ['male', 'female'];
    this.family = 'Dekelver';
    this.birthdate = new Date();
  }
  hatch() {
    console.log("Our egg is hatching! The miracle of life!");
    this.isHatched = true;
    this.lifeCycle = this.lifeLeft.shift();
  }
  poop() {
    console.log('Pet is pooping!');
    this.numberOfPoops++;
    this.hungerMeter++;
  }
  toilet() {
    console.log('Pet is potty trained!')
    this.numberOfPoops = 0;
    this.isPottyTrained = true;
  }
  meal() {
    console.log('A good meal!')
    this.hungerMeter--;
  }
  snack() {
    console.log('Just a little snack')
    this.hungerMeter--;
    this.happyMeter++;
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      console.log("oh no our pet become ill");
      this.isIll = true;
    }
    console.log(`Is our pet ill?`, this.isIll);
  }
  grow() {
    console.log('Pet is growing up!')
    this.lifeCycle = this.lifeLeft.shift();
  }
  scold() {
    console.log('Pet has to follow the rules!')
    this.disciplineMeter++;
    this.happyMeter--;
  }
  play() {}
}
const pet = new Tamagotchi('bobo');
console.log(pet);
pet.hatch();
console.log(pet);
pet.poop();
console.log(pet);
pet.toilet();
console.log(pet);
pet.meal();
console.log(pet);
pet.snack();
console.log(pet);
pet.grow();
console.log(pet);
pet.scold();
console.log(pet);