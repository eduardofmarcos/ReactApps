import React, { PropTypes } from 'react'
import pagination from '../../utils/pagination/index'
import Page from './page'
import './pagination.css'

const Pagination = ({ total, activePage, pageLink, onClick }) => (
  <ul>
    {pagination({ total, activePage }).map((page, index) => (
      <li key={index} style={activePage === page ? { color: 'red' } : null}>
        <Page
          page={page}
          pageLink={pageLink.replace('%page%', page)}
          onClick={onClick}
        />
      </li>
    ))}
  </ul>
)

Pagination.defaultProps = {
  pageLink: '',
  activePage: 1
}

pagination.PropTypes = {
  total: PropTypes.number,
  activePage: PropTypes.number,
  pageLink: PropTypes.string,
  onClick: PropTypes.func
}

export default Pagination
