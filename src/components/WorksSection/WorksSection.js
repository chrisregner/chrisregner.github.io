import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import WorkItem from './WorkItem'

const WorksSection = () => {
  const data = useStaticQuery(query)

  return (
    <article className='center mh4 mb5 mw7'>
      <h2 className='f4 mb4 pb3 normal ttu tracked tc'>Sample Projects</h2>

      <ul className='list pa0'>
        {data.site.siteMetadata.works.map((w, i) =>
          <WorkItem key={i} {...w} />)}
      </ul>
    </article>
  )
}

export default WorksSection

const query = graphql`
  query {
    site {
      siteMetadata {
        works {
          type
          title
          tags
          description
          source
          demo
          img {
            url
            alt
          }
          imgs {
            url
            alt
          }
        }
      }
    }
  }
`
