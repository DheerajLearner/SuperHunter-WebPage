### Problem statement
Creating a superhero hunter app using only vanilla javascript, no libraries or frameworks are allowed for Javascript (you can use any CSS framework like Bootstrap).
### Instructions
Use the Marvel API:  https://developer.marvel.com/docs 
Register yourself to the above website https://developer.marvel.com/signup and generate the public and private key.
Now follow the instruction on how to use the API key https://developer.marvel.com/documentation/authorization. You need to use the timestamp as ts and then create the hash using md5 hash of ts, private-key and public-key. 
### Features 
- Home Page
Fetch and display a list of SuperHeros (Characters) on the home page. Also create a search bar that will filter out the character based on search query. Suppose I type “bat” in the search box, it should show “batman”. 
[ API example https://gateway.marvel.com:443/v1/public/characters?ts=<time-stamp>&apikey=<public-key>&hash=<md5(ts+privateKey+publicKey)>]
Each search result of the superhero should have a favorite button, clicking on which superhero should be added to “My favorite superheroes” (a list).
On clicking any particular search result (any superhero), open a new page with more information about that superhero (Superhero page).

- Superhero Page
Should show a lot of information about the superhero like their name, photo, bio and other information provided by the API (comics, events, series, stories, etc).

- My favourite superheroes Page
Display a list of all the favourite superheroes.
Make this list persistent (should have the same number of superheroes before and after closing the browser).
Remove from favourites button: Each superhero should have remove from favourites button, clicking on which should remove that superhero from the list.
