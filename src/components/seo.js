import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const keywords = site.siteMetadata.keywords
  return (
    <Helmet>
      <html lang="en" amp />
      <title>{`${title} | ${site.siteMetadata.title}`}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(`, `)} />
      )}
    </Helmet>
  )
}

export default SEO
