import React from 'react'

const index = () => {
  return (
  <section className="section-contact-hero">
    <div className="page-padding">
      <div className="container-xxlarge">
      <div className="line" style={{width: "100%"}}></div>
        <div className="padding-vertical padding-xlarge">
          <div className="contact-hero-grid">
            <div id="w-node-_9cb69919-907b-de77-5089-74e3ea5042b0-910d89e2" className="contact-hero-grid-left">
              <div className="margin-bottom margin-xxhuge">
                <div className="margin-bottom margin-small">
                  <div className="text-meta">Contact</div>
                </div>
                <h1 className="heading-medium">Creating true <br/>brands together.</h1>
              </div>
              <div>
                <div className="margin-bottom margin-small">
                  <div className="text-meta">Find us on</div>
                </div>
                <div className="subnav small">
                  <a href="#" className="badge small link w-inline-block">
                    <div className="text-meta-small">Tw</div>
                  </a>
                  <a href="#" className="badge small link w-inline-block">
                    <div className="text-meta-small">IN</div>
                  </a>
                  <a href="#" className="badge small link w-inline-block">
                    <div className="text-meta-small">Fb</div>
                  </a>
                  </div>
              </div>
            </div>
            <div id="w-node-_9b86eb6a-d441-64a7-0899-353f3bba90ff-910d89e2" className="contact-hero-grid-right">
              <div className="max-width-large">
                <div className="form-wrapper w-form">
                  <form id="contact-form" name="wf-form-Contact-Form" data-name="Contact Form" method="get"
                    className="form">
                    <div className="form-field-wrapper">
                      <input type="text" className="form-input w-input" maxLength="256" name="Name" data-name="Name" placeholder="Your Name" id="name"/>
                    </div>
                    <div className="form-field-wrapper">
                      <input type="email" className="form-input w-input" maxLength="256" name="Email" data-name="Email" placeholder="Your Email" id="email"/>
                    </div>
                    <div className="form-field-wrapper"><textarea id="Message-2" name="Message" maxLength="5000" data-name="Message" placeholder="Your Message" className="form-input is-text-area w-input">
                      </textarea>
                    </div>
                    <input type="submit" data-wait="Please wait..." value="Submit" className="button primary w-button"/>
                  </form>
                  <div className="form-message-success w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="form-message-error w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default index
