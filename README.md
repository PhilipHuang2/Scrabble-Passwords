# Scrabble-Passwords
Given a set of parameters of which to generate a unique password, return a set of passwords that are memorable and strong

# Basic ToDo List
1. Using React, ask the user to given a list of parameters of which they want their password to contain
2. Generate a password using said parameters
3. Using a DAWG (Direct Acyclic Word Graph) to figure out what words can be used from the password
4. rearrange a password to seperate words with random symbols and excess letters
5. Rank each possible password and return the top X passwords for the user to use
    1. More complex words are ranked better (ie. Kangaroo is better than bee)
    2. Minimize the amount of "loose letters" (ie.  letter@? is better than t@leer@t)
    3. Use common "leet speak" to increase the amount of usable letters if nessecary ( ie. CA$H is better that ha$c)
    4. more prioritization when experimenting
  
# Resources Used
Initial Concept 

[The World's Fastest Scrabble Program](https://www.cs.cmu.edu/afs/cs/academic/class/15451-s06/www/lectures/scrabble.pdf)

by Andrew W. Appel, and Guy J. Jacobson

from the CMU School of Computer Science

Basic implementation of DAWG

[DAWG Implementation](http://stevehanov.ca/blog/?id=115)

by Steve Hanov

[His Blog](http://stevehanov.ca/blog/)
