const matrix = () => {
  const w = +prompt('Введіть ширину матриці');
  const h = +prompt('Введіть висоту матриці');

  const arr = new Array(h).fill().map(() => new Array(w));
  let counter = 1,
  startCol = 0,
  startRow = 0,
  endCol = w - 1,
  endRow = h - 1;

function addZero(num) {
  if(num <=9) {
    return '0' + num;
  } else {
    return "" + num;
  }
}

    while (startCol <= endCol && startRow <= endRow) {

      for (var i = startCol; i <= endCol; i++) {
        arr[startRow][i] = addZero(counter);
        counter++;
      }
      startRow++;

      for (var k = startRow; k <= endRow; k++) {
        arr[k][endCol] = addZero(counter);
        counter++;
      }
      endCol--;

      for (var j = endCol; j >= startCol; j--) {
        arr[endRow][j] = addZero(counter);
        counter++;
      }
      endRow--;

      for (var z = endRow; z >= startRow; z--) {
        arr[z][startCol] = addZero(counter);
        counter++;
      }
      startCol++;
    }

  console.log(arr);
};

export default matrix;
