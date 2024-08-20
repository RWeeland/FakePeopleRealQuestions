const fakePerson = document.getElementById("fake-person");
const body = document.querySelector("body");
const container = document.getElementById("container")
const realQuestion = document.getElementById("real-question");  
const nextQuestion = document.getElementById("next-question");
const modeButton = document.getElementById("mode-button");
const modeImg = document.getElementById("mode-img")
const footer = document.querySelector("footer")
let light = false ;

const questions = [
    "How is my past impacting my current situation?",
    "What is something that needs to be brought to my awareness right now?",
    "What is something I need to be aware of moving forward?",
    "What area of my life requires more attention right now?",
    "What aspect of my life is taking up too much of my attention?",
    "Which lessons am I currently working through?",
    "How am I standing in my own way?",
    "Where am I playing small?",
    "Which of my strengths can I play on in my current situation?",
    "Where is fear holding me back?",
    "How can I tap into more alignment with myself?",
    "What does my soul need right now?",
    "What requires my conscious reflection right now?",
    "What shadow qualities within myself can I work with right now?",
    "Which themes are continually at play in my current situation?",
    "Which patterns or beliefs do I need to release?",
    "Is there something obvious I'm missing in my current situation?",
    "What is a step I can take toward my own well-being?",
    "How can I better accept or love myself?",
    "How can I be more honest with myself?",
    "Which aspects of my health need more attention?",
    "How am I neglecting my own health?",
    "How can I address a particular health problem?",
    "How can I prevent health problems going forward?",
    "What can I do to feel better daily?",
    "What can I do to mind my mental and emotional health?",
    "Which aspects of my life are zapping my well-being?",
    "Why am I experiencing a particular health problem?",
    "Why do I struggle to take care of myself?",
    "What am I doing right with regard to my health?",
    "How is a particular person or situation impacting my health?",
    "How can I make my environment more conducive to my health?",
    "What kind of healthy habits can I start adopting?",
    "What health issues am I ignoring or neglecting?",
    "How can I improve my mindset around health?",
    "Is there something I'm missing when it comes to my health?",
    "How can I mitigate stress?",
    "How can I feel more energized?",
    "What is a limiting belief I need to release for my own health and well-being?",
    "How am I showing up for my friends and family?",
    "In what ways can I show up better for them?",
    "What kinds of patterns are surfacing in my relationships with friends or family?",
    "Which person in my life could use my support right now?",
    "Which person in my life could I lean on for support?",
    "How can I distance myself from a toxic relationship?",
    "How can I best handle a conflict with a friend or family member?",
    "Why do I continuously have problems with a specific friend or family member?",
    "How can I strengthen my relationship with a specific friend or family member?",
    "How can I forge new connections and friendships?",
    "What do I value in friendships?",
    "How did my upbringing impact my childhood?",
    "How is my upbringing still impacting me today?",
    "How can I heal a wounded relationship with a friend or family member?",
    "How am I overextending or over-giving myself with friends or family?",
    "What is an ancestral wound that runs through my family?",
    "How can I heal generational trauma passed on to me?",
    "How is my past influencing my relationships with friends and family?",
    "How can I go about reconnecting with an estranged friend or relative?",
    "What do I need to know about my relationship with a particular friend or family member?",
    "What can I do to improve my current work or financial situation?",
    "Which aspect of my career or career path could I lean into more?",
    "Which aspect of my career or career path is draining me?",
    "What is my true purpose in terms of my career path?",
    "How can I tap into my true purpose?",
    "What are my greatest strengths?",
    "What are my greatest weaknesses?",
    "How can I improve my work relationships?",
    "How can I improve my work environment?",
    "Where is this career path leading me?",
    "What is a lesson around money and finances that I need to learn?",
    "How can I improve my financial situation?",
    "Where am I playing small in my career?",
    "What would be a positive course of action to move forward in my career?",
    "How can I achieve work-life balance?",
    "How can I tell if I'm on the right path?",
    "How can I achieve my next career or financial goal?",
    "How has my past influenced my current career path?",
    "How can I align my work with my life's mission?",
    "In which ways can I best serve the collective through my work?",
    "What needs more attention in my love life?",
    "How can I better show up for my partner?",
    "Which toxic relationship patterns am I unlearning or need to unlearn?",
    "How can I make steps toward finding a healthy relationship?",
    "What do I need to know to handle a current relationship conflict?",
    "Why am I currently single?",
    "What does my current relationship mean in the big picture of my life?",
    "Why am I continually running up against a certain relationship problem?",
    "How do my strengths serve my relationship?",
    "What is something I need to know in my relationships going forward?",
    "How can I overcome codependence?",
    "How can I get over my ex?",
    "How can I open my heart up to new love?",
    "In which ways can I learn to love a little harder?",
    "What about my past could be inhibiting current or future relationships?",
    "What is an important relationship lesson I need to learn?",
    "Where is there room for growth in my relationship?",
    "What do I really require from my partner or my next relationship?",
    "What went wrong with my past relationship?",
    "What needs to be addressed within myself in order to find love?"
];

const pickQuestion = ()=> Math.floor(Math.random() * questions.length +1);

const letLight = ()=> {
    if(light){
    body.classList.add("light-body");
    container.classList.add("light-container")
    nextQuestion.classList.add("light-button");
    modeImg.src = "./Media/dark_mode_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png"
    footer.classList.add("light-footer")
    } else{
        body.classList.remove("light-body");
    container.classList.remove("light-container")
    nextQuestion.classList.remove("light-button");
    footer.classList.remove("light-footer")
    modeImg.src = "./Media/light_mode_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png"
    }

}

modeButton.addEventListener("click", ()=>{
    if(light){
        light = false;
    } else{
         light = true;
    }
    letLight();
})

const generateQuestion = () =>{
    const newQuestion = questions[pickQuestion()];
    fakePerson.src = "https://www.thispersondoesnotexist.com/"
    setTimeout(()=>{realQuestion.innerText= newQuestion;}, "200" )
   

}

nextQuestion.addEventListener("click", generateQuestion)

generateQuestion()