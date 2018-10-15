import React from 'react'
import ReactJson from 'react-json-view'

const json = `{
  "glossary": {
      "title": "example glossary",
  "GlossDiv": {
          "title": "S",
    "GlossList": {
              "GlossEntry": {
                  "ID": "SGML",
        "SortAs": "SGML",
        "GlossTerm": "Standard Generalized Markup Language",
        "Acronym": "SGML",
        "Abbrev": "ISO 8879:1986",
        "GlossDef": {
                      "para": "A meta-markup language, used to create markup languages such as DocBook.",
          "GlossSeeAlso": ["GML", "XML"]
                  },
        "GlossSee": "markup"
              }
          }
      }
  }
}`

class RequestResponse extends React.Component {
  render() {
    return (
      <ReactJson src={ JSON.parse(json) } indentWidth={ 2 } enableEdit={ false } displayDataTypes={ false }/>
    )
  }
}

export default RequestResponse
