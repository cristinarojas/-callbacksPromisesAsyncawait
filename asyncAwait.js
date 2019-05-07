// JavaScript is always synchronous and single-threaded.
// Async await = There’s a special syntax to work with promises in a more comfortable fashion

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
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: something went wrong');
      }
    }, 2000);
  });
}

// async - asynchronus process
// await - await to the Asynchronus process to complete
async function init() {
  // I waiting to createPost done their functionality
  await createPost({title: 'Post three', body: 'boy three'});

  // and then executing getPosts
  getPosts();
}

init(); // Is the elegant way to create promises.
