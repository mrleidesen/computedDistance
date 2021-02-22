/**
 * 计算两点之间的距离
 * 单位 km(千米)
 * @param {number} lng1 
 * @param {number} lat1 
 * @param {number} lng2 
 * @param {number} lat2 
 */
export const getDistance = (lng1, lat1, lng2, lat2) => {
    const EARTH_RADIUS = 6378.137
    const radLng1 = rad(lng1)
    const radLat1 = rad(lat1)
    const radLng2 = rad(lng2)
    const radLat2 = rad(lat2)

    const latDiff = radLat1 - radLat2
    const lngDiff = radLng1 - radLng2

    let distance = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(latDiff / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(lngDiff / 2), 2)));
    distance = distance * EARTH_RADIUS
    distance = Math.round(distance * 10000) / 10000
    
    return distance
}

/**
 * @param {number} du 
 */
export const rad = (du) => du * Math.PI / 180.0