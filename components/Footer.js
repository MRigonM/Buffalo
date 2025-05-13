import Link from "next/link";

export default function Footer({ siteConfig = {} }) {
  const theme = siteConfig.theme || '';

  return (
      <footer className="footer">
        <div className="_content footer-row">
          <div className="footer-links">
            <a href="https://www.sazerac.ie/cookie-notice/" target="_blank" rel="noopener noreferrer">Cookie Policy</a>
            <span>|</span>
            <Link href="/terms">Terms</Link>
            <span>|</span>
            <a href="https://www.sazerac.ie/cookie-notice/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          </div>

          <div className="footer-social-text">
            <a href="https://www.instagram.com/freixenetuk" target="_blank" rel="noopener noreferrer">
              <span className="instagram-icon"/> @freixenetuk
            </a>
          </div>

          <div className="footer-responsibility">
            Please Drink Responsibly
          </div>
        </div>
      </footer>

  );
}