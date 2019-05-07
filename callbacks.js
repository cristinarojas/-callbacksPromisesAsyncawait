// JavaScript is always synchronous and single-threaded.

// callback = una funcion que sera ejecutada despues que otra funcion halla sido ejecutada.
// Callback = a function that is to be executed after another function has finished executing

// Array with data
const posts = [
  { title: 'Post One', body: 'This is post one'},
  { title: 'Post Two', body: 'This is post Two'}
];

// This function is first executed because the timer
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
  setTimeout(() => {
    posts.push(post);
    console.log('enter here createPost!');
  }, 2000);
}



// when I execute createPost function this take longer time.
// And the DOM is already painted with getPosts function in 1 sec.
createPost({title: 'Post three', body: 'boy three'});

getPosts();

// See solution with callback2.js
