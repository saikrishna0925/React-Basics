import './NetflixHeader.css'

export function NetflixHeader(){
  return(
    <div className='header' >
      <div>
        <div className="brand-title">Netflix</div>
      </div>
      <div className='d-flex'>
        <div className='input-group'>
          <span className="bi bi-globe input-group-text"></span>
          <select name="" id="form-select">
            <option value="">Language</option>
            <option value="english">English</option>
            <option value="">हिंदी</option>
          </select>
          <div className='ms-4'>
            <button className="btn btn-danger">Signin</button>
          </div>
        </div>
      </div>
    </div>
  )
}
