let animationSequence = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let n = 0;
for (let char of animationSequence) {
  n += 200;
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, n);
}
