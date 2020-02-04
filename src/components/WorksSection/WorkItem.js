import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const WorkItem = w => {
  const Component = ({
    basic: WorkItemBasic,
    'negative-margin': WorkItemNegativeMargin,
    gallery: WorkItemGallery,
  })[w.type]

  return <Component {...w} />
}

export default WorkItem

const WorkItemBasic = w =>
  <li className='mb5 pb3'>
    <div className='ba b--light-gray mb4'>
      <img className='db' src={w.img.url} alt={w.img.alt} />
    </div>
    <div>
      <h3 className='mb2 black f3 lh-title normal'>{w.title}</h3>
      <div className='mb2 mid-gray f6 lh-title ttl tracked'>{w.tags.join(', ')}</div>
      <p className='f6 mb4 lh-copy'>{w.description}</p>
      <div className='flex'>
        {w.source &&
          <a className='ba bw1 pv1 ph2 f5 lh-solid no-underline tracked ttu animated b--black bg-white hover-bg-black black hover-white mr2 mr3-ns' href={w.source} target='_blank' rel='noopener noreferrer'>Source</a>
        }

        {w.demo &&
          <a className='ba bw1 pv1 ph2 f5 lh-solid no-underline tracked ttu animated b--purple bg-purple hover-bg-white white hover-purple' href={w.demo} target='_blank' rel='noopener noreferrer'>Live Site</a>
        }
      </div>
    </div>
  </li>

const WorkItemNegativeMargin = w =>
  <li className='mb5 pb3'>
    <div className='mb2 nl2 nr2'>
      <img className='db' src={w.img.url} alt={w.img.alt} />
    </div>
    <div>
      <h3 className='mb2 black f3 lh-title normal'>{w.title}</h3>
      <div className='mb2 mid-gray f6 lh-title ttl tracked'>{w.tags.join(', ')}</div>
      <p className='f6 mb4 lh-copy'>{w.description}</p>
      <div className='flex'>
        {w.source &&
          <a className='ba bw1 pv1 ph2 f5 lh-solid no-underline tracked ttu animated b--black bg-white hover-bg-black black hover-white mr2 mr3-ns' href={w.source} target='_blank' rel='noopener noreferrer'>Source</a>
        }

        {w.demo &&
          <a className='ba bw1 pv1 ph2 f5 lh-solid no-underline tracked ttu animated b--purple bg-purple hover-bg-white white hover-purple' href={w.demo} target='_blank' rel='noopener noreferrer'>Live Site</a>
        }
      </div>
    </div>
  </li>

const WorkItemGallery = w =>
  <li className='mb5 pb3'>
    <div className='mb4'>
      <Carousel>
        {w.imgs.map((img, i) =>
          <div className='ba b--light-gray'>
            <img className='db' key={i} src={img.url} alt={img.alt} />
          </div>)}
      </Carousel>
    </div>
    <div>
      <h3 className='mb2 black f3 lh-title normal'>{w.title}</h3>
      <div className='mb2 mid-gray f6 lh-title ttl tracked'>{w.tags.join(', ')}</div>
      <p className='f6 mb4 lh-copy'>{w.description}</p>
      <div className='flex'>
        {w.source &&
          <a className='ba bw1 pv1 ph2 f5 lh-solid no-underline tracked ttu animated b--black bg-white hover-bg-black black hover-white mr2 mr3-ns' href={w.source} target='_blank' rel='noopener noreferrer'>Source</a>
        }

        {w.demo &&
          <a className='ba bw1 pv1 ph2 f5 lh-solid no-underline tracked ttu animated b--purple bg-purple hover-bg-white white hover-purple' href={w.demo} target='_blank' rel='noopener noreferrer'>Live Site</a>
        }
      </div>
    </div>
  </li>
