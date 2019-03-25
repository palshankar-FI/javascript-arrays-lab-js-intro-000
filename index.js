var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten()', function() {
  it('removes the First kitten from the kittens array', function() {
    window.kittens = ['Milo', 'Otis', 'Garfield'];
    destructivelyRemoveFirstKitten()

    expect(window.kittens).toEqual(["Otis", "Garfield"])
  })
})

function appendKitten(name)', function() {
  it('appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
    window.kittens = ['Milo', 'Otis', 'Garfield'];
    expect(appendKitten("Broom")).toEqual(["Milo", "Otis", "Garfield", "Broom"])

    expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
  })
})

function prependKitten(name)', function() {
  it('prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
    window.kittens = ['Milo', 'Otis', 'Garfield'];
    expect(prependKitten("Arnold")).toEqual(["Arnold", "Milo", "Otis", "Garfield"])

    expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
  })
})

function removeLastKitten()', function() {
  it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
    window.kittens = ['Milo', 'Otis', 'Garfield'];
    expect(removeLastKitten()).toEqual(["Milo", "Otis"])

    expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
  })
})

function removeFirstKitten()', function() {
  it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
    window.kittens = ['Milo', 'Otis', 'Garfield'];
    expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

    expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
  })
})
})
