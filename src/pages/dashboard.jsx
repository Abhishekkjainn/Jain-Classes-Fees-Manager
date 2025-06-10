export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="analyticsection">
        <div className="first">
          <div className="firstanalytic">
            <div className="firstanalyticdiv">
              <div className="firstbtn">
                <img
                  src="/money.png"
                  alt="revenue"
                  className="firstanalyticicon"
                />
              </div>
            </div>
            <div className="secondanalyticdiv">₹ 45,000</div>
            <div className="thirdanalyticdiv">June Month Revenue</div>
          </div>
        </div>
        <div className="second">
          <div className="secondanalytic">
            <div className="firstanalyticdiv">
              <div className="firstbtn secondbtn">
                <img
                  src="/graduation.png"
                  alt="revenue"
                  className=" sfirstanalyticicon"
                />
              </div>
            </div>
            <div className="secondanalyticdiv ssecondanalyticdiv">65</div>
            <div className="thirdanalyticdiv sthirdanalyticdiv">
              Total Students
            </div>
          </div>
          <div className="secondanalytic">
            <div className="firstanalyticdiv">
              <div className="firstbtn secondbtn">
                <img
                  src="/money.png"
                  alt="revenue"
                  className="firstanalyticicon sfirstanalyticicon"
                />
              </div>
            </div>
            <div className="secondanalyticdiv ssecondanalyticdiv">₹ 25,000</div>
            <div className="thirdanalyticdiv sthirdanalyticdiv">
              Pending Revenue
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
