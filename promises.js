// JavaScript is always synchronous and single-threaded.
// Promise = represents the eventual result of an asynchronous operation.
// It is a placeholder into which the successful result value
// or reason for failure will materialize.

// Array with data
const posts = [
  { title: 'Post One', body: 'This is post one'},
  { title: 'Post Two', body: 'This is post Two'}
];

function getPosts() {
  setTimeout(() => {
    let output = '';

    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  // resolve - succefull
  // reject - some error
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      // 1 First is going to execute createPost code.
      posts.push(post);

      const error = false;

      // 2 As soon is resolve - not errors
      // Then will execute resolve
      if (!error) {
        resolve();
      } else {
        reject('Error: something went wrong');
      }
    }, 2000);
  });
}

createPost({ title: 'Post three', body: 'This is post three'})
  .then(getPosts) // 3 If not errors then will execute the getPosts function.
  .catch(err => console.log(err)); // We can insert cath to see the error more cleaning in console.
