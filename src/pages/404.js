import React from "react"
import Layout from "../components/Layout/Layout"
import ErrorBanner from "../components/ErrorBanner/ErrorBanner"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const error = () => {
  return (
    <Layout>
      <SEO title="Error" description="Error page" />
      <header className="error">
        <ErrorBanner title="The page you've been looking for can't be found. Double check the url and try again.">
          <Link to="/apartments" className="btn-white">
            Find Your Home
          </Link>
        </ErrorBanner>
      </header>
    </Layout>
  )
}

export default error
