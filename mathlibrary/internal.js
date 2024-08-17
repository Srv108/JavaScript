class LCG {
    constructor(seed) {
      this.state = seed;
      this.a = 1664525;
      this.c = 1013904223;
      this.m = Math.pow(2, 32);
    }
  
    next() {
      this.state = (this.a * this.state + this.c) % this.m;
      return this.state / this.m;
    }
  }
  
  // Example usage:
  const prng = new LCG(13); // Seed with 123
  for(let i=0;i<20;i++){
    console.log(Math.floor(prng.next()*20)); // Generate a pseudo-random number
}
  