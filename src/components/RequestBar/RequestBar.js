import React from 'react'
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup } from 'reactstrap'
import '../../global.css'

class RequestBar extends React.Component {
  state = {
    methodsOpen: false,
  }

  static METHODS = [ 'GET', 'POST', 'PUT', 'PATCH', 'DELETE' ]

  toggleMethods = () => {
    this.setState({
      methodsOpen: !this.state.methodsOpen
    })
  }

  renderMethods = () => {
    const { method, onMethodChange } = this.props

    return (
      <ButtonDropdown isOpen={ this.state.methodsOpen } toggle={ this.toggleMethods } addonType="prepend">
        <DropdownToggle caret>
          { method }
        </DropdownToggle>

        <DropdownMenu right>
          { RequestBar.METHODS.map((method, i) =>
            <DropdownItem key={ i } onClick={ () => onMethodChange(method) }>{ method }</DropdownItem>
          ) }
        </DropdownMenu>
      </ButtonDropdown>
    )
  }

  render() {
    const { url, onUrlChange } = this.props

    return (
      <InputGroup>
        { this.renderMethods() }
        <Input type="text" bsSize="lg" value={ url } onChange={ e => onUrlChange(e.target.value) }/>
      </InputGroup>
    )
  }
}

export default RequestBar
