// create A start attributes!
// A = B / B = A
// B = A / A = B

var tigger = { character: "Tigger" }; 

var pooh = { character: "Winnie the Pooh" };
tigger.north = pooh; 
pooh.south = tigger;

var piglet = { character: "Piglet"};        
piglet.east = tigger.north;          
tigger.north.west = piglet;          

var bees = { character: "Bees"};
bees.west = tigger.north;
tigger.north.east = bees;

// middle top
var robin = { charactor: "Christpoher Robin"}; 
pooh.north = robin;
robin.south = pooh;

// left
var owl = { charactor: "Owl"};
owl.east = robin;
pooh.north.east = owl;

// right
var rabbit = { charactor: "Rabbit"};
rabbit.west = robin;
pooh.north.east = owl;

// right right
var gopher = { charactor: "Gophet"};
gopher.west = rabbit;
pooh.north.east.eat = gopher;

var kanga = { charactor: "Kanga"}; 
robin.north = kanga;
kanga.south = robin;

var kanga = { charactor: "Kanga"};
robin.north = kanga;
kanga.south = robin;

var eeyore = { charactor: "Eyeore"};
kanga.north = eeyore;
eeyore.south = kanga;

var heffalumps = { charactor: "Heffalumps"};
heffalumps.west = eeyore;
kanga.north.east = heffalumps;





