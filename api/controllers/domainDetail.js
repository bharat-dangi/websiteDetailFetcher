const axios = require("axios");
const Domain = require("../models/DomainDetail");

exports.getDomainDetail = async (req, res) => {
  const domainName = req.params.domainName;
  try {
    const { data } = await axios.get(
      `https://api.whoapi.com/?domain=${domainName}&r=whois&apikey=e5536a3c1fa5c365a35fc49dde201b51`
    );
    const { data: data2 } = await axios.get(
      `https://api.whoapi.com/?apikey=e5536a3c1fa5c365a35fc49dde201b51&r=dnszone&domain=${domainName}`
    );
    const { data: data1 } = await axios.get(
      `https://api.whoapi.com/?apikey=e5536a3c1fa5c365a35fc49dde201b51&r=geo&domain=${domainName}&ip=`
    );
    const info = data.contacts.filter((c) => c.type == "registrant");

    const domainOwner = info[0].organization;
    const ownerCountry = info[0].country;
    const geoLocation = data1.geo_country;
    const aRecord = data2.arecord;

    const domainDetail = new Domain({
      name: domainName,
      domainOwner: domainOwner,
      ownerCountry: ownerCountry,
      geoLocation: geoLocation,
      aRecord: aRecord,
    });

    const savedData = await domainDetail.save();

    res.status(200).json(savedData);
  } catch (error) {
    return res.status(500).json({ message: "Unable to process your request" });
  }
};
