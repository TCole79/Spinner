
let sentence = ('\r|\r/\r-\r\\\r|\r/\r-\r\\\r|\r');

let interval = 1000;

for (const sent of sentence) {
  
  setTimeout(() => {
  process.stdout.write(sent);
  }, interval);
  interval += 200;
};

// const sentence = ('Hello there from Tristan\n');

// let interval = 1000;

// for (const char of sentence) {

//   setTimeout(() => {
//     process.stdout.write(char);
//     }, interval);

//   interval += 90;

// }

//process.stdout.write('hello from spinner1.js... \rheyyy\n');

// setTimeout(() => {
//   process.stdout.write('\r|    ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/    ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-    ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\    ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|    ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/    ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-    ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\    ');
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|    ');
// }, 1700);