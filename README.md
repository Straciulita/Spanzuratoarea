Hangman Game
---------------------
Description:
The Hangman Game is a web-based implementation of the classic word-guessing game. In this game, the player must guess the letters of a randomly selected word within a limited number of attempts. For each wrong guess, a part of a hanging figure appears. If the player exhausts all attempts before guessing the word, the game is lost. The goal is to guess the correct word before the hangman figure is fully drawn.

Technologies Used:
---------------------------------
HTML5:

Used to structure the game layout and display the visual elements like the game board, keyboard buttons, and images (representing the hangman figure).
Semantic HTML tags like div, button, ul were used to define different sections of the page.
CSS3:

Applied to style the game interface, making it visually appealing and user-friendly.
CSS was used to design the virtual keyboard, word display area, and the hanging man figure.
Media queries were used to ensure the game is responsive on various screen sizes, ensuring compatibility with both desktop and mobile devices.

JavaScript (ES6):

JavaScript was used to create the core game logic.
Event listeners were used to detect user interactions (clicks on letters).
Functions such as cuvantRandom() handle the random selection of words, while initGame() processes the player’s guesses.
JavaScript also dynamically updates the DOM to reflect correct and incorrect guesses, manage the hangman image updates, and show a modal dialog for game over or win conditions.
DOM Manipulation:

JavaScript interacts heavily with the DOM (Document Object Model) to update the interface in real-time, such as revealing correctly guessed letters or showing how many wrong attempts have been made.
Buttons representing the letters are dynamically created, and their state (enabled/disabled) is managed during gameplay.

CSS Animations and Hover Effects:

Buttons on the virtual keyboard change color when disabled, indicating that the letter has already been guessed.
Hover effects were applied to improve interactivity.
Responsive Design:

The game is designed to be playable on multiple devices. It adapts to different screen sizes using CSS flexbox layout and media queries.

HOW DOES IT LOOK?
-------------------
![image](https://github.com/user-attachments/assets/e8369ece-c6b1-4693-98df-86c250a859c8)
![image](https://github.com/user-attachments/assets/3af074e8-7b65-4e5d-b999-0f38bb5af8cf)
![image](https://github.com/user-attachments/assets/313d300f-a25c-4ad5-bd0c-da653f304ac8)
![image](https://github.com/user-attachments/assets/054f13d4-cfac-4099-bdc5-333457159441)




