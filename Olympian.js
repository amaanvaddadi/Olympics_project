var Olympian = function() {
  this.trainingYears = 0
  this.qualified = false
}

Olympian.prototype.getTrainingYears = function() {
  return this.trainingYears
}

Olympian.prototype.train = function() {
  if (this.trainingYears < 4) {
    this.qualified = false
  }
}

var markTodd = new Olympian()

console.log(markTodd.getTrainingYears())

module.exports = Olympian
