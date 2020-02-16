// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      this.dna.forEach(function (val, index, arr){
        let randomBase;
        do {
          randomBase = returnRandBase();
        } while(val === randomBase);
        arr[index] = randomBase;
      });
      return this.dna;
    },
    compareDNA(targetPAequor) {
      let count = 0;
      let percentage = 0;
      for(let i = 0; i < this.dna.length; i++) {
        if(this.dna[i] === targetPAequor.dna[i])
          count++;
      }
      percentage = count / this.dna.length * 100;
      console.log(`specimen #${this.specimenNum} and specimen #${targetPAequor.specimenNum} have ${percentage.toFixed(0)}% DNA in common.`)
    },
    willLikelySurvive() {
      // let count = 0;
      // let percentage = 0;
      // for(let i = 0; i < this.dna.length; i++) {
      //   if(this.dna[i] === 'C' || this.dna[i] === 'G')
      //     count++;
      // }
      // percentage = count / this.dna.length * 100;
      // return percentage >= 60;
      
      const cOrG = this.dna.filter(base => base === 'C' || base === 'G');
      return (cOrG.length / this.dna.length * 100) >= 60;
    },
    complementStrand() {
      return this.dna.map(base => {
        switch(base) {
          case 'A':
              return 'T';
              break;
          case 'T':
              return 'A';
              break;
          case 'C':
              return 'G';
              break;
          case 'G':
              return 'C';
              break;
        }
      })
    }
  }
}

const pAequor = pAequorFactory(1, mockUpStrand());
console.log(pAequor.dna);
pAequor.mutate();
console.log(pAequor.dna);

const targetPAequor =  pAequorFactory(2, mockUpStrand());
console.log(targetPAequor.dna);
pAequor.compareDNA(targetPAequor);
console.log(pAequor.willLikelySurvive());


const survivablePAequors30 = [];
const createPAequors = (num, arr) => {
  let specimenNum = 1;
  while(arr.length < num) {
    instance = pAequorFactory(specimenNum, mockUpStrand());
    if(instance.willLikelySurvive()) {
      arr.push(instance);
      specimenNum++;
    }
  }
}

createPAequors(30, survivablePAequors30);
console.log(survivablePAequors30);
console.log(survivablePAequors30[0].willLikelySurvive());


console.log(pAequor.dna);
console.log(pAequor.complementStrand());

