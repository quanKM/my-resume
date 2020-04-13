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
      <title>{title}</title>
      <meta name="description" content="Khong Minh Quan resume" />
    </Helmet>
  )
}

export default SEO
