const GameData = [
  {title: 'Shadow of War', releaseYear: '2015', genre: 'action RPG', developer: 'id'},
  {title: 'Fallout 76', releaseYear: '2018', genre: 'exploration', developer: 'Bethesda'},
  {title: 'World of Warcraft', releaseYear: '2005', genre: 'MMORPG', developer: 'Blizzard'},
  {title: 'Red Dead Redemption 2', releaseYear: '2018', genre: 'MMORPG', developer: 'Rockstar'},
]


var index = 0;
for (let row of GameData){
  console.log(index++, row);
}

GameData.forEach(row => console.log(row.title));
GameData.forEach(({title, genre}) => console.log(title, genre));


const titles = GameData.map((row) => {
return {summary: row.title + " This is a very important title", note: " I liked it very much", source: row};
});

console.log(titles);

titles.forEach(title => console.log(title.source));