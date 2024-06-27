var tweet = prompt("Compose Your Tweet");
var tweetCount = tweet.length;
var maxChars = 140;
if (tweetCount <= 140) {
    alert("You have written " + tweetCount + " characters, you have " + (maxChars - tweetCount) + " characters remaining.");
} else {
    alert(tweetCount + " is too many characters!" + " Limit is " + maxChars + " characters.");
}
