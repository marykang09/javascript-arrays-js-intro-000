var chocolateBars = ['snickers','hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (array,element){
  var array = [1]
  array.unshift("foo")
  return array
}

function destructivelyAddElementToBeginningOfArray (array,element){
  var array = [1]
  array.unshift("foo")
  return array
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

function accessElementInArray(array, index){
  var array = [3]
  return array[0]
}

function destructivelyRemoveElementFromBeginningOfArray (){
  var array = [array];
  array.shift();
  return array
}
