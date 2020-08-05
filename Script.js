let quotes = [
    "Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way. – Michael Scott",
    "I never thought I’d say this, but I think I ate too much bone marrow. — Dwight Schrute",
    "I talk a lot, so I’ve learned to tune myself out. – Kelly Kapoor",
    "I wanna do a cartwheel. But real casual like. Not enough to make a big deal out of it, but I know everyone saw it. One stunning, gorgeous cartwheel. – Creed Bratton",
    "Sometimes the clothes at Gap Kids are just too flashy. – Angela Martin",
    "I run a small fake-ID company from my car with a laminating machine that I swiped from the Sheriff’s station. – Creed Bratton",
    "I got six numbers, one more and it would have been a complete phone number. – Kevin Malone",
    "The man is wearing sandals. I don’t need to see Oscar’s toes at work. Gross! – Angela Martin",
    "If I don’t have some cake soon, I might die. – Stanley Hudson",
    "Guess what, I have flaws. What are they? Oh I don’t know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I’ll hit somebody with my car. So sue me. — Michael Scott",
    "Tough day. Yes. But I feel good. I put the office in their place, took a bunch of painkillers, drank a bottle of wine, took my pants off. I just feel good. – Andy Bernard",
]

let relationshipQuotes = [
    "I have a lot of questions. Number one, how dare you? - Kelly Kapoor",
    "Maybe we weren’t right together, but it’s weird. I’d rather she be alone than with somebody. Is that love? – Ryan Howard",
    "Make friends first, make sales second, make love third. In no particular order. – Michael Scott",
    "In the sixties I made love to many, many women, often outdoors in the mud and the rain, and it’s possible that a man slipped in. There’d be no way of knowing. – Creed Bratton",
    "No question about it; I'm ready to be hurt again - Michael Scott",
    "I will raise 100 children with 100 of your lovers if it means I can be with you! - Dwight Schrute",
    "Plan A was marrying her a long time ago. Pretty much the day I met her. - Jim Halpert",
    "You are everything - Jim Halpert",
    
]

let workLifeQuotes = [
    "I am about to do something very bold in this job that I’ve never done before … try. – Jim Halpert",
    "And I knew exactly what to do. But, in a much more real sense, I had no idea what to do. — Michael Scott",
    "I live by one rule: No office romances. No way. Very messy. Inappropriate. No. But, I live by another rule: Just do it… Nike. — Michael Scott",
    "Sometimes I feel like everyone I work with is an idiot. And by sometimes I mean all times. All the time. Every of the time! — Kevin Malone",
    "It’s true. Around this office in the past I have been a little abrupt with people. But the doctor said, if I can’t find a new way to relate more positively to my surroundings, I’m going to die. – Stanley Hudson",
    "Everything I have I owe to this job…this stupid, wonderful, boring, amazing job. – Jim Halpert",
    "I work hard all day. I like knowing that there’s going to be a break. Most days I just sit and wait for the break - Kevin Malone",
    "So this is my life. Until I win the lottery. Or Pam finally writes that series of young adult books. – Jim Halpert",
    "I don't wanna work. I just wanna bang on this mug all day. — Michael Scott",
]

let quirckyFacts = [
    "In the Schrute family, the youngest child raises the others. I’ve been raising children since I was a baby. – Dwight Schrute",
    "As it turns out, you can’t just check someone into rehab against their will. They have to do it voluntarily. - Michael Scott",
    "I am fast. To give you a reference point. I’m somewhere between a snake and a mongoose. - Dwight Schrute",
    "Dwight mercy-killed Angela’s cat. – Pam Beesley",
    "I normally don’t enjoy making people laugh. – Angela Martin",
    "A few years ago, my family was on a safari in Africa and my cousin, Mufasa, was um, he was trampled to death by a pack of wildebeests and um, we all took it really hard. – Ryan Howard",
    "Most people don’t even know that a candy cane represents a shepherd’s crook. Which I assure you does not taste like peppermint. It tastes like sheep feces. – Dwight Schrute",
    
]

let philosphyQuotes = [
    "I wish there was a way to know you’re in the good old days before you’ve actually left them. -Andy Bernard",
    "Look, it doesn’t take a genius to know that every organization thrives when it has two leaders. Go ahead, name a country that doesn’t have two presidents. A boat that sets sail without two captains. Where would Catholicism be without the popes? – Oscar Martinez",
    "I’m not superstitious, but I am a little stitious. – Michael Scott",
    "Me think, why waste time say lot word, when few word do trick.” – Kevin Malone",
    "And I feel God in this Chili’s tonight. – Pam Beesley",
    "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me. – Michael Scott",
    "The eyes are the groin of the face. - Dwight Schrute",
    "Life is short. Drive fast and leave a sexy corpse. That’s one of my mottos. - Stanley Hudson",
    "An office is for not dying. An office is a place to live life to the fullest, to the max, to… An office is a place where dreams come true. – Michael Scott",
    "In the end, the greatest snowball isn’t a snowball at all. It’s fear. Merry Christmas - Dwight Schrute",
    "Whenever I’m about to do something, I think, ‘Would an idiot do that?’ and if they would, I do not do that thing. - Dwight Schrute",
    "You only live once? False. You live every day. You only die once. - Dwight Schrute",

]

function newQuote() {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}
function funFacts() {
    let randomNumber = Math.floor(Math.random() * (quirckyFacts.length));
    document.getElementById("quoteDisplay").innerHTML = quirckyFacts[randomNumber];
}
function philosophy() {
    let randomNumber = Math.floor(Math.random() * (philosphyQuotes.length));
    document.getElementById("quoteDisplay").innerHTML = philosphyQuotes[randomNumber];
}
function relationships() {
    let randomNumber = Math.floor(Math.random() * (relationshipQuotes.length));
    document.getElementById("quoteDisplay").innerHTML = relationshipQuotes[randomNumber];
}
function work() {
    let randomNumber = Math.floor(Math.random() * (workLifeQuotes.length));
    document.getElementById("quoteDisplay").innerHTML = workLifeQuotes[randomNumber];
}