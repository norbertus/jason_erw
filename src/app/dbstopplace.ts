import { Gpsposition } from './gpsposition';

export interface Dbstopplace {
    id: number;
    stationname: string;
    evanr: string;
    availableTransports: string[];
    position:  Gpsposition;
}
