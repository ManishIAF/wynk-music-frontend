import {useState} from 'react'

const privacypolicy = [
    {
        title:'Collection of Personal Information',
        content:[
                    'At the time you (a) register on Airtel owned applications ("Software") for using the services, , products and materials made available to you using the Software ("Service") or, (b) make any payments related to your use of the Service or, (c) download any content made available through the Service ("Content") or, (d) update the Software or, (e) share any information through the Software or (f) contact us through our help and support channels or, (f) use our services or websites or otherwise interact with us during the course of our relationship, we may ask you for your personal information (such as your name, telephone number, address, date of birth, credit card details (if required as mode of payment) certain unique identifiers, and any other information or data that can be used by itself to uniquely identify, contact, or locate a person, or can be used with information available from other sources to uniquely identify an individual ) ("Personal Information"). By registering to the Service and/or using the Software / Content, you hereby agree to be bound by the Terms of Use and the terms in this privacy policy ("Privacy Policy") We also may automatically receive and track certain data about your mobile device (such as your device-type, time-zone, version of the operating system or Software currently installed, and language preference) or your activity logs from the use of the Service, Software and Content, and we may create a unique device ID for you so we can recognize you. Airtel may collect such non-identifiable information for gathering data on what parts of the Service / Software are of most interest to Users. In some cases, we may automatically detect your location data, but we will not use it unless you give us permission to do so. If you connect with any social networking site ("SNS"), we may also receive some data from that network (e.g. your SNS ID, name, profile picture, gender, age, locale and email address), which shall be deemed to be included within the meaning of your Personal Information. In case you do not provide your information or consent for usage of Personal Information or later on withdraw your consent for usage of the Personal Information so collected, Airtel reserves the right to discontinue the services for which the said information was sought.',
                    'The Personal Information may be collected by Airtel through itself or through its authorized third parties. Third Party is a service provider who associates with Airtel and is involved in handling, managing, storing, processing, protecting and transmitting information on behalf of Airtel. This definition also includes all sub-contractors, consultants and/or representatives of the Third party.'
        ],
    },
    {
        title:'Use of Personal Information',
        content:[
                    `We and our group companies may use, collect, store, process and transfer your Personal Information in accordance with the applicable laws and regulations, for a variety of purposes.',
                    These may include, but are not limited to:
                    - to identify you from time to time, as required, and to validate your use of the Services,
                    - to complete transactions effectively and bill for products and services,
                    - to provide you with the Services and the display of customized content, and targeted advertising both on our apps/websites and on other apps/websites that we advertise through,
                    - to communicate with the Software and Services and for resolving customer service issues,
                    - to determine when you link from our app / Software to one of our partner apps, so that we can monitor the level of traffic that we generate for our partner apps,
                    - to ensure the technical functioning of all our products and services,
                    - to provide, maintain and improve our products and services,
                    - to protect the Software's copyright,
                    - to enforce our Terms of Use,
                    - to comply with laws, requests from a government bodies or courts, prevent and detect frauds and crimes or to respond to litigation,
                    - to enable us to use a third party to perform surveys measuring your experiences and use of our services,
                    - to conduct internal assessments, auditing, data analysis, and research to improve our products and services,
                    - to share your Personal Information with Airtel's affiliates and group companies for any of the foregoing purposes, which affiliates may also combine your Personal Information with other information in this regard,
                    - to promote and market products and services which we consider may be of interest to you and/or may benefit you.`,
                    "We may also encrypt and/or aggregate your data with other users' data in order to create statistics about the general use of the Software and related websites, which helps us to develop new products and services. You understand that we may also share this aggregated data with our business partners and third party advertisers. You understand that in order to comply with the applicable laws and contractual requirements, Airtel may be required to access your location data in order to ensure that your access to the Service is within a particular geographical territory. You hereby consent to such access by Airtel for the foregoing purposes.",
                    'We may also collect and hold information related to your utilization of our services which may include your call details, your browsing history on our website, location details and additional information provided by you while using our services.',
                    'We may share your Personal Information for the purposes detailed in this Privacy Policy with our internal third parties, which are the other entities in our group of companies'
        ]
    },
    {
        title:'You sharing data with third parties',
        content:[
            'Third parties (such as companies who advertise through our apps) may require you to provide your Personal Information in order to access their products, advertisements and offers. If you visit or register for a third party product, advertisement or offer, we may pass some data about your device to that third party (e.g. your tag history and country of registration) so that they can send you offers.',
            "Any third parties' use of your Personal Information is governed by their own privacy policy (which should be accessible from their website or application). If you do not want third parties to be able to access or use your Personal Information, you should not register for, click on or use the applicable third party application or product."
        ]
    },
    {
        title:'Sharing with social networks',
        content:[
            'If you register to or use the Service using an SNS account, you allow Airtel to automatically share your activity, usage and activity-related stories with the Service, Software and Content. You understand that Airtel may post such information on your SNS profile/account. Airtel may also publish such information any other integrated or associated services of Airtel. For the purpose of identification, authentication and ease of access, Airtel may store your username and an access token or similar credentials obtained from such SNS/third party service.'
        ]
    },
    {
        title:'Airtel sharing data with third parties',
        content:[
            "Airtel may provide your Personal Information or any portion of it to Airtel's strategic partners that work with Airtel to provide products and services, or that help Airtel market its products and services to customers. You further acknowledge that Airtel may be required under law, legal process, litigation, and/or requests from public and governmental authorities to disclose your Personal Information.",
            "As a part of your use of our products and services and subject to applicable laws, the information and personal data you provide to us may be transferred to countries other than India. This may happen if any of our servers are from time to time located in a country other than India, or one of our service providers is located in a country other than India. By submitting your information and personal data to us, you agree to the transfer, storage, and/or processing of such information and personal data outside India in the manner described above.",
            "Further, Airtel payment processing partners /gateways may access you billing and shipping information (including your credit cards details, balance in your Airtel account, etc.) in relation to any payments that you make for using the Service. You agree that such third party partners of Airtel may receive such information directly from you. Such third parties' access and protection of your Personal Information will be in accordance with their privacy and security policies and Airtel will not be liable for the same in any way."
        ]
    },
    {
        title:'Links to other websites',
        content:['We may display links to third party websites. Please note that we cannot control and cannot be held responsible for the activities of such websites. You should always read the privacy policy of a website to find out more about how personal information is collected and processed.']
    },
    {
        title:'Use of Cookies',
        content:[
            "Airtel uses cookies and beacons to assist in delivering the service and to provide a positive and personalized user experience. Cookies are files sent to your browser from a web server and stored on your computer's hard drive. Our persistent and session ID Cookies are used to identify unique visitors and to provide a personalized user experience. Beacons are bits of code that function similar to cookies. Our beacons are embedded in outgoing emails and generate a call back to the Airtel server when such emails are opened. Airtel uses beacons to track the status of sent emails. If you do not wish to receive cookies, you may disable them."
        ]
    },
    {
        title:'Security',
        content:[
            "Airtel has implemented adequate and industry accepted processes in compliance with applicable laws, designed to protect Personal Information and maintain security. It is the User's responsibility to protect the security of their login information. Airtel's servers are located in secure server environments. Firewalls and other advanced security technologies are employed to prevent interference or access from outside intruders. These safeguards help prevent unauthorized access, maintain data accuracy, and ensure the appropriate use of data.",
            "While we observe reasonable security measures to protect your Personal Information on all our digital platforms and internet connections, security risks may still arise for reasons outside of our control such as hacking, virus disseminations, force majeure events, breaches of firewall and secure server software etc. Please note that the above-mentioned measures do not guarantee absolute protection to the Personal Information."
        ]
    },
    {
        title:'Choice',
        content:[
            "The Software/Service may allow you to choose the manner of and the extent to which you wish to disclose the Personal Information. You may also be allowed to disable some of the features that require sharing of Personal Information."
        ]
    },
    {
        title:'Changes to Privacy Policy',
        content:[
            "Airtel reserves the right to make changes to this Privacy Policy, and will post any revisions on this page."
        ]
    },
    {
        title:'Feedback and Concerns',
        content:[
            "If you have any feedback or concerns with respect to any content available on Airtel Digital Ltd., please contact us here",
            "To the extent feasible and subject to applicable laws we shall provide you access to the information that Airtel holds about you as well as facilitate any correction and updating of information. We are committed to safeguard your Personal Information collected and handled by us and look forward to your continued support for the same. In case of any feedback or concern regarding of your Personal Information, reach out to our Grievance Officer -",
            `Name - Nitin Grover
            Email - ADLGrievance.Officer@airtel.com`
        ]
    }

]


