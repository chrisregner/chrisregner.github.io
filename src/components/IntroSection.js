import React from 'react'

const IntroSection = () =>
  <>
    {/* Intro */}
    <article className='mb4 pb3 lh-copy f5'>
      <h2 className='f4 mb4 normal ttu tracked tc'>Introduction</h2>

      {/* Infos */}
      <div className='mb4 flex flex-wrap items-center justify-center tc lh-solid f6 mid-gray ttl'>
        <div className='flex items-center justify-center mv2 mh2'>
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'><path fill='#777777' d='M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z'/></svg>
          <div className='ml2'>
            <a href='mailto:dev@chrisregner.com' target='_blank' rel='noopener noreferrer' className='hover-black gray'>dev@chrisregner.com</a>
          </div>
        </div>

        <div className='flex items-center justify-center mv2 mh2'>
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'><path fill='#777777' d='M19 2c0-1.104-.896-2-2-2h-10c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-20zm-8.5 0h3c.276 0 .5.224.5.5s-.224.5-.5.5h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zm1.5 20c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-14.024h10v14.024z'/></svg>
          <div className='ml2'>
            (+63)&nbsp;948&nbsp;844&nbsp;2777
          </div>
        </div>

        <div className='flex items-center justify-center mv2 mh2'>
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'><path fill='#777777' d='M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z'/></svg>
          <div className='ml2'>
            Davao City,&nbsp;Philippines
          </div>
        </div>
      </div>

      <p className='f5 mb2 tj'>
        <strong>Christopher Regner</strong> is a freelance developer with <strong>more than 4 years</strong> of experience whose main expertise is <strong>JavaScript</strong> and <strong>React</strong> (JS and Native), capable of working on both front-end and the back-end. His past accomplishments include:
      </p>

      <ul className='f5 ml2 ml3-ns mb4 pl3 pl4-ns tj'>
        <li className='pl2-ns'>Development, launching, and maintenance of <a href='http://heyyou.com.au/' target='_blank' rel='noopener noreferrer' className='hover-black light-purple no-underline'>Hey You</a> web app, <strong>a popular Australian food ordering app</strong> (single-page app made with <strong>React</strong>)</li>
        <li className='pl2-ns'>Maintenance and revamp of a <strong>Point of Sale (POS) React Native app</strong> (also at Hey You)</li>
        <li className='pl2-ns'>Working on more advanced front-end projects such as <strong>customized Google Maps tool</strong>, <strong>data charts/graphs app</strong>, and <strong>HTML5 games</strong></li>
      </ul>

      <p className='f5 mb4 tj'>Chris considers himself a conscientious and perfectionist professional, taking quality into the heart. He finds pleasure working on projects involving technologies and areas that he is yet to learn or master.</p>

      <p className='f5 tj'>
        He is <strong>currently looking for freelance projects</strong>, preferably short-term (less than 6 months).
      </p>
    </article>

    {/* Call to Actions */}
    <div className='_cta flex flex-wrap justify-center mb6'>
      <div className='pv1 pr1 _ph2-l w-50 _w-auto-l'>
        <a href='https://github.com/chrisregner' className='db ba bw1 pv1 ph2 w-100 w-auto-l f5 lh-solid no-underline ttu animated tc tracked b--black bg-white hover-bg-black black hover-white' target='_blank' rel='noopener noreferrer'>
        GitHub
        </a>
      </div>
      <div className='pv1 pl1 _ph2-l w-50 _w-auto-l'>
        <a href='https://www.linkedin.com/in/chrisregner' className='db ba bw1 pv1 ph2 w-100 w-auto-l f5 lh-solid no-underline ttu animated tc tracked b--black bg-white hover-bg-black black hover-white' target='_blank' rel='noopener noreferrer'>
        LinkedIn
        </a>
      </div>
      <div className='pv1 pr1 _ph2-l w-50 _w-auto-l'>
        <a href='resume/christopher-regner-resume.doc' className='db ba bw1 pv1 ph2 w-100 w-auto-l f5 lh-solid no-underline ttu animated tc tracked b--black bg-black hover-bg-white white hover-black' target='_blank' rel='noopener noreferrer'>
        <span className='tracked' style={{ marginRight: '.125em' }}>Resume</span><span className='f7 silver ttl tracked-tight'>.doc</span>
        </a>
      </div>
      <div className='pv1 pl1 _ph2-l w-50 _w-auto-l'>
        <a href='mailto:dev@chrisregner.com' className='db ba bw1 pv1 ph2 w-100 w-auto-l f5 lh-solid no-underline ttu animated tc tracked b--purple bg-purple hover-bg-white white hover-purple' target='_blank' rel='noopener noreferrer'>
        Contact
        </a>
      </div>
    </div>
  </>

export default IntroSection
