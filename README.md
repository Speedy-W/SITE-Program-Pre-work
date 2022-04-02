# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Chris Gonzalez**

Time spent: **6** hours spent in total

Link to project: https://glitch.com/edit/#!/pastoral-oval-dollar

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Added point system where each correct guess sequence, rewards the user with 10 points

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

![](https://raw.githubusercontent.com/Speedy-W/SITE-Program-Pre-work/main/Light%26Sound_Memory_Game.gif)


## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   
   I used a Youtube video to help me with updating text as the game progresses.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   
   A challenge I encountered in creating this submission was with adding images to the buttons. 
   When clicking on the buttons, the images wouldn't appear where they were supposed to. 
   Since my images were circular shaped, I ended up making the buttons the same size as them, 
   yet the pictures still wouldn't appear in the correct spot. The images were initially hidden 
   so when it was either lit or clicked on then the image. I ended up removing the hidden feature, 
   and having the images shown from the start, I think it looks great. After further inspection 
   I ended up figuring out the images were not shown correctly due to the padding being 200px and 
   the border radius being 200px, however I ended up liking the images showing up from the start more. 
   A new issue occurred, because the images are shown from the beginning, when they were clicked or lit 
   nothing happened, this is because the image was covering the button to solve this I ended up making 
   the images smaller. Another Issue I faced with the images was the background color of the images not 
   being the same color as the button, to fix this I took a screenshot of my computer's screen and used 
   an online photo editor to get the exact hex code color for each of my images, making the buttons the 
   same color as them.
   
3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   
   I have a lot of questions concerning CSS properties now that I've finished my submission. After doing
   some research into display properties, I discovered that there are a bunch of great CSS properties,
   each with its own unique feature that affects the structure and composition of the HTML tag with which
   it is connected. Frontend UI/UX design is a creative outlet for professionals in my field, in my opinion, 
   user interface/user experience design is a type of art for computer scientists and software engineers. As
   a result, I'd be quite interested in diving into this type of engineering and seeing what I could come up
   with once I've learned more about CSS attributes. In addition, I'd like to learn more about JavaScript as
   a programming language. Many applications and programs, understandably, are far more complex than this
   light and sound memory game.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
  
   If I had a few more hours to work on this project I would want to implement a countdown. The player 
   would have an initial 10 seconds to repeat the first sequence, if they guessed the sequence correctly 
   they would gain an additional second for the next sequence, so they would have 11 seconds to repeat 
   the second sequence, however if they guessed incorrectly they would lose a second for the next sequence. 
   I tried implementing this but I got stuck and things weren't going the way I intended, so I ended up 
   scrapping it, but hopefully with more time I could be able to implement this feature. I would also like 
   to make it so my images on the button appear transparent so only the character appears and not the 
   background to the image. This would make it look so much cleaner, as the button would show up without me 
   having to make the image smaller.

## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)

## License

    Copyright [Chris Gonzalez]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
