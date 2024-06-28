import './scss/App.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section location">
          <h4>Our Location</h4>
          <p>cuttack 753001, Odisha</p>
        </div>
        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-section copy">
          <p>&copy; 2024 go-green Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
