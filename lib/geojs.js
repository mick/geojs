
var sys = require("sys");

var geojs = exports;



geojs.point = function(latlng){

    this.containedBy = function(bounds){
        return contains(bounds.toBoundsArray(), this);
    }
    this.latLng = latlng;

    this.toLatLngArray = function(){
        return [this.latLng.lat, this.latLng.lng];
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



geojs.bounds = function (topLatLng, bottomLatLng){
    this.top = topLatLng;
    this.bottom = bottomLatLng;

    this.toBoundsArray = function(){
        return [[this.top.lat, this.top.lng],[this.bottom.lat, this.bottom.lng]]
    };
    this.toString = function(){

    };
    this.contains = function(point){
        return contains(this.toBoundsArray(), point);
    }
    


};



function contains(bbox, point){

    toplat = bbox[0][0];
    toplon = bbox[0][1];
    bottomlat = bbox[1][0];
    bottomlon = bbox[1][1];
    //  __
    // |
    //    __|


    //TODO: this wont wrap the globe. fix that


    sys.puts(bbox);
    sys.puts(point.toLatLngArray());

    if((toplat > point.latLng.lat) && (bottomlat < point.latLng.lat)){
        if((toplon > point.latLng.lng) && (bottomlon < point.latLng.lng)){

            // in the bbox
            return true;
        }
        
    }
    return false;



}