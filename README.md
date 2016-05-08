#jQuery Autocomplete

"Autocomplete" is a UI technique that allows users to quickly find and select from a list of values which is populated as they type. Autocomplete was made famous by Google search suggestions, but is now common throughout the web, and an essential technique for any web developer to know how to use.

Our autocomplete will take an arbitrary array of text values; in our case, US states. Each time the user presses a key the jQuery `.keyup()` function will filter the array based on what the user has input. For example, if the user has type "ala" the filtered array would include "Alabama", "Alaska" etc, but not "Michigan" etc.

It will then append each matching item as a `li` element in a `ul` directly below the input. The `ul` must be cleared and re-built on every key stroke. Additionally, the user can use the mouse to click a suggestion and their input will be "completed".

[https://getjsdojo.com](https://getjsdojo.com)

##Licence

MIT