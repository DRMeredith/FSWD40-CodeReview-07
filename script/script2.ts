

class Locations {
	constructor(public name: string, public city: string, public address: string, public zip: any, public img: string) {};

		render() {
			document.querySelector(".row").innerHTML += 
				`<div class="col-lg-5 col-md-6 col-sm-10">
					<img class="d-none d-md-block" src="${this.img}" alt="">
						<div class="outputArea">
							<h4 class="placeName">${this.name}</h4>
								<p class="output">
									You Can Find Me At: ${this.city} <br> ${this.zip} <br> ${this.address}</p>
						</div>			
				</div>`		
		
		};
};

class Restaurants extends Locations {
	constructor(name: string, city: string, address: string, zip: any, img: string, public telNum: string, public cuisine: string, public website: string) {
		super(name, city, zip, address, img);
		this.telNum = telNum;
		this.cuisine = cuisine;
		this.website = website;
	};

		render() {
			document.querySelector(".row").innerHTML +=
				`<div class="col-lg-5 col-md-6 col-sm-10">
					<img class="d-none d-md-block" src="${this.img}" alt="">
						<div class="outputArea">
							<h4 class="placeName">${this.name}</h4>
								<p class="output">
									You Can Find Me At: ${this.city} <br> ${this.zip} <br> ${this.address} <br>
									Phone: ${this.telNum} <br>
									We serve: ${this.cuisine} food. <br>
									Find online at: ${this.website}  </p>
						</div>			
				</div>`	
		};
};

class Events extends Locations {
	constructor(name: string, city: string, address: string, zip: any, img: string, public eventDate: string, public eventTime: string, public ticketPrice: number){
		super(name, city, zip, address, img);
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		this.ticketPrice = ticketPrice;
	};

		render() {
			document.querySelector(".row").innerHTML +=
				`<div class="col-lg-5 col-md-6 col-sm-10">
					<img class="d-none d-md-block" src="${this.img}" alt="">
						<div class="outputArea">
							<h4 class="placeName">${this.name}</h4>
								<p class="output">
									You Can Find Me At: ${this.city} <br> ${this.zip} <br> ${this.address} <br>
									Playing on: ${this.eventDate} <br>
									At: ${this.eventTime} <br>
									Tickets cost: ${this.ticketPrice}  </p>
						</div>		
				</div>`
		};		

};

let Karlsplatz = new Locations("Karlskirche", "Vienna", "Karlsplatz 1", 1010, "img/karlsplatz.jpg");

let Tiergarten = new Locations("Zoo", "Vienna", "Maxingstraße 13b", 1130, "img/zoo.jpg");

let LemonLeaf = new Restaurants("Lemon Leaf", "Vienna", "Kettenbruckengasse 19", 1050, "img/lemonleaf.png", "+43(1)5812308", "Thai", "www.lemonleaf.at");

let Sixta = new Restaurants("Sixta", "Vienna", "Schönbrunner Straße 21", 1050, "img/sixta.png", "+43 158 528 56", "Viennese", "http://www.sixta-restaurant.at");

let Kris = new Events("Kris Kristofferson", "Vienna", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", 1150, "img/krisk.jpeg", "Friday 15th June", "20:00", 58.50);

let Lenny = new Events("Lenny Kravitz", "Vienna", "Wiener Stadthalle, Halle D, Roland Rainer Platz 1", 1150, "img/lennyk.jpg", "Saturday 9th June", "19:30", 47.80);


let things = [];
	things.push(Karlsplatz, Tiergarten, LemonLeaf, Sixta, Kris, Lenny);

for (var i = 0; i < things.length; i++) {
	things[i].render();
};






