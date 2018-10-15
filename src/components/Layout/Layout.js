import React from 'react'
import './Layout.css'
import Sidebar from '../Sidebar/Sidebar'
import Content from './Content'

class Layout extends React.Component {
  render() {
    return (
      <div className="Layout">
        <Sidebar/>
        <Content>{ this.props.children }</Content>
      </div>
    )
  }
}

export default Layout
