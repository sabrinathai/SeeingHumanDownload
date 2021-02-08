/*EXPERIENCESAMPLER LICENSE
The MIT License (MIT)
Copyright (c) 2014-2015 Sabrina Thai & Elizabeth Page-Gould
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*/

/* activate localStorage */
var localStore = window.localStorage;

/* surveyQuestion Model (This time, written in "JSON" format to interface more cleanly with Mustache) */
/* This is used to input the questions you would like to ask in your experience sampling questionnaire*/
var surveyQuestions = [
/*number each question in this variable starting from 0, so it is easy to reference question items when setting up question logic*/
                       /*0*/
                       /*snooze question, where selecting "No" snoozes the app for a predetermined amount of time*/
                       /*this is a multiple choice question*/
                       {
                       "type":"mult1",
                       "variableName": "snooze",
                       "questionPrompt": "Are you able to take the survey now?",
                       "minResponse": 0,
                       "maxResponse": 1,
                       "labels": [
                                {"label": "No"},
                                {"label": "Yes"}
                                ],
                       },
                       /*1*/
                       /*"instructions" or descriptive texts only need 3 properties. You simply need to type in your instructions
                       or descriptive texts in the questionPrompt section*/
                       {
                       "type":"link",
                       "variableName": "link1",
                       "questionPrompt": "Please click <a href='https://delaware.ca1.qualtrics.com/jfe/form/SV_3917d03iWr1fcAB?pid=PID&currentTask=SURVEYCOUNT' target='_blank'>HERE</a> to open your survey. <br /> Please return to the app <b>AFTER</b> completing the survey. <br /> <br /> <br /> <br />",
                       },
                       /*2*/
                       /*"instructions" or descriptive texts only need 3 properties. You simply need to type in your instructions
                       or descriptive texts in the questionPrompt section*/
                       {
                       "type":"link",
                       "variableName": "link2",
                       "questionPrompt": "Please click <a href=' https://delaware.ca1.qualtrics.com/jfe/form/SV_4PasaQGnMkWeYjb?pid=PID&currentTask=SURVEYCOUNT' target='_blank'>HERE</a> to open your survey. <br /> Please return to the app <b>AFTER</b> completing the survey. <br /> <br /> <br /> <br />",
                       },
                       /*3*/
                       /*"instructions" or descriptive texts only need 3 properties. You simply need to type in your instructions
                       or descriptive texts in the questionPrompt section*/
                       {
                       "type":"link",
                       "variableName": "link3",
                       "questionPrompt": "Please click <a href='https://delaware.ca1.qualtrics.com/jfe/form/SV_8ctYPUuq05xbFNH?pid=PID&currentTask=SURVEYCOUNT' target='_blank'>HERE</a> to open your survey. <br /> Please return to the app <b>AFTER</b> completing the survey. <br /> <br /> <br /> <br />",
                       },
                       /*4*/
                       /*"instructions" or descriptive texts only need 3 properties. You simply need to type in your instructions
                       or descriptive texts in the questionPrompt section*/
                       {
                       "type":"link",
                       "variableName": "link4",
                       "questionPrompt": "Please click <a href='https://delaware.ca1.qualtrics.com/jfe/form/SV_1WZCtiGIDY44xRb?pid=PID&currentTask=SURVEYCOUNT' target='_blank'>HERE</a> to open your survey. <br /> Please return to the app <b>AFTER</b> completing the survey. <br /> <br /> <br /> <br />",
                       },
                       /*5*/
                       /*"instructions" or descriptive texts only need 3 properties. You simply need to type in your instructions
                       or descriptive texts in the questionPrompt section*/
                       {
                       "type":"link",
                       "variableName": "link5",
                       "questionPrompt": "Please click <a href='https://delaware.ca1.qualtrics.com/jfe/form/SV_24fmFmqIZun0mLr?pid=PID&currentTask=SURVEYCOUNT' target='_blank'>HERE</a> to open your survey. <br /> Please return to the app <b>AFTER</b> completing the survey. <br /> <br /> <br /> <br />",
                       },
                       /*6*/
                       /*"instructions" or descriptive texts only need 3 properties. You simply need to type in your instructions
                       or descriptive texts in the questionPrompt section*/
                       {
                       "type":"link",
                       "variableName": "link6",
                       "questionPrompt": "Please click <a href='https://delaware.ca1.qualtrics.com/jfe/form/SV_4SC3BeDSdVh1uh7?pid=PID&currentTask=SURVEYCOUNT' target='_blank'>HERE</a> to open your survey. <br /> Please return to the app <b>AFTER</b> completing the survey. <br /> <br /> <br /> <br />",
                       }, 
                       /*7*/
                       /*"instructions" or descriptive texts only need 3 properties. You simply need to type in your instructions
                       or descriptive texts in the questionPrompt section*/
                       {
                       "type":"link",
                       "variableName": "link7",
                       "questionPrompt": "Please click <a href='https://delaware.ca1.qualtrics.com/jfe/form/SV_8BsDo6QA7g0O2Y5?pid=PID&currentTask=SURVEYCOUNT' target='_blank'>HERE</a> to open your survey. <br /> Please return to the app <b>AFTER</b> completing the survey. <br /> <br /> <br /> <br />",
                       },
                       /*8*/
                       /*"instructions" or descriptive texts only need 3 properties. You simply need to type in your instructions
                       or descriptive texts in the questionPrompt section*/
                       {
                       "type":"link",
                       "variableName": "link8",
                       "questionPrompt": "Please click <a href='https://delaware.ca1.qualtrics.com/jfe/form/SV_6YErfIqZ6VHl8vX?pid=PID&currentTask=SURVEYCOUNT' target='_blank'>HERE</a> to open your survey. <br /> Please return to the app <b>AFTER</b> completing the survey. <br /> <br /> <br /> <br />",
                       },
                       /*9*/
                       /*"instructions" or descriptive texts only need 3 properties. You simply need to type in your instructions
                       or descriptive texts in the questionPrompt section*/
                       {
                       "type":"link",
                       "variableName": "link9",
                       "questionPrompt": "Please click <a href='https://delaware.ca1.qualtrics.com/jfe/form/SV_50ykrTGeIaqmPKB?pid=PID&currentTask=SURVEYCOUNT' target='_blank'>HERE</a> to open your survey. <br /> Please return to the app <b>AFTER</b> completing the survey. <br /> <br /> <br /> <br />",
                       },
                       /*10*/
                       /*"instructions" or descriptive texts only need 3 properties. You simply need to type in your instructions
                       or descriptive texts in the questionPrompt section*/
                       {
                       "type":"link",
                       "variableName": "link10",
                       "questionPrompt": "Please click <a href='https://delaware.ca1.qualtrics.com/jfe/form/SV_9mht3uit1AgSEU5?pid=PID&currentTask=SURVEYCOUNT' target='_blank'>HERE</a> to open your survey. <br /> Please return to the app <b>AFTER</b> completing the survey. <br /> <br /> <br /> <br />",
                       },
                       /*11*/
                       /*"instructions" or descriptive texts only need 3 properties. You simply need to type in your instructions
                       or descriptive texts in the questionPrompt section*/
                       {
                       "type":"link",
                       "variableName": "link11",
                       "questionPrompt": "Please click <a href='https://delaware.ca1.qualtrics.com/jfe/form/SV_7866PsoaEwh8GGx?pid=PID&currentTask=SURVEYCOUNT' target='_blank'>HERE</a> to open your survey. <br /> Please return to the app <b>AFTER</b> completing the survey. <br /> <br /> <br /> <br />",
                       },
                       /*12*/
                       /*"instructions" or descriptive texts only need 3 properties. You simply need to type in your instructions
                       or descriptive texts in the questionPrompt section*/
                       {
                       "type":"link",
                       "variableName": "link12",
                       "questionPrompt": "Please click <a href='https://delaware.ca1.qualtrics.com/jfe/form/SV_dgsBObN5OCYUGod?pid=PID&currentTask=SURVEYCOUNT' target='_blank'>HERE</a> to open your survey. <br /> Please return to the app <b>AFTER</b> completing the survey. <br /> <br /> <br /> <br />",
                       },
                       /*13*/
                       /*"instructions" or descriptive texts only need 3 properties. You simply need to type in your instructions
                       or descriptive texts in the questionPrompt section*/
                       {
                       "type":"link",
                       "variableName": "link13",
                       "questionPrompt": "Please click <a href='https://delaware.ca1.qualtrics.com/jfe/form/SV_djxQzaiA49R3dLn?pid=PID&currentTask=SURVEYCOUNT' target='_blank'>HERE</a> to open your survey. <br /> Please return to the app <b>AFTER</b> completing the survey. <br /> <br /> <br /> <br />",
                       },
                       /*14*/
                       /*"instructions" or descriptive texts only need 3 properties. You simply need to type in your instructions
                       or descriptive texts in the questionPrompt section*/
                       {
                       "type":"link",
                       "variableName": "link14",
                       "questionPrompt": "Please click <a href='https://delaware.ca1.qualtrics.com/jfe/form/SV_0wHxM6NucCNKG0Z?pid=PID&currentTask=SURVEYCOUNT' target='_blank'>HERE</a> to open your survey. <br /> Please return to the app <b>AFTER</b> completing the survey. <br /> <br /> <br /> <br />",
                       },
                       /*15*/
                       /*"instructions" or descriptive texts only need 3 properties. You simply need to type in your instructions
                       or descriptive texts in the questionPrompt section*/
                       {
                       "type":"link",
                       "variableName": "link15",
                       "questionPrompt": "Please click <a href='https://delaware.ca1.qualtrics.com/jfe/form/SV_38cC6gvtaWOEOGN?pid=PID&currentTask=SURVEYCOUNT' target='_blank'>HERE</a> to open your survey. <br /> Please return to the app <b>AFTER</b> completing the survey. <br /> <br /> <br /> <br />",
                       }, 
                       /*16*/
                       {
                       "type":"instructions",
                       "variableName": "studyHasntStarted",
                       "questionPrompt": "This study has not started yet. Please wait until you receive a notification before launching the app. ",
                       }, 
                       /*17*/
                       {
                       "type":"instructions",
                       "variableName": "studyEnded",
                       "questionPrompt": "The study has now finished. You can now delete the app, but we would advise you to keep it until you have received your payment. ",
                       },
                       /*18*/
                       {
                       "type":"instructions",
                       "variableName": "noSurveyAvailable",
                       "questionPrompt": "It is not time for you to complete a survey now. Please wait until your next notification.",
                       },
                       /* 19 */
                       {
                       "type":"instructions",
                       "variableName": "duplicate",
                       "questionPrompt": "Thank you for completing your survey today! <br /><br />If you have just received a notification to complete another survey, please quit the app and then re-launch it. This will allow you to take the survey.<br /><br />",
                       },
                       /* 20 */
                       {
                       "type":"mult1",
                       "variableName": "goBack",
                       "questionPrompt": "Did you accidentally skip the survey link? <br /><br />Click <b>YES</b> to go back to your survey link page.",
                       "minResponse": 0,
                       "maxResponse": 1,
                       "labels": [
                                {"label": "No"},
                                {"label": "Yes"}
                                ],
                       },                                                                                                                                                                                      
                       ];

/*These are the messages that are displayed at the end of the questionnaire*/
var lastPage = [
				/*0*/
                {
                "message": "Thank you for completing your questionnaire. "
                },
                /*1*/
                {
                "message": "That's cool! I'll notify you again in 10 minutes. "
                },
                /*2*/
                {
                "message": "Thank you for installing our app. Please wait while the data is sent to our servers..."
                },
				/*3*/
				{
                "message": "Thank you for your interest in our study. Unfortunately, our app is incompatible with your phone, so you CANNOT participate in our study. We apologize for the inconvenience. "
                },
                /*4*/
                {
                "message": "Please check back later. "                
                },
                /*5*/
                {
                "message": "The study has finished. "                
                }
                ];

