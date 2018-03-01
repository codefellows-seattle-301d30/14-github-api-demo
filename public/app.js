'use strict';

$.ajax({
  url: 'https://api.github.com/user/repos?type=owner',
  method: 'GET',
  headers: {
    Authorization: 'token paste-your-token-here'
  }
})
  .then(
    data => data.forEach(repo => 
      $('#results').append(`<h3>${repo.name}</h3><p>${repo.description}</p><hr>`)),
      err => console.error(err.status, err.statusText, 'is the reason this is broken')
)