import React from 'react'
import IntroSection from '../components/IntroSection'
import SkillsSection from '../components/SkillsSection'
import WorksSection from '../components/WorksSection'

const IndexPage = () =>
  <div className='pt5 pb4 center ph3 ph4-m ph0-l mw7 black font-primary'>
    <IntroSection />
    <SkillsSection />
    <WorksSection />

    {/* Footer */}
    <footer className='tr'>
      <a href='#top' className='dib mb4 pb3 ba bw1 pv1 ph2 w-100 w-auto-ns f5 lh-solid no-underline ttu animated tc tracked b--black bg-black hover-bg-white white hover-black'>
        Go Back To Top
      </a>
      <section className='mid-gray f7 tc ttl lh-copy'>
        Designed and developed by Christopher Regner.
        {' '}Built&nbsp;with&nbsp;<a href='http://tachyons.io' target='_blank' rel='noopener noreferrer' className='mid-gray'>Tachyons</a>
        &nbsp;and&nbsp;<a href='https://www.gatsbyjs.org/' target='_blank' rel='noopener noreferrer' className='mid-gray'>GatsbyJS</a>.
      </section>
    </footer>

  </div>

export default IndexPage
