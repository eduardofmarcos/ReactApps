import React from 'react'
import Pagination from './../../components/pagination/index'
import './repos.css'

const Repos = (props) => {
  const repo = (
    <div className={`repos-list-container ${props.className}`}>
      <h2>{props.title}</h2>
      <ul className='repos-list'>
        {props.repos.map((element, index) => {
          const newLink = element.git_url.replace('git', 'https')

          return (
            <li key={index}>
              <a href={newLink}>{element.name}</a>
            </li>
          )
        })}
      </ul>
      <Pagination total={10} activePage={3} onClick={props.handlePagination} />
    </div>
  )

  return repo
}
Repos.defaultProps = {
  className: '',
  repos: [],
  newLink: ''
}

Repos.propTypes = {
  classname: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array,
  handlePagination: React.PropTypes.func.isRequired
}

export default Repos
