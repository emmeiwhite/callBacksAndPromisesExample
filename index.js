const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Stuff worked ");
  } else {
    reject("Errorrr");
  }
});


/**  --- catch() catches any errors that may happen between the chains then() -
promise
  .then(result => {
    throw Error;
    return result + "!!!";
  })
  .then(result2 => {
    console.log(result2);
  })
  .catch(err => console.log("ERROR !!!"));

-- */


/** --- Now the new scenario | Logically thinking it through

promise
  .then(result => result + "!")
  .then(result2 => result2 + '?')
  .catch(() => console.log('Error !!!'))
  .then(result3 => {
    console.log(result3 + " !")
  })
--- */


/**  --- Promise.all([promise1,promise2,promise3,...,promiseN])

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Promise 2 Hi");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, "Promise 3 Hi");
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Promise 4 Hi");
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 6000, "Promise 5 Hi");
});



Promise.all([promise, promise2, promise3, promise4, promise5])
  .then(values => {
    console.log(values);
    console.log(typeof values);
  });


  --- */


/**  --- Practical Use of Promise | let's use finally --- */

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

Promise.all(urls.map(url => fetch(url).then(result => result.json()).then(ourPromises => ourPromises)))
  .then(values => {
    throw Error;
    console.log(values);
  })
  .catch(err => {
    console.log("ERROR !!!, I Throwed an Error");
  })
  .finally(() => { console.log("I run no matter what. I am Finally") });



/** --- Async - Await ---
 * Syntactical Sugar on top og Promises.
 * Making use of promises only
 * The Syntax is more synchronous looking



const getAlbums = async () => {
  const promise1 = await fetch("https://jsonplaceholder.typicode.com/users"); // pause
  const promise2 = await promise1.json(); // apuse

  console.log(promise2);
}

getAlbums();

---*/

/**   --- Practical Example ---  Async->Await
 *


const urls = [
  "https://jsonplaceholde.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
]


const getData = async () => {

  try {
    const [users, posts, albums] = await Promise.all(urls.map(url => fetch(url).
      then(result => result.json()).then(data => data)));

    console.log(users);
    console.log(posts);
    console.log(albums);
  } catch (err) {
    console.log("Something Went Wrong !!!");
  }

}

---- */


