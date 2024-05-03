// Scss
import "../../Scss/_ProductDetails.scss"
export default function Pills() {
  return (
    <>
      <div className="container mt-5 pt-5 custom-tabs">
        <div className="row">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item col-md-6" role="presentation">
              <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Rating & Reviews</button>
            </li>
            <li className="nav-item col-md-6" role="presentation">
              <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">FAQs</button>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div>
                  <div><span>All Reviews <span>(451)</span></span></div>
                  <div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">ssss</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
