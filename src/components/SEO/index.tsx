import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
type Props = {
  description?: string
  meta?: any
  title: string
}

const SEO: FC<Props> = ({ description, meta, title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title || 'Home'}</title>
      <meta property="og:type" content="article" />
      <html lang="en" />
      <meta
        name="description"
        content={description || "Khong Minh Quan's personal resume"}
      />
      <meta property="og:type" content="website" />
      <meta
        name="og:escription"
        content={description || "Khong Minh Quan's personal resume"}
      />
    </Helmet>
  )
}

export default SEO
