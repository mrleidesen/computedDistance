declare module "computeddistance" {
    /**
     * 根据两个经纬度的位置进行距离计算
     * 单位 - 千米（公里）
     */
    export function getDistance(lng1: number, lat1: number, lng2: number, lat2: number): number;

    /**
     * 计算多个经纬度的位置
     * 数组形式 [[lng, lat], [lng, lat]]
     */
    export function computedMultiDistance(distances: [number, number][]): number;

    /**
     * 经纬度转换
     */
    export function rad(du: number): number;
}
