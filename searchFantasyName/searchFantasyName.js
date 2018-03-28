// searchFantasyName.js

import names from './names'

function searchFantasyName (query) {
  return names.filter(
    name => name.search(
        new RegExp(query, 'i')
      ) !== -1
  )
}

export default searchFantasyName
