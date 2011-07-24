
var sys = require("sys");

var geojs = exports;



geojs.point = function(latlng){

    if(latlng['type'] != undefined){
        // convert this from a geometry.
        latlng =new geojs.latLng(latlng.coordinates[1], latlng.coordinates[0])
    }

    this.containedBy = function(bounds){
        return contains(bounds.toBoundsArray(), this);
    }
    this.latlng = latlng;

    this.toLatLngArray = function(){
        return [this.latlng.lat, this.latlng.lng];
    }
    this.move = function(distance, bearing){
        // Move the point by this much in that direction

    }
}

geojs.latLng = function (lat, lng){
    this.lat = lat
    this.lng = lng

    this.toDegrees = function(){

    }
    this.toString = function(){

    }
};



geojs.bounds = function (bottomLatlng, topLatlng){
    this.top = topLatlng;
    this.bottom = bottomLatlng;

    this.toBoundsArray = function(){
        return [[this.bottom.lng, this.bottom.lat],[this.top.lng, this.top.lat]]
    };
    this.toString = function(){

    };
    this.contains = function(point){
        return contains(this.toBoundsArray(), point);
    }
   
};



function contains(bbox, point){

    bottomlon = bbox[0][0];
    bottomlat = bbox[0][1];
    toplon = bbox[1][0];
    toplat = bbox[1][1];

    //TODO: this wont wrap the globe. fix that

    sys.puts(bbox);
    sys.puts(point.toLatLngArray());


    //-108.36868953124997,38.44927725232777,-102.17240046874997,41.54557989601178
    //    40.014985,-105.27054499999997


    if((toplat > point.latlng.lat) && (bottomlat < point.latlng.lat)){
        if((toplon > point.latlng.lng) && (bottomlon < point.latlng.lng)){

            // in the bbox
            return true;
        }
        
    }
    return false;



}