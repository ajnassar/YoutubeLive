export const RECEIVE_BROADCASTS = 'RECEIVE_BROADCASTS'

export const receiveBroadcasts = broadcasts => ({
  type: RECEIVE_BROADCASTS,
  broadcasts
})

export function getLiveBroadcasts(searchTerm) {
  return function action(dispatch, getState) {
    fetch(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&maxResults=25&part=snippet&key=api-key-goes-here`).then(results => {
      return results.json();
    }).then(data => {
      dispatch(RECEIVE_BROADCASTS(broadcasts))
    })
  }
}
