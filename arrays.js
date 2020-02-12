var chocolateBars = ['snickers','hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (array,element){
  var array = [1]
  array.unshift("foo")
  return array
}

function destructivelyAddElementToBeginningOfArray (array,element){
  var array = [1]
  array.unshift("foo")
  return array.unshift("food")
}

function addElementToEndOfArray (array, element){
  var array = [1]
  array.push("foo")
  return array
}

function destructivelyAddElementToEndOfArray (array, element){
  var array = [1]
  array = [...array, "foo"]
  return array
}
