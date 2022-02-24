var jsPsychFreeTextRankedList = (function (jspsych) {
  'use strict';

  const info = {
      name: "free-text-ranked-list",
      parameters: 
      {
      	  /** Any content here will be displayed under the button. */
          prompt: {
              type: jspsych.ParameterType.HTML_STRING,
              pretty_name: "Prompt",
              default: null,
          },
          /** How long to show the trial. */
          trial_duration: {
              type: jspsych.ParameterType.INT,
              pretty_name: "Trial duration",
              default: null,
          },
          /** If true, then trial will end when user responds. */
          response_ends_trial: {
              type: jspsych.ParameterType.BOOL,
              pretty_name: "Response ends trial",
              default: true,
          },
          /** The text that appears on the button to continue to the next trial. */
          button_label: {
              type: jspsych.ParameterType.STRING,
              pretty_name: "Button label",
              default: "Continue",
          },
          /** If true, the trial does not start with any items in the list */
          start_empty: {
          	type: jspsych.ParameterType.BOOL,
            pretty_name: "Start Empty",
            default: true,
          },
          /** If start_empty is false, this is the list of ordered items to show from the start of the trial */
          starting_list: {
          	  type: jspsych.ParameterType.STRING,
              pretty_name: "Starting List",
              default: [],
              array: true,
          },
          /** If true, enforce a limit on the number of items that can be added to the list. **/
          item_limit: {
          	type: jspsych.ParameterType.BOOL,
          	pretty_name: "Item Limit",
          	default: false,
          },
          /** The minimum number of items that should be added to the list before submitting. **/
          item_minimum: {
          	type: jspsych.ParameterType.INT,
          	pretty_name: "Item Minimum",
          	default: 1
          },
          /** Set the maxmimum number of items that can be added if item_limit is true **/
          max_items: {
          	type: jspsych.ParameterType.INT,
          	pretty_name: 'Max Item Number',
          	default: 5
          },
          /** Sets the minimum value of the sliders. */
          min: {
              type: jspsych.ParameterType.INT,
              pretty_name: "Min slider",
              default: 0,
          },
          /** Sets the maximum value of the sliders */
          max: {
              type: jspsych.ParameterType.INT,
              pretty_name: "Max slider",
              default: 100,
          },
          /** Sets the starting value of the sliders */
          slider_start: {
              type: jspsych.ParameterType.INT,
              pretty_name: "Slider starting value",
              default: 50,
          },
          /** Sets the step of the sliders */
          step: {
              type: jspsych.ParameterType.INT,
              pretty_name: "Step",
              default: 1,
          },
          /** Width of the slider in pixels. */
          slider_width: {
              type: jspsych.ParameterType.INT,
              pretty_name: "Slider width",
              default: null,
          }
      }
  };
  /**
   * **free-text-ranked-list**
   *
   * jsPsych plugin for being able to add items to list via typing 
   * and then dragging to rearrange the list
   *
   * @author Sriraj Aiyer
   * @see {@link https://www.jspsych.org/plugins/jspsych-free-sort/ free-sort plugin documentation on jspsych.org}
   */
  class FreeTextRankedListPlugin {
      constructor(jsPsych) 
      {
          this.jsPsych = jsPsych;
      }
      trial(display_element, trial) 
      { 
      	  var height, width;
          var html = "";
	  	  // store response
          var response = {
              rt: null,
              responses: [],
              confidence: [],
              startinglist: []
          };


          if (trial.prompt !== null) {
              html += trial.prompt;
          }

          html += '<ul id="sortList"></ul>';

          // add submit button
          html +=
              '<button id="jspsych-canvas-slider-response-next" class="jspsych-btn" ' +
                  (trial.start_empty ? "disabled" : "") +
                  ">" +
                  trial.button_label +
                  "</button>";
          display_element.innerHTML = html;

          let sortList = document.getElementById("sortList");

          if (!(trial.start_empty)) 
          {
          	var startingList = trial.starting_list;
          	response.startinglist = startingList;
          	response.responses = startingList;
          	for (let i=0; i<startingList.length; i++)
          	{
          		let li = document.createElement("li");
          		li.innerHTML = '<li>' + startingList[i] + '<span class="close">x</span></li>';
          		li.id = "ListElement" + i;
          		li.className = "ListElement";
          		li.draggable = true;
          		sortList.appendChild(li);
          	}

          	let items = sortList.getElementsByTagName("li"), current=null;

          	// MAKE ITEMS DRAGGABLE + SORTABLE
			  for (let i of items) 
			  {
			    // ATTACH DRAGGABLE
			    //i.draggable = true;
			    
			    // DRAG START - YELLOW HIGHLIGHT DROPZONES
			    i.ondragstart = (ev) => {
			      current = i;
			      for (let it of items) {
			        if (it != current) { it.classList.add("hint"); }
			      }
			    };
			    
			    // DRAG ENTER - RED HIGHLIGHT DROPZONE
			    i.ondragenter = (ev) => {
			      //if (i != current) { i.classList.add("active"); }
			      i.classList.add("active");
			    };

			    // DRAG LEAVE - REMOVE RED HIGHLIGHT
			    i.ondragleave = () => {
			      i.classList.remove("active");
			    };

			    // DRAG END - REMOVE ALL HIGHLIGHTS
			    i.ondragend = () => { for (let it of items) {
			        it.classList.remove("hint");
			        it.classList.remove("active");
			    }};
			 
			    // DRAG OVER - PREVENT THE DEFAULT "DROP", SO WE CAN DO OUR OWN
			    i.ondragover = (evt) => { evt.preventDefault(); };
			 
			    // ON DROP - DO SOMETHING
			    i.ondrop = (evt) => {
			      evt.preventDefault();
			      if (i != current) {
			        let currentpos = 0, droppedpos = 0;
			        for (let it=0; it<items.length; it++) {
			          if (current == items[it]) { currentpos = it; }
			          if (i == items[it]) { droppedpos = it; }
			        }
			        if (currentpos < droppedpos) {
			          i.parentNode.insertBefore(current, i.nextSibling);
			        } else {
			          i.parentNode.insertBefore(current, i);
			        }
			      }
			    };
	         }

	         /* Get all elements with class="close" */
			var closebtns = document.getElementsByClassName("close");
			console.log(closebtns);

			/* Loop through the elements, and hide the parent, when clicked on */
			for (var i = 0; i < closebtns.length; i++) 
			{
			  let id = "ListElement" + i;
			  console.log(id);
			  closebtns[i].addEventListener("click", function() 
			  {
			  	let ele = document.getElementById(id);
			    ele.style.display = 'none';
			    ele.remove();
			  });
			}
	      }

        let plus = document.createElement("li");
      	sortList.appendChild(plus);
  		plus.innerHTML = '<li><span class="add">+</span></li>';
  		plus.addEventListener("click", function() 
		{
			plus.innerHTML = '<li><input type="text" id="inputText" autofocus placeholder="Enter the diagnosis that you want to add"></input><span class="confirm" id="confirm">+</span></li>';
			let confirm = document.getElementById("confirm"); 
			confirm.addEventListener("click", function()
			{
				var q_element = document.getElementById("inputText");
              	var val = q_element.value;
				response.responses.push(val);
				let num = response.response.length;
				let li = document.createElement("li");
				sortList.appendChild(li);
      			li.innerHTML = '<li>' + val + '<span class="close">x</span></li>';
      			li.id = "ListElement" + num; 
      			let plus = document.createElement("li");
      			sortList.appendChild(plus);
  				plus.innerHTML = '<li><span class="add">+</span></li>';
			});
		});

          // function to end trial when it is time
          const end_trial = () => {
              // kill any remaining setTimeout handlers
              this.jsPsych.pluginAPI.clearAllTimeouts();
              // gather the data to store for the trial
              var trial_data = {
                  rt: response.rt,
                  response: response.responses,
                  confidence: response.confidence,
                  startinglist: response.startinglist
              };
              // clear the display
              display_element.innerHTML = "";
              // move on to the next trial
              this.jsPsych.finishTrial(trial_data);
          };
          // end trial if time limit is set
          if (trial.trial_duration !== null) {
              this.jsPsych.pluginAPI.setTimeout(() => {
                  end_trial();
              }, trial.trial_duration);
          }
      }
  }
  FreeTextRankedListPlugin.info = info;

  return FreeTextRankedListPlugin;
})(jsPsychModule);