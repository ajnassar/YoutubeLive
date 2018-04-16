import React from 'react'
import updateBroadcasts from '../actions'

class SearchInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  handleClick() {
    // search API
    // Update store (broadcasts)
    // This will then populate the BroadcastList component
  }

  render() {
    return (
      <div>
        <input value={this.state.searchTerm}/>
        <button onClick={this.handleClick}/>
      </div>
    )
  }
}

export default SearchInput
