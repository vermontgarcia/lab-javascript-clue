// Characters

var mrGreen = {
first_name:   "Jacob",
last_name:    "Green",
color:        "green",
description:  "He has a lot of connections",
age:          45,
image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation:   "Entrepreneur"
}

var drOrchid = {
first_name:    "Doctor",
last_name:     "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation:    "Scientist"
}

var profPlum = {
first_name:   'Victor',
last_name:    'Plum',
description:  'Billionare video game designer',
age:          22,
image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
occupation:   'Designer'
}

var missScarlet = {
first_name:   'Kasandra',
last_name:    'Scarlet',
color:        'red',
description:  'She is an A-list movie star with a dark past',
age:          31,
image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
occupation:   'Actor'
}

var mrsPeacock = {
first_name:   'Eleanor',
last_name:    'Peacock',
color:        'blue',
description:  'She is from a wealthy family and uses her status and money to earn popularity',
age:          36,
image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
occupation:   'Socialité'
}

var mrMustard = {
first_name:   'Jack',
last_name:    'Mustard',
color:        'yellow',
description:  'He is a former football player who tries to get by on his former glory',
age:          62,
image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
occupation:   'Retired Football player'
}

// Weapons

var weaponsArray = [

{name: 'rope', weight: 10},
{name: 'knife', weight: 8},
{name: 'candlestick', weight: 2},
{name: 'dumbbell', weight: 30},
{name: 'poison', weight: 2},
{name: 'axe', weight: 15},
{name: 'bat', weight: 13},
{name: 'trophy', weight: 25},
{name: 'pistol', weight: 20}
]

// Rooms

var roomsArray = [
{name: 'Dinning Room'},
{name: 'Conservatory'},
{name: 'Kitchen'},
{name: 'Study'},
{name: 'Library'},
{name: 'Billiard Room'},
{name: 'Lounge'},
{name: 'Ballroom'},
{name: 'Hall'},
{name: 'Spa'},
{name: 'Living Room'},
{name: 'Observatory'},
{name: 'Theater'},
{name: 'Guest House'},
{name: 'Patio'},
]

// Characters Collection
var charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms' Collection
var roomsArray = ['Dinning Room', 'Conservatory', 'Kitchen', 'Study', 'Library', 'Billiard Room', 'Lounge', 'Ballroom', 'Hall', 'Spa', 'Living Room', 'Observatory', 'Theater', 'Guest House', 'Patio'];

// Weapons Collection
var weaponsArray = ['rope', 'knife', 'candlestick', 'dumbbell', 'poison', 'axe', 'bat', 'trophy', 'pistol'];

function randomSelector(array){
    var randomNumber = Math.floor(Math.random() * array.length);
    //console.log(randomNumber);
    return array[randomNumber];
}

function pickMistery(){
    var misteryEnvelope = [];
    var character = randomSelector(charactersArray);
    var room = randomSelector(roomsArray);
    var weapon = randomSelector(weaponsArray);
    misteryEnvelope.push(character, weapon, room);

    //console.log(misteryEnvelope);

    return misteryEnvelope;
}

function revealMistery(mistery){
    var misteryRevealed;
    //console.log(mistery[0]);

    misteryRevealed = (mistery[0].first_name + ' ' + mistery[0].last_name + ' killed Mr.Boddy using the ' + mistery[1].name + ' in the ' + mistery[2].name + '!!!!');
    console.log(misteryRevealed);
    return misteryRevealed;
}

pickMistery();

revealMistery(pickMistery());
