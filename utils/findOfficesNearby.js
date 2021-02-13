module.exports = (calcDistance, partnersList) => {
  //an array to store the offices within 100km
  let officesNearby = [];

  partnersList.forEach((partner) => {
    let orgName = partner.organization;
    const centralLondon = "51.515419, -0.141099";

    partner.offices.forEach((office) => {
      let distance = calcDistance(centralLondon, office.coordinates);

      if (distance <= 100) {
        let officeNearby = {};
        officeNearby.organization = orgName;
        officeNearby.address = office.address;

        officesNearby.push(officeNearby);
      }
    })
  }) 

  //sort the results
  return officesNearby.sort((a, b) => a.organization > b.organization ? 1 : -1);
};