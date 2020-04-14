import React, {
    useEffect
} from 'react';
import {
    getAllJournals,
    setActive
} from '../../Actions'

import './JournalSideDrawer.scss'
import {
    connect
} from 'react-redux';

const mapStateToProps = state => {
    return {
        journals: state.journals,
        activeJournal: state.activeJournal
    }
}

const mapDispatchToProps = {
    getAllJournals,
    setActive
}

const JournalSideDrawer = ({
    journals,
    activeJournal,
    getAllJournals,
    setActive,
    showJournal,
}) => {
    let drawerClasses = ['side-drawer']
    if (showJournal) {
        drawerClasses = ['side-drawer', 'open']
    }

    const journalFetcher = () => {
        getAllJournals()
    }

    useEffect(() => journalFetcher(), [])



    return (
        <section className={drawerClasses.join(' ')}>
            <ul>
                <h2>Journals</h2>
                {journals.map(journal => (
                    <li
                        key={journal.name}
                        
                        onClick={
                            () => {
                                setActive(activeJournal === journal.name ? '' : journal.name)
                            }
                        }
                    > {journal.name} </li>
                ))}
            </ul>
        </section >
    )
};


export default connect(mapStateToProps, mapDispatchToProps)(JournalSideDrawer)