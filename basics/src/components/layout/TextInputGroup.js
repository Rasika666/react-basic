import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
  label,
  name, 
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input type={type} 
      name={name}
      className={classnames('form-control',{'is-invalid':error})} //default class name & class name with condition
      placeholder={placeholder}
      value = {value}
      onChange = {onChange}
      />

      {error && <div className="invalid-feedback">{error}</div>}
      
    </div>
  )
}

TextInputGroup.prototype = {
  name : PropTypes.string.isRequired,
  placeholder : PropTypes.string.isRequired,
  label : PropTypes.string.isRequired,
  value : PropTypes.string.isRequired,
  type : PropTypes.string.isRequired,
  onchange : PropTypes.func.isRequired,
  error : PropTypes.string.isRequired,
}

TextInputGroup.defaultProps = {
  type : 'text'
}

export default TextInputGroup;
