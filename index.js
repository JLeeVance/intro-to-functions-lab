
function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    switch (true) {
        case string === string.toLowerCase():
            return "I can't hear you!"
        case string === string.toUpperCase():
            return "YES INDEED!"
        case string === `Let\'s have dinner together!`:
            return "I would love to!"
        default:
                console.log("Well, that isnt what I wanted you to type in...");
        }
}

console.log(sayHiToHeadphonedRoommate("HI"));
console.log(sayHiToHeadphonedRoommate("hello"));
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));
