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
        document.queryselector(".row").innerHTML + -/** @class */ (function () {
            function class_1() {
            }
            return class_1;
        }());
        "col-lg-5 col-md-6 col-sm-10" >
            /** @class */ (function () {
                function class_2() {
                }
                return class_2;
            }());
        "d-none d-md-block";
        src = "${this.img}";
        alt = "" >
            /** @class */ (function () {
                function class_3() {
                }
                return class_3;
            }());
        "outputArea" >
            /** @class */ (function () {
                function class_4() {
                }
                return class_4;
            }());
        "placeName" > $;
        {
            this.name;
        }
        </h4>
            < p;
        var default_1 = /** @class */ (function () {
            function default_1() {
            }
            return default_1;
        }());
        "output" >
            You;
        Can;
        Find;
        Me;
        At: $;
        {
            this.city;
        }
        $;
        {
            this.zip;
        }
        $;
        {
            this.address;
        }
        /p>
            </div>			
            </div>		;
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
        document.queryselector(".row").innerHTML + -/** @class */ (function () {
            function class_5() {
            }
            return class_5;
        }());
        "col-lg-5 col-md-6 col-sm-10" >
            /** @class */ (function () {
                function class_6() {
                }
                return class_6;
            }());
        "d-none d-md-block";
        src = "${this.img}";
        alt = "" >
            /** @class */ (function () {
                function class_7() {
                }
                return class_7;
            }());
        "outputArea" >
            /** @class */ (function () {
                function class_8() {
                }
                return class_8;
            }());
        "placeName" > $;
        {
            this.name;
        }
        </h4>
            < p;
        var default_2 = /** @class */ (function () {
            function default_2() {
            }
            return default_2;
        }());
        "output" >
            You;
        Can;
        Find;
        Me;
        At: $;
        {
            this.city;
        }
        $;
        {
            this.zip;
        }
        $;
        {
            this.address;
        }
        Phone;
        $;
        {
            this.telNum;
        }
        We;
        serve: $;
        {
            this.cuisine;
        }
        food. < br >
            Find;
        online;
        at: $;
        {
            this.website;
        }
        </p>
            </div>			
            </div>		;
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
        document.queryselector(".row").innerHTML + -/** @class */ (function () {
            function class_9() {
            }
            return class_9;
        }());
        "col-lg-5 col-md-6 col-sm-10" >
            /** @class */ (function () {
                function class_10() {
                }
                return class_10;
            }());
        "d-none d-md-block";
        src = "${this.img}";
        alt = "" >
            /** @class */ (function () {
                function class_11() {
                }
                return class_11;
            }());
        "outputArea" >
            /** @class */ (function () {
                function class_12() {
                }
                return class_12;
            }());
        "placeName" > $;
        {
            this.name;
        }
        /h4>
            < p;
        var default_3 = /** @class */ (function () {
            function default_3() {
            }
            return default_3;
        }());
        "output" >
            You;
        Can;
        Find;
        Me;
        At: $;
        {
            this.city;
        }
        $;
        {
            this.zip;
        }
        $;
        {
            this.address;
        }
        Playing;
        on: $;
        {
            this.eventDate;
        }
        At;
        $;
        {
            this.eventTime;
        }
        Tickets;
        cost: $;
        {
            this.ticketPrice;
        }
        /p>
            < /div>			
            < /div>	;
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
var things = [Karlsplatz, Tiergarten, LemonLeaf, Sixta, Kris, Lenny];
function outputFunction(arr) {
    arr.forEach(function (things) {
        return things.render();
    });
    ;
}
;
