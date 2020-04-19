import React from 'react'

const EmailProfListItem = ({ onClick, profile }) => {
  return <a href='#' onClick={onClick}>{profile.profileName}</a>
}

export default EmailProfListItem
