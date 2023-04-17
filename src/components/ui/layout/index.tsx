import {useDeviceDetect, useGetDeviceViewInfo }from '../../feature/hooks';
import * as React from 'react'
import { NavBar } from './navigation';
import { NetworkStatus } from '../../feature/network';
import { Footer } from './footer';


interface LayoutI {
    children: React.ReactNode;
}

export const Layout =({children}: LayoutI)=> {
    // Check user agent to confirm if device is mobile
    const { isMobile } = useDeviceDetect();
    // check device viewport to detect device type
    const { isMobileDevice, isTablet, isDesktop } = useGetDeviceViewInfo()


    return(
        <React.Fragment>
            <NavBar isMobile={isMobile} isMobileDevice={isMobileDevice} isTablet={isTablet} isDesktop={isDesktop} />
            <NetworkStatus />
            {children}
            <Footer />
        </React.Fragment>
    )
}