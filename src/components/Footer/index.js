import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <footer>
            <div className="footer container">
                <p>By continuing to this site, you agree to our terms and conditions. <Link to="#">TelegramSales.com</Link> (SIA Silver Spoon) is not responsible for any content published above. In case of dispute, please contact seller</p>
                <ul>
                    <li><Link to="#">Privacy policy</Link></li>
                    <li><Link to="#">Terms and Conditions</Link></li>
                    <li><Link to="#">Made with TelegramSales.com</Link></li>
                </ul>
            </div>

        </footer>
    )
}