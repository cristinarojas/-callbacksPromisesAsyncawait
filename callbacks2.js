// JavaScript is always synchronous and single-threaded.

// callback = una funcion que sera ejecutada despues que otra funcion halla sido ejecutada.
// Callback = a function that is to be executed after another function has finished executing
// Callback is passed as a parameter of another function.

// Array with data
const posts = [
  { title: 'Post One', body: 'This is post one'},
  { title: 'Post Two', body: 'This is post Two'}
];

// With callback implemented in createPost function
// It doesn't matter if getPosts function have less time that the createPost
// getPosts() will be executed after posts.push(post);
function getPosts() {
  setTimeout(() => {
    console.log('entra 2')
    let output = '';

    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);

    // Actually callback is getPosts function
    // this function getPosts will be call after that the post is push on the array.
    callback();
  }, 2000); // I will push the post after 2 seconds.
}

// Instead of call getPost() outside, we need to pass
// getPosts() as a parameter of the createPost with no parenthesis.
createPost({ title: 'Post three', body: 'boy three'}, getPosts); // then after 1 sec I will show all the array data.
