import React from 'react'

const index = () => {
  return (
    <section className="section-work-projects">
    <div className="page-padding">
      <div className="container-xxlarge">
        <div className="padding-bottom padding-xlarge">
          <div className="w-dyn-list">
            <div role="list" className="work-projects-list w-dyn-items">

              <div role="listitem" className="work-projects-item w-dyn-item">
                <div className="padding-vertical">
                  <div className="work-projects-item-grid">
                    <div className="work-projects-item-grid-left">
                      <div>
                        <div className="margin-bottom margin-medium">
                          <div className="max-width-small">
                            <a
                              href="/projeslug"
                              className="w-inline-block"
                              ><h2 className="heading-h1 text-uppercase">
                                PROJE 1
                              </h2></a
                            >
                          </div>
                        </div>
                        <div className="w-dyn-list">
                          <div
                            role="list"
                            className="work-projects-item-services w-dyn-items"
                          >
                            <div role="listitem" className="w-dyn-item">
                              <a
                                href="/"
                                className="text-meta-link"
                                >Content</a
                              >
                            </div>
                            <div role="listitem" className="w-dyn-item">
                              <a
                                href="/"
                                className="text-meta-link"
                                >Video</a
                              >
                            </div>
                            <div role="listitem" className="w-dyn-item">
                              <a
                                href="/"
                                className="text-meta-link"
                                >Design</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        href="/projeslug"
                        className="button w-inline-block"
                        ><div className="button-inner">
                          <div className="button-inner-text">
                            TAMAMINI GÖR
                          </div>
                          <div className="button-inner-text-hover">
                            TAMAMINI GÖR
                          </div>
                        </div></a
                      >
                    </div>
                    <a
                      href="/projeslug"
                      className="work-projects-item-image-wrapper w-inline-block"
                      ><img
                        src=""
                        loading="lazy"
                        alt=""
                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 87vw, (max-width: 991px) 88vw, (max-width: 1439px) 59vw, 62vw"
                        srcSet="blog3.webp"
                        className="image-cover"
                    /></a>
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