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


/** --- Now the new scenario | Logically thinking it through --- */

promise
  .then(result => result + "!")
  .then(result2 => result2 + '?')
  .catch(() => console.log('Error !!!'))
  .then(result3 => {
    console.log(result3 + " !")
  })
