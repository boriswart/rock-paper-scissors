let didYouWin = true
let didYouTie = true
let imageSpaceElem = document.getElementById("img-space")
let winLoseSpaceElem = document.getElementById("win-lose-space")
let possibleMoves = [{

    name: "rock",
    beats: "scissors",
    img: "https://thumbs.gfycat.com/WhichDisastrousAmurratsnake-max-1mb.gif"
},
{
    name: "paper",
    beats: "rock",
    img: "https://thumbs.gfycat.com/WhichDisastrousAmurratsnake-max-1mb.gif"
},
{
    name: "scissors",
    beats: "paper",
    img: "https://thumbs.gfycat.com/WhichDisastrousAmurratsnake-max-1mb.gif"
}
]

function play(hand) {
    let handToPlay = findRPS(hand)
    console.log("player Hand: ", handToPlay.name)
    let beats = handToPlay.beats
    console.log("it beats: ", beats)
    let computerHandBeats = getCompPlay()
    switch (handToPlay.name) {
        case "rock":
            if (computerHandBeats == "rock") {
                playVid("img/rock-paper.gif")
                didYouWin = false
                didYouTie = false
            } else if (computerHandBeats == "paper") {
                playVid("img/rock-sciss.gif")
                didYouWin = true
                didYouTie = false
            } else {
                playVid("img/tie.gif");
                didYouTie = true
            }
            break;
        case "paper":
            if (computerHandBeats == "paper") {
                playVid("img/paper-sciss.gif")
                didYouWin = false
                didYouTie = false
            } else if (computerHandBeats == "scissors") {
                playVid("img/paper-rock.gif")
                didYouWin = true
                didYouTie = false
            } else {
                playVid("img/tie.gif");
                didYouTie = true
            }
            break;
        case "scissors":
            if (computerHandBeats == "scissors") {
                playVid("img/sciss-rock.gif")
                didYouWin = false
                didYouTie = false
            } else if (computerHandBeats == "rock") {
                playVid("img/sciss-paper.gif")
                didYouWin = true
                didYouTie = false
            } else {
                playVid("img/tie.gif");
                didYouTie = true
            }

    }

    console.log("but ... Computer Hand beats:   drumm roll ...", computerHandBeats)
    // wait for 1 second then play default gif "Play-again"
    setTimeout(playVid, 4000)
}

function playVid(gif) {
    if (!gif) {
        switch (didYouTie) {
            case true:
                gif = "img/tie-play-again.gif"
                break;
            case false:
                if (didYouWin) {
                    gif = "img/win-play-again.gif"
                } else {
                    gif = "img/lose-play-again.gif"
                }
        }
    }
    imageSpaceElem.innerHTML = /*html*/`
        <div class="image" >
            <img class="img-fluid"  src=${gif}>
       </div>`
}

function findRPS(hand) {
    if (typeof hand != "string") {
        throw new Error('Input Must be a string')
    }
    let found = possibleMoves.find(x => x.name == hand)
    if (!found) {
        throw new Error(`No move known as ${hand} sorry!`)
    }
    return found
}

function getCompPlay() {
    let compHandIndex = Math.floor(Math.random() * possibleMoves.length)
    return possibleMoves[compHandIndex].beats
}