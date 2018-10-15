import React from 'react'
import './Sidebar.css'
import '../../global.css'
import { ListGroup, ListGroupItem } from 'reactstrap'

const items = [
  {
    name: 'Resource 1',
    items: [
      { text: 'List', method: 'GET' },
      { text: 'Detail', method: 'GET' },
      { text: 'Create', method: 'POST' },
      { text: 'Update', method: 'PUT' },
      { text: 'Partial Update', method: 'PATCH' },
      { text: 'Delete', method: 'DELETE' },
    ]
  },
  {
    name: 'Resource 2',
    items: [
      { text: 'List', method: 'GET' },
      { text: 'Detail', method: 'GET' },
      { text: 'Create', method: 'POST' },
      { text: 'Update', method: 'PUT' },
      { text: 'Partial Update', method: 'PATCH' },
      { text: 'Delete', method: 'DELETE' },
    ]
  },
  {
    name: 'Resource 3',
    items: [
      { text: 'List', method: 'GET' },
      { text: 'Detail', method: 'GET' },
      { text: 'Create', method: 'POST' },
      { text: 'Update', method: 'PUT' },
      { text: 'Partial Update', method: 'PATCH' },
      { text: 'Delete', method: 'DELETE' },
    ]
  }
]

class Sidebar extends React.Component {
  state = {
    expanded: []
  }

  toggleExpandResource = (resource) => {
    let index = this.state.expanded.findIndex(it => it === resource.name)

    let expanded = [ ...this.state.expanded ]

    if (index < 0) {
      expanded.push(resource.name)
    } else {
      expanded.splice(index, 1)
    }

    this.setState({ expanded })
  }

  renderResource = (resource, i) => {
    const isExpanded = this.state.expanded.find(it => it === resource.name)

    return (
      <React.Fragment key={ i }>
        <h1 onClick={ () => this.toggleExpandResource(resource) }>{ resource.name }</h1>
        { isExpanded && <List items={ resource.items }/> }
      </React.Fragment>
    )
  }

  render() {
    return (
      <div className="Sidebar">
        { items.map(this.renderResource) }
      </div>
    )
  }
}

const List = ({ items }) =>
  <ListGroup className="List">
    { items.map((item, i) =>
      <Item key={ i } method={ item.method }>{ item.text }</Item>
    ) }
  </ListGroup>

const Item = ({ children, method, selected, onClick }) =>
  <ListGroupItem className="Item">
    <span className={ `Method ${method}` }>{ method }</span> { children }
  </ListGroupItem>

export default Sidebar
