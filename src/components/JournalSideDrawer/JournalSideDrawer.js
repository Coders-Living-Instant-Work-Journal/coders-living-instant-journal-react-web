import React, {
  useEffect
} from 'react'
import {
  getAllJournals,
  setActive
} from '../../Actions'

import './JournalSideDrawer.scss'
import {
  connect
} from 'react-redux'

const mapStateToProps = state => {
  return {
    journals: ['Test', 'Journals'], // state.journals,
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
  showJournal
}) => {
  let drawerClasses = ['side-drawer']
  if (showJournal) {
    drawerClasses = ['side-drawer', 'open']
  }

    const journalFetcher = () => {
        getAllJournals()
    }
// eslint-disable-next-line
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
          > {journal.name}
          </li>
        ))}
      </ul>
    </section>
  )
}

<<<<<<< HEAD
    return (
        <section className={drawerClasses.join(' ')}>
            <ul>
                <h2>Journals</h2>
                {journals.map((journal, index) => (
                    <li
                        key={index}
                        
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
=======
export default connect(mapStateToProps, mapDispatchToProps)(JournalSideDrawer)
>>>>>>> 0c577d39d51af7ba1e95349ec4dc8ee4e8dbd4c5
