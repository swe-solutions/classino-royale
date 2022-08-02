class Machine {

  #alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  constructor (cost, small, big) {
    this.costToPlay = cost
    this.smallPayout = small
    this.bigPayout = big
  }

  spin () {
    const result = new Array(3).fill(null).map(_ => this.#getLetter())
    console.log(result.join(''))
    const count = [...new Set(result)].length
    return [0, this.smallPayout, this.bigPayout][3 - count]
  }

  #getLetter () {
    return this.#alphabet[Math.floor(Math.random() * this.#alphabet.length)]
  }

}

class Player {

  constructor (name, balance) {
    this.name = name
    this.balance = balance
  }

  play (machine) {
    if (this.balance < machine.costToPlay) return void console.log('Insufficient funds')
    this.balance += machine.spin() - machine.costToPlay
  }

}

const machine = new Machine(2, 10, 100)
const mug = new Player('Muggins', 30)

for (let i = 0; i < 20; i ++) {
  mug.play(machine)
  console.log(mug)
  console.log('')
}
