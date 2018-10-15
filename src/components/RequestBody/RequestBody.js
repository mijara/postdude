import React from 'react'
import { Input, ButtonGroup, Button } from 'reactstrap'

import './RequestBody.css'

class RequestBody extends React.Component {
  render() {
    return (
      <div className="RequestBody">
        <ButtonGroup className="contentType">
          <Button>Plain Text</Button>
          <Button active>JSON</Button>
        </ButtonGroup>

        <Input type="textarea" className="editor"/>
      </div>
    )
  }
}

export default RequestBody
