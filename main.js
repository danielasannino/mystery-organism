// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna = mockUpStrand()) => {
  return {
    specimenNum,
    bases,
    mutate() {
      return this.dna = returnRandBase();
    },
    compareDNA(pAequor) {
      console.log(`${this.specimenNum}: ${this.dna}`);
      console.log(`${pAequor.specimenNum}: ${pAequor.dna}`);

      let dnaSame = 0;
      let samePercent = 0;

      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor[i]) {
          dnaSame++;
        }
        samePercent = (100 / 15) * dnaSame;
      }
      console.log(`Specimen: ${this.specimenNum} and ${pAequor.specimenNum} have ${Math.floor(samePercent)}% DNA in common.`);
    },
    willLikelySurvive() {
      let findCandG = 0;
      let survivalPercent = 0;

      for (let i = 0; i < this.dna.length; i++) {

        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          findCandG++;
        }
      }

      survivalPercent = Math.floor((100 / 15) * findCandG);

      survivalPercent > 60 ? true : false;

    }
  }
};

const instancespAequor = [];

let i = 0;

while (i < 30) {
  pAequorFactory(i);
  if (pAequorFactory[i].willLikelySurvive() === true) {
    instancespAequor.unshift(pAequorFactory[i].dna);
    i++;
  }
}