/*Questions to set up participant notifications so that notifications are customized to participant's schedule*/                
var participantSetup = [
						/* -9 */
                        {
						"type":"text",
						"variableName": "participant_id",
						"questionPrompt": "Please enter your MTurk ID:"
                        },
						/* -8 */
						{
                       	"type":"mult1",
                       	"variableName":"osType",
                       	"questionPrompt":"What type of device do you have?",
                       	"minResponse":0,
                       	"maxResponse":1,
                       	"labels": [
                       		{"label":"iPhone or Other Apple Device"},
                       		{"label":"Android Phone or Android Device"}
                       	]
                       	},                        
                        /* -7 */
                        {
						"type":"mult1",
						"variableName": "testNotification",
						"questionPrompt": "Next, we will test whether the notification system is working on your phone. Please click the button below to test the notification system. You will receive a notification in two seconds. If you see the notification, do <b>NOT</b> click on it. Clicking on it will interrupt your app setup. ",
						"minResponse": 1,
                       	"maxResponse": 1,
                       	"labels": [
                                {"label": "Test notification now"},
                        ]
                       	},                       
                       	/* -6 */
                       	{
                       	"type":"mult1",
                       	"variableName":"notificationWorked",
                       	"questionPrompt":"Did you receive the test notification?",
                       	"minResponse":0,
                       	"maxResponse":1,
                       	"labels": [
                       		{"label":"No"},
                       		{"label":"Yes"}
                       	]
                       	},
                       	/* -5 */
						{
                       	"type":"instructions",
                       	"variableName":"notificationFail",
                       	"questionPrompt":"It looks like your notification system is not working. You are ineligible to participate in our study. ",
                       	},
                       	/* -4 */
						{
						"type":"timePicker",
						"variableName": "weekdayWakeTime",
						"questionPrompt": "<b>What time do you normally wake up on weekdays?</b> <br /><br /> Please make sure this time is entered correctly. <br />(i.e., If you wake up in the morning, please make sure the time entered says AM). "
                        },
						/* -3 */
						{
						"type":"timePicker",
						"variableName": "weekdaySleepTime",
						"questionPrompt": "<b>What time do you normally sleep on weekdays?</b> <br /><br /> Please make sure this time is entered correctly. <br />(i.e., If you go to sleep at night, please make sure the time entered says PM). <br /><br />If you go to sleep after midnight, please enter 11:59PM. "
                        },
                        /* -2 */                        
						{
						"type":"timePicker",
						"variableName": "weekendWakeTime",
						"questionPrompt": "<b>What time do you normally wake up on weekends?</b> <br /><br /> Please make sure this time is entered correctly. <br />(i.e., If you wake up in the morning, please make sure the time entered says AM). "
                        },
                        /* -1 */
						{
						"type":"timePicker",
						"variableName": "weekendSleepTime",
						"questionPrompt": "<b>What time do you normally go to sleep on weekends?</b> <br /><br /> Please make sure this time is entered correctly. <br />(i.e., If you go to sleep at night, please make sure the time entered says PM). <br /><br />If you go to sleep after midnight, please enter 11:59PM."
                        }              
                    ];

/*Populate the view with data from surveyQuestion model*/
// Making mustache templates
//This line determines the number of questions in your participant setup
//Shout-out to Rebecca Grunberg for this great feature!
var NUMSETUPQS = participantSetup.length;
//This line tells ExperienceSampler which question in surveyQuestions is the snooze question
//If you choose not to use the snooze option, just comment it out
var SNOOZEQ = 0;
//This section of code creates the templates for all the question formats
var questionTmpl = "<p>{{{questionText}}}</p><ul>{{{buttons}}}</ul>";
var questionTextTmpl = "{{{questionPrompt}}}";
var buttonTmpl = "<li><button id='{{id}}' value='{{value}}'>{{label}}</button></li>";
var textTmpl = "<li><textarea cols=50 rows=5 id='{{id}}'></textarea></li><li><button type='submit' value='Enter'>Enter</button></li>";
var numberTmpl = "<li><input type='number' id='{{id}}'></input></li><br/><br/><li></li><li><button type='submit' value='Enter'>Enter</button></li>";
var checkListTmpl =  "<li><input type='checkbox' id='{{id}}' value='{{value}}'>{{label}}</input></li>";
var instructionTmpl = "<li><button id='{{id}}' value = 'Next'>Next</button></li>";
var linkTmpl = "<li><button id='{{id}}' value = 'Next'>Click here AFTER finishing the survey in the link above</button></li>";
var sliderTmpl = "<li><input type='range' min='{{min}}' max='{{max}}' value='{{value}}' orient=vertical id='{{id}}' oninput='outputUpdate(value)'></input><output for='{{id}}' id='slider'>50</output><script>function outputUpdate(slidervalue){document.querySelector('#slider').value=slidervalue;}</script></li><li><button type='submit' value='Enter'>Enter</button></li>";
var datePickerTmpl = '<li><input id="{{id}}" data-format="DD-MM-YYYY" data-template="D MMM YYYY" name="date"><br /><br /></li><li><button type="submit" value="Enter">Enter</button></li><script>$(function(){$("input").combodate({firstItem: "name",minYear:2015, maxYear:2016});});</script>';
var dateAndTimePickerTmpl = '<li><input id="{{id}}" data-format="DD-MM-YYYY-HH-mm" data-template="D MMM YYYY  HH:mm" name="datetime24"><br /><br /></li><li><button type="submit" value="Enter">Enter</button></li><script>$(function(){$("input").combodate({firstItem: "name",minYear:2015, maxYear:2016});});</script>';
var timePickerTmpl = "<li><input id ='{{id}}' type='time'></input><br /><br /></li><li><button type='submit' value='Enter'>Enter</button></li>";
var lastPageTmpl = "<h3>{{message}}</h3>";
//This line generates the unique key variable. You will not assign the value here, because you want it the value to change
//with each new questionnaire
var uniqueKey;
//If you need to declare any other global variables (i.e., variables to be used in more than one function of ExperienceSampler)
//you should declare them here. 
//For example, you might declare your piped text variable or your question branch response variable
//var name /*sample piped text variable*/
var surveyCount;
var order = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; 
var order2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; 
var notifications = [];
var currentSurvey, nextSurvey, missing; 
var completedSurveys = []; 

var app = {
    // Application Constructor
initialize: function() {
    this.bindEvents();
},
    // Bind Event Listeners
bindEvents: function() {
    document.addEventListener("deviceready", this.onDeviceReady, false);
    document.addEventListener("resume", this.onResume, false);
    document.addEventListener("pause", this.onPause, false);
},
//these functions tell the app what to do at different stages of running
onDeviceReady: function() {
    app.init();
},

onResume: function() {app.sampleParticipant();},

onPause: function() {app.pauseEvents();},

//Beginning our app functions
/* The first function is used to specify how the app should display the various questions. You should note which questions 
should be displayed using which formats before customizing this function*/
renderQuestion: function(question_index) {
    //First load the correct question from the JSON database
	var question;
    if (question_index <= -1) {question = participantSetup[question_index + NUMSETUPQS];}
    else {question = surveyQuestions[question_index];}
    var questionPrompt = question.questionPrompt;
    //If you want to include piped text in your question wording, you would implement it in this section. 
    //Below is an example of how you would look for the NAME placeholder in your surveyQuestion questionPrompts 
    //and replace it with the response value that you assign to the name variable
    //See our example app to see how you can implement this
	if (questionPrompt.indexOf('PID') >= 0) {
		questionPrompt = questionPrompt.replace("PID", function replacer() {return localStore.participant_id;});
      	}
    if (questionPrompt.indexOf('SURVEYCOUNT') >= 0) {
		questionPrompt = questionPrompt.replace("SURVEYCOUNT", function replacer() {return localStore.surveyCount;});
      	}  	
    question.questionText = Mustache.render(questionTextTmpl, {questionPrompt: questionPrompt});    
    //Now populate the view for this question, depending on what the question type is
    //This part of the function will render different question formats depending on the type specified
    //Another shout-out to Rebecca Grunberg for this amazing improvement to ExperienceSampler
    switch (question.type) {
    	case 'mult1': // Rating scales (i.e., small numbers at the top of the screen and larger numbers at the bottom of the screen).
    		question.buttons = "";
        	var label_count = 0;
        	for (var i = question.minResponse; i <= question.maxResponse; i++) {
            	var label = question.labels[label_count++].label;
            	//If you want to implement piped text in your wording choice, you would place it here
    			//Below is an example of how you would look for the NAME placeholder in your surveyQuestion labels 
    			//and replace it with 
//                 if (label.indexOf('NAME') >= 0){
//             		label = label.replace("NAME", function replacer() {return name;});
//             		}            	
            	question.buttons += Mustache.render(buttonTmpl, {
                                                id: question.variableName+i,
                                                value: i,
                                                label: label
                                                });
        	}
        	$("#question").html(Mustache.render(questionTmpl, question)).fadeIn(400);
        	$("#question ul li button").click(function(){
        		app.recordResponse(this, question_index, question.type);
        	});
        	break;
        case 'mult2': // Rating scales (i.e., positive numbers at the top of the screen and negative numbers at the bottom of the screen).
    		question.buttons = "";
            var label_count = 0;
            for (var j = question.maxResponse; j >= question.minResponse; j--) {
                var label = question.labels[label_count++].label;
//                 if (label.indexOf('NAME') >= 0){
//             		label = label.replace("NAME", function replacer() {return name;});
//             		}
                question.buttons += Mustache.render(buttonTmpl, {
                                                    id: question.variableName+j,
                                                    value: j,
                                                    label: label
                                                    });
            }
        	$("#question").html(Mustache.render(questionTmpl, question)).fadeIn(400);
        	$("#question ul li button").click(function(){
        		app.recordResponse(this, question_index, question.type);
        	});
        	break;		
        case 'checklist':  
        	question.buttons = "";
        	var label_count = 0;
        	var checkboxArray = [];
        	for (var i = question.minResponse; i <= question.maxResponse; i++) {
            	var label = question.labels[label_count++].label;
            	if (label.indexOf('NAME') >= 0){
            		label = label.replace("NAME", function replacer() {return name;});
            		}
            	question.buttons += Mustache.render(checkListTmpl, {
                                                	id: question.variableName+i,
                                                	value: i,
                                                	label: label
                                                	});
        	}
        	question.buttons += "<li><button type='submit' value='Enter'>Enter</button></li>";
        	$("#question").html(Mustache.render(questionTmpl, question)).fadeIn(400);
        	$("#question ul li button").click( function(){
                                          checkboxArray.push(question.variableName);
                                          $.each($("input[type=checkbox]:checked"), function(){checkboxArray.push($(this).val());});
                                          app.recordResponse(String(checkboxArray), question_index, question.type);
            });
            break;
        case 'slider':
        	question.buttons = Mustache.render(sliderTmpl, {id: question.variableName+"1"}, {min: question.minResponse}, {max: question.maxResponse}, {value: (question.maxResponse)/2});
        	$("#question").html(Mustache.render(questionTmpl, question)).fadeIn(400);
        	var slider = [];
        	$("#question ul li button").click(function(){
        			slider.push(question.variableName);
        			slider.push($("input[type=range]").val());
        			app.recordResponse(String(slider), question_index, question.type);
        	});
        	break;
        case 'instructions':
        	question.buttons = Mustache.render(instructionTmpl, {id: question.variableName+"1"});
        	$("#question").html(Mustache.render(questionTmpl, question)).fadeIn(400);
        	var instruction = [];
        	$("#question ul li button").click(function(){ 
        		instruction.push(question.variableName);
        		instruction.push($(this).val());
        		app.recordResponse(String(instruction), question_index, question.type);
        	});
        	break;
		case 'link':
        	question.buttons = Mustache.render(linkTmpl, {id: question.variableName+"1"});
        	$("#question").html(Mustache.render(questionTmpl, question)).fadeIn(400);
        	var link = [];
        	$("#question ul li button").click(function(){ 
        		link.push(question.variableName);
        		link.push($(this).val());
        		app.recordResponse(String(link), question_index, question.type);
        	});
        	break;         
        case 'text': //default to open-ended text
        	question.buttons = Mustache.render(textTmpl, {id: question.variableName+"1"});
        	$("#question").html(Mustache.render(questionTmpl, question)).fadeIn(400);
        	$("#question ul li button").click(function(){
				//If you want to force a response from your participants for 
				//open-ended questions, you should uncomment this portion of the code
// 				if (app.validateResponse($("textarea"))){
        		 	app.recordResponse($("textarea"), question_index, question.type);
//                 } 
//                 else {
//                     alert("Please enter something.");
//                 }
            });
            break;        
	    case 'number': //default to open-ended text
        	question.buttons = Mustache.render(numberTmpl, {id: question.variableName+"1"});
        	$("#question").html(Mustache.render(questionTmpl, question)).fadeIn(400);
        	$("#question ul li button").click(function(){
				//If you want to force a response from your participants for 
				//open-ended questions, you should uncomment this portion of the code
				if (app.validateNumber($("input"))){
        		 	app.recordResponse($("input"), question_index, question.type);
                } 
                else {
                    alert("Please enter a number.");
                }
            });
            break; 
		    
        case 'datePicker':
        	question.buttons = Mustache.render(datePickerTmpl, {id: question.variableName+"1"});
        	$("#question").html(Mustache.render(questionTmpl, question)).fadeIn(400);
        	var date, dateSplit, variableName = [], dateArray = [];
        	$("#question ul li button").click(function(){
        		date = $("input").combodate('getValue');
        		dateArray.push(question.variableName);
        		dateArray.push(date);
        		app.recordResponse(String(dateArray), question_index, question.type);
        	});
        	break;    
        case 'dateAndTimePicker':
        	question.buttons = Mustache.render(dateAndTimePickerTmpl, {id: question.variableName+"1"});
        	$("#question").html(Mustache.render(questionTmpl, question)).fadeIn(400);
        	var date, dateSplit, variableName = [], dateArray = [];
        	$("#question ul li button").click(function(){
        		date = $("input").combodate('getValue');
        		dateArray.push(question.variableName);
        		dateArray.push(date);
        		app.recordResponse(String(dateArray), question_index, question.type);
        	});
        	break;
        case 'timePicker':
        	question.buttons = Mustache.render(timePickerTmpl, {id: question.variableName+"1"});
        	$("#question").html(Mustache.render(questionTmpl, question)).fadeIn(400);
        	var time, timeSplit, variableName = [], timeArray = [];
        	$("#question ul li button").click(function(){
				if (app.validateTime($("input"))){
        		 	app.recordResponse($("input"), question_index, question.type);
                } 
                else {
                    alert("Please enter a time.");
                }
        	});
        	break;	        		                 
        }
    },
    
renderLastPage: function(pageData, question_index) {
    $("#question").html(Mustache.render(lastPageTmpl, pageData));
//     alert("localStore.surveyCount is " + localStore.surveyCount);
	//This section should be implemented if you choose to use a snooze feature
	//It tells ExperienceSampler that if the participant has chosen to snooze the app,
	//the app should save a snooze value of 1 (this value will be used to reset the unique key, so that
	//this data is does not have the same unique key as the subsequent questionnaire)
    if ( question_index == SNOOZEQ ) {
        app.snoozeNotif();
        localStore.snoozed = 1;
        app.saveData();        
    }
    //If you choose to implement the snooze function, uncomment the else in the statement below
    else if ( question_index == -1) {
    	app.saveDataInstallationLastPage();
//     	alert("I'm saving data");
    }
    //This part of the code says that if the participant has completed the entire questionnaire,
    //ExperienceSampler should create a completed tag for it.
    //This tag will be used to count the number of completed questionnaires participants have completed
    //at the end of each day
    //The time stamp created here will also be used to create an end time for your restructured data
else if (question_index > SNOOZEQ && question_index == 20){
    	var datestamp = new Date();
    	var year = datestamp.getFullYear(), month = datestamp.getMonth(), day=datestamp.getDate(), hours=datestamp.getHours(), minutes=datestamp.getMinutes(), seconds=datestamp.getSeconds(), milliseconds=datestamp.getMilliseconds();
    	localStore[uniqueKey + '.' + "completed" + "_" + "completedSurvey"  + "_" + year + "_" + month + "_" + day + "_" + hours + "_" + minutes + "_" + seconds  + "_" + milliseconds] = 1;	
        localStore.surveyCount++;
        // may need to transform this into array. 
        var completedSurveysString = localStore.completedSurveys; 
        completedSurveysString = completedSurveysString.split(",")
       	completedSurveysString.push(currentSurvey); 
       	localStore.completedSurveys = completedSurveysString; 
        localStore[uniqueKey + "_" + "completedSurveys"  + "_" + year + "_" + month + "_" + day + "_" + hours + "_" + minutes + "_" + seconds  + "_" + milliseconds] = completedSurveysString;	
        //var orderArray = localStore.order;
    	//orderArray = orderArray.split(",");
    	if (hours == 0) {
    		localStore.completeDate = datestamp.getTime();
    	}
    	else {
    		localStore.completeDate = datestamp.getTime();
//     		alert("localStore.completeDate is " + localStore.completeDate);
    	}
    	app.saveDataLastPage();
//     	alert("I'm saving data");
//         alert("survey count is " + localStore.surveyCount);
		
    }
    else {
        app.saveData();
    }
},

/* Initialize the whole thing */
init: function() {
	//First, we assign a value to the unique key when we initialize ExperienceSampler
	uniqueKey = new Date().getTime();
// 	uniqueKey = 1559760026827; 
	//The statement below states that if there is no participant id or if the participant id is left blank,
	//ExperienceSampler would present the participant set up questions
	if (localStore.participant_id === " " || !localStore.participant_id || localStore.participant_id == "undefined") {app.renderQuestion(-NUMSETUPQS);}  
	//otherwise ExperienceSampler should just save the unique key and display the first question in survey questions  
	if (localStore.surveyCount === "" || !localStore.surveyCount || localStore.surveyCount == "undefined" || isNaN(localStore.surveyCount)==true){localStore.surveyCount = 0;}
	else {
    	uniqueKey = new Date().getTime();
//     	uniqueKey = 1559760026827; 
//     	alert("unique key is " + uniqueKey); 
        localStore.uniqueKey = uniqueKey;
    	var startTime = new Date(uniqueKey);
    	var syear = startTime.getFullYear(), smonth = startTime.getMonth(), sday=startTime.getDate(), shours=startTime.getHours(), sminutes=startTime.getMinutes(), sseconds=startTime.getSeconds(), smilliseconds=startTime.getMilliseconds();
    	localStore[uniqueKey + "_" + "startTime"  + "_" + syear + "_" + smonth + "_" + sday + "_" + shours + "_" + sminutes + "_" + sseconds + "_" + smilliseconds] = 1;
        var notificationString = localStore.notifications; 
    	if (notificationString != undefined){
    		var notificationArray = notificationString.split(",");
    	}
    	var orderString = localStore.order;
    	if (orderString != undefined){
    		var orderArray = orderString.split(",");
    	}
    	var completedString = localStore.completedSurveys;
    	if (completedString != undefined){
    		var completedArray = completedString.split(",");
    	} 
    	// in the first 15 notifications, make sure all 15 have been presented at least once
    	// order array only contains numbers 1-15 once 
    	var missing1 = order.filter((i => a => a !== completedArray[i] || !++i)(0));
    	// in the next 15, make sure all 15 have been presented twice
    	// orderArray contains number 1-15 twice
    	var missing2 = orderArray.filter((i => a => a !== completedArray[i] || !++i)(0));
// 		alert("complete date is " + localStore.completeDate);  		
//     	alert("notificationArray[0] is " + notificationArray[0]);
//     	alert("orderArray[0] is " + orderArray[0]);	
//     	alert("notificationArray[1] is " + notificationArray[1]);
//     	alert("orderArray[1] is " + orderArray[1]);	    
//     	alert("uniqueKey is " + uniqueKey);	
//     	alert("notificationArray[0] + 5400000 is " + (Number(notificationArray[0]) + 5400000));
// 		alert("localStore.surveyCount is " + localStore.surveyCount); 		
        var today = new Date().getTime();
//         alert("today is " + today);
//         alert("today is " + today + " is " + typeof(today));
//         alert(Number(notificationArray[2])  + " is " +  typeof(Number(notificationArray[2])));
//         alert(Number(notificationArray[3])  + " is " +  typeof(Number(notificationArray[3])));
//         alert(Number(localStore.completeDate) + " is " +  typeof(Number(localStore.completeDate)));
        // already completed survey
        if (uniqueKey < notificationArray[0]) {
        	app.renderQuestion(16);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[0]) && today < Number(notificationArray[1])) {
        		app.renderQuestion(19);
        }
        else if (uniqueKey >= notificationArray[0] && uniqueKey <= (Number(notificationArray[0]) + 10800000)){
        	currentSurvey = orderArray[0];
        	nextSurvey = orderArray[0+1]; 
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[1]) && today < Number(notificationArray[2])) {
        		app.renderQuestion(19);
        }        
        else if (uniqueKey >= notificationArray[1] && uniqueKey <= (Number(notificationArray[1]) + 10800000)){
        	currentSurvey = orderArray[1];
        	nextSurvey = orderArray[1 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[2]) && today < Number(notificationArray[3])) {
        		app.renderQuestion(19);
        }   
        else if (uniqueKey >= notificationArray[2] && uniqueKey <= (Number(notificationArray[2]) + 10800000)){
	       	currentSurvey = orderArray[2];
	       	nextSurvey = orderArray[2 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }     
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[3]) && today < Number(notificationArray[4])) {
        		app.renderQuestion(19);
        }
        else if (uniqueKey >= notificationArray[3] && uniqueKey <= (Number(notificationArray[3]) + 10800000)){
        	currentSurvey = orderArray[3];
        	nextSurvey = orderArray[3 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[4]) && today < Number(notificationArray[5])) {
        		app.renderQuestion(19);
        }          
        else if (uniqueKey >= notificationArray[4] && uniqueKey <= (Number(notificationArray[4]) + 10800000)){
        	currentSurvey = orderArray[4];
        	nextSurvey = orderArray[4 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[5]) && today < Number(notificationArray[6])) {
        		app.renderQuestion(19);
        }          
        else if (uniqueKey >= notificationArray[5] && uniqueKey <= (Number(notificationArray[5]) + 10800000)){
        	currentSurvey = orderArray[5];
        	nextSurvey = orderArray[5 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[6]) && today < Number(notificationArray[7])) {
        		app.renderQuestion(19);
        }         
        else if (uniqueKey >= notificationArray[6] && uniqueKey <= (Number(notificationArray[6]) + 10800000)){
        	currentSurvey = orderArray[6];
        	nextSurvey = orderArray[6 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[7]) && today < Number(notificationArray[8])) {
        		app.renderQuestion(19);
        }       
        else if (uniqueKey >= notificationArray[7] && uniqueKey <= (Number(notificationArray[7]) + 10800000)){
        	currentSurvey = orderArray[7];
        	nextSurvey = orderArray[7 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[8]) && today < Number(notificationArray[9])) {
        		app.renderQuestion(19);
        }        
        else if (uniqueKey >= notificationArray[8] && uniqueKey <= (Number(notificationArray[8]) + 10800000)){
        	currentSurvey = orderArray[8];
        	nextSurvey = orderArray[8 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[9]) && today < Number(notificationArray[10])) {
        		app.renderQuestion(19);
        }       
        else if (uniqueKey >= notificationArray[9] && uniqueKey <= (Number(notificationArray[9]) + 10800000)){
        	currentSurvey = orderArray[9];
        	nextSurvey = orderArray[9 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[10]) && today < Number(notificationArray[11])) {
        		app.renderQuestion(19);
        }             
        else if (uniqueKey >= notificationArray[10] && uniqueKey <= (Number(notificationArray[10]) + 10800000)){
        	currentSurvey = orderArray[10];
        	nextSurvey = orderArray[10 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[11]) && today < Number(notificationArray[12])) {
        		app.renderQuestion(19);
        }    
        else if (uniqueKey >= notificationArray[11] && uniqueKey <= (Number(notificationArray[11]) + 10800000)){
        	currentSurvey = orderArray[11];
        	nextSurvey = orderArray[11 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[12]) && today < Number(notificationArray[13])) {
        		app.renderQuestion(19);
        }       
        else if (uniqueKey >= notificationArray[12] && uniqueKey <= (Number(notificationArray[12]) + 10800000)){
        	currentSurvey = orderArray[12];
        	nextSurvey = orderArray[12 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[13]) && today < Number(notificationArray[14])) {
        		app.renderQuestion(19);
        }        
        else if (uniqueKey >= localStore.notifications[13] && uniqueKey <= (Number(notificationArray[13]) + 10800000)){
        	currentSurvey = orderArray[13];
        	nextSurvey = orderArray[13 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[14]) && today < Number(notificationArray[15])) {
        		app.renderQuestion(19);
        }        
        else if (uniqueKey >= notificationArray[14] && uniqueKey <= (Number(notificationArray[14]) + 10800000)){
        	currentSurvey = orderArray[14];
        	nextSurvey = orderArray[14 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[15]) && today < Number(notificationArray[16])) {
        		app.renderQuestion(19);
        }        
        else if (uniqueKey >= notificationArray[15] && uniqueKey <= (Number(notificationArray[15]) + 10800000)){
        	currentSurvey = orderArray[15];
        	nextSurvey = orderArray[15 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[16]) && today < Number(notificationArray[17])) {
        		app.renderQuestion(19);
        }        
        else if (uniqueKey >= notificationArray[16] && uniqueKey <= (Number(notificationArray[16]) + 10800000)){
        	currentSurvey = orderArray[16];
        	nextSurvey = orderArray[16 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[17]) && today < Number(notificationArray[18])) {
        		app.renderQuestion(19);
        }        
        else if (uniqueKey >= notificationArray[17] && uniqueKey <= (Number(notificationArray[17]) + 10800000)){
        	currentSurvey = orderArray[17];
        	nextSurvey = orderArray[17 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[18]) && today < Number(notificationArray[19])) {
        		app.renderQuestion(19);
        }       
        else if (uniqueKey >= notificationArray[18] && uniqueKey <= (Number(notificationArray[18]) + 10800000)){
        	currentSurvey = orderArray[18];
        	nextSurvey = orderArray[18 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[19]) && today < Number(notificationArray[20])) {
        		app.renderQuestion(19);
        }          
        else if (uniqueKey >= notificationArray[19] && uniqueKey <= (Number(notificationArray[19]) + 10800000)){
        	currentSurvey = orderArray[19];
        	nextSurvey = orderArray[19 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[20]) && today < Number(notificationArray[21])) {
        		app.renderQuestion(19);
        }           
        else if (uniqueKey >= notificationArray[20] && uniqueKey <= (Number(notificationArray[20]) + 10800000)){
        	currentSurvey = orderArray[20];
        	nextSurvey = orderArray[20 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[21]) && today < Number(notificationArray[22])) {
        		app.renderQuestion(19);
        }         
        else if (uniqueKey >= notificationArray[21] && uniqueKey <= (Number(notificationArray[21]) + 10800000)){
        	currentSurvey = orderArray[21];
        	nextSurvey = orderArray[21 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[22]) && today < Number(notificationArray[23])) {
        		app.renderQuestion(19);
        }          
        else if (uniqueKey >= notificationArray[22] && uniqueKey <= (Number(notificationArray[22]) + 10800000)){
        	currentSurvey = orderArray[22];
        	nextSurvey = orderArray[22 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[23]) && today < Number(notificationArray[24])) {
        		app.renderQuestion(19);
        }          
        else if (uniqueKey >= notificationArray[23] && uniqueKey <= (Number(notificationArray[23]) + 10800000)){
        	currentSurvey = orderArray[23];
        	nextSurvey = orderArray[23 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[24]) && today < Number(notificationArray[25])) {
        		app.renderQuestion(19);
        }          
        else if (uniqueKey >= notificationArray[24] && uniqueKey <= (Number(notificationArray[24]) + 10800000)){
        	currentSurvey = orderArray[24];
        	nextSurvey = orderArray[24 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[25]) && today < Number(notificationArray[26])) {
        		app.renderQuestion(19);
        }          
        else if (uniqueKey >= notificationArray[25] && uniqueKey <= (Number(notificationArray[25]) + 10800000)){
        	currentSurvey = orderArray[25];
        	nextSurvey = orderArray[25 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[26]) && today < Number(notificationArray[27])) {
        		app.renderQuestion(19);
        }           
        else if (uniqueKey >= notificationArray[26] && uniqueKey <= (Number(notificationArray[26]) + 10800000)){
        	currentSurvey = orderArray[26];
        	nextSurvey = orderArray[26 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[27]) && today < Number(notificationArray[28])) {
        		app.renderQuestion(19);
        }        
        else if (uniqueKey >= notificationArray[27] && uniqueKey <= (Number(notificationArray[27]) + 10800000)){
        	currentSurvey = orderArray[27];
        	nextSurvey = orderArray[27 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[28]) && today < Number(notificationArray[29])) {
        		app.renderQuestion(19);
        }         
        else if (uniqueKey >= notificationArray[28] && uniqueKey <= (Number(notificationArray[28]) + 10800000)){
        	currentSurvey = orderArray[28];
        	nextSurvey = orderArray[28 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }              
        else if (Number(uniqueKey) >= Number(notificationArray[29]) && uniqueKey <= (Number(notificationArray[29]) + Number(10800000))){
        	currentSurvey = orderArray[29];
        	nextSurvey = orderArray[29 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (Number(uniqueKey) > (Number(notificationArray[29]) + Number(10800000))){
        	app.renderQuestion(17);
        }
        else if (today > Number(localStore.completeDate) && today > Number(notificationArray[29])) {
        		app.renderQuestion(17);
        }                    
        else {
        	app.renderQuestion(18);
        }
    }
    localStore.snoozed = 0;
//     alert ("currentSurvey is " + currentSurvey);
},
  
/* Record User Responses */  
recordResponse: function(button, count, type) {
		//uncomment up to "localStore[uniqueRecord] = response;" to test whether app is recording and sending data correctly (Stage 2 of Customization)
		//This tells ExperienceSampler how to save data from the various formats
    //Record date (create new date object)
    var datestamp = new Date();
    var year = datestamp.getFullYear(), month = datestamp.getMonth(), day=datestamp.getDate(), hours=datestamp.getHours(), minutes=datestamp.getMinutes(), seconds=datestamp.getSeconds(), milliseconds=datestamp.getMilliseconds();
    //Record value of text field
    var response, currentQuestion, uniqueRecord;
    if (type == 'text') {
        response = button.val();
        // remove newlines from user input
        response = response.replace(/(\r\n|\n|\r)/g, ""); //encodeURIComponent(); decodeURIComponent()
        currentQuestion = button.attr('id').slice(0,-1);
    }
    else if (type == 'number') {
        response = button.val();
        // remove newlines from user input
        response = response.replace(/(\r\n|\n|\r)/g, ""); //encodeURIComponent(); decodeURIComponent()
        currentQuestion = button.attr('id').slice(0,-1);
    }        	
    else if (type == 'slider') {
    	response = button.split(/,(.+)/)[1];
        currentQuestion = button.split(",",1);
    }
    //Record the array
    else if (type == 'checklist') {
        response = button.split(/,(.+)/)[1];
        currentQuestion = button.split(",",1);
    }
    else if (type == 'instructions') {
    	response = button.split(/,(.+)/)[1];
        currentQuestion = button.split(",",1);
    }
    //Record value of clicked button
    else if (type == 'mult1') {
        response = button.value;
        //Create a unique identifier for this response
        currentQuestion = button.id.slice(0,-1);
    }
    //Record value of clicked button
    else if (type == 'mult2') {
        response = button.value;
        //Create a unique identifier for this response
        currentQuestion = button.id.slice(0,-1);
    }
    else if (type == 'datePicker') {
		response = button.split(/,(.+)/)[1];
     	currentQuestion = button.split(",",1);
    }
    else if (type == 'dateAndTimePicker') {
		response = button.split(/,(.+)/)[1];
     	currentQuestion = button.split(",",1);
    }
    else if (type == 'timePicker') {
    	response = button.val();
        currentQuestion = button.attr('id').slice(0,-1);
    }
    else if (type == 'link'){
    	response = button.split(/,(.+)/)[1];
        currentQuestion = button.split(",",1);
    }
    if (count <= -1) {uniqueRecord = currentQuestion}
    else {uniqueRecord = uniqueKey + "_" + currentQuestion + "_" + year + "_" + month + "_" + day + "_" + hours + "_" + minutes + "_" + seconds + "_" + milliseconds;}
//     //Save this to local storage
    localStore[uniqueRecord] = response;
//		


//		/*Question Logic Statements*/
		//Stage 3 of Customization
// 		//if your questionnaire has two branches based on the absence or presence of a phenomenon, you will need the next statement
// 		//this statement allows you to record whether the phenomenon was absent or present so you can specify which branch the participant should complete when
// 		//the questionnaire splits into the two branches
// 		//if not then you do not need the next statement and should leave it commented out
//     if (count == 0) {phenomenonPresence = response;}
//		//if you have piped text, you would assign your response variable here
//		//where X is the question index number of the question you ask for response you would like to pipe
//		//In this example, we just use name to consist with our earlier variables
//		if (count ==X) {name = response;}
//		//The line below states that if the app is on the last question of participant setup, it should schedule all the notifications
//		//then display the default end of survey message, and then record which notifications have been scheduled.
//		//You will test local notifications in Stage 4 of customizing the app
//		********IF YOU HAVE NO QUESTION LOGIC BUT HAVE SCHEDULED NOTIFICATIONS, YOU NEED TO UNCOMMENT THE FOLLOWING LINE
//		TO EXECUTE THE scheduleNotifs() FUNCTION********	
	if (count == -8 && response == 0){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(-4);});}
    else if (count == -8 && response ==1){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(-7);});}
    else if (count == -7) {app.testNotif(); $("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(-6);});}
    else if (count == -6 && response == 0) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(-5);});}
    else if (count == -6 && response == 1) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(-4);});}
    else if (count == -5) {app.renderLastPage(lastPage[3], count);}
    else if (count == -1){
    		app.scheduleNotifs(); 
    		order=app.randomOrder(order);
    		order2=app.randomOrder(order2);
    		order=order.concat(order2);
    		localStore.order=order;
    		localStore.server = Math.floor(Math.random()*4)+1;  
//     		alert("localStore.server is " + localStore.server);
    		app.renderLastPage(lastPage[2], count);
    		//localStore.server = Math.floor(Math.random()*4) +1; 
 
    		}
	else if (count < 0 && count < participantSetup.length-1) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(count+1);});}
		
//     //Identify the next question to populate the view
//		//the next statement is about the snooze function
// 		//This statement says that if the participant says they are currently unable to complete the questionnaire now,
// 		//the app will display the snooze end of survey message. You can customize the snooze function in Stage 4 of Customization 
	if (count == SNOOZEQ && response == 0) {app.renderLastPage(lastPage[1], count);}
	else if (count == 0 && currentSurvey == 1){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(1);});}
	else if (count == 0 && currentSurvey == 2){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(2);});}
	else if (count == 0 && currentSurvey == 3){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(3);});}
	else if (count == 0 && currentSurvey == 4){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(4);});}
	else if (count == 0 && currentSurvey == 5){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(5);});}
	else if (count == 0 && currentSurvey == 6){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(6);});}
	else if (count == 0 && currentSurvey == 7){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(7);});}
	else if (count == 0 && currentSurvey == 8){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(8);});}
	else if (count == 0 && currentSurvey == 9){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(9);});}
	else if (count == 0 && currentSurvey == 10){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(10);});}
	else if (count == 0 && currentSurvey == 11){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(11);});}
	else if (count == 0 && currentSurvey == 12){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(12);});}
	else if (count == 0 && currentSurvey == 13){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(13);});}
	else if (count == 0 && currentSurvey == 14){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(14);});}
	else if (count == 0 && currentSurvey == 15){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(15);});}
	
	if (count > SNOOZEQ && count < 16) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(20);});}
	else if (count == 20 && response == 1 && currentSurvey == 1){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(1);});}
	else if (count == 20 && response == 1 && currentSurvey == 2){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(2);});}
	else if (count == 20 && response == 1 && currentSurvey == 3){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(3);});}
	else if (count == 20 && response == 1 && currentSurvey == 4){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(4);});}
	else if (count == 20 && response == 1 && currentSurvey == 5){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(5);});}
	else if (count == 20 && response == 1 && currentSurvey == 6){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(6);});}
	else if (count == 20 && response == 1 && currentSurvey == 7){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(7);});}
	else if (count == 20 && response == 1 && currentSurvey == 8){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(8);});}
	else if (count == 20 && response == 1 && currentSurvey == 9){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(9);});}
	else if (count == 20 && response == 1 && currentSurvey == 10){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(10);});}
	else if (count == 20 && response == 1 && currentSurvey == 11){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(11);});}
	else if (count == 20 && response == 1 && currentSurvey == 12){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(12);});}
	else if (count == 20 && response == 1 && currentSurvey == 13){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(13);});}
	else if (count == 20 && response == 1 && currentSurvey == 14){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(14);});}
	else if (count == 20 && response == 1 && currentSurvey == 15){$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(15);});}
	else if (count == 20 && response == 0){app.renderLastPage(lastPage[0], count);}
	//{app.renderLastPage(lastPage[0], count);}
	else if (count == 16 || count == 18 || count == 19){app.renderLastPage(lastPage[4], count);}
	else if (count == 17){app.renderLastPage(lastPage[5], count);}	
},

