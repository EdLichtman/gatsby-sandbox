import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactUsForm from "../components/netlify-forms/contact-us-form";

const ContactUsPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <ContactUsForm/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactUsPage
