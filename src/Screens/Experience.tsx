import React from 'react';

const Experience = () => {
  return (
    <div className='screen'>
      <span className='screen-heading'>OCCUPATION</span>
      <div className='screen-list'>
        <span>SOFTWARE ENGINEER V (SPECIALIST) HEWLETT PACKARD ENTERPRISE: NOVEMBER 2021 - PRESENT</span>
        <span>SOFTWARE ENGINEER II (INTERMEDIATE) HEWLETT PACKARD ENTERPRISE: MAY 2021 - NOVEMBER 2021</span>
        <span>SOFTWARE ENGINEER I (JUNIOR) HEWLETT PACKARD ENTERPRISE: MAY 2020 - MAY 2021</span>
        <span>SOFTWARE ENGINEER INTERN HEWLETT PACKARD ENTERPRISE: JANUARY 2019 - MAY 2020</span>
      </div>

      <span className='screen-heading'>TECH</span>
      <table className='technologies-table'>
        <tr>
          <th>JAVASCRIPT</th>
          <th>TYPESCRIPT</th>
          <th>AMAZON WEB SERVICES</th>
        </tr>
        <tr>
          <th>REACT</th>
          <th>REACT-QUERY</th>
          <th>REACT-REDUX</th>
        </tr>
        <tr>
          <th>GIT</th>
          <th>GITHUB</th>
          <th>GITHUB ACTIONS</th>
        </tr>
        <tr>
          <th>ESLINT</th>
          <th>CIRCLE CI</th>
          <th>JEST</th>
        </tr>
      </table>

      <span className='screen-heading'>EDUCATION</span>
      <div className='screen-list'>
        <span>UNIVERSITY OF MASSACHUSETTS AMHERST BS IN COMPUTER SCIENCE: SEPTEMBER 2016 - MAY 2020</span>
        <span>UNIVERSITY OF MASSACHUSETTS AMHERST BS IN MATHEMATICAL COMPUTING: SEPTEMBER 2018 - MAY 2020</span>
        <span>FRANKLIN HIGH SCHOOL (MASSACHUSETTS): SEPTEMBER 2012 - MAY 2016</span>
      </div>

      <span className='screen-heading'>PROJECTS</span>
      <div className='screen-list'>
        <a
          className='nav-link'
          target='_blank'
          href='https://v2.grommet.io/'
          rel='noreferrer'
        >
          GROMMET
        </a>
        <a
          className='nav-link'
          target='_blank'
          href='https://ecstatic-curie-0b65c6.netlify.app/'
          rel='noreferrer'
        >
          SUDOKU
        </a>
        <a
          className='nav-link'
          target='_blank'
          href='https://kevingill.net'
          rel='noreferrer'
        >
          PORTFOLIO
        </a>
      </div>
    </div>
  );
};

export default Experience;
