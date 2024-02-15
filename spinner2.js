function printSpinner(character, delay) {
  setTimeout(() => {
    process.stdout.write(`\r${character}   `);
  }, delay)
}
printSpinner("|", 100);
printSpinner("/", 300);
printSpinner("-", 500);
printSpinner("\\", 700);
printSpinner("|", 900);
printSpinner("/", 110);
printSpinner("-", 130);
printSpinner("\\", 150);
printSpinner("|", 170);