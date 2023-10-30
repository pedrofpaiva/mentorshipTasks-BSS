// Divisibility Check for 3

let i = 0

while ( i < 10000) {
  if (i % 3 === 0) {
    console.log(`${i} é divisível por 3.`)
  } else {
    console.log(`${i} não é divisível por 3.`)
  }
  i = i+1
}
