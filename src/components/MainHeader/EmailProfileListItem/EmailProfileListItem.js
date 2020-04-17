import React from 'react'

const EmailProfListItem = ({onClick, profile}) => {
  console.log('profile', profile.profileName)

  return <a href="#" onClick={onClick}>{profile.profileName}</a>
}

export default EmailProfListItem