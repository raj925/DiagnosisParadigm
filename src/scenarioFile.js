let scenarios = [
  {
    "ID": 1,
  	"True Condition": "Unstable Ventricular Tachycardia",
    "Bedside Tests": {
    	"Take Pulse": {
            "Output": "170/min, regular",
            "Duration": 20
        },
    	"Measure Blood Pressure": {
            "Output": "80/40 mmHG",
            "Duration": 60
        },
    	"Assess Respiratory Rate": {
            "Output": "40/min",
            "Duration": 20
        },
    	"Auscultate Lungs": {
            "Output": "Vesicular breath sound over all lung fields, tachypnea",
            "Duration": 45
        },
    	"Auscultate the Heart": {
            "Output": "Tachycardic, pure, rhythmic",
            "Duration": 30
        },
    	"Assess Pupils": {
            "Output": "Medium-wide, isocor, normal light reaction",
            "Duration": 30
        },
    	"Measure Blood Glucose": {
            "Output": "110 mg/dl",
            "Duration": 60
        },
    	"Pulse Oximetry": {
            "Output": "88%, heart rate 170/min, regular",
            "Duration": 30
        },
    	"Measure Temperature": {
            "Output": "36.8 degrees celsius",
            "Duration": 30
        },
    	"3-channel ECG": {
            "Output": "ID1ECG3Channel.jpg",
            "Duration": 90
        },
    	"12-lead ECG": {
            "Output": "ID1ECG12Channel.jpg",
            "Duration": 180
        }
    },
    "Further Diagnostics": {
    	"X-ray Thorax": {
            "Output": "ID1XRAYThorax.jpg",
            "Duration": 1200
        },
        "Arterial ABG": {
            "Output": "pH: 7.3, pO2: 90mmHG, pCO2: 39mmHG, BE: -1, Hb: 10.8 mg/dl, K+ 3.0 mmol/l",
            "Duration": 300
        },
        "Sonography of the Thorax": {
            "Output": "No evidence of pleural effusion",
            "Duration": 900
        },
        "Transthoracic Cardiac Echo": {
            "Output": "You have registered the TTE with your cardiology colleague, who can be with you in 30 minutes at the earliest.",
            "Duration": 0
        },
        "CT Thorax Without Contrast Medium": {
            "Output": "Lungs ventilated on both sides, no infiltrate, globally discrete increase in tension in the sense of pulmonary edema.",
            "Duration": 1500
        },
        "CT Thorax With Constrast Medium": {
            "Output": "Lungs ventilated on both sides, no infiltrate, globally discrete increase in tension in the sense of pulmonary edema, no signs of perfusion restriction.",
            "Duration": 1800
        }
    },
    "Patient Interview": {
        "Any current complaints?": {
            "Output": "I feel my heart rate rising. I can hardly breathe and feel pressure on my chest.",
            "Duration": 20
        },
        "When did the current complaints start?": {
            "Output": "Very suddenly, doctor, 10 minutes ago.",
            "Duration": 20
        },
        "Pre-existing conditions": {
            "Output": "Yes, high blood pressure, diabetes and joint pains.",
            "Duration": 20
        },
        "Home medication?": {
            "Output": "I take Norvasc for my blood pressure and something for my joints. And water pill.",
            "Duration": 20
        },
        "Allergies?": {
            "Output": "Only Penicillin.",
            "Duration": 20
        },
        "Have you had these complaints before?": {
            "Output": "No, Doctor.",
            "Duration": 20
        },
    },
    "Protocols and Reports": {
        "Pre-ECG": {
            "Output": "Image required",
            "Duration": 60
        },
        "Previous X-ray Thorax": {
            "Output": "ID1XRAYThoraxPrevious.jpg",
            "Duration": 60
        },
        "OP Protocol": {
            "Output": "Diagnosis: right pertrochanteric femur fracture, Therapy: Implantation of a total endoprosthesis, cemented, right side, Drains: 2 Redon drans on the right under suction, Arrangements: Exercise passively from postoperative day 1, weight bearing limits up to postoperative day 3 15kg, then increase by 10ky per day. Prophylactic anticoagulation, daily wound control, daily drainage control, daily dressing change.",
            "Duration": 60
        },
        "Anaesthesia Protocol": {
            "Output": "Image required",
            "Duration": 60
        },
        "Recovery Room Protocol": {
            "Output": "Image required",
            "Duration": 60
        },
        "Old Doctor's Letter": {
            "Output": "Image required",
            "Duration": 180
        }
    },
    // "Patient Chart": {
    //         "Output": "Image required",
    //         "Duration": 60
    // },
    "First Measures": {
        "Storage": {
            "Output": "Image required",
            "Duration": 20
        },
        "Oxygen Administration": {
            "Output": "Successfully performed",
            "Duration": 30
        },
        "Nitro Spray": {
            "Output": "Successfully performed",
            "Duration": 20
        },
        "Salbutamol Spray": {
            "Output": "Successfully performed",
            "Duration": 20
        },
        "Place Venous Access": {
            "Output": "Successfully performed",
            "Duration": 60
        },
        "Declare Code Blue": {
            "Output": "The REA team has been informed and will need about 10 minutes to reach you.",
            "Duration": 20
        }
    }
  },
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  {
    "ID": 2,
    "True Condition": "Acute Exacerbated COPD",
    "Bedside Tests": {
        "Take Pulse": {
            "Output": "140/min, regular",
            "Duration": 20
        },
        "Measure Blood Pressure": {
            "Output": "140/90 mmHG",
            "Duration": 60
        },
        "Assess Respiratory Rate": {
            "Output": "40/min",
            "Duration": 20
        },
        "Auscultate Lungs": {
            "Output": "Discreet humming in the right midfield, tachypnea, markedly prolonged expierium.",
            "Duration": 45
        },
        "Auscultate the Heart": {
            "Output": "Tachycardic, pure, rhythmic",
            "Duration": 30
        },
        "Assess Pupils": {
            "Output": "Medium-wide, isocor, normal light reaction",
            "Duration": 30
        },
        "Measure Blood Glucose": {
            "Output": "90 mg/dl",
            "Duration": 60
        },
        "Pulse Oximetry": {
            "Output": "88%, heart rate 140/min, regular",
            "Duration": 30
        },
        "Measure Temperature": {
            "Output": "37.5 degrees celsius",
            "Duration": 30
        },
        "3-channel ECG": {
            "Output": "ID2ECG3Channel.jpg",
            "Duration": 90
        },
        "12-lead ECG": {
            "Output": "ID2ECG12Channel.jpg",
            "Duration": 180
        }
    },
    "Further Diagnostics": {
        "X-ray Thorax": {
            "Output": "ID2XRAYThorax.jpg",
            "Duration": 1200
        },
        "Arterial ABG": {
            "Output": "pH: 7.33, pO2: 130mmHG, pCO2: 48mmHG, BE: -8, Hb: 12.2 mg/dl, K+ 4.2 mmol/l",
            "Duration": 300
        },
        "Sonography of the Thorax": {
            "Output": "No evidence of pleural effusion",
            "Duration": 900
        },
        "Transthoracic Cardiac Echo": {
            "Output": "You have registered the TTE with your cardiology colleague, who can be with you in 30 minutes at the earliest.",
            "Duration": 0
        },
        "CT Thorax Without Contrast Medium": {
            "Output": "Lungs ventilated on both sides, proliferation of signs in the lingula in the sense of an infiltrate, global signs of a pre-existing COPD.",
            "Duration": 1500
        },
        "CT Thorax With Constrast Medium": {
            "Output": "Lungs ventilated on both sides, proliferation of signs in the lingula in the sense of an infiltrate, global signs of a pre-existing COPD, regular perfusion.",
            "Duration": 1800
        }
    },
    "Patient Interview": {
        "Any current complaints?": {
            "Output": "Coughing and shortness of breath.",
            "Duration": 20
        },
        "When did the current complaints start?": {
            "Output": "It started in the last few days.",
            "Duration": 20
        },
        "Pre-existing conditions": {
            "Output": "High blood pressure and diabetes.",
            "Duration": 20
        },
        "Home medication?": {
            "Output": "I have an inhaler with Salbutamol. And I have heart pill and water pill.",
            "Duration": 20
        },
        "Allergies?": {
            "Output": "Only Penicillin.",
            "Duration": 20
        },
        "Have you had these complaints before?": {
            "Output": "Had it once 2 years ago in the winter. But that surely cam from smoking.",
            "Duration": 20
        },
    },
    "Protocols and Reports": {
        "Pre-ECG": {
            "Output": "Image required",
            "Duration": 60
        },
        "Previous X-ray Thorax": {
            "Output": "ID2XRAYPreviousThorax.jpg",
            "Duration": 60
        },
        "OP Protocol": {
            "Output": "Diagnosis: right pertrochanteric femur fracture, Therapy: Implantation of a total endoprosthesis, cemented, right side, Drains: 2 Redon drans on the right under suction, Arrangements: Exercise passively from postoperative day 1, weight bearing limits up to postoperative day 3 15kg, then increase by 10ky per day. Prophylactic anticoagulation, daily wound control, daily drainage control, daily dressing change.",
            "Duration": 60
        },
        "Anaesthesia Protocol": {
            "Output": "Image required",
            "Duration": 60
        },
        "Recovery Room Protocol": {
            "Output": "Image required",
            "Duration": 60
        },
        "Old Doctor's Letter": {
            "Output": "Image required",
            "Duration": 180
        }
    },
    // "Patient Chart": {
    //         "Output": "Image required",
    //         "Duration": 60
    // },
    "First Measures": {
        "Storage": {
            "Output": "Image required",
            "Duration": 20
        },
        "Oxygen Administration": {
            "Output": "Successfully performed",
            "Duration": 30
        },
        "Nitro Spray": {
            "Output": "Successfully performed",
            "Duration": 20
        },
        "Salbutamol Spray": {
            "Output": "Successfully performed",
            "Duration": 20
        },
        "Place Venous Access": {
            "Output": "Successfully performed",
            "Duration": 60
        },
        "Declare Code Blue": {
            "Output": "The REA team has been informed and will need about 10 minutes to reach you.",
            "Duration": 20
        }
    }
  },
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  {
    "ID": 3,
    "True Condition": "Hypertensive Pulmonary Edema",
    "Bedside Tests": {
        "Take Pulse": {
            "Output": "130/min, regular",
            "Duration": 20
        },
        "Measure Blood Pressure": {
            "Output": "210/120 mmHG",
            "Duration": 60
        },
        "Assess Respiratory Rate": {
            "Output": "40/min",
            "Duration": 20
        },
        "Auscultate Lungs": {
            "Output": "Ubiquitous coarse-bubble rales, tachypnea",
            "Duration": 45
        },
        "Auscultate the Heart": {
            "Output": "Tachycardic, pure, rhythmic",
            "Duration": 30
        },
        "Assess Pupils": {
            "Output": "Wide, isocor, normal light response",
            "Duration": 30
        },
        "Measure Blood Glucose": {
            "Output": "110 mg/dl",
            "Duration": 60
        },
        "Pulse Oximetry": {
            "Output": "87%, heart rate 130/min, regular",
            "Duration": 30
        },
        "Measure Temperature": {
            "Output": "36.8 degrees celsius",
            "Duration": 30
        },
        "3-channel ECG": {
            "Output": "ID3ECG3Channel.jpg",
            "Duration": 90
        },
        "12-lead ECG": {
            "Output": "ID3ECG12Channel.jpg",
            "Duration": 180
        }
    },
    "Further Diagnostics": {
        "X-ray Thorax": {
            "Output": "ID3XRAYThorax.jpg",
            "Duration": 1200
        },
        "Arterial ABG": {
            "Output": "pH: 7.3, pO2: 90mmHG, pCO2: 39mmHG, BE: -1, Hb: 10.8 mg/dl, K+ 3.8 mmol/l",
            "Duration": 300
        },
        "Sonography of the Thorax": {
            "Output": "No evidence of pleural effusion",
            "Duration": 900
        },
        "Transthoracic Cardiac Echo": {
            "Output": "You have registered the TTE with your cardiology colleague, who can be with you in 30 minutes at the earliest.",
            "Duration": 0
        },
        "CT Thorax Without Contrast Medium": {
            "Output": "Lungs ventilated on both sides, no infiltrate, globally discrete increase in tension in the sense of pulmonary edema.",
            "Duration": 1500
        },
        "CT Thorax With Constrast Medium": {
            "Output": "Lungs ventilated on both sides, no infiltrate, globally discrete increase in tension in the sense of pulmonary edema, regular perfusion",
            "Duration": 1800
        }
    },
    "Patient Interview": {
        "Any current complaints?": {
            "Output": "Shortness of breath and pressure on my chest.",
            "Duration": 20
        },
        "When did the current complaints start?": {
            "Output": "Started only today.",
            "Duration": 20
        },
        "Pre-existing conditions": {
            "Output": "High blood pressure and diabetes.",
            "Duration": 20
        },
        "Home medication?": {
            "Output": "I take the water pill and something for joint pain.",
            "Duration": 20
        },
        "Allergies?": {
            "Output": "Penicillin",
            "Duration": 20
        },
        "Have you had these complaints before?": {
            "Output": "No, never this bad before.",
            "Duration": 20
        },
    },
    "Protocols and Reports": {
        "Pre-ECG": {
            "Output": "Image required",
            "Duration": 60
        },
        "Previous X-ray Thorax": {
            "Output": "ID3XRAYThoraxPrevious.jpg",
            "Duration": 60
        },
        "OP Protocol": {
            "Output": "Diagnosis: right pertrochanteric femur fracture, Therapy: Implantation of a total endoprosthesis, cemented, right side, Drains: 2 Redon drans on the right under suction, Arrangements: Exercise passively from postoperative day 1, weight bearing limits up to postoperative day 3 15kg, then increase by 10ky per day. Prophylactic anticoagulation, daily wound control, daily drainage control, daily dressing change.",
            "Duration": 60
        },
        "Anaesthesia Protocol": {
            "Output": "Image required",
            "Duration": 60
        },
        "Recovery Room Protocol": {
            "Output": "Image required",
            "Duration": 60
        },
        "Old Doctor's Letter": {
            "Output": "Image required",
            "Duration": 180
        }
    },
    // "Patient Chart": {
    //         "Output": "Image required",
    //         "Duration": 60
    // },
    "First Measures": {
        "Storage": {
            "Output": "Image required",
            "Duration": 20
        },
        "Oxygen Administration": {
            "Output": "Successfully performed",
            "Duration": 30
        },
        "Nitro Spray": {
            "Output": "Successfully performed",
            "Duration": 20
        },
        "Salbutamol Spray": {
            "Output": "Successfully performed",
            "Duration": 20
        },
        "Place Venous Access": {
            "Output": "Successfully performed",
            "Duration": 60
        },
        "Declare Code Blue": {
            "Output": "The REA team has been informed and will need about 10 minutes to reach you.",
            "Duration": 20
        }
    }
  },
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  {
    "ID": 4,
    "True Condition": "Pneumonia",
    "Bedside Tests": {
        "Take Pulse": {
            "Output": "130/min, regular",
            "Duration": 20
        },
        "Measure Blood Pressure": {
            "Output": "110/65 mmHG",
            "Duration": 60
        },
        "Assess Respiratory Rate": {
            "Output": "30/min",
            "Duration": 20
        },
        "Auscultate Lungs": {
            "Output": "On the right apical side clear gurgling and humming sound otherwise vesicular, tachypnea",
            "Duration": 45
        },
        "Auscultate the Heart": {
            "Output": "Tachycardic, pure, rhythmic",
            "Duration": 30
        },
        "Assess Pupils": {
            "Output": "Medium-wide, isocor, normal light reaction",
            "Duration": 30
        },
        "Measure Blood Glucose": {
            "Output": "85 mg/dl",
            "Duration": 60
        },
        "Pulse Oximetry": {
            "Output": "93%, heart rate 130/min, regular",
            "Duration": 30
        },
        "Measure Temperature": {
            "Output": "38.9 degrees celsius",
            "Duration": 30
        },
        "3-channel ECG": {
            "Output": "ID4ECG3Channel.jpg",
            "Duration": 90
        },
        "12-lead ECG": {
            "Output": "ID4ECG12Channel.jpg",
            "Duration": 180
        }
    },
    "Further Diagnostics": {
        "X-ray Thorax": {
            "Output": "ID4XRAYThorax.jpg",
            "Duration": 1200
        },
        "Arterial ABG": {
            "Output": "pH: 7.33, pO2: 140mmHG, pCO2: 37mmHG, BE: -2, Hb: 11.2 mg/dl, K+ 4.3 mmol/l",
            "Duration": 300
        },
        "Sonography of the Thorax": {
            "Output": "Minor pleural effusion bilterally, ca 150ml",
            "Duration": 900
        },
        "Transthoracic Cardiac Echo": {
            "Output": "You have registered the TTE with your cardiology colleague, who can be with you in 30 minutes at the earliest.",
            "Duration": 0
        },
        "CT Thorax Without Contrast Medium": {
            "Output": "Lungs ventilated on both sides, proliferation of signs with infiltrate in the right upper and middle lobe, dystelectasis basal on both sides, minimal pleural effusion on both sides.",
            "Duration": 1500
        },
        "CT Thorax With Constrast Medium": {
            "Output": "Lungs ventilated on both sides, proliferation of signs with infiltrate in the right upper and middle lobe, dystelectasis basally on both sides, perfusion normal, minimal pleural effusion on both sides.",
            "Duration": 1800
        }
    },
    "Patient Interview": {
        "Any current complaints?": {
            "Output": "I feel very weak. And I think I have a fever. Also a cough.",
            "Duration": 20
        },
        "When did the current complaints start?": {
            "Output": "In the last few days.",
            "Duration": 20
        },
        "Pre-existing conditions": {
            "Output": "Only high blood pressure and some diabetes and gout.",
            "Duration": 20
        },
        "Home medication?": {
            "Output": "The heart pill, B-lock, water-pill, Torem I think and Norvasc, and something for my joint pains.",
            "Duration": 20
        },
        "Allergies?": {
            "Output": "Penicillin",
            "Duration": 20
        },
        "Have you had these complaints before?": {
            "Output": "No never this bad.",
            "Duration": 20
        },
    },
    "Protocols and Reports": {
        "Pre-ECG": {
            "Output": "Image required",
            "Duration": 60
        },
        "Previous X-ray Thorax": {
            "Output": "ID4XRAYThoraxPrevious.jpg",
            "Duration": 60
        },
        "OP Protocol": {
            "Output": "Diagnosis: right pertrochanteric femur fracture, Therapy: Implantation of a total endoprosthesis, cemented, right side, Drains: 2 Redon drans on the right under suction, Arrangements: Exercise passively from postoperative day 1, weight bearing limits up to postoperative day 3 15kg, then increase by 10ky per day. Prophylactic anticoagulation, daily wound control, daily drainage control, daily dressing change.",
            "Duration": 60
        },
        "Anaesthesia Protocol": {
            "Output": "Image required",
            "Duration": 60
        },
        "Recovery Room Protocol": {
            "Output": "Image required",
            "Duration": 60
        },
        "Old Doctor's Letter": {
            "Output": "Image required",
            "Duration": 180
        }
    },
    // "Patient Chart": {
    //         "Output": "Image required",
    //         "Duration": 60
    // },
    "First Measures": {
        "Storage": {
            "Output": "Image required",
            "Duration": 20
        },
        "Oxygen Administration": {
            "Output": "Successfully performed",
            "Duration": 30
        },
        "Nitro Spray": {
            "Output": "Successfully performed",
            "Duration": 20
        },
        "Salbutamol Spray": {
            "Output": "Successfully performed",
            "Duration": 20
        },
        "Place Venous Access": {
            "Output": "Successfully performed",
            "Duration": 60
        },
        "Declare Code Blue": {
            "Output": "The REA team has been informed and will need about 10 minutes to reach you.",
            "Duration": 20
        }
    }
  },
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  {
    "ID": 5,
    "True Condition": "Subacute LAE",
    "Bedside Tests": {
        "Take Pulse": {
            "Output": "130/min, regular",
            "Duration": 20
        },
        "Measure Blood Pressure": {
            "Output": "110/60 mmHG",
            "Duration": 60
        },
        "Assess Respiratory Rate": {
            "Output": "30/min",
            "Duration": 20
        },
        "Auscultate Lungs": {
            "Output": "Vesicular breath sound over all lung fields, tachypnea",
            "Duration": 45
        },
        "Auscultate the Heart": {
            "Output": "Tachycardic, pure, rhythmic",
            "Duration": 30
        },
        "Assess Pupils": {
            "Output": "Medium-wide, isocor, normal light reaction",
            "Duration": 30
        },
        "Measure Blood Glucose": {
            "Output": "110 mg/dl",
            "Duration": 60
        },
        "Pulse Oximetry": {
            "Output": "94%, heart rate 130/min, regular",
            "Duration": 30
        },
        "Measure Temperature": {
            "Output": "37.1 degrees celsius",
            "Duration": 30
        },
        "3-channel ECG": {
            "Output": "ID5ECG3Channel.jpg",
            "Duration": 90
        },
        "12-lead ECG": {
            "Output": "ID5ECG12Channel.jpg",
            "Duration": 180
        }
    },
    "Further Diagnostics": {
        "X-ray Thorax": {
            "Output": "ID5XRAYThorax.jpg",
            "Duration": 1200
        },
        "Arterial ABG": {
            "Output": "pH: 7.32, pO2: 115mmHG, pCO2: 41mmHG, BE: -2, Hb: 10.8 mg/dl, K+ 4.5 mmol/l",
            "Duration": 300
        },
        "Sonography of the Thorax": {
            "Output": "No evidence of pleural effusion",
            "Duration": 900
        },
        "Transthoracic Cardiac Echo": {
            "Output": "You have registered the TTE with your cardiology colleague, who can be with you in 30 minutes at the earliest.",
            "Duration": 0
        },
        "CT Thorax Without Contrast Medium": {
            "Output": "Age-appropriate normal findings",
            "Duration": 1500
        },
        "CT Thorax With Constrast Medium": {
            "Output": "Lungs ventilated bilterally, no evidence of infiltrate or edema, no pleural effusions, lack of contrast in bronchial artery segment 3, otherwise regular perfusion.",
            "Duration": 1800
        }
    },
    "Patient Interview": {
        "Any current complaints?": {
            "Output": "There is some pressure on my chest and I feel I am short of breath. Sometimes my heart stumbles.",
            "Duration": 20
        },
        "When did the current complaints start?": {
            "Output": "Started very suddenly half an hour ago.",
            "Duration": 20
        },
        "Pre-existing conditions": {
            "Output": "I have always had high blood pressure and diabetes and gout. And I had thrombosis in the past.",
            "Duration": 20
        },
        "Home medication?": {
            "Output": "Heart-pill, B-lock, Torem, Norvasc and something for joint pains.",
            "Duration": 20
        },
        "Allergies?": {
            "Output": "Penicillin",
            "Duration": 20
        },
        "Have you had these complaints before?": {
            "Output": "No",
            "Duration": 20
        },
    },
    "Protocols and Reports": {
        "Pre-ECG": {
            "Output": "Image required",
            "Duration": 60
        },
        "Previous X-ray Thorax": {
            "Output": "ID5XRAYThoraxPrevious.jpg",
            "Duration": 60
        },
        "OP Protocol": {
            "Output": "Diagnosis: right pertrochanteric femur fracture, Therapy: Implantation of a total endoprosthesis, cemented, right side, Drains: 2 Redon drans on the right under suction, Arrangements: Exercise passively from postoperative day 1, weight bearing limits up to postoperative day 3 15kg, then increase by 10ky per day. Prophylactic anticoagulation, daily wound control, daily drainage control, daily dressing change.",
            "Duration": 60
        },
        "Anaesthesia Protocol": {
            "Output": "Image required",
            "Duration": 60
        },
        "Recovery Room Protocol": {
            "Output": "Image required",
            "Duration": 60
        },
        "Old Doctor's Letter": {
            "Output": "Image required",
            "Duration": 180
        }
    },
    // "Patient Chart": {
    //         "Output": "Image required",
    //         "Duration": 60
    // },
    "First Measures": {
        "Storage": {
            "Output": "Image required",
            "Duration": 20
        },
        "Oxygen Administration": {
            "Output": "Successfully performed",
            "Duration": 30
        },
        "Nitro Spray": {
            "Output": "Successfully performed",
            "Duration": 20
        },
        "Salbutamol Spray": {
            "Output": "Successfully performed",
            "Duration": 20
        },
        "Place Venous Access": {
            "Output": "Successfully performed",
            "Duration": 60
        },
        "Declare Code Blue": {
            "Output": "The REA team has been informed and will need about 10 minutes to reach you.",
            "Duration": 20
        }
    }
  },
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  {
    "ID": 6,
    "True Condition": "Opiate Overdose",
    "Bedside Tests": {
        "Take Pulse": {
            "Output": "70/min, regular",
            "Duration": 20
        },
        "Measure Blood Pressure": {
            "Output": "100/60 mmHG",
            "Duration": 60
        },
        "Assess Respiratory Rate": {
            "Output": "10/min",
            "Duration": 20
        },
        "Auscultate Lungs": {
            "Output": "Vesicular breath sound over all lung fields, bradypnea",
            "Duration": 45
        },
        "Auscultate the Heart": {
            "Output": "Standard frequency, pure, rhythmic",
            "Duration": 30
        },
        "Assess Pupils": {
            "Output": "Narrow, isocor, slow light reaction",
            "Duration": 30
        },
        "Measure Blood Glucose": {
            "Output": "120 mg/dl",
            "Duration": 60
        },
        "Pulse Oximetry": {
            "Output": "93%, heart rate 70/min, regular",
            "Duration": 30
        },
        "Measure Temperature": {
            "Output": "36.6 degrees celsius",
            "Duration": 30
        },
        "3-channel ECG": {
            "Output": "ID6ECG3Channel.jpg",
            "Duration": 90
        },
        "12-lead ECG": {
            "Output": "ID6ECG12Channel.jpg",
            "Duration": 180
        }
    },
    "Further Diagnostics": {
        "X-ray Thorax": {
            "Output": "ID6XRAYThorax.jpg",
            "Duration": 1200
        },
        "Arterial ABG": {
            "Output": "pH: 7.32, pO2: 120mmHG, pCO2: 50mmHG, BE: -5, Hb: 14.2 mg/dl, K+ 5.1 mmol/l",
            "Duration": 300
        },
        "Sonography of the Thorax": {
            "Output": "No evidence of pleural effusion",
            "Duration": 900
        },
        "Transthoracic Cardiac Echo": {
            "Output": "You have registered the TTE with your cardiology colleague, who can be with you in 30 minutes at the earliest.",
            "Duration": 0
        },
        "CT Thorax Without Contrast Medium": {
            "Output": "Age-appropriate normal findings",
            "Duration": 1500
        },
        "CT Thorax With Constrast Medium": {
            "Output": "Age-appropriate normal findings",
            "Duration": 1800
        }
    },
    "Patient Interview": {
        "Any current complaints?": {
            "Output": "Patient moans in response",
            "Duration": 20
        },
        "When did the current complaints start?": {
            "Output": "I have pain right now",
            "Duration": 20
        },
        "Pre-existing conditions": {
            "Output": "High blood pressure",
            "Duration": 20
        },
        "Home medication?": {
            "Output": "Heart-pill, Torem, Norvasc",
            "Duration": 20
        },
        "Allergies?": {
            "Output": "Penicillin",
            "Duration": 20
        },
        "Have you had these complaints before?": {
            "Output": "Only after surgery",
            "Duration": 20
        },
    },
    "Protocols and Reports": {
        "Pre-ECG": {
            "Output": "Image required",
            "Duration": 60
        },
        "Previous X-ray Thorax": {
            "Output": "ID6XRAYThoraxPrevious.jpg",
            "Duration": 60
        },
        "OP Protocol": {
            "Output": "Diagnosis: right pertrochanteric femur fracture, Therapy: Implantation of a total endoprosthesis, cemented, right side, Drains: 2 Redon drans on the right under suction, Arrangements: Exercise passively from postoperative day 1, weight bearing limits up to postoperative day 3 15kg, then increase by 10ky per day. Prophylactic anticoagulation, daily wound control, daily drainage control, daily dressing change.",
            "Duration": 60
        },
        "Anaesthesia Protocol": {
            "Output": "Image required",
            "Duration": 60
        },
        "Recovery Room Protocol": {
            "Output": "Image required",
            "Duration": 60
        },
        "Old Doctor's Letter": {
            "Output": "Image required",
            "Duration": 180
        }
    },
    // "Patient Chart": {
    //         "Output": "Image required",
    //         "Duration": 60
    // },
    "First Measures": {
        "Storage": {
            "Output": "Image required",
            "Duration": 20
        },
        "Oxygen Administration": {
            "Output": "Successfully performed",
            "Duration": 30
        },
        "Nitro Spray": {
            "Output": "Successfully performed",
            "Duration": 20
        },
        "Salbutamol Spray": {
            "Output": "Successfully performed",
            "Duration": 20
        },
        "Place Venous Access": {
            "Output": "Successfully performed",
            "Duration": 60
        },
        "Declare Code Blue": {
            "Output": "The REA team has been informed and will need about 10 minutes to reach you.",
            "Duration": 20
        }
    }
  },
]

let diagnoses = [
"Unstable Ventricular Tachycardia",
"Stable Ventricular Tachycardia",
"Tachyarrhythmia Absoluta in Atrial Fibrillation",
"Pulmonary Artery Embolism",
"Acute Exacerbated COPD",
"Hypertensive Pulonary Edema",
"Pnemonia",
"Opiate Overdose",
"Spontaneous Pneumothorax",
"Aspiration",
"Paroxysmal Supraventricular Tachycardia",
"Anaphylaxis",
"Posterior Myocardial Infarction",
"Endocarditis",
"AV Block III",
"Thoracic Aortic Aneurysm",
"Subarachniodal Hemorrhage",
"Apoplectic Insult",
"Intracerebral Hemorrhage",
"Hypoglycemic Shock"
]
