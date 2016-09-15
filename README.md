# react.js-voice-audio-player
<p align="right">
  <img src="/react-player.png" />
</p>

 A functional and lightweight react-redux audio player built on the top of the Soundcloud API. After the microphone button has been clicked you can use the player remotely. Just by using your voice.
 
Check out at https://abitlog.github.io/react.js-voice-audio-player

### Some of advantages:
1. Player does not require a server, except if you'd like to use a voice control
2. Uses Soundcloud API to fetch the tracks
3. Uses local storage API to save the tracks you marked as favorites
4. Uses web audio API to perform spectrum visualization and filter frequencies
5. You can switch tracks back and forth, repeat them, shuffle, search for new ones either manually or by your voice

### The list of the voice commands:

"Switch" - toggles the track's playback <br><br>
"Play next track" - plays the next track according to the current playing tab <br><br>
"Play previous track" - plays the previous track according to the current playing tab <br><br>
"Repeat track" - toggles the repeat switcher <br><br>
"Search for *" - search the track/author/whatever. So, a voice command "Search for Vivaldi" will search for some Vivaldi's music <br><br>
"Play playlist" - starts playing the first track from the playlist <br><br>
"Play favorites" - starts playing the first track from the favorites <br><br>
"Shuffle" - shuffles the list according to the current tab <br><br>

### To run a local server: 
1. `npm install`
2. `npm run start`
3. go to `http://localhost:3000`

### TODO list:
1. Refactor the existing code
2. Add more DnD actions
