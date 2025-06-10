export default function Menupage({ isMenuOpen, setMenuOpen }) {
  return (
    <div className={`menupage ${isMenuOpen ? 'open' : ''}`}>
      <div className="closebuttondiv">
        <div className="closebutton" onClick={() => setMenuOpen(false)}>
          <img src="/close.png" alt="" className="closeicon" />
        </div>
      </div>
    </div>
  );
}
