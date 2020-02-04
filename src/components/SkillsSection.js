import React from 'react'

const SkillsSection = () =>
  <section className='mb6'>
    <h2 className='f4 mb4 pb2 normal ttu tracked tc'>Skills</h2>
    <div className='na3 flex flex-wrap f6 lh-copy'>
      <div className='w-100 w-50-ns'>
        <section className='ph3'>
          <div className='indent-next-line pv1'><span className='underline'>React & Redux</span> <span className='f7 mid-gray'>Next.js, Redux-Saga, -Actions,  Thunk</span></div>
          <div className='indent-next-line pv1'><span className='underline'>React Native</span> <span className='f7 mid-gray'>working on ejected proj. (Android Studio / Xcode)</span></div>
          <div className='indent-next-line pv1'><span className='underline'>HTML5 & CSS</span> <span className='f7 mid-gray'>Flexboxes, Canvas, SCSS/LESS</span></div>
          <div className='indent-next-line pv1'><span className='underline'>JavaScript</span> <span className='f7 mid-gray'>ECMAScript, DOM, asynchronous prog., Jquery</span></div>
          <div className='indent-next-line pv1'>Node.js <span className='f7 mid-gray'>Express, Server-Side Rendering (React)</span></div>
          <div className='indent-next-line pv1'>Typescript</div>
          <div className='indent-next-line pv1'>Data Visualization <span className='f7 mid-gray'>D3.js, Google Maps customization</span></div>
          <div className='indent-next-line pv1'>Basic Web Design</div>
          <div className='indent-next-line pv1'>Basic CI/CD and Deployment Amazon Web Services</div>
        </section>
      </div>

      <div className='w-100 w-50-ns'>
        <section className='ph3'>
          <div className='indent-next-line pv1'>HTML5 Game Development / Canvas <span className='f7 mid-gray'>Pixi.js</span></div>
          <div className='indent-next-line pv1'>JS Build Tools <span className='f7 mid-gray'>Webpack, Babel, ESlint</span></div>
          <div className='indent-next-line pv1'>Functional Programming <span className='f7 mid-gray'>Ramda, Immutable.js, Recompose</span></div>
          <div className='indent-next-line pv1'>Test-driven Development <span className='f7 mid-gray'>Mocha, Chai, Enzyme</span></div>
          <div className='indent-next-line pv1'>Version Control System <span className='f7 mid-gray'>Git</span></div>
          <div className='indent-next-line pv1'>Component Libraries <span className='f7 mid-gray'>Material UI, Bootstrap, Tachyons</span></div>
          <div className='indent-next-line pv1'>Meteor.js</div>
          <div className='indent-next-line pv1'>GraphQL</div>
          <div className='indent-next-line pv1'>WordPress & PHP <span className='f7 mid-gray'>theme from scratch </span></div>
        </section>
      </div>
    </div>
  </section>

export default SkillsSection
