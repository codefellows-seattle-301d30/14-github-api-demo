'use strict';

// $.ajax({
//   url: 'https://api.github.com/user/repos?type=owner',
//   method: 'GET',
//   headers: {
//     Authorization: `token ${githubToken}`
//   }
// })

$.get('/github/user/repos')
  .then(data => {
    console.log(data);
    return data;
  })
  .then(
    data => JSON.parse(data).forEach(repo => 
      $('#results').append(`<h3>${repo.name}</h3><p>${repo.description}</p><hr>`)),
      err => console.error(err.status, err.statusText, 'is the reason this is broken')
)