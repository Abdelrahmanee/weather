import './styles.css'
export  default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-8 ">
            <div className="form-cont position-relative">
              <input className="sub-input w-100 " type="text" placeholder="Enter your email to subscribe..."/>
                <button className="sub-btn">Subscribe</button>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center">
            <div className="inner-icons ms-auto">
              <div className="icons-cont d-flex justify-content-end align-items-center">
                <div className="icon1 icon d-flex justify-content-center align-items-center">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div className="icon2 icon d-flex justify-content-center align-items-center">
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div className="icon3 icon d-flex justify-content-center align-items-center">
                  <i className="fa-brands fa-google-plus-g"></i>
                </div>
                <div className="icon4 icon d-flex justify-content-center align-items-center">
                  <i className="fa-brands fa-pinterest"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-light">Copyright 2014 Company name. Designed by Themezy. All rights reserved</p>
      </div>
    </footer>
  )
}
