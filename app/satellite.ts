export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    launchDate: string;
    operational: boolean;
    static type: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }
    
    shouldShowWarning(): boolean {
        let checkSatelliteType = this.type.toLowerCase();
        if (checkSatelliteType === "space debris"){         
            return true;
        }
        else {
            return false;
        }
    }
}
