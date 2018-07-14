function putAcornData(acorns, url) {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:9000/api/initialstates', {
      headers: {
        "Content-Type": "application/json"
    },
      method: 'PUT',
      body: JSON.stringify({
        acorns: acorns,
        technology: url,
      })
    })
    .then((response) => response.json())
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      reject(error);
    });
  });
}

export default putAcornData;
