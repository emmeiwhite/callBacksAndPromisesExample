const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Stuff worked ");
  } else {
    reject("Errorrr");
  }
});

promise
  .then(result => {
    return result + "!!!";
  })
  .then(result2 => {
    console.log(result2);
  });
