// Logic Challenge - Mengelompokkan Hewan
function groupAnimals(animals) {
  var animalName = [ [] ];
  var a = 0;
  animals.sort();
  animalName[0].push(animals[0]);
  for(var i = 1;i<animals.length;i++)
  {
    if(animals[i][0] === animalName[a][0][0])
    {
      animalName[a].push(animals[i]);
    }
    else
    {
      a++;
      animalName[a] = [animals[i]];
    }
  }

  return animalName;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]