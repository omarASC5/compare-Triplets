// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let bobPoints = 0;
    let alicePoints = 0;
    let points = [];
    
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
        alicePoints++;
    } else if (a[i] < b[i]) {
        bobPoints++;
    } else {
        alicePoints += 0;
        bobPoints += 0;
    }  
  }
    points.push(alicePoints);
    points.push(bobPoints);
    return points;
    
}
