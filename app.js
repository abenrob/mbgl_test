mapboxgl.accessToken = 'pk.eyJ1IjoiYWJlbnJvYiIsImEiOiJEYmh3WWNJIn0.fus8CLBKPBHDvSxiayhJyg';
var canadaSrc = {
  "type": "vector",
  "tiles": ["http://localhost:3333/canada2/{z}/{x}/{y}.mvt"]
};
var canadaPop = {
  "id": "c_pop",
  "type": "circle", // As a point layer, we need style a symbol for each point.
  "source": "canada_src", // The source layer we defined above
  "source-layer": "population",
  "filter": ["all", [">=", "population", 0], ["<", "population", 100]],
  "paint": {
    "circle-radius": {
      "stops": [[7, 2], [10, 3], [16, 4]]
    },
    "circle-color": "#3086AB",
    "circle-opacity": {
      "stops": [[3, 0.2], [15,0.8]] // Gives us interpolated values between 0.2 and 0.8
    }
  }
};
var canadaPop100 = {
  "id": "c_pop_100",
  "type": "circle", // As a point layer, we need style a symbol for each point.
  "source": "canada_src", // The source layer we defined above
  "source-layer": "population",
  "filter": ["all", [">=", "population", 100]],
  "paint": {
    "circle-radius": {
      "stops": [[7, 2], [10, 3], [16, 4]]
    },
    "circle-color": "#0fa",
    "circle-opacity": {
      "stops": [[3, 0.2], [15,0.8]] // Gives us interpolated values between 0.2 and 0.8
    }
  }
};

var ukSrc = {
  "type": "vector",
  "tiles": ["http://localhost:3333/uk/{z}/{x}/{y}.mvt"]
};
var ukPop = {
  "id": "uk_pop",
  "type": "circle", // As a point layer, we need style a symbol for each point.
  "source": "uk_src", // The source layer we defined above
  "source-layer": "population",
  "filter": ["all", [">=", "population", 0], ["<", "population", 100]],
  "paint": {
    "circle-radius": {
      "stops": [[7, 2], [10, 3], [16, 4]]
    },
    "circle-color": "#3086AB",
    "circle-opacity": {
      "stops": [[3, 0.2], [15,0.8]] // Gives us interpolated values between 0.2 and 0.8
    }
  }
};
var ukPop100 = {
  "id": "uk_pop_100",
  "type": "circle", // As a point layer, we need style a symbol for each point.
  "source": "uk_src", // The source layer we defined above
  "source-layer": "population",
  "filter": ["all", [">=", "population", 100]],
  "paint": {
    "circle-radius": {
      "stops": [[7, 2], [10, 3], [16, 4]]
    },
    "circle-color": "#0fa",
    "circle-opacity": {
      "stops": [[3, 0.2], [15,0.8]] // Gives us interpolated values between 0.2 and 0.8
    }
  }
};

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    zoom: 8,
    center: [-4,56]
});

map.addControl(new mapboxgl.Navigation());

map.on('load', function () {
  map.addSource('uk_src', ukSrc);
  map.addLayer(ukPop, 'uk_pop');
  map.addLayer(ukPop100, 'uk_pop_100');
})
