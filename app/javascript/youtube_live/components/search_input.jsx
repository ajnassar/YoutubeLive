import React from 'react'
import { connect } from 'react-redux'
import { getLiveBroadcasts } from '../actions'

class SearchInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getLiveBroadcasts(this.state.value)
    this.setState({value: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getLiveBroadcasts: searchTerm => dispatch(getLiveBroadcasts(searchTerm))
})

export default connect(
  null,
  mapDispatchToProps
)(SearchInput)
