import '../styles/footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <img src="./footer.png" alt="left" />
        <div className="footer-address">
          <div className="footer-address-mid">
            <p className="footer-address-mid-title">İletişim</p>
            <p className="footer-address-mid-body">
              Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok No: 151/1F
              İç Kapı No: 2B03 Esenler/İstanbul
            </p>
          </div>
          <p className="footer-address-email">Email: bilgi@tesodev.com</p>
        </div>
      </div>
      <div className="footer-right">
        <img src="./map.png" alt="map" />
      </div>
    </div>
  );
}
