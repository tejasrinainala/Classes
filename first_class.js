// 1. A school's film club wants to store details of the films it has studied so far this year. Create a new class to do this. We want to store the following data about each film: id, title, director, releaseYear and genres[].

// 2. Create two methods on the class: one for adding multiple genres to the films - addGenre(genre) - and one to get the title of the film - getFilmTitle().

// 3. Instantiate a new instance of the class using data from your your favourite film. Add at least 1 genre to your film using addGenre(), and get the title using getFilmTitle()

// Beginning:
class Film {          //class
	//Your code here.
	constructor(id, title, director,releaseYear,genres=[])
	{
		this.id=id;
		this.title=title;
		this.director=director;
		this.releaseYear=releaseYear;
		this.genres=genres;
	}
	addGenre(genre)
	{
		this.genres=[...this.genres,genre]
	}
	getFilmTitle()
	{
		return `Title ${this.title}`
	}
}
const titanic= new Film(1,'Titanic')
titanic.addGenre('Action,melodrama')
titanic.getFilmTitle()

// Rest of your code here. 
console.log(titanic.getFilmTitle())
console.log(titanic.genres)




//output
Title Titanic
['Action melodrama']
