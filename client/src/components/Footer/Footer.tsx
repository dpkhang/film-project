import React from 'react'
import './Footer.scss'
import PropTypes from 'prop-types'

Footer.propTypes = {
    onHideExplorer: PropTypes.func
};

function Footer(props: any) {
    //props
    const {onHideExplorer} = props

    const handleClick = (e: any)=> {
        if(onHideExplorer)
            onHideExplorer()
    }

    return (
        <div className="footer-background" onClick={handleClick}>
            <div className="footer">
                <table>
                    <tbody>
                        <tr>
                            <th>Contact</th>
                            <th>Society</th>
                            <th>Policy</th>
                        </tr>
                        <tr>
                            <td>Can Tho</td>
                            <td>Facebook</td>
                            <td>Security</td>
                        </tr>
                        <tr>
                            <td>Phone: 0939305459</td>
                            <td>Instagram</td>
                            <td>Privacy</td>
                        </tr>
                        <tr>
                            <td>Fax: 999999</td>
                            <td>Twitter</td>
                            <td>Certification</td>
                        </tr>
                        <tr>
                            <td>http://hippomovies.com</td>
                            <td>Line</td>
                            <td>Information</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Footer