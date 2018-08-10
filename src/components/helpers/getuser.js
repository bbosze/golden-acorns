function getUser() {
  return fetch(`http://localhost:9000/users`)
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
      return data;
  })
  .catch(error => {
    console.log(`Error: ${error.message}`);
    throw error;
  });
}

export default getUser;
