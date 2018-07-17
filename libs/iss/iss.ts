//% color=#99ccff weight=100 icon="\uf197" block="ISS"

namespace iss {

    //% blockId=iss_getName block="ISS name" weight=53
    //% shim=iss::getName
    export function getName(): string {
        return "ISS";
    }

    //% blockId=iss_getId block="ISS ID" weight=53
    //% shim=iss::getId
    export function getId(): number {
        return 25544;
    }

    //% blockId=iss_getLocation block="ISS location" weight=53
    //% shim=iss::getLocation
    export function getLocation(): string {
        return "LAT:-6.3547249173764 LON:43.523139793007";
    }

    //% blockId=iss_getSolarLocation block="ISS solar location" weight=53
    //% shim=iss::getSolarLocation
    export function getSolarLocation(): string {
        return "LAT:22.940300269597 LON:23.264864291413";
    }

    //% blockId=iss_getVelocity block="ISS velocity" weight=53
    //% shim=iss::getVelocity
    export function getVelocity(): number {
        return Math.random(3000) + 26500;
    }

    //% blockId=iss_getAltitude block="ISS altitude" weight=53
    //% shim=iss::getAltitude
    export function getAltitude(): number {
        return Math.random(60) + 380;
    }

    //% blockId=iss_getVisibility block="ISS solar visibility" weight=53
    //% shim=iss::getVisibility
    export function getVisibility(): string {

        if(Math.randomBoolean() == true)
        {
            return "daylight";
        }
        else
        {
            return "eclipsed";
        }
    }

    //% blockId=iss_getDayNum block="ISS day number" weight=53
    //% shim=iss::getDayNum
    export function getDayNum(): number {
        return 17728;
    }
}
