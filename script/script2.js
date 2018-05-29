var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locations = /** @class */ (function () {
    function Locations(name, city, address, zip, img) {
        this.name = name;
        this.city = city;
        this.address = address;
        this.zip = zip;
        this.img = img;
    }
    ;
    Locations.prototype.render = function () {
        document.querySelector(".row").innerHTML +=
            "<div class=\"col-lg-5 col-md-6 col-sm-10\">\n\t\t\t\t\t<img class=\"d-none d-md-block\" src=\"" + this.img + "\" alt=\"\">\n\t\t\t\t\t\t<div class=\"outputArea\">\n\t\t\t\t\t\t\t<h4 class=\"placeName\">" + this.name + "</h4>\n\t\t\t\t\t\t\t\t<p class=\"output\">\n\t\t\t\t\t\t\t\t\tYou Can Find Me At: " + this.city + " <br> " + this.zip + " <br> " + this.address + "</p>\n\t\t\t\t\t\t</div>\t\t\t\n\t\t\t\t</div>";
    };
    ;
    return Locations;
}());
;
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(name, city, address, zip, img, telNum, cuisine, website) {
        var _this = _super.call(this, name, city, zip, address, img) || this;
        _this.telNum = telNum;
        _this.cuisine = cuisine;
        _this.website = website;
        _this.telNum = telNum;
        _this.cuisine = cuisine;
        _this.website = website;
        return _this;
    }
    ;
    Restaurants.prototype.render = function () {
        document.querySelector(".row").innerHTML +=
            "<div class=\"col-lg-5 col-md-6 col-sm-10\">\n\t\t\t\t\t<img class=\"d-none d-md-block\" src=\"" + this.img + "\" alt=\"\">\n\t\t\t\t\t\t<div class=\"outputArea\">\n\t\t\t\t\t\t\t<h4 class=\"placeName\">" + this.name + "</h4>\n\t\t\t\t\t\t\t\t<p class=\"output\">\n\t\t\t\t\t\t\t\t\tYou Can Find Me At: " + this.city + " <br> " + this.zip + " <br> " + this.address + " <br>\n\t\t\t\t\t\t\t\t\tPhone: " + this.telNum + " <br>\n\t\t\t\t\t\t\t\t\tWe serve: " + this.cuisine + " food. <br>\n\t\t\t\t\t\t\t\t\tFind online at: " + this.website + "  </p>\n\t\t\t\t\t\t</div>\t\t\t\n\t\t\t\t</div>";
    };
    ;
    return Restaurants;
}(Locations));
;
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, city, address, zip, img, eventDate, eventTime, ticketPrice) {
        var _this = _super.call(this, name, city, zip, address, img) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        return _this;
    }
    ;
    Events.prototype.render = function () {
        document.querySelector(".row").innerHTML +=
            "<div class=\"col-lg-5 col-md-6 col-sm-10\">\n\t\t\t\t\t<img class=\"d-none d-md-block\" src=\"" + this.img + "\" alt=\"\">\n\t\t\t\t\t\t<div class=\"outputArea\">\n\t\t\t\t\t\t\t<h4 class=\"placeName\">" + this.name + "</h4>\n\t\t\t\t\t\t\t\t<p class=\"output\">\n\t\t\t\t\t\t\t\t\tYou Can Find Me At: " + this.city + " <br> " + this.zip + " <br> " + this.address + " <br>\n\t\t\t\t\t\t\t\t\tPlaying on: " + this.eventDate + " <br>\n\t\t\t\t\t\t\t\t\tAt: " + this.eventTime + " <br>\n\t\t\t\t\t\t\t\t\tTickets cost: " + this.ticketPrice + "  </p>\n\t\t\t\t\t\t</div>\t\t\n\t\t\t\t</div>";
    };
    ;
    return Events;
}(Locations));
;
var Karlsplatz = new Locations("Karlskirche", "Vienna", "Karlsplatz 1", 1010, "img/karlsplatz.jpg");
var Tiergarten = new Locations("Zoo", "Vienna", "Maxingstraße 13b", 1130, "img/zoo.jpg");
var LemonLeaf = new Restaurants("Lemon Leaf", "Vienna", "Kettenbruckengasse 19", 1050, "img/lemonleaf.png", "+43(1)5812308", "Thai", "www.lemonleaf.at");
var Sixta = new Restaurants("Sixta", "Vienna", "Schönbrunner Straße 21", 1050, "img/sixta.png", "+43 158 528 56", "Viennese", "http://www.sixta-restaurant.at");
var Kris = new Events("Kris Kristofferson", "Vienna", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", 1150, "img/krisk.jpeg", "Friday 15th June", "20:00", 58.50);
var Lenny = new Events("Lenny Kravitz", "Vienna", "Wiener Stadthalle, Halle D, Roland Rainer Platz 1", 1150, "img/lennyk.jpg", "Saturday 9th June", "19:30", 47.80);
var things = [];
things.push(Karlsplatz, Tiergarten, LemonLeaf, Sixta, Kris, Lenny);
for (var i = 0; i < things.length; i++) {
    things[i].render();
}
;
