declare module "computeddistance" {
    export function getDistance(lng1: number, lat1: number, lng2: number, lat2: number): number;
    export function rad(du: number): number;
}