import React from 'react'
import ReactCountryFlag from 'react-country-flag'

const Head = () => {
  return (
      <>
          <section className='head'>
              <div className='container d_flex'>
                  <div className='left row'>
                      <i className='fa fa-phone'></i>
                      <label>+02/8345 1398 48</label>
                      <i className='fa fa-envelope'></i>
                      <label>example@mail.com</label>
                  </div>
                  <div className="right row RText">
                      <label>Theme FAQ's</label>
                      <label>Need Help</label>
                      <span>
                          <ReactCountryFlag countryCode='GB' svg />
                      </span>
                      <label>GBP</label>
                      <span>
                          <ReactCountryFlag countryCode='US' svg />
                      </span>
                      <label>USD</label>
                  </div>
              </div>
          </section>
    </>
  )
}

export default Head
