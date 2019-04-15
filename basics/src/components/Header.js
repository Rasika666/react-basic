import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const {branding} = props;
  return (
    <nav className="nav-bar navbar-expand-sm  navbar-dark bg-dark mb-3 py-0">
      <div className="container clearfix">
        <div className="float-left">
          <a href="/" className="navbar-brand">{branding}</a>
        </div>
        
        <div className="float-right">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>      
          </ul>
        </div>
        
      </div>
      
    </nav>
  )
};

Header.defaultProps = {
  branding : 'My App'
};

Header.propTypes = {
  branding : PropTypes.string.isRequired
}

export default Header;
