// Footer component for footer section
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>🍔 FoodHub</h3>
          <p className="footer-description">
            Delivering happiness to your doorstep. Order from your favorite restaurants and enjoy hot, fresh meals delivered fast!
          </p>
          <div className="social-links">
            <span className="social-icon">📱</span>
            <span className="social-icon">🐦</span>
            <span className="social-icon">📷</span>
            <span className="social-icon">💼</span>
          </div>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>📖 About Us</li>
            <li>💼 Careers</li>
            <li>👥 Team</li>
            <li>🎯 FoodHub One</li>
            <li>🎁 Gift Cards</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>📞 Help & Support</li>
            <li>🤝 Partner with us</li>
            <li>🏍️ Ride with us</li>
            <li>📧 Email Us</li>
            <li>💬 Live Chat</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li>📄 Terms & Conditions</li>
            <li>🍪 Cookie Policy</li>
            <li>🔒 Privacy Policy</li>
            <li>⚖️ Refund Policy</li>
            <li>🛡️ Security</li>
          </ul>
        </div>

        <div className="footer-section cities">
          <h3>We Deliver To</h3>
          <ul>
            <li>🏙️ Bangalore</li>
            <li>🏛️ Delhi</li>
            <li>🌆 Mumbai</li>
            <li>🌃 Pune</li>
            <li>🌇 Hyderabad</li>
            <li>🏢 Chennai</li>
            <li>🌉 Kolkata</li>
            <li className="view-all">View All Cities →</li>
          </ul>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2025 FoodHub Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="footer-badges">
            <span className="badge">🔒 Secure Payments</span>
            <span className="badge">⚡ Fast Delivery</span>
            <span className="badge">⭐ Top Rated</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;