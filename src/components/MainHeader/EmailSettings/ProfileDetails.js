import React from 'react';

//styles
import './ProfileDetails.scss'

const ProfileDetails = ({ profile }) => {
  //probably turn this into a form ... 
  return (
    <ul className="details">
      {Object.keys(profile).map((key, i ) => {
        return <li key={i}>{`${key}: ${profile[key]}`}</li>
      })}
    </ul>

    
  );
};

export default ProfileDetails;
