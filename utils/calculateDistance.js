const degToRad = require('./degToRad');

/** HAVERSINE FORMULA:
 * a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)
 * c = 2 ⋅ atan2( √a, √(1−a) )
 * d = R ⋅ c
 * WHERE:
 * φ1 is the reference latitude i.e central London (refLat)
 * φ2 is the latitude for each partner's location
 * λ denotes longitude
 */
module.exports = (location1, location2) => {
  const R = 6371; //earth's radius in km
  let [lat1, lng1] = location1.split(',');
  let [lat2, lng2] = location2.split(',');
  latDiff = degToRad(lat1 - lat2);
  lngDiff = degToRad(lng1 - lng2);
  const a = Math.sin(latDiff / 2) ** 2 + Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * (Math.sin(lngDiff) ** 2);
  const b = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * b;
};