const PrivacyPolicyPage = () => {
    
    const [Index,setIndex] = useState([0])

    const handleOpening = (inComingData) =>{

        if(Index?.includes(inComingData)){

            setIndex((prevIndex) => {
                const indexToModify = [...prevIndex]
                const ModifiedData = indexToModify.filter(item => item !== inComingData);
                return [...ModifiedData]
            })

        }else if(!Index?.includes(inComingData)){

            setIndex((prevIndex) => {
                const indexToModify = [...prevIndex]
                indexToModify.push(inComingData)
                return [...indexToModify];
            })

        }

    }

    return (
        <div style={{marginLeft:'90px',marginRight:'92px',paddingLeft:'5px',paddingRight:'5px'}}>
            <div style={{paddingTop:'35px',textAlign:'justify'}}>
                <div>
                    <h1 style={{fontSize:'30px',fontWeight:'bold'}}>Privacy Policy</h1>
                </div>
                <div>
                    <p style={{fontSize:'14px',color:'gray',lineHeight:'20px',marginTop:'20px'}}>
                        We at Airtel Digital Limited (hereinafter mentioned as "Airtel") are committed to protecting our customers’ Personal Information and shall strive to maintain the privacy of your Personal Information.
                    </p>
                    <p style={{fontSize:'14px',color:'gray',lineHeight:'20px',marginTop:'20px'}}>
                        This Privacy Policy describes the Personal Information which we may collect, and provides our approach towards handling and usage of or dealing with the same in compliance with the 
                        applicable laws and regulations.
                    </p>
                    <p style={{fontSize:'14px',color:'gray',lineHeight:'20px',marginTop:'20px'}}>
                        Please read the terms of this Privacy Policy carefully. By using and continuing to use our products and services, you are deemed to have accepted and consented to the terms of this 
                        Privacy Policy.
                    </p>
                </div>
            </div>
            <div>
                {privacypolicy?.map((item,index)=>{
                    return(
                        <div key={index} style={{marginTop:'20px'}}>
                            <div>
                                <h1 onClick={()=>handleOpening(index)} className="FooterHeader" style={{fontSize:'15px',fontWeight:'bold'}}>{item.title}</h1>
                            </div>
                            {Index?.includes(index) && <div>
                                {item?.content?.map((item,index)=>{
                                    return(
                                        <p key={index} style={{fontSize:'14px',textAlign:'justify',color:'gray',lineHeight:'20px',marginTop:'20px'}}>
                                            {item?.split('\n').map((line, index) => (
                                                <p key={index}>
                                                    {line}
                                                    <br />
                                                </p>
                                            ))}
                                        </p>
                                    )
                                })}
                            </div>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PrivacyPolicyPage