function getInitialState(url) {
  return fetch(`http://localhost:9000/api/initialstates?technology=${url}`)
    .then(response => {
      if (response.ok) {
        return Promise.resolve(response);
      }
      else {
        return Promise.reject(new Error('Failed to load'));
      }
    })
    .then(response => response.json())
    .then(data => {
        return data[0].initialnumber;
    })
    .catch(function(error) {
        console.log(`Error: ${error.message}`);
    });
}

export default getInitialState;
