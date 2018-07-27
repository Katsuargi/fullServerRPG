# fullServerRPG

This is a work in progress full server version of my test RPG.

The minimum viable project design was linking the save/load function to a server rather than a players local files.

Once that was completed work began on moving things off of the client side to the server side both for better design and to get rid of all
the awful global variables that currently exist. 

A functional monster database was created as proof of concept, as well as a rudimentry dev console to add monsters to the database and load
them for viewing via calling their name in the name field.

User save/load works via a generated password on load. On full completion, this save/load code would be stored in a cookie or some similar
tactic rather than as a global variable.

All in all, the project is maybe a week or two of dedicated work from full server side implimentation.
