import React from 'react'
import PropTypes from 'prop-types'

const HTML = props =>
  <html {...props.htmlAttributes}>
    <head>
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />

      <title>Christopher Regner | JavaScript Developer</title>

      {/* Favicons */}
      <link rel='apple-touch-icon' sizes='57x57' href='favicon/apple-icon-57x57.png' />
      <link rel='apple-touch-icon' sizes='60x60' href='favicon/apple-icon-60x60.png' />
      <link rel='apple-touch-icon' sizes='72x72' href='favicon/apple-icon-72x72.png' />
      <link rel='apple-touch-icon' sizes='76x76' href='favicon/apple-icon-76x76.png' />
      <link rel='apple-touch-icon' sizes='114x114' href='favicon/apple-icon-114x114.png' />
      <link rel='apple-touch-icon' sizes='120x120' href='favicon/apple-icon-120x120.png' />
      <link rel='apple-touch-icon' sizes='144x144' href='favicon/apple-icon-144x144.png' />
      <link rel='apple-touch-icon' sizes='152x152' href='favicon/apple-icon-152x152.png' />
      <link rel='apple-touch-icon' sizes='180x180' href='favicon/apple-icon-180x180.png' />
      <link rel='icon' type='image/png' sizes='192x192'  href='favicon/android-icon-192x192.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='favicon/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='96x96' href='favicon/favicon-96x96.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='favicon/favicon-16x16.png' />
      <link rel='manifest' href='favicon/manifest.json' />
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='msapplication-TileImage' content='favicon/ms-icon-144x144.png' />
      <meta name='theme-color' content='#ffffff' />

      {/* SEO / Social Media meta tags */}
      <meta name='description' content='An experienced JavaScript developer specializing in React JS and React Native' />

      <meta property='og:url' content='https://chrisregner.github.io/' />
      <meta property='og:type' content='article' />
      <meta property='og:title' content='Christopher Regner - JavaScript Developer' />
      <meta property='og:description' content='An experienced JavaScript developer specializing in React JS and React Native' />
      <meta property='og:image' content='https://chrisregner.github.io/favicon/favicon-256x256.png' />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content='Christopher Regner - JavaScript Developer' />
      <meta name='twitter:description' content='An experienced JavaScript developer specializing in React JS and React Native' />

      {/* Style elements */}
      <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600' rel='stylesheet' />
      <link rel='stylesheet' href='https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css'/>

      {props.headComponents}
    </head>
    <body id='top' {...props.bodyAttributes}>
      {props.preBodyComponents}
      <div
        key={`body`}
        id='___gatsby'
        dangerouslySetInnerHTML={{ __html: props.body }}
      />
      {props.postBodyComponents}
    </body>
  </html>


HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

export default HTML
