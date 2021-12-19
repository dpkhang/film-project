import React from 'react'
import './VIPFrame.scss'

function VIPFrame(props: any) {
    return (
        <div className="manage-vip-frame-background">
            <p className="manage-vip-frame-title">
                VIP Package
            </p>
            <div className="items">
                <p className="activated-inform">You activated for Normal packages!</p>
            </div>
            <div className="items">
                <p>You can choose others packages to update:</p>
                <table>
                    <tbody>
                        <tr>
                            <th className="grant-th">Grant</th>
                            <th className="normal-th">Normal</th>
                            <th className="master-th">Master</th>
                        </tr>
                        <tr>
                            <th>Quality:</th>
                            <td>1080p</td>
                            <td>4k</td>
                        </tr>
                        <tr>
                            <th>Devices:</th>
                            <td>Phone, Tablet, Laptop</td>
                            <td>Phone, Tablet, Laptop, TV</td>
                        </tr>
                        <tr>
                            <th>Limit:</th>
                            <td>Yes</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <th>Offline:</th>
                            <td>Not Download</td>
                            <td>Can Download</td>
                        </tr>
                        <tr>
                            <th>Price:</th>
                            <td>$10/month</td>
                            <td>$20/month</td>
                        </tr>
                        <tr className="submit">
                            <td></td>
                            <td><button className="btn btn-">Update</button></td>
                            <td><button className="btn btn-">Update</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default VIPFrame