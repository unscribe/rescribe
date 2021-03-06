import React, { Component } from 'react'

export default class Outline extends Component {
  render() {
    return (
      <div className="outline">
        { this.props.headings.map((h, i) => {
          const lvl = h.match(/^#{1,6}/g)[0].length
          return (
            <p key={i} style={{
              marginLeft: (lvl * 5) + "px"
            }}>
            <span className="lvl">{ "h" + lvl }</span>    
            { h.replace(/#/g, "") }</p>
          )
        })}
      </div>
    )
  }
}