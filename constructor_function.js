// 1. create a new constructor function, Book, which logs books in the school library (id, title, author, themes[]), 
// 2. Add ids, titles and authors for your two favourite books. 
// 3. Use the prototype keyword to add a theme property to the  books. 
// 4. Add at least one theme to each of your books. 

// Beginning:

function Book(id,title,author,themes=[]) {
	// your code here
	this.id=id;
	this.title=title;
	this.author=author;
	this.themes=themes;
}
const book1=new Book(1,'Hello Inida!','author1');
const book2=new Book(2,'lovely world','author2');
Book.prototype.addTheme=function(theme)
{
	this.themes=[...this.themes,theme]
}

book1.addTheme('theme1');
book2.addTheme('theme2');
console.log(book1)
console.log(book2)
console.log(book1.themes)






//output
Book {id: 1, title: 'Hello Inida!', author: 'author1', themes: ['theme1']}
Book {id: 2, title: 'lovely world', author: 'author2', themes: ['theme2']}
['theme1']
