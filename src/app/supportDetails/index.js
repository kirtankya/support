import React from 'react'
import './supportDetails.scss';

export default function Support() {
    return (
        <div className='support_main'>
            <div className="container">
                <div className="support_description">
                    <h2>Theme Support</h2>
                    <p>All product purchases with Vine Themes comes with a complimentary
                        round-the-clock support for your ease of mind
                    </p>
                </div>
                <div className="support_description">
                    <h2>Support Overview</h2>
                    <p>Our support primarily covers all pre and post-sales questions, basic product related questions, and bug reports. You can send in your requests to our support forum atVine Themes. You can also follow us on Twitter to get the latest news and updates regarding our themes.</p>
                </div>
                <div className="support_description">
                    <h2>Eligibility</h2>
                    <p>All products(Bootstrap HTML,Scss React, themes and solutions) purchases via our authorized 3rd party or own marketplaces and/or partners are eligible for the complementary frontend support. This complementary support has no expiry, as long as you have a valid purchase code, you are eligible for our frontend support. Please note that you will need to provide your valid purchase code when you send in your enquiries.</p>
                </div>
                <div className="support_description">
                    <h2>Submission Tips</h2>
                    <p>When submitting your enquiry, we recommend that you try and fill in as much details as possible for us to fully grasp your request. This will in-turn help us solve your concerns accurately and efficiently.</p>
                </div>
                <div className="support_description">
                    <h2>Bug Reports</h2>
                    <p>You can also submit any bugs that you may have found whilst developing your project using 1 of our themes. Once a bug report is submitted, it will be flagged as a high priority case for us to fix and release on the next update. We will also be able to assist your development by sending the solution directly to you if a hotfix is required urgently.</p>
                </div>
                <div className="support_description">
                    <h2>Support Expiry: What's Next? </h2>
                    <p>Should your support period expire, please be aware of the following steps:</p>
                    <>
                        <p className='support_guidelines'><b>Ticket Creation Restriction:</b> Expired support packs disallow the creation of new tickets.If you require further assistance, you have the option to extend your support by visiting the item page.Find the support extension option on the right side.</p>
                    </>
                </div>
                <div className="support_description">
                    <h2>Customization Services Available </h2>
                    <>
                        <p className='support_guidelines'><b>If you seek theme customization beyond our support scope: </b>Kindly note that customization tasks are outside the purview of our support. However, a trusted partner of ours can assist you in these endeavors.</p>
                    </>
                    <h3>Check out our <a href="https://support-umber-mu.vercel.app/"> Vinethems.com</a> for more information.</h3>
                </div>
            </div>
        </div>
    )
}
