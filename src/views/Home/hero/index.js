import React from "react";

const index = () => {
  return (
    <section className="section-home-hero">
      <div className="page-padding">
        <div className="container-xxlarge">
          <div className="padding-vertical padding-xlarge">
            <div className="home-hero-grid">
              <div className="home-hero-grid-left">
                <div className="margin-bottom margin-xhuge">
                  <div className="margin-bottom margin-small">
                    <h1 className="heading-medium">
                      BUÇAĞ MEDYA
                      <br/>
                      <br/>
                    </h1>
                  </div>
                  <div className="max-width-medium">
                    <div className="text-size-xlarge">
                     Reklam Tanıtım Sosyal Medya
                    </div>
                  </div>
                </div>
                <img
                  src="https://assets.website-files.com/63661389dd2417f19a0d89d3/6368b9b806470f39edce6e8b_icon-05.svg"
                  loading="lazy"
                  alt="home"
                  className="image-icon"
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: "1"
                  }}
                />
              </div>
              <div
                id="w-node-bc472a65-8767-bd9d-9f30-3cda7f67023e-6f0d89d5"
                className="home-hero-image-wrapper"
              >
                <div
                  data-poster-url="hero1.jpg"
                  data-video-urls="herovideo.mp4"
                  data-loop="true"
                  data-wf-ignore="true"
                  data-w-id="e52df3cb-4061-c7d9-ebf3-c9344ddd9dcd"
                  className="home-hero-image w-background-video w-background-video-atom"
                  style={{                
                    transform:
                      "translate3d(0px, -0.11186%, 0px) scale3d(1.1, 1.1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d"
                  }}
                >
                  
                  <video
                    id="e52df3cb-4061-c7d9-ebf3-c9344ddd9dcd-video"
                    autoPlay={true} muted={true} loop={true}
                    style={{
                      backgroundImage:
                        "url(hero1.jpg)",
                    }}
                  
                  
                  >
                    <source
                      src="promo.mp4"
                      data-wf-ignore="true"
                    />
                    <source
                      src="promo.mp4"
                      data-wf-ignore="true"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
