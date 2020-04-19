import React from 'react'
import { connect } from 'react-redux'
import { TiDelete } from 'react-icons/ti'


// styles
import './EmailSettings.scss'

import EmailProfListItem from '../EmailProfileListItem/EmailProfileListItem'

import {
  createEmailProfile,
  updateEmailProfile,
  deleteEmailProfile
} from '../../../Actions/emailProfiles'

const EmailSettings = ({ profiles, create, views, viewChange, setCurrentDetail, del }) => {
  // set the current detail to the profile the user clicked; and change the view to the datail view.
  const clickHandler = (profile) => {
    setCurrentDetail(profile)
    viewChange(views.PROFILE_DETAIL)
  }

  return (
    <div className='emailSettings'>
      <button onClick={() => viewChange(views.CREATE)}>Add New</button>
      <div className='listContainer'>
        <ul className="emailProfileList">
          {profiles.map((profile, i) => (
            <li>
              <EmailProfListItem profile={profile} key={i} onClick={() => clickHandler(profile)} />
              <button className="deleteProfileButton" onClick={() => del(profile._id)}><TiDelete/></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    profiles: state.emailProfiles
  }
}

const mapDispatchToProps = {
  create: createEmailProfile,
  update: updateEmailProfile,
  del: deleteEmailProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailSettings)
