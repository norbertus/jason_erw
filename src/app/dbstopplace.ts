import { Gpsposition } from './gpsposition';



export interface Dbstopplace {
    id: number;
    stationID: string;
    evaNumber: string;
    groupMembers: Array<string>;
    names: any;
    availableTransports: string[];
    position:  Gpsposition;
}
