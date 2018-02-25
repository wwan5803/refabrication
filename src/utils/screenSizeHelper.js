const IPADSIZE = 768;
const LAPTOPSIZE = 1420;
const DESKTOPSIZE = 1800;

export const MobileScreen = ()=>{
    return window.innerWidth < IPADSIZE
}

export const PadScreen = ()=>{
    return window.innerWidth >= IPADSIZE && window.innerWidth < LAPTOPSIZE
}

export const LaptopScreen = ()=>{
    return window.innerWidth >= LAPTOPSIZE && window.innerWidth < DESKTOPSIZE
}

export const DesktopScreen = ()=>{
    return window.innerWidth >= DESKTOPSIZE
}