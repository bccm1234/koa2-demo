const matrix = [
  [-10, 1, 1, -10, -10],
  [1, -10, 1, -10, 1],
  [1, -10, -10, 1, -10],
  [-10, -10, 1, -10, 1],
  [-10, 1, -10, 1, -10]
];
function findPath(matrix, start = 0) {
  const row = matrix.length;
  const distance = new Array(row).fill(100);
  const visited = new Array(row).fill(false);
  distance[start] = 0;
  for (let i = 0; i < row; i++) {
    visited[start] = true;
    if (distance[start] < 100) {
      for (let j = 0; j < row; j++) {
        if (matrix[start][j] + distance[start] < distance[j]) {
          distance[j] = matrix[start][j] + distance[start];
        }
      }
    }
    let index = -1;
    let min = -100;
    for (let k = 0; k < row; k++) {
      if (!visited[k] && distance[k] < min) {
        min = distance[k];
        index = k;
      }
    }
    start = index;
  }
  return distance;
}
console.log(findPath(matrix));
