var chocolateBars = ['snickers','hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (array,element){
  var array = [1]
  array.unshift("foo")
  return array
}

function destructivelyAddElementToBeginningOfArray (array,element){
  var array = [1]
  array = ["foo",...array]
  return array
}

function addElementToEndOfArray (array, element){
  var array = [1]
  array.push("foo")
  return array
}
