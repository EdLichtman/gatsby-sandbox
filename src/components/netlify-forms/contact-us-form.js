/**
 * form to be sent directly to be hosted with netlify
 */

import React from "react"
import NetlifyForm from "../netlify-form";

import "../layout.css"

const ContactUsForm = () => {
  return (
    <>
      <NetlifyForm name="Contact Us">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Your Role:{" "}
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </NetlifyForm>
    </>
  )
}

export default ContactUsForm
