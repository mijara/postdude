import React from 'react'
import PropTypes from 'prop-types'

import './Request.css'
import RequestBar from '../../components/RequestBar/RequestBar'
import RequestBody from '../../components/RequestBody/RequestBody'
import RequestResponse from '../../components/RequestResponse/RequestResponse'

class Request extends React.Component {
  static propTypes = {
    request: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  onValueChange = (name, value) => {
    this.props.onChange({
      ...this.props.request,
      [ name ]: value,
    })
  }

  onUrlChange = (url) => {
    this.onValueChange('url', url)
  }

  onMethodChange = (method) => {
    this.onValueChange('method', method)
  }

  render() {
    const { url, method } = this.props.request

    return (
      <div className="RequestBuilder">
        <div className="bar">
          <RequestBar url={ url } method={ method } onUrlChange={ this.onUrlChange }
                      onMethodChange={ this.onMethodChange }/>
        </div>

        <div className="body">
          <div className="left">
            <RequestBody/>
          </div>

          <div className="right">
            <RequestResponse/>
          </div>
        </div>

        <div className="status">
          Executing...
        </div>
      </div>
    )
  }
}

export default Request
