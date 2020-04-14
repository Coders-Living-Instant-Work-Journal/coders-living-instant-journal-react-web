import React, { useEffect } from 'react';
import { getAllJournals, setActive } from '../../Actions';

import './SideDrawer.scss';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    journals: state.journals,
    activeJournal: state.activeJournal,
  };
};

const mapDispatchToProps = {
  getAllJournals,
  setActive,
};

const SideDrawer = ({
  journals,
  activeJournal,
  getAllJournals,
  setActive,
  show,
}) => {
  let drawerClasses = ['side-drawer'];
  if (show) {
    drawerClasses = ['side-drawer', 'open'];
  }

  const journalFetcher = () => {
    getAllJournals();
  };

  useEffect(() => journalFetcher(), []);

  return (
    <section className={drawerClasses.join(' ')}>
      <ul>
        {journals.map((journal) => (
          <li
            key={journal.name}
            onClick={() => {
              setActive(activeJournal === journal.name ? '' : journal.name);
            }}
          >
            {' '}
            {journal.name}{' '}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
