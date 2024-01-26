import React, {useRef} from 'react'

import Card from '../../components/card/card';
import './invitation.css';
import Rsvp from '../../components/forms/rsvp/rsvp';
const InvitationPage: React.FC = () => {

    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    return (
        <>
            <div>
                <Card/>
            </div>
            <div>
                <Rsvp/>
            </div>
        </>
    );
}

export default InvitationPage;