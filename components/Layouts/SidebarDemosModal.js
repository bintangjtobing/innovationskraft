import React from "react";

const SidebarDemosModal = ({ active, onClick }) => {
  const closeModal = () => {
    onClick(false);
  };

  return (
    <>
      <div className={`demos-side-content ${active}`}>
        <div className="modal_header pt-4 px-4 d-flex align-items-center justify-content-between">
          <h2 className="fs-5 mb-0">View Demo</h2>

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={closeModal}
          ></button>
        </div>

        <div className="modal-body">
          <ul>
            <li>
              <div className="demo-item">
                <a href="/it-agency">
                  <span>IT Agency</span>
                  <img src="/images/demos/it-agency.jpg" alt="Demos" />
                </a>
              </div>
            </li>
            <li>
              <div className="demo-item">
                <a href="/saas-startup">
                  <span>SaaS Startup</span>
                  <img src="/images/demos/saas-startup.jpg" alt="Demos" />
                </a>
              </div>
            </li>
            <li>
              <div className="demo-item">
                <a href="/consulting">
                  <span>Consulting</span>
                  <img src="/images/demos/consulting.jpg" alt="Demos" />
                </a>
              </div>
            </li>
            <li>
              <div className="demo-item">
                <a href="/seo-agency">
                  <span>SEO Agency</span>
                  <img src="/images/demos/seo-agency.jpg" alt="Demos" />
                </a>
              </div>
            </li>
            <li>
              <div className="demo-item">
                <a href="/personal-portfolio">
                  <span>Personal Portfolio</span>
                  <img src="/images/demos/personal-portfolio.jpg" alt="Demos" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarDemosModal;
