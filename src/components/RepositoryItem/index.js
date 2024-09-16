import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {name, imageUrl, starsCount, forksCount, issuesCount} =
    repositoryDetails

  return (
    <li className="repository-item">
      <img className="repository-image" src={imageUrl} alt={name} />
      <h1 className="repository-name">{name}</h1>
      <div className="stats-container">
        <img
          className="stars-icon"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p className="stars-text">{starsCount} stars</p>
      </div>
      <div className="stats-container">
        <img
          className="forks-icon"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p className="forks-text">{forksCount} forks</p>
      </div>
      <div className="stats-container">
        <img
          className="issue-icon"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p className="issue-text">{issuesCount} open issue</p>
      </div>
    </li>
  )
}

export default RepositoryItem
