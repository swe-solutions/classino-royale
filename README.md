# Classino Royale

The purpose of this assignment is to use classes to model a few different things you might find in a casino.

## Random numbers

One important thing to know is that `Math.random()` can be used to generate a random decimal between `0` and `1` (with `1` excluded). This can be used with `Math.floor()` and a bit of ingenuity to create random integers in any range. It is worth having a go at figuring out how to do this, but don't struggle with it for too long: search the internet for help when you need it.

## Assessment

There are no tests for this project. You should manually test your classes with `console.log()` in the space identified by the comments.

This work will be peer assessed: you will be assigned a random other apprentice's work and asked to write some comments about how well they accomplished the challenges they attempted, and how it could be improved.

## Easy: Dice

Write two classes: `Die` and `Cup`. (Die is the singular form of the word dice.)

### Die

The constructor of `Die` accepts an integer `sides` where `4 <= sides <= 20`. `Die` should have a `sides` property and a method `roll()` which returns a random integer `n` where `1 <= n <= sides`.

```js
const die = new Die(6)

die.sides // => 6

die.roll() // => random int from 1, 2, 3, 4, 5, 6
```

If the number of sides is invalid, throw an error:
```js
throw new Error('sides must be greater than 3 and less than 21')
```

### Cup

A cup contains several dice which can all be rolled at the same time. Each cup object should have one property and one method:

 - `dice` | *array* | An array of `dice` objects representing dice contained in the cup.
 - `spill()` | returns an array where the `i`th entry is a random integer representing the rolled value of the `i`th die.
 
The constructor of `Cup` accepts an array of integers corresponding to the number of sides of each die in the cup.

For example,
```js
const cup = new Cup([4, 6, 10])

cup.spill() // => e.g. [4, 1, 7] or [1, 6, 9], etc.

cup.dice[2].sides // => 10

cup.dice[0].roll() // => random int from 1, 2, 3, 4
```

## Medium: Slot machine

Write two classes: `Player` and `Machine`.

### Machine

`Machine` should have properties of `costToPlay`, `smallPayout`, and `bigPayout`. It should have a method called `spin()` which logs to the console a string of length 3 made from random, uppercase alphabet characters (e.g. `'ABC'`). If the letters are all distinct, `spin()` returns `0`; if exactly two are the same, it returns `smallPayout`; if all three are the same, it returns `bigPayout`.

### Player

`Player` should have properties of `name` and `balance`, representing how much money the player has left. It should have a method of `play(machine)` where `machine` is an instance of `Machine`. When the method is called, the player should lose the `cost` of the machine and gain the (possibly `0`) payout. If the player's balance is less than the cost to play, log a message to the console and do nothing. 

```js
const machine = new Machine(2, 10, 100)
machine.spin() // e.g. 'PPK' => 10

const player = new Player('Muggins', 30)

player.play(machine) // 'ABC' => player.balance === 28
player.play(machine) // 'XYX' => player.balance === 36
player.play(machine) // 'QQQ' => player.balance === 134
```

## Hard: Deck of cards

Write two classes: `Card` and `Deck`.

### Card

`Card`'s constructor should have two parameters: `suit` and `val`. Possible values for `suit` are `D`, `H`, `C`, `S` (corresponding to diamonds, hearts, clubs and spades). Possible values for `val` are `A`, `2`, ..., `10`, `J`, `Q`, `K` (the first is ace; the latter three are jack, queen and king). We assume there are no jokers.

**Properties**

 - `suit` | *string* | The suit of the card
 - `val` | *string* | The value of the card
 - `faceUp` | *boolean* | Whether the card is currently facing up (default `false`)

**Getters**

 - `abbreviation` | *string* | E.g. `'7H'` or `KC`
 - `title` | *string* | E.g. `'7 of Hearts'` of `'King of Clubs'`
 - `colour` | *string* | either `'red'` or `'black'`
 - `rank` | *number* | The numerical rank of the card. E.g. `'7H'` has rank `7` and `QD` has rank `12`

**methods**

 - `flip()` | Flips the card over (toggles `faceUp`)
 - `show()` | Sets the card facing up
 - `hide()` | Sets the card facing down

### Deck

**Properties**

 - `cards` | *array* | An array of 52 distinct cards. `cards[0]` is the top card; `cards[51]` is the bottom card.

**Methods**

 - `flip()` | Turns the deck over. Imagine thie in your mind: the order of the cards and `faceUp` property of each card should update accordingly (the bottom card becomes the top card, etc).
 - `deal()` | Removes the **top** card from the deck and returns it.
 - `random()` | Removes a random card from the deck and returns it.
 - `pick(suit, val)` | Removes the card of given suit and val from the deck and returns it. 
 - `cut(n)` | Splits the deck into two stacks of length `n` and `52 - n` and places the bottom stack on top.
 - `riffle()` | Splits the deck into two stacks of equal height and interleaves them (https://www.youtube.com/watch?v=JmbVNyIiD54). Assume that the bottom card in the top stack is the first to fall. If the number of cards left in the deck is odd, the top stack should contain one extra card.
 - `shuffle()` | Randomises the order of the cards.

## Extension

Use private properties and methods to make all attributes and getters return the string `'?'` if the card is not facing up.
