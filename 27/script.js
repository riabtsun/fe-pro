function getUserData(file) {
  return request = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', file, true);
    xhr.send();

    xhr.addEventListener('readystatechange', function () {
      if (xhr.readyState === 4) {
        xhr.status === 200 ? resolve(JSON.parse(xhr.responseText)) : reject(xhr.statusText);
      }
    })
  })
}

let firstChildren = getUserData('data.json');
let kids = [];

firstChildren
  .then(
    firstChildren => {
      kids.push(firstChildren)
      return getUserData('data2.json');
    }
  ).then(
    secondData => {
      kids.push(secondData);
      return kids;
    }
  )
  .then(
    kids => {
      let kidsName = kids.map(user => user.children)
      console.log(kidsName.flat())
    }
  )
  .catch(
    data => {
      console.log('Something wrong...');
    }
  )

