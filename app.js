'use strict';

var fs = require('fs');
var fetch = require('node-fetch');
var url = 'http://m.moers.de/www/verzeichnis-13.nsf/apijson.xsp/view-list-plain';



function covert_obj_to_geo_json(obj) {
  return {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [obj.SLat, obj.SLng]
    },
    "properties": {
      "name": obj.DocName,
      "description": obj.Kurztext,
      "img_thumb": obj.Thumb

    }
  }
}

fetch(url)
  .then((res)  => res.json())
  .then((body) => {
    console.log(body);
    return body.map(covert_obj_to_geo_json)
  })
  .then((result) => {
    console.log(JSON.stringify(result));
    fs.writeFile('data/geojson.json', JSON.stringify(result));
  });
