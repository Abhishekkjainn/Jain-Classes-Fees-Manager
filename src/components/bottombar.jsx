export default function Bottombar({ selectedPage, setSelectedPage }) {
  return (
    <div className="bottombardiv">
      <div className="bottombar">
        <div
          className={`tab ${selectedPage === 0 ? 'tab-active' : ''}`}
          onClick={() => setSelectedPage(0)}
        >
          <img src="/dashboard.png" alt="icon" className="tabicon" />
          <div className="tabtag">Dashboard</div>
        </div>
        <div
          className={`tab ${selectedPage === 1 ? 'tab-active' : ''}`}
          onClick={() => setSelectedPage(1)}
        >
          <img src="/student.png" alt="icon" className="tabicon" />
          <div className="tabtag">Students</div>
        </div>
        <div
          className={`tab ${selectedPage === 2 ? 'tab-active' : ''}`}
          onClick={() => setSelectedPage(2)}
        >
          <img src="/add.png" alt="icon" className="tabicon" />
          <div className="tabtag">Add Student</div>
        </div>
      </div>
    </div>
  );
}

// #CBCBCB
