export default function Header({ setMenuOpen }) {
  return (
    <div className="header">
      <div className="comp">
        <div className="logo">
          <img src="/logo2.png" alt="Jain Classes Logo" className="logoimg" />
        </div>
        <div className="greeting">
          <div className="greetingtop">Hello</div>
          <div className="greetingbottom">Abhishek Jain</div>
        </div>
      </div>
      <div className="actions">
        <div className="menubutton" onClick={() => setMenuOpen(true)}>
          <img src="/menu.png" alt="Menu icon" className="menuicon" />
        </div>
      </div>
    </div>
  );
}
