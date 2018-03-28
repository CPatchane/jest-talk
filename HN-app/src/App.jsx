import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import { getTopStories } from './lib/api'
import StoriesList from './components/StoriesList'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { stories: [], loading: true }
  }

  componentDidMount () {
    getTopStories()
    .then(stories => this.setState(() => ({
      stories: stories.filter(s => s),
      loading: false
    })))
  }

  render () {
    const { loading, stories } = this.state
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-intro'>
            Top 30 Hacker News
          </h1>
        </header>
        {loading ? <p className='loading'>🌀</p>
          : <StoriesList stories={stories} />
        }
      </div>
    )
  }
}

export default App

/*

<img src={logo} className='App-logo' alt='logo' />

*/
