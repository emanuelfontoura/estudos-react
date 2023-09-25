import React from 'react'

const linkStyle = {
  listStyle: "none",
  padding: "0px",
  margin: "0px",
  fontSize: "1.3rem"
}

const Link = ({href, text, ...props}) => {
  return <li style={linkStyle}><a href="href" {...props}>{text}</a></li>
}

export default Link