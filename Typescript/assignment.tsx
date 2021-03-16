// A personality quiz-in typescript
// Name: Ishita Aggarwal (19030121039)(BCA DIV B 'sem 4')

// This is an array of objects that stores the personality trait that is prompted to the user and the weight for each prompt. 
// groups to make a count of question 

var prompts=[
        {
	ques: 'I find it difficult to introduce myself to people',
	class: 'group0'
},
{
	ques: 'I get so lost in my thoughts I ignore or forget my surroundings',
	class: 'group1'
},
{
	ques: 'I do not usually initiate conversations',
	class: 'group2'
},
{
	ques: 'I prefer not to engage with people who seem angry or upset',
	class: 'group3'
},
{
	ques: 'I choose my friends carefully',
	class: 'group4'
},
{
	ques: 'I find it difficult to tell stories about myself',
	class: 'group5'
},
{
	ques: 'I am usually highly motivated and energetic',
	class: 'group6'
},
{
	ques: 'I find it easy to walk up to a group of people and join in conversation',
	class: 'group7'
},
{
	ques: 'Being adaptable is more important than being organized',
	class: 'group8'
},
{
	ques: 'I care more about making sure no one gets upset than winning a debate',
	class: 'group9'
},
{
	ques: 'I often do not feel I have to justify myself to people',
	class: 'group10'
},
{
	ques: 'I would rather improvise than spend time coming up with a detailed plan',
	class: 'group11'
}

]

const hint = "Please type in the answer as 'yes', 'no' or 'neutral'"               //To let the user know what are the acceptable inputs

// If a personality trait is considered more introverted, it will have a negative weight.
// If a personlity trait is considered more extroverted, it will have a positive weight.


// This array stores all of the possible values and the weight associated with the value. 
// The stronger agreeance/disagreeance, the higher the weight on the user's answer to the prompt.

var prompt_values=[
   { value: 'yes',
    weight:5    },
     { value: 'no',
    weight:-5    },
     { value: 'neutral',
    weight:0    },
]
var totalScore = 0;									//Total score to calculate the weight of user's answers

var validAnswers = ['yes', 'no', 'neutral']						// descripting the acceptable answers


// For each prompt, create a list item to be inserted in the list group
var i = 0									
while(i<prompts.length){
	var ans = prompt(`${prompts[i].ques} \n\n ${hint}`)!			//displaying the question with the instruction of how to answer
	if(validAnswers.indexOf(ans)<0){
		alert("Wrong input choice. Please try again")				//Alert message if there is an invalid input
	}else{
		changeScore(ans)
		i++
	}
}
// Calculation will sum all of the answers to the prompts using weight of the value
function changeScore(ans:string){
	for(var i of prompt_values){
		if(ans == i.value){
			totalScore += i.weight
			break;
		}
	}
}

console.log(`Totale score = ${totalScore}`)   // displaying the total score

//Displaying results

if(totalScore<0)
console.log("You are an extrovert\n On the opposite side of the coin, people who are extroverted are energized by people. They usually enjoy spending time with others, as this is how they recharge from time spent alone focusing or working hard")

else if(totalScore>0)
console.log("you are an introvert\n Introverts are tricky to understand, since it’s so easy for us to assume that introversion is the same as being shy, when, in fact, introverts are simply people who find it tiring to be around other people")

else
 console.log("you are an ambivert!\n Since introverts and extroverts are the extremes of the scale, the rest of us fall somewhere in the middle. Many of us lean one way or the other, but there are some who are quite balanced between the two tendencies. These people are called ambiverts")