import sayHello from "./say-hello.js";
import test from "ava";

test("my passing test", (t) => {
  t.assert(sayHello("Bruce") === "Hello Bruce");
  t.assert(sayHello() === "Hello World");
});
