"use strict";

import * as utils from "./utils.js"

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
        for (let key in args) {
            if (args.hasOwnProperty(key))
                this[key] = args[key];
        }
        this.numOfTrials = args.numOfTrials || 0;
        this.currentTrialIndex = args.currentTrialIndex || 0;
        this.completionURL = typeof args.completionURL === 'undefined'? '' : args.completionURL;
        this.timeStart = typeof args.timeStart === 'undefined' ? (new Date).getTime(): args.timeStart;
        this.scenarioObject = typeof args.scenarioObject === 'undefined' ? {} : args.scenarioObject;
        this.trials = typeof args.scenarioObject === 'undefined' ? [] : Governor.addTrials(numOfTrials);
    }

     /**
     * Upgrade stored trial details to genuine trials
     * @param {Object[]} trials - trials stored as JSON-compressed objects
     * @return {Trial[]} - trials expanded to be Trial objects
     */
    static addTrials(len) 
    {
        let out = [];
        for(let i=0; i<len; i++) {
            out[i] = new Trial(i+1, {
            	scenarioID: scenarioObject[i]["ID"], 
            	trueCondition: scenarioObject[i]["True Condition"], 
            	trialInfoSet: ((scenarioObject[i]).delete["True Condition"]).delete["ID"];
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
}
