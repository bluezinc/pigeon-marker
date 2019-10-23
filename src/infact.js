if (process.env.BABEL_ENV === 'react') {
  exports.React = require('react')
  exports.ReactDOM = require('react-dom')
  exports.Component = exports.React.Component
}
