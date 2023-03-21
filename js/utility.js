function getRndNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function randomListGen(volteCheDesidero, numRange) {
  const myArray = [];
  while (myArray.length < volteCheDesidero) {
    const rndNum = getRndNumber(1, numRange);

    if (myArray.indexOf(rndNum) === -1) {

      myArray.push(rndNum);
    }
  } return myArray

}




 

