"use strict";

//import * as utils from "./utils.js"
//import processData from "./saveData.js";

/**
 * A Trial aggregates the information needed to run a single judge-advisor system trial.
 */
class Trial 
{
    constructor(id, args = {}) 
    {
        for (let key in args) 
        {
            if (args.hasOwnProperty(key))
                this[key] = args[key];
        }

        this.id = id;
        this.scenarioID = typeof args.scenarioID === 'undefined'? null : args.scenarioID;
        this.trueCondition = typeof args.trueCondition === 'undefined'? null : args.trueCondition;
        this.trialInfoSet = typeof args.trialInfoSet === 'undefined'? {} : args.trialInfoSet;
        this.trialCost = typeof args.trialCost === 'undefined'? 0 : args.trialCost
    }
}

class Structure {

	/**
     * @constructor
     *
     * @param {Object} [args={}] - properties to assign to the Governor
     * @param {Trial[]} [args.trials=[]] - trial list
     * @param {int} [args.currentTrialIndex=0] - index of current trial in trial list
     * @param {string} [args.completionURL=''] - URL to which to refer participants for payment
     *
     */
	constructor(args = {}) 
	{
        this.numOfTrials = args.numOfTrials || 0;
        this.currentTrialIndex = args.currentTrialIndex || 0;
        this.completionURL = typeof args.completionURL === 'undefined'? '' : args.completionURL;
        this.timeStart = typeof args.timeStart === 'undefined' ? (new Date).getTime(): args.timeStart;
        this.scenarioObject = typeof args.scenarioObject === 'undefined'? [] : args.scenarioObject;
        this.trials = typeof args.scenarioObject === 'undefined' ? [] : Structure.addTrials(this.scenarioObject, this.numOfTrials);
    }

     /**
     * Upgrade stored trial details to genuine trials
     * @param {Object[]} trials - trials stored as JSON-compressed objects
     * @return {Trial[]} - trials expanded to be Trial objects
     */
    static addTrials(scenarioObject, len) 
    {
        let out = [];
        for(let i=0; i<len; i++) {
            out[i] = new Trial(i+1, {
            	scenarioID: scenarioObject[i]["ID"], 
            	trueCondition: scenarioObject[i]["True Condition"], 
            	//trialInfoSet: ((scenarioObject[i]).delete["True Condition"]).delete["ID"]
              trialInfoSet: scenarioObject[i]
            });
        }
        return out;
    }

    /**
     * @return {Trial} - the current trial
     */
    get currentTrial() {return this.trials[this.currentTrialIndex];}

    /** Enable or disable fullscreen display
     * Adapted from: https://www.w3schools.com/howto/howto_js_fullscreen.asp
     * @param {boolean} [enter=true] - whether to enter fullscreen
     */
    fullscreenMode(enter = true) 
    {
        /* Get the documentElement (<html>) to display the page in fullscreen */
        let elem = document.documentElement;

        /* View in fullscreen */
        if(enter) {
            if (elem.requestFullscreen)
                elem.requestFullscreen();
            else if (elem.mozRequestFullScreen)  /* Firefox */
                elem.mozRequestFullScreen();
            else if (elem.webkitRequestFullscreen)  /* Chrome, Safari and Opera */
                elem.webkitRequestFullscreen();
            else if (elem.msRequestFullscreen) /* IE/Edge */
                elem.msRequestFullscreen();
        } else {
            // don't exit if we're not in fullscreen mode
            if(document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen)
                return;
            if (document.exitFullscreen)
                document.exitFullscreen();
            else if (document.mozCancelFullScreen)  /* Firefox */
                document.mozCancelFullScreen();
            else if (document.webkitExitFullscreen)  /* Chrome, Safari and Opera */
                document.webkitExitFullscreen();
            else if (document.msExitFullscreen)  /* IE/Edge */
                document.msExitFullscreen();
        }
    }

    processData(data) 
    {
        // Data about the participant
        let participantData = {
            id: data.participantId,
            groupId: typeof data.groupId === 'undefined'? null : data.groupId,
            blockCount: data.blockCount,
            blockLength: data.blockLength,
            difficultyStep: data.difficultyStep,
            dotCount: data.dotCount,
            preTrialInterval: data.preTrialInterval,
            preStimulusInterval: data.preStimulusInterval,
            stimulusDuration: data.stimulusDuration,
            feedbackDuration: data.feedbackDuration,
            changeDuration: data.changeTime,
            timeStart: data.timeStart,
            timeEnd: data.timeEnd,
            experimentDuration: data.timeEnd - data.timeStart
        };

        // Questionnaires
        let questionnaireData = [];
        if(typeof data.questionnaires !== 'undefined')
            for (let q=0; q<data.questionnaires.length; q++)
                if(data.questionnaires[q])
                {
                    questionnaireData.push(flattenQuestionnaireData(data.questionnaires[q], participantData.id))
                }
        participantData.questionnaires = questionnaireData;

        // Trials
        let trialData = [];
        for (let t=0; t<data.trials.length; t++)
            trialData.push(flattenTrialData(data.trials[t], participantData.id));
        participantData.trials = trialData;

        // Debrief stuff
        participantData.debrief = [];
        if(typeof data.debrief !== 'undefined') {
            if(data.debrief)
            {
                participantData.debrief = flattenDebriefData(data.debrief, participantData.id);
            }
        }

        return participantData;
    }

    /**
     * Compile the data in this governor ready for sending, including a processed form
     * @return {Object} a JSON object with JSON strings containing rawData and processedData
     */
    compileSelf() 
    {
        return {
            rawData: JSON.stringify(this),
            processedData: JSON.stringify(processData(this))
        }
    }

    authenticate(datum) 
    {
        try
        {
            fetch("../saveJSONerr.php",
            {method: "POST", body: datum});
        }
        catch(e)
        {
            console.log(e);
            let err = 'JS - Caught exception: ' + e;
                        fetch("../errorSave.php",
            {method: "POST", body: datum});
        }
    }


    /**
     * Send all the data in the governor object to a backend which will save it to a file.
     */
    exportGovernor() 
    {
        let ask = new XMLHttpRequest();
        ask.open('POST', '../saveJSONerr.php', true);
        ask.onreadystatechange = function() {
            if (this.readyState===4 && this.status===200) {
                let text = "";
                try {
                    text = JSON.parse(this.responseText);
                } catch(e) {
                    text = this.responseText;
                }
            }
        };
        ask.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        let info = encodeURI('data='+JSON.stringify(this.compileSelf()));
        let bla = decodeURI(info).substr(5);
        this.authenticate(info);
       // ask.send(info);
    }

        /**
     * Save the data sent from the plugin in the Trial object
     *
     * @param {Object} pluginData - response data sent by a jsPsych plugin
     */
    storePluginData(pluginData) {
        if (Object.keys(this.currentTrial).indexOf('pluginResponse') === -1)
            this.currentTrial.pluginResponse = [];
        // Save this trial data (jspsych would do this for us, but we have access to a bunch of stuff it doesn't
        this.currentTrial.pluginResponse.push(pluginData);
    }
}
