import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NetlifyForm from "../components/netlify-form";

const ContactUs = () => (
  <Layout>
    <SEO title="Contact Us" />
    <NetlifyForm name="Contact Us">
    <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
    </NetlifyForm>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactUs
