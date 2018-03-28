/* eslint-env browser */

export function getTopStories () {
  return fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
  .then(response => response.json())
  .then(storiesIds => {
    const ids = storiesIds.slice(0, 30)
    return Promise.all(
      ids.map(id => getStory(id))
    )
  })
}

function getStory (id) {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
  .then(response => response.json())
}
