const superagent = require("superagent");

// const API_SERVER_URI = 'https://clij.herokuapp.com'
const API_SERVER_URI = "http://localhost:3000";

//Create profile
//Route 
//View Profile
//Update profile
//Delete profile 

//Functionality needed 
//pull current settings from database
//email settings
//frequency
//Time
//range
//email address
//profile name
//journal names
//journal ids 
//category names
//

//read(list), update, delete email profile


///Bring in info from form 
//requires all feilds

//Create an email profile 
function createEmailProfile() {
    superagent
        .post(`${API_SERVER_URI}/createEmailProfile`)
        .set('email token here?')
        .send({
            userId: 'fromForm',
            journalId: 'fromForm',
            emailFreq: 'fromForm',
            emailTime: 'fromForm',
            entryRange: 'fromForm',
            profileName: 'fromForm',
            emailAddr: 'fromForm',
            category: 'fromForm',
        })
        .then((res) => ('res.body?'))
        .catch((err) => console.error("thrown error", err.message))
}

function createEmailProfileAction() {
    return {
        type: 'CREATE_EMAIL_PROFILE',
        payload: data
    }
}

//Get email profiles from DB
function getAllEmailProfiles() {
    superagent
        .get(`${API_SERVER_URI}/readEmailProfiles`)
        .set('email token?')
        .then((res) => {
            return res.body
        })
        .catch((err) => console.error(err.message))
}

function getAllEmailProfilesAction() {
    return {
        type: 'GET_ALL_EMAIL_PROFILES',
        payload: data
    }
}

//Update email profile 
function updateEmailProfile() {
    superagent
        .put(`${API_SERVER_URI}/updateEmailProfile`)
        .set('email token here?')
        .send({
            userId: 'fromForm',
            journalId: 'fromForm',
            emailFreq: 'fromForm',
            emailTime: 'fromForm',
            entryRange: 'fromForm',
            profileName: 'fromForm',
            emailAddr: 'fromForm',
            category: 'fromForm',
        })
}

function updateEmailProfileAction(data) {
    return {
        type: 'UPDATE_EMAIL_PROFILE',
        data: data
    }
}

//Delete email profile
function deleteEmailProfile(profile) {
    superagent
        .delete(`${API_SERVER_URI}/deleteEmailProfile/`)
        .set('email token here?')
        .send(profile)
}

function deleteEmailProfileAction(profile) {
    return {
        type: 'DELETE_EMAIL_PROFILE',
        paylaod: profile
    }
}