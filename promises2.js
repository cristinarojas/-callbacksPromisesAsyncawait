// JavaScript is always synchronous and single-threaded.
// Promise = represents the eventual result of an asynchronous operation.
// It is a placeholder into which the successful result value
// or reason for failure will materialize.

// Solution to handle a lot of .then we can use Promise.all
const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
                        setTimeout(resolve, 2000, 'Bye!');
                      });
const promise4 = fetch
  ('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());

// Take an array of promises results (resolve) and insert into an array
Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
  console.log(values); //  ["Hello world", 10, "Bye!", Array(10)]
});
