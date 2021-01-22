import React, {useState} from 'react';
import { Header } from './header';
import * as ROUTES from "../constants/routes";
import {FireBaseContext} from "../context/firebase";
import { ProfileContainer } from "./profiles";
import { FooterContainer} from "./footer";

export default function BrowseConstainer() {
    const [profile, setProfile] = useState({});

    const user = {
        displayName: "Arisoa",
        photoURL: '1'
    }

    return profile.displayName ? (
        <>
            <p>Browser Container</p>
            < FooterContainer />
        </> )
        : (<ProfileContainer user={user} setProfile={setProfile} />);
    
}
