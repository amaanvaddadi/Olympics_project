var Olympian = function(trainingYears) {
  this.trainingYears = trainingYears || 0
      // trainingYears or if not provided, use 0
  if (this.trainingYears > 4) {
      this.qualified = true
    } else {
      this.qualified = false
    }

  // this.qualified = false
}

Olympian.prototype.getTrainingYears = function() {
  return this.trainingYears
}

Olympian.prototype.train = function() {
  this.trainingYears += 3
}

Olympian.prototype.checkIfQualified = function() {
  if (this.trainingYears > 4) {
    this.qualified = true
  }
  return this.qualified
}

console.log(Olympian)

// var markTodd = new Olympian(5)
// markTodd.qualify()
// markTodd.train()
// markTodd.checkIfQualified()

// console.log(markTodd.getTrainingYears())
// console.log(markTodd.checkIfQualified())

module.exports = Olympian
