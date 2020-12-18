import sayHelloTo from "./say-hello.js";

function main() {
  const args = process.argv.slice(2); // first is "node", second is the full path to this index.js
  const [name] = args;
  if (!name) console.log("Try calling with npm start -- 'Your Name'");
  console.log(sayHelloTo(name));
}

main();