/* Prepare for Resume and Store Data */
/* Time stamps the current moment to determine how to resume */
pauseEvents: function() {
    localStore.pause_time = new Date().getTime();
    localStore.uniqueKey = uniqueKey;	
    app.saveData();
},
      
sampleParticipant: function() {
    var current_moment = new Date();
    var current_time = current_moment.getTime();
    //change X to the amount of time the participant is locked out of the app for in milliseconds
    //e.g., if you want to lock the participant out of the app for 10 minutes, replace X with 600000
    //If you don't have a snooze feature, remove the "|| localStore.snoozed == 1"
    if ((current_time - Number(localStore.pause_time)) > 600000 || localStore.snoozed == 1) {
        uniqueKey = new Date().getTime();
        localStore.snoozed = 0;
    	var startTime = new Date(uniqueKey);
    	var syear = startTime.getFullYear(), smonth = startTime.getMonth(), sday=startTime.getDate(), shours=startTime.getHours(), sminutes=startTime.getMinutes(), sseconds=startTime.getSeconds(), smilliseconds=startTime.getMilliseconds();
    	localStore[uniqueKey + "_" + "startTime"  + "_" + syear + "_" + smonth + "_" + sday + "_" + shours + "_" + sminutes + "_" + sseconds + "_" + smilliseconds] = 1;	   	    
        var notificationString = localStore.notifications; 
    	if (notificationString != undefined){
    		var notificationArray = notificationString.split(",");
    	}
    	var orderString = localStore.order;
    	if (orderString != undefined) {
    		var orderArray = orderString.split(",");
    	}
    	var completedString = localStore.completedSurveys;
    	if (completedString != undefined) {
    		var completedArray = completedString.split(","); 
    	}
//     	alert("notificationArray[0] is " + notificationArray[0]);
//     	alert("orderArray[0] is " + orderArray[0]);	   		
		var today = new Date().getTime();
		var missing1 = order.filter((i => a => a !== completedArray[i] || !++i)(0));
		var missing2 = orderArray.filter((i => a => a !== completedArray[i] || !++i)(0));
        if (uniqueKey < notificationArray[0]) {
        	app.renderQuestion(16)
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[0]) && today < Number(notificationArray[1])) {
        		app.renderQuestion(19);
        }
        else if (uniqueKey >= notificationArray[0] && uniqueKey <= (Number(notificationArray[0]) + 10800000)){
        	currentSurvey = orderArray[0];
        	nextSurvey = orderArray[0+1]; 
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[1]) && today < Number(notificationArray[2])) {
        		app.renderQuestion(19);
        }        
        else if (uniqueKey >= notificationArray[1] && uniqueKey <= (Number(notificationArray[1]) + 10800000)){
        	currentSurvey = orderArray[1];
        	nextSurvey = orderArray[1 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[2]) && today < Number(notificationArray[3])) {
        		app.renderQuestion(19);
        }   
        else if (uniqueKey >= notificationArray[2] && uniqueKey <= (Number(notificationArray[2]) + 10800000)){
	       	currentSurvey = orderArray[2];
	       	nextSurvey = orderArray[2 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }     
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[3]) && today < Number(notificationArray[4])) {
        		app.renderQuestion(19);
        }
        else if (uniqueKey >= notificationArray[3] && uniqueKey <= (Number(notificationArray[3]) + 10800000)){
        	currentSurvey = orderArray[3];
        	nextSurvey = orderArray[3 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[4]) && today < Number(notificationArray[5])) {
        		app.renderQuestion(19);
        }          
        else if (uniqueKey >= notificationArray[4] && uniqueKey <= (Number(notificationArray[4]) + 10800000)){
        	currentSurvey = orderArray[4];
        	nextSurvey = orderArray[4 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[5]) && today < Number(notificationArray[6])) {
        		app.renderQuestion(19);
        }          
        else if (uniqueKey >= notificationArray[5] && uniqueKey <= (Number(notificationArray[5]) + 10800000)){
        	currentSurvey = orderArray[5];
        	nextSurvey = orderArray[5 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[6]) && today < Number(notificationArray[7])) {
        		app.renderQuestion(19);
        }         
        else if (uniqueKey >= notificationArray[6] && uniqueKey <= (Number(notificationArray[6]) + 10800000)){
        	currentSurvey = orderArray[6];
        	nextSurvey = orderArray[6 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[7]) && today < Number(notificationArray[8])) {
        		app.renderQuestion(19);
        }       
        else if (uniqueKey >= notificationArray[7] && uniqueKey <= (Number(notificationArray[7]) + 10800000)){
        	currentSurvey = orderArray[7];
        	nextSurvey = orderArray[7 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[8]) && today < Number(notificationArray[9])) {
        		app.renderQuestion(19);
        }        
        else if (uniqueKey >= notificationArray[8] && uniqueKey <= (Number(notificationArray[8]) + 10800000)){
        	currentSurvey = orderArray[8];
        	nextSurvey = orderArray[8 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[9]) && today < Number(notificationArray[10])) {
        		app.renderQuestion(19);
        }       
        else if (uniqueKey >= notificationArray[9] && uniqueKey <= (Number(notificationArray[9]) + 10800000)){
        	currentSurvey = orderArray[9];
        	nextSurvey = orderArray[9 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[10]) && today < Number(notificationArray[11])) {
        		app.renderQuestion(19);
        }             
        else if (uniqueKey >= notificationArray[10] && uniqueKey <= (Number(notificationArray[10]) + 10800000)){
        	currentSurvey = orderArray[10];
        	nextSurvey = orderArray[10 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[11]) && today < Number(notificationArray[12])) {
        		app.renderQuestion(19);
        }    
        else if (uniqueKey >= notificationArray[11] && uniqueKey <= (Number(notificationArray[11]) + 10800000)){
        	currentSurvey = orderArray[11];
        	nextSurvey = orderArray[11 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[12]) && today < Number(notificationArray[13])) {
        		app.renderQuestion(19);
        }       
        else if (uniqueKey >= notificationArray[12] && uniqueKey <= (Number(notificationArray[12]) + 10800000)){
        	currentSurvey = orderArray[12];
        	nextSurvey = orderArray[12 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[13]) && today < Number(notificationArray[14])) {
        		app.renderQuestion(19);
        }        
        else if (uniqueKey >= localStore.notifications[13] && uniqueKey <= (Number(notificationArray[13]) + 10800000)){
        	currentSurvey = orderArray[13];
        	nextSurvey = orderArray[13 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[14]) && today < Number(notificationArray[15])) {
        		app.renderQuestion(19);
        }        
        else if (uniqueKey >= notificationArray[14] && uniqueKey <= (Number(notificationArray[14]) + 10800000)){
        	currentSurvey = orderArray[14];
        	nextSurvey = orderArray[14 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 1){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 1) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing1[Math.floor(Math.random()*missing1.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[15]) && today < Number(notificationArray[16])) {
        		app.renderQuestion(19);
        }        
        else if (uniqueKey >= notificationArray[15] && uniqueKey <= (Number(notificationArray[15]) + 10800000)){
        	currentSurvey = orderArray[15];
        	nextSurvey = orderArray[15 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[16]) && today < Number(notificationArray[17])) {
        		app.renderQuestion(19);
        }        
        else if (uniqueKey >= notificationArray[16] && uniqueKey <= (Number(notificationArray[16]) + 10800000)){
        	currentSurvey = orderArray[16];
        	nextSurvey = orderArray[16 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[17]) && today < Number(notificationArray[18])) {
        		app.renderQuestion(19);
        }        
        else if (uniqueKey >= notificationArray[17] && uniqueKey <= (Number(notificationArray[17]) + 10800000)){
        	currentSurvey = orderArray[17];
        	nextSurvey = orderArray[17 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[18]) && today < Number(notificationArray[19])) {
        		app.renderQuestion(19);
        }       
        else if (uniqueKey >= notificationArray[18] && uniqueKey <= (Number(notificationArray[18]) + 10800000)){
        	currentSurvey = orderArray[18];
        	nextSurvey = orderArray[18 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[19]) && today < Number(notificationArray[20])) {
        		app.renderQuestion(19);
        }          
        else if (uniqueKey >= notificationArray[19] && uniqueKey <= (Number(notificationArray[19]) + 10800000)){
        	currentSurvey = orderArray[19];
        	nextSurvey = orderArray[19 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[20]) && today < Number(notificationArray[21])) {
        		app.renderQuestion(19);
        }           
        else if (uniqueKey >= notificationArray[20] && uniqueKey <= (Number(notificationArray[20]) + 10800000)){
        	currentSurvey = orderArray[20];
        	nextSurvey = orderArray[20 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[21]) && today < Number(notificationArray[22])) {
        		app.renderQuestion(19);
        }         
        else if (uniqueKey >= notificationArray[21] && uniqueKey <= (Number(notificationArray[21]) + 10800000)){
        	currentSurvey = orderArray[21];
        	nextSurvey = orderArray[21 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[22]) && today < Number(notificationArray[23])) {
        		app.renderQuestion(19);
        }          
        else if (uniqueKey >= notificationArray[22] && uniqueKey <= (Number(notificationArray[22]) + 10800000)){
        	currentSurvey = orderArray[22];
        	nextSurvey = orderArray[22 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[23]) && today < Number(notificationArray[24])) {
        		app.renderQuestion(19);
        }          
        else if (uniqueKey >= notificationArray[23] && uniqueKey <= (Number(notificationArray[23]) + 10800000)){
        	currentSurvey = orderArray[23];
        	nextSurvey = orderArray[23 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[24]) && today < Number(notificationArray[25])) {
        		app.renderQuestion(19);
        }          
        else if (uniqueKey >= notificationArray[24] && uniqueKey <= (Number(notificationArray[24]) + 10800000)){
        	currentSurvey = orderArray[24];
        	nextSurvey = orderArray[24 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[25]) && today < Number(notificationArray[26])) {
        		app.renderQuestion(19);
        }          
        else if (uniqueKey >= notificationArray[25] && uniqueKey <= (Number(notificationArray[25]) + 10800000)){
        	currentSurvey = orderArray[25];
        	nextSurvey = orderArray[25 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[26]) && today < Number(notificationArray[27])) {
        		app.renderQuestion(19);
        }           
        else if (uniqueKey >= notificationArray[26] && uniqueKey <= (Number(notificationArray[26]) + 10800000)){
        	currentSurvey = orderArray[26];
        	nextSurvey = orderArray[26 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[27]) && today < Number(notificationArray[28])) {
        		app.renderQuestion(19);
        }        
        else if (uniqueKey >= notificationArray[27] && uniqueKey <= (Number(notificationArray[27]) + 10800000)){
        	currentSurvey = orderArray[27];
        	nextSurvey = orderArray[27 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (today > Number(localStore.completeDate) && Number(localStore.completeDate) > Number(notificationArray[28]) && today < Number(notificationArray[29])) {
        		app.renderQuestion(19);
        }         
        else if (uniqueKey >= notificationArray[28] && uniqueKey <= (Number(notificationArray[28]) + 10800000)){
        	currentSurvey = orderArray[28];
        	nextSurvey = orderArray[28 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }             
        else if (Number(uniqueKey) >= Number(notificationArray[29]) && uniqueKey < (Number(notificationArray[29]) + Number(10800000))){
        	currentSurvey = orderArray[29];
        	nextSurvey = orderArray[29 + 1];
        	var maxedOut = app.getOccurrence(completedArray, currentSurvey); 
        	var nextMaxedOut = app.getOccurrence(completedArray, nextSurvey); 
        	if (maxedOut < 2){
        		currentSurvey = currentSurvey;
        	}
        	else if (nextMaxedOut < 2) {
        		currentSurvey = nextSurvey;
        	}
        	else {
        		currentSurvey = missing2[Math.floor(Math.random()*missing2.length)];
        	}
        	app.renderQuestion(0);
        }
        else if (Number(uniqueKey) >= (Number(notificationArray[29]) + Number(10800000))){
        	app.renderQuestion(17);
        }
        else if (today > Number(localStore.completeDate) && today > Number(notificationArray[29])) {
        		app.renderQuestion(17);
        }             
        else {
        	app.renderQuestion(18)
        }
    }
    else {
    	uniqueKey = localStore.uniqueKey;
    }
    app.saveData();
},

saveDataInstallationLastPage:function() {
	var storage = JSON.stringify(localStore);
	var storage_save=JSON.parse(storage);	
	if (localStore.server == 1) {
		$.ajax({
			//If you are using the server option, the type should be 'post'
			   type: 'post',
			   // server 1
			   url: 'https://script.google.com/macros/s/AKfycbzBCCNFzQVKjl4r89lZfQqonnj5ejgzpOwSx-I/exec',
			   data: storage_save,
			   crossDomain: true,
			   timeout: 180000,
			   success: function (result) {
			   var pid = localStore.participant_id, snoozed = localStore.snoozed, uniqueKey = localStore.uniqueKey, pause_time=localStore.pause_time;
			   var installationDate = localStore.installationDate;
			   var order = localStore.order;
			   var notifications = localStore.notifications;
			   var completeDate = localStore.completeDate;
			   var server = localStore.server;
			   var completedSurveys = localStore.completedSurveys;  			   
			   localStore.clear();
			   localStore.participant_id = pid;
			   localStore.snoozed = snoozed;
			   localStore.uniqueKey = uniqueKey;
			   localStore.pause_time = pause_time;
			   localStore.installationDate = installationDate;
			   localStore.order = order;
			   localStore.notifications=notifications;
			   localStore.completeDate = completeDate;
			   localStore.server = server;		
			   localStore.completedSurveys = completedSurveys; 	   			   
			   $("#question").html("<h3>Thank you! You've successfully installed the app. You can close the app now. </h3>");
			   },
				error: function (request, error, textstatus) {
					if (textstatus === "timeout"){
						$("#question").html("<h3>It looks like the server is currently overloaded. Please try resending your data later. Click on the button below, and we'll remind you in 30 minutes to try sending your data again. If problems persist, please contact the researchers (seeinghumanlab@gmail.com).</h3><br><button>Set Data Sending Reminder</button>");
						$("#question button").click(function () {app.dataSendingNotif();localStore.snoozed=2;console.log("localStore.snoozed is " + localStore.snoozed);});    

					}
					else {
					console.log(error);
					$("#question").html("<h3>Please try resending data. If problems persist, please contact the researchers (seeinghumanlab@gmail.com).</h3><br><button>Resend data</button>");
					$("#question button").click(function () {app.saveDataLastPage();});    
					}
				}
			});
		}
	if (localStore.server == 2) {
		$.ajax({
			//If you are using the server option, the type should be 'post'
			   type: 'post',
			   // server 1
			   url: 'https://script.google.com/macros/s/AKfycbyQGKqyqet68Y6noklBrNIUUuzKqKnMgdtLImXD/exec',
			   data: storage_save,
			   crossDomain: true,
			   timeout: 180000,
			   success: function (result) {
			   var pid = localStore.participant_id, snoozed = localStore.snoozed, uniqueKey = localStore.uniqueKey, pause_time=localStore.pause_time;
			   var installationDate = localStore.installationDate;
			   var order = localStore.order;
			   var notifications = localStore.notifications;
			   var completeDate = localStore.completeDate;
			   var server = localStore.server;
			   var completedSurveys = localStore.completedSurveys;  			   
			   localStore.clear();
			   localStore.participant_id = pid;
			   localStore.snoozed = snoozed;
			   localStore.uniqueKey = uniqueKey;
			   localStore.pause_time = pause_time;
			   localStore.installationDate = installationDate;
			   localStore.order = order;
			   localStore.notifications=notifications;
			   localStore.completeDate = completeDate;
			   localStore.server = server;		
			   localStore.completedSurveys = completedSurveys; 	   			   
			   $("#question").html("<h3>Thank you! You've successfully installed the app. You can close the app now.</h3>");
			   },
				error: function (request, error, textstatus) {
					if (textstatus === "timeout"){
						$("#question").html("<h3>It looks like the server is currently overloaded. Please try resending your data later. Click on the button below, and we'll remind you in 30 minutes to try sending your data again. If problems persist, please contact the researchers (seeinghumanlab@gmail.com).</h3><br><button>Set Data Sending Reminder</button>");
						$("#question button").click(function () {app.dataSendingNotif();localStore.snoozed=2;console.log("localStore.snoozed is " + localStore.snoozed);});    

					}
					else {
					console.log(error);
					$("#question").html("<h3>Please try resending data. If problems persist, please contact the researchers (seeinghumanlab@gmail.com).</h3><br><button>Resend data</button>");
					$("#question button").click(function () {app.saveDataLastPage();});    
					}
				}
			});
		}
		if (localStore.server == 3) {
			$.ajax({
				//If you are using the server option, the type should be 'post'
				   type: 'post',
				   // server 1
				   url: 'https://script.google.com/macros/s/AKfycbyrexDUgrlAjbsWfU0hdbPfoPEHbLu0C3ak6oCE/exec',
				   data: storage_save,
				   crossDomain: true,
				   timeout: 180000,
				   success: function (result) {
				   var pid = localStore.participant_id, snoozed = localStore.snoozed, uniqueKey = localStore.uniqueKey, pause_time=localStore.pause_time;
				   var installationDate = localStore.installationDate;
				   var order = localStore.order;
				   var notifications = localStore.notifications;
				   var completeDate = localStore.completeDate;
				   var server = localStore.server;
				   var completedSurveys = localStore.completedSurveys;  			   
				   localStore.clear();
				   localStore.participant_id = pid;
				   localStore.snoozed = snoozed;
				   localStore.uniqueKey = uniqueKey;
				   localStore.pause_time = pause_time;
				   localStore.installationDate = installationDate;
				   localStore.order = order;
				   localStore.notifications=notifications;
				   localStore.completeDate = completeDate;
				   localStore.server = server;		
				   localStore.completedSurveys = completedSurveys; 	   			   
				   $("#question").html("<h3>Thank you! You've successfully installed the app. You can close the app now.</h3>");
				   },
					error: function (request, error, textstatus) {
						if (textstatus === "timeout"){
							$("#question").html("<h3>It looks like the server is currently overloaded. Please try resending your data later. Click on the button below, and we'll remind you in 30 minutes to try sending your data again. If problems persist, please contact the researchers (seeinghumanlab@gmail.com).</h3><br><button>Set Data Sending Reminder</button>");
							$("#question button").click(function () {app.dataSendingNotif();localStore.snoozed=2;console.log("localStore.snoozed is " + localStore.snoozed);});    

						}
						else {
						console.log(error);
						$("#question").html("<h3>Please try resending data. If problems persist, please contact the researchers (seeinghumanlab@gmail.com).</h3><br><button>Resend data</button>");
						$("#question button").click(function () {app.saveDataLastPage();});    
						}
					}
				});
		}
		if (localStore.server == 4) {
			$.ajax({
				//If you are using the server option, the type should be 'post'
				   type: 'post',
				   // server 1
				   url: 'https://script.google.com/macros/s/AKfycbyPsl_KnuSv1e5OcbpxxL4f-JDSw_4ocu2fv3w/exec',
				   data: storage_save,
				   crossDomain: true,
				   timeout: 180000,
				   success: function (result) {
				   var pid = localStore.participant_id, snoozed = localStore.snoozed, uniqueKey = localStore.uniqueKey, pause_time=localStore.pause_time;
				   var installationDate = localStore.installationDate;
				   var order = localStore.order;
				   var notifications = localStore.notifications;
				   var completeDate = localStore.completeDate;
				   var server = localStore.server;
				   var completedSurveys = localStore.completedSurveys;  			   
				   localStore.clear();
				   localStore.participant_id = pid;
				   localStore.snoozed = snoozed;
				   localStore.uniqueKey = uniqueKey;
				   localStore.pause_time = pause_time;
				   localStore.installationDate = installationDate;
				   localStore.order = order;
				   localStore.notifications=notifications;
				   localStore.completeDate = completeDate;
				   localStore.server = server;		
				   localStore.completedSurveys = completedSurveys; 	   			   
				   $("#question").html("<h3>Thank you! You've successfully installed the app. You can close the app now.</h3>");
				   },
					error: function (request, error, textstatus) {
						if (textstatus === "timeout"){
							$("#question").html("<h3>It looks like the server is currently overloaded. Please try resending your data later. Click on the button below, and we'll remind you in 30 minutes to try sending your data again. If problems persist, please contact the researchers (seeinghumanlab@gmail.com).</h3><br><button>Set Data Sending Reminder</button>");
							$("#question button").click(function () {app.dataSendingNotif();localStore.snoozed=2;console.log("localStore.snoozed is " + localStore.snoozed);});    

						}
						else {
						console.log(error);
						$("#question").html("<h3>Please try resending data. If problems persist, please contact the researchers (seeinghumanlab@gmail.com).</h3><br><button>Resend data</button>");
						$("#question button").click(function () {app.saveDataLastPage();});    
						}
					}
				});
		}	
},


//uncomment this function to test data saving function (Stage 2 of Customization)
saveDataLastPage:function() {
	var storage = JSON.stringify(localStore);
	var storage_save=JSON.parse(storage);
    if (localStore.server == 1){
		$.ajax({
			   type: 'post',
			   url: 'https://script.google.com/macros/s/AKfycbzBCCNFzQVKjl4r89lZfQqonnj5ejgzpOwSx-I/exec',
			   data: storage_save,
			   crossDomain: true,
			   timeout: 120000,
			   success: function (result) {
			   var pid = localStore.participant_id, snoozed = localStore.snoozed, uniqueKey = localStore.uniqueKey, pause_time=localStore.pause_time, surveyCount=localStore.surveyCount;
			   var order = localStore.order; 
			   var notifications = localStore.notifications;
			   var completeDate = localStore.completeDate;
			   var server = localStore.server; 
			   var completedSurveys = localStore.completedSurveys; 
			   localStore.clear();
			   localStore.participant_id = pid;
			   localStore.snoozed = snoozed;
			   localStore.uniqueKey = uniqueKey;
			   localStore.pause_time=pause_time;
			   localStore.surveyCount=surveyCount;
			   localStore.order = order;
			   localStore.notifications=notifications;
			   localStore.completeDate = completeDate;
			   localStore.server = server;
			   localStore.completedSurveys = completedSurveys; 
			   $("#question").html("<h3>Your responses have been recorded. Thank you for completing this survey.</h3>");
			   },

				error: function (request, error, textstatus) {
					if (textstatus === "timeout"){
						$("#question").html("<h3>It looks like the server is currently overloaded. Please try resending your data later. Click on the button below, and we'll remind you in 30 minutes to try sending your data again. If problems persist, please contact the researchers (seeinghumanlab@gmail.com).</h3><br><button>Set Data Sending Reminder</button>");
						$("#question button").click(function () {app.dataSendingNotif();localStore.snoozed=2;console.log("localStore.snoozed is " + localStore.snoozed);});    

					}
					else {
						console.log(error);
						$("#question").html("<h3>Please try resending data. If problems persist, please contact the researchers (seeinghumanlab@gmail.com).</h3><br><button>Resend data</button>");
						$("#question button").click(function () {app.saveDataLastPage();});    
					}
				}
			});
   }
	if (localStore.server == 2){
		$.ajax({
			   type: 'post',
			   url: 'https://script.google.com/macros/s/AKfycbyQGKqyqet68Y6noklBrNIUUuzKqKnMgdtLImXD/exec',
			   data: storage_save,
			   crossDomain: true,
			   timeout: 120000,
			   success: function (result) {
			   var pid = localStore.participant_id, snoozed = localStore.snoozed, uniqueKey = localStore.uniqueKey, pause_time=localStore.pause_time, surveyCount=localStore.surveyCount;
			   var order = localStore.order; 
			   var notifications = localStore.notifications;
			   var completeDate = localStore.completeDate;
			   var server = localStore.server; 
			   var completedSurveys = localStore.completedSurveys; 
			   localStore.clear();
			   localStore.participant_id = pid;
			   localStore.snoozed = snoozed;
			   localStore.uniqueKey = uniqueKey;
			   localStore.pause_time=pause_time;
			   localStore.surveyCount=surveyCount;
			   localStore.order = order;
			   localStore.notifications=notifications;
			   localStore.completeDate = completeDate;
			   localStore.server = server;
			   localStore.completedSurveys = completedSurveys; 
			   $("#question").html("<h3>Your responses have been recorded. Thank you for completing this survey.</h3>");
			   },

				error: function (request, error, textstatus) {
					if (textstatus === "timeout"){
						$("#question").html("<h3>It looks like the server is currently overloaded. Please try resending your data later. Click on the button below, and we'll remind you in 30 minutes to try sending your data again. If problems persist, please contact the researchers (seeinghumanlab@gmail.com).</h3><br><button>Set Data Sending Reminder</button>");
						$("#question button").click(function () {app.dataSendingNotif();localStore.snoozed=2;console.log("localStore.snoozed is " + localStore.snoozed);});    

					}
					else {
						console.log(error);
						$("#question").html("<h3>Please try resending data. If problems persist, please contact the researchers (seeinghumanlab@gmail.com).</h3><br><button>Resend data</button>");
						$("#question button").click(function () {app.saveDataLastPage();});    
					}
				}
			});
    }
    if (localStore.server == 3){
		$.ajax({
			   type: 'post',
			   url: 'https://script.google.com/macros/s/AKfycbyrexDUgrlAjbsWfU0hdbPfoPEHbLu0C3ak6oCE/exec',
			   data: storage_save,
			   crossDomain: true,
			   timeout: 120000,
			   success: function (result) {
			   var pid = localStore.participant_id, snoozed = localStore.snoozed, uniqueKey = localStore.uniqueKey, pause_time=localStore.pause_time, surveyCount=localStore.surveyCount;
			   var order = localStore.order; 
			   var notifications = localStore.notifications;
			   var completeDate = localStore.completeDate;
			   var server = localStore.server; 
			   var completedSurveys = localStore.completedSurveys; 
			   localStore.clear();
			   localStore.participant_id = pid;
			   localStore.snoozed = snoozed;
			   localStore.uniqueKey = uniqueKey;
			   localStore.pause_time=pause_time;
			   localStore.surveyCount=surveyCount;
			   localStore.order = order;
			   localStore.notifications=notifications;
			   localStore.completeDate = completeDate;
			   localStore.server = server;
			   localStore.completedSurveys = completedSurveys; 
			   $("#question").html("<h3>Your responses have been recorded. Thank you for completing this survey.</h3>");
			   },

				error: function (request, error, textstatus) {
					if (textstatus === "timeout"){
						$("#question").html("<h3>It looks like the server is currently overloaded. Please try resending your data later. Click on the button below, and we'll remind you in 30 minutes to try sending your data again. If problems persist, please contact the researchers (seeinghumanlab@gmail.com).</h3><br><button>Set Data Sending Reminder</button>");
						$("#question button").click(function () {app.dataSendingNotif();localStore.snoozed=2;console.log("localStore.snoozed is " + localStore.snoozed);});    

					}
					else {
						console.log(error);
						$("#question").html("<h3>Please try resending data. If problems persist, please contact the researchers (seeinghumanlab@gmail.com).</h3><br><button>Resend data</button>");
						$("#question button").click(function () {app.saveDataLastPage();});    
					}
				}
			});
    }
	if (localStore.server == 4){
		$.ajax({
			   type: 'post',
			   url: 'https://script.google.com/macros/s/AKfycbyPsl_KnuSv1e5OcbpxxL4f-JDSw_4ocu2fv3w/exec',
			   data: storage_save,
			   crossDomain: true,
			   timeout: 120000,
			   success: function (result) {
			   var pid = localStore.participant_id, snoozed = localStore.snoozed, uniqueKey = localStore.uniqueKey, pause_time=localStore.pause_time, surveyCount=localStore.surveyCount;
			   var order = localStore.order; 
			   var notifications = localStore.notifications;
			   var completeDate = localStore.completeDate;
			   var server = localStore.server; 
			   var completedSurveys = localStore.completedSurveys; 
			   localStore.clear();
			   localStore.participant_id = pid;
			   localStore.snoozed = snoozed;
			   localStore.uniqueKey = uniqueKey;
			   localStore.pause_time=pause_time;
			   localStore.surveyCount=surveyCount;
			   localStore.order = order;
			   localStore.notifications=notifications;
			   localStore.completeDate = completeDate;
			   localStore.server = server;
			   localStore.completedSurveys = completedSurveys; 
			   $("#question").html("<h3>Your responses have been recorded. Thank you for completing this survey.</h3>");
			   },

				error: function (request, error, textstatus) {
					if (textstatus === "timeout"){
						$("#question").html("<h3>It looks like the server is currently overloaded. Please try resending your data later. Click on the button below, and we'll remind you in 30 minutes to try sending your data again. If problems persist, please contact the researchers (seeinghumanlab@gmail.com).</h3><br><button>Set Data Sending Reminder</button>");
						$("#question button").click(function () {app.dataSendingNotif();localStore.snoozed=2;console.log("localStore.snoozed is " + localStore.snoozed);});    

					}
					else {
						console.log(error);
						$("#question").html("<h3>Please try resending data. If problems persist, please contact the researchers (seeinghumanlab@gmail.com).</h3><br><button>Resend data</button>");
						$("#question button").click(function () {app.saveDataLastPage();});    
					}
				}
			});
    }
},

//uncomment this function to test data saving function (Stage 2 of Customization)
saveData:function() {
	var storage = JSON.stringify(localStore);
	var storage_save=JSON.parse(storage);	
	console.log("i'm in the savedata function"); 
	console.log("localStore.server is " + localStore.server); 
	if (localStore.server == 1){
		$.ajax({
			   type: 'post',
			   url: 'https://script.google.com/macros/s/AKfycbzBCCNFzQVKjl4r89lZfQqonnj5ejgzpOwSx-I/exec',
			   data: storage_save,
			   crossDomain: true,
			   timeout: 15000,
			   success: function (result) {
			   console.log("success"); 
			   var pid = localStore.participant_id, snoozed = localStore.snoozed, uniqueKey = localStore.uniqueKey, surveyCount=localStore.surveyCount;
			   var order = localStore.order;
			   var notifications = localStore.notifications;
			   var completeDate = localStore.completeDate;
			   var server = localStore.server; 
			   var completedSurveys = localStore.completedSurveys; 
			   localStore.clear();
			   localStore.participant_id = pid;
			   localStore.snoozed = snoozed;
			   localStore.uniqueKey = uniqueKey;
			   localStore.surveyCount=surveyCount;
			   localStore.order = order;
			   localStore.notifications=notifications;
			   localStore.completeDate = completeDate; 
			   localStore.server = server;      
			   localStore.completedSurveys = completedSurveys;     
			   },
			   error: function (request, error, textstatus) {
				if (textstatus === "timeout"){
					console.log("timeout");
					}
				else {
					console.log(error);
					}
				}           
			});
	}
    if (localStore.server == 2){
		$.ajax({
			   type: 'post',
			   url: 'https://script.google.com/macros/s/AKfycbyQGKqyqet68Y6noklBrNIUUuzKqKnMgdtLImXD/exec',
			   data: storage_save,
			   crossDomain: true,
			   timeout: 15000,
			   success: function (result) {
				console.log("success"); 
			   var pid = localStore.participant_id, snoozed = localStore.snoozed, uniqueKey = localStore.uniqueKey, surveyCount=localStore.surveyCount;
			   var order = localStore.order;
			   var notifications = localStore.notifications;
			   var completeDate = localStore.completeDate;
			   var server = localStore.server;
			   var completedSurveys = localStore.completedSurveys; 
			   localStore.clear(); 
			   localStore.participant_id = pid;
			   localStore.snoozed = snoozed;
			   localStore.uniqueKey = uniqueKey;
			   localStore.surveyCount=surveyCount;
			   localStore.order = order;
			   localStore.notifications=notifications;
			   localStore.completeDate = completeDate; 
			   localStore.server = server; 
			   localStore.completedSurveys = completedSurveys;          
			   },
			   error: function (request, error, textstatus) {
				if (textstatus === "timeout"){
					console.log("timeout");
					}
				else {
					console.log(error);
					}
				}           
			});
    }
	if (localStore.server == 3){
		$.ajax({
			   type: 'post',
			   url: 'https://script.google.com/macros/s/AKfycbyrexDUgrlAjbsWfU0hdbPfoPEHbLu0C3ak6oCE/exec',
			   data: storage_save,
			   crossDomain: true,
			   timeout: 15000,
			   success: function (result) {
			    console.log("success"); 
			   var pid = localStore.participant_id, snoozed = localStore.snoozed, uniqueKey = localStore.uniqueKey, surveyCount=localStore.surveyCount;
			   var order = localStore.order;
			   var notifications = localStore.notifications;
			   var completeDate = localStore.completeDate;
			   var server = localStore.server; 
			   var completedSurveys = localStore.completedSurveys; 
			   localStore.clear();
			   localStore.participant_id = pid;
			   localStore.snoozed = snoozed;
			   localStore.uniqueKey = uniqueKey;
			   localStore.surveyCount=surveyCount;
			   localStore.order = order;
			   localStore.notifications=notifications;
			   localStore.completeDate = completeDate; 
			   localStore.server = server;     
			   localStore.completedSurveys = completedSurveys;     
			   },
			   error: function (request, error, textstatus) {
				if (textstatus === "timeout"){
					console.log("timeout");
					}
				else {
					console.log(error);
					}
				}           
			});
    }
	if (localStore.server == 4){
		$.ajax({
			   type: 'post',
			   url: 'https://script.google.com/macros/s/AKfycbyPsl_KnuSv1e5OcbpxxL4f-JDSw_4ocu2fv3w/exec',
			   data: storage_save,
			   crossDomain: true,
			   timeout: 15000,
			   success: function (result) {
			    console.log("success"); 
			   var pid = localStore.participant_id, snoozed = localStore.snoozed, uniqueKey = localStore.uniqueKey, surveyCount=localStore.surveyCount;
			   var order = localStore.order;
			   var notifications = localStore.notifications;
			   var completeDate = localStore.completeDate;
			   var server = localStore.server; 
			   var completedSurveys = localStore.completedSurveys; 
			   localStore.clear();
			   localStore.participant_id = pid;
			   localStore.snoozed = snoozed;
			   localStore.uniqueKey = uniqueKey;
			   localStore.surveyCount=surveyCount;
			   localStore.order = order;
			   localStore.notifications=notifications;
			   localStore.completeDate = completeDate; 
			   localStore.server = server;  
			   localStore.completedSurveys = completedSurveys;          
			   },
			   error: function (request, error, textstatus) {
				if (textstatus === "timeout"){
					console.log("timeout");
					}
				else {
					console.log(error);
					}
				}           
			});
    }
},
    
// Local Notifications Javascript
// Stage 5 of Customization
//This code is for a interval-contingent design where all participants answer the questionnaire at the same time
//(i.e., not customized to their schedule)
scheduleNotifs:function(){
//		//Section 1 - Declaring necessary variables
// 		//Declares the number of intervals between the notifications for each day (i.e., if beeping participants 6 times, declare 6 intervals)
    var interval1, interval2;

// 		//Declares a variable to represent the id of each notification for the day
// 		//Declare as many letters as you have intervals (i.e., 6 intervals, declare 6 ids)
    var a, b;

// 		//Declare a variable to represent new date to be calculated for each beep
//		//That is, if there are 6 intervals, declare 6 new dates
    var date1, date2;

// 		//The statement below declares the start and end time of the daily data collection period
// 		//These variables are not necessary if the start and end time of the daily data collection period do not vary across the experience
// 		//sampling data collection period
    var currentMaxHour, currentMaxMinute, currentMinHour, currentMinMinute, nextMinHour, nextMinMinute;

// 		//The next three lines create variables for the present time when the notifications are being scheduled
    var dateObject = new Date();
    var now = dateObject.getTime();
    var dayOfWeek = dateObject.getDay(), currentHour = dateObject.getHours(), currentMinute = dateObject.getMinutes();

// 		//The next variables represent the amount of time between the end of the data collection to the start of the next one (nightlyLag), 
// 		//the interval between the scheduling time and the start of the first data collection period (currentLag), the maximum amount of time
// 		//in the data collection period (maxInterval), and the time between until the end of the next data collection period (in our case 
// 		//dinner time; dinnerInterval)
//     var currentLag, maxInterval, dinnerInterval;

// 		//These represents the participants time values 
		var weekendSleepTime = localStore.weekendSleepTime.split(":");
		var weekendWakeTime = localStore.weekendWakeTime.split(":");
		var weekdaySleepTime = localStore.weekdaySleepTime.split(":");
		var weekdayWakeTime = localStore.weekdayWakeTime.split(":");
// 		//Then you can declare any values that you might use more than once such as the number of milliseconds in a day
   	var day = 86400000;
//    	var minDiaryLag = 6300000;
//    	var randomDiaryLag = 1800000;
//    	var minDiaryLagAfterDinner = 5400000;

// 		//This is a loop that repeats this block of codes for the number of days there are in the experience sampling period
// 		//Replace X with the number of days in the experience sampling period (e.g., collecting data for 7 days, replace X with 7)
// 		//Note that iOS apps can only have 64 unique notifications, so you should keep that in mind if you are collecting data 
// 		//for more than longer periods of time
    for (i = 0; i < 15; i++) {
// 		//The code below (up to "else { nightlyLag = ...}" is only necessary if you allow the daily data collection period to vary across 
// 		//weekdays and weekends
        var alarmDay = dayOfWeek + 1 + i;
        if (alarmDay > 6) {alarmDay = alarmDay-7;}
        //enter time weekendDinnerTime hour and then enter weekendDinnerTime minute
   			if (alarmDay > 6) {alarmDay = alarmDay - 7;}
   			if (alarmDay == 0 || alarmDay == 6) {
   				currentMaxHour = Number(weekendSleepTime[0]);
   				currentMaxMinutes = Number(weekendSleepTime[1]);
   				currentMinHour = Number(weekendWakeTime[0]);
   				currentMinMinutes = Number(weekendWakeTime[1]);
   				if (alarmDay == 0) {
   					nextMinHour = Number(weekdayWakeTime[0]);
   					nextMinMinutes = Number(weekdayWakeTime[1]);
   				}
   				else {
   					nextMinHour = Number(weekendWakeTime[0]);
   					nextMinMinutes = Number(weekendWakeTime[1]);
   				}
   				currentLag = (((((24 - Number(currentHour) + Number(weekendWakeTime[0]))*60) - Number(currentMinute) + Number(weekendWakeTime[1]))*60)*1000);
				
   			}
   			else {
   				currentMaxHour = Number(weekdaySleepTime[0]);
   				currentMaxMinutes = Number(weekdaySleepTime[1]);
   				currentMinHour = Number(weekdayWakeTime[0]);
   				currentMinMinutes = Number(weekdayWakeTime[1]);   				
   				if (alarmDay == 5) {
   					nextMinHour = Number(weekendWakeTime[0]);
   					nextMinMinutes = Number(weekendWakeTime[1]);
   				}
   				else {
   					nextMinHour = Number(weekdayWakeTime[0]);
   					nextMinMinutes = Number(weekdayWakeTime[1]);   				
   				}
                currentLag = (((((24 - Number(currentHour) + Number(weekdayWakeTime[0]))*60) - Number(currentMinute) + Number(weekdayWakeTime[1]))*60)*1000);
   			}
   			if (alarmDay == 5 || alarmDay == 0) {nightlyLag = currentLag;}
   			else {
            	nightlyLag= (((((24 - Number(currentHour) + Number(nextMinHour))*60) - Number(currentMinute) + Number(nextMinMinutes))*60)*1000);
   			}

//         //The maxInterval is the number of milliseconds between wakeup time and dinner time
        	maxInterval = (((((Number(currentMaxHour) - Number(currentMinHour))*60) + Number(currentMaxMinutes) - Number(currentMinMinutes))*60)*1000);
        	var halfInterval =  maxInterval/2
// 			//This part of the code calculates how much time there should be between the questionnaires
// 			//Change X to the minimum amount of time that should elapse between beeps in seconds
// 			//Change Y to the amount of additional time in seconds that should elapse to reach the maximum amount of time
// 			//The part of the code that accompanies Y randomly generates a number that allows for notifications to occur randomly between X and X+Y after the previous beep
// 			//That is, X + Y = maximum amount of time that can elapse between beeps
// 
// 			//If designing an interval-based design, delete "Math.round(Math.random()*Y)+" and replace X with the amount of time in seconds between each beep
   			interval1 = Number(currentLag) + (Number(Math.round(Math.random()*halfInterval)+1800000)) + day*i;
   			interval2 = Number(currentLag) + Number(halfInterval) + (Number(Math.round(Math.random()*(halfInterval- 3600000)))) + day*i;
   				
   			if (interval2 < (Number(interval1) + Number(10800000))){
   				interval2 = Number(interval1) + Number(10800000) + (Number(Math.round(Math.random()*5400000))) ;
   			}
// 			else {
				date1 = new Date(now + interval1);
        		date2 = new Date(now + interval2);
        		epoch1 = date1.getTime();
        		epoch2 = date2.getTime();
        		notifications.push(epoch1);
        		notifications.push(epoch2);
			//This part of the code calculates the time when the notification should be sent by adding the time interval to the current date and time        
// 				alert ("i'm in the interval2 >= interval1 + 7200000 statement" )
// 			//This part of the code calculates a unique ID for each notification             		
        		a = 101+(Number(i)*100);
        		b = 102+(Number(i)*100);
        		
// 			//This part of the code schedules the notifications
        		cordova.plugins.notification.local.schedule([
        			{icon: 'ic_launcher', id: a, text: 'Time for your next Diary Survey!', title: 'Diary Surveys', trigger: {at: new Date(epoch1)} }, 
        			{icon: 'ic_launcher', id: b, text: 'Time for your next Diary Survey!', title: 'Diary Surveys', trigger: {at: new Date(epoch2)}}
        			]);
        		
// 			//This part of the code records when the notifications are scheduled for and sends it to the server
        		localStore['notification_' + i + '_1'] = localStore.participant_id + "_" + a + "_" + date1;
        		localStore['notification_' + i + '_2'] = localStore.participant_id + "_" + b + "_" + date2;        		
//    			}
			localStore.notifications=notifications;
//    			alert("notifications are " + notifications);
    }
},

//Stage 4 of Customization
//Uncomment lines inside the snoozeNotif function to test the snooze scheduling notification function
//Replace X with the number of seconds you want the app to snooze for (e.g., 10 minutes is 600 seconds)
//You can also customize the Title of the message, the snooze message that appears in the notification
snoozeNotif:function() {
//     var now = new Date().getTime(), snoozeDate = new Date(now + X*1000);
    var id = '99';
    cordova.plugins.notification.local.schedule({
                                         icon: 'ic_launcher',
                                         id: id,
                                         title: 'Daily Surveys',
                                         text: 'Time to complete your Daily Surveys!',
                                         trigger: {in: 10, unit: 'minute'},
                                         });
},
dataSendingNotif:function() {
    var now = new Date().getTime();
    var id = '98';
    cordova.plugins.notification.local.schedule({id: id, title: 'MTurk Daily Survey Study', text: 'Please try resending your data now!', trigger: {in: 30, unit: 'minute'}, icon: 'drawable://ic_launcher_transparent'});
},
//This function forces participants to respond to an open-ended question if they have left it blank
validateResponse: function(data){
        var text = data.val();
//         console.log(text);
        if (text === ""){
        	return false;
        } else { 
        	return true;
        }
    }, 
validateNumber: function(data){
        var num = data.val();
//         console.log(text);
		if (num === "") {
			return false
		}
        else if (isNaN(num)){
        	return false;
        } 
        else { 
        	return true;
        }
    },  
validateTime: function(data){
	var time = data.val();
	if (time=== ""){
		return false	
	}
	else {
		return true
	}
}, 
testNotif:function() {
    var id = '9999';
    cordova.plugins.notification.local.schedule({
                                         icon: 'ic_launcher',
                                         id: id,
                                         title: 'Daily Surveys',
                                         text: 'Your test notification has fired!',
                                         trigger: {in: 2, unit: 'second'},
                                         });
},
randomOrder: function (array){	
	var currentIndex = array.length, temporaryValue, randomIndex;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
    	randomIndex = Math.floor(Math.random() * currentIndex);
    	currentIndex -= 1;

    	// And swap it with the current element.
    	temporaryValue = array[currentIndex];
    	array[currentIndex] = array[randomIndex];
    	array[randomIndex] = temporaryValue;
  	}
	localStore.order = array;
	return array;
},

getOccurrence: function(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
},
};
