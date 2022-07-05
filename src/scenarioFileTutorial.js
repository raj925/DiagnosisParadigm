let tutorialScenario = 
{
    "ID": 0,
	"True Condition": "Colon Cancer",
    "Prompt": "Welcome to the experiment! In each patient case, you will be shown a presenting complaint to start with (eg 'This patient is a 60 year-old white male who presented with a three week history of crampy lower abdominal pain and severe anemia') On the next page, you can gather information about the patient. Your aim is to record the possible differential diagnoses for this patient.",
    "Suspected": "",
    "Patient History": {
    	"Present Illness History": {
            "Output": "He was in his usual state of health until 2 to 3 weeks prior to admission when he developed crampy lower abdominal pain which was intermittent and bilateral and not clearly related to eating, bowel movements or position. On the day prior to admission, the pain worsened. He was awakened the morning of admission with pain which increased throughout the day. He presented to an urgent care facility where his hematocrit was found to be 19.3. He denied bright red blood per rectum or melena. He has had increased fatigue and denied any other symptoms, such as vomiting, hematemesis, hematuria, change in urine color, or change in bowel habits or stool. His appetite has been normal. He believed he had lost some weight but could not quantify the amount.",
            "Duration": 20
        },
    	"Past Medical History": {
            "Output": "Significant for coronary artery disease, S/P bypass grafting, asthma, and eczema.",
            "Duration": 60
        },
    	"Medication": {
            "Output": "None known",
            "Duration": 20
        },
    	"Allergies": {
            "Output": "None Known",
            "Duration": 45
        },
    	"Family History": {
            "Output": "Noncontributory",
            "Duration": 30
        },
    	"Social History": {
            "Output": "He is an illustrator who has 3 to 4 beers each week.",
            "Duration": 30
        }
    },
    "Physical Examination": {
    	"Take Pulse": {
            "Output": "78 regular",
            "Duration": 1200
        },
        "Measure Blood Pressure": {
            "Output": "132/68 mmHG",
            "Duration": 300
        },
        "Assess Respiratory Rate": {
            "Output": "18/min",
            "Duration": 900
        },
        "Auscultate Lungs": {
            "Output": "The lungs are clear.",
            "Duration": 0
        },
        "Auscultate the Heart": {
            "Output": "cardiac exam revealed a II/VI systolic murmur at the left upper sternal border without radiation, but no extra heart sounds or rubs",
            "Duration": 1500
        },
        "Assess Eyes": {
            "Output": "The conjunctivae were pale. The pupils were equal, round, and reactive to light and accommodation.",
            "Duration": 1800
        },
        "Measure Temperature": {
            "Output": "37.5 degrees celsius",
            "Duration": 800
        },
        "Abdomen Examination": {
            "Output": "There was mild tenderness to palpation in the lower abdominal quadrants, without rebound or guarding.",
            "Duration": 400
        },
        "Rectal Examination": {
            "Output": "Rectal examination showed no tenderness or masses; the stool was positive for blood occult.",
            "Duration": 900
        },
        "Neck/Throat Examination": {
            "Output": "The oropharynx was benign. The neck was supple. There was no jugular venous distention. The thyroid gland was normal in size. There was no lymphadenopathy.",
            "Duration": 300
        },
        "Assess Head": {
            "Output": "No irregularities",
            "Duration": 200
        },
        "Neurologic Exam Record": {
            "Output": "The neurologic examination was normal.",
            "Duration": 400
        },
        "Assess Extremities": {
            "Output": "The extremities showed no cyanosis, clubbing, or edema; The distal pulses were 2+ and equal bilaterally.",
            "Duration": 400
        },
    },
    "Testing": {
        "Urine Dipstick": {
            "Output": "Unremarkable",
            "Duration": 200
        },
        "ECG": {
            "Output": "Normal",
            "Duration": 200
        },
        "Abdominal CT Scan": {
            "Output": "Normal",
            "Duration": 400
        },
        "Venous Blood Gas": {
            "Output": "pH: 7.36 (Normal: 7.33 to 7.44), PCO2: 5.8 (Normal: 5 to 6.4kPa), PO2: 5.6 (Normal: > 5.3 kPa), HCO3: 27 (Normal: 22 to 28 mmol/L), Base Excess: +1 (Normal: -/+2), Saturation: 74 (Normal: 72 to 75%), Lactate: 1.7 (Normal: 0.5 to 2.2 mmol/L)",
            "Duration": 20
        },
        "UREA and Electrolytes": {
            "Output": "Sodium: 139 (Normal: 135 to 145 mmol/L), Potassium: 4.1 (Normal: 3.5 to 5.0 mmol/L), Urea: 3.4 (Normal: 2.5 to 6.7 mmol/L), Creatinine: 65 (Normal: 70 to 150 micromol/L), eGFR: 70 (Normal: >90ml/min/1.73m2)",
            "Duration": 200
        },
        "CRP and ESR": {
            "Output": "ESR: 6mm/hr (Normal: 0 to 12), CRP: 4mm/hr (Normal: 0 to 10)",
            "Duration": 200
        },
        "Clotting Test": {
            "Output": "Prothrombin Time: 11 (Normal: 10 to 14 seconds), APTT: 24 (Normal: 22 to 36 seconds), Fibrinogen: 2.6 (Normal: 1.5 to 4.5 g/L)",
            "Duration": 20
        },
        "FBC": {
            "Output": "Hb: 50 (Normal: 130 to 180 g/L), Hct: 0.17 (Normal: 0.40 to 0.54 L/L), MCV: 55 (Normal: 80 to 100 fl), WBC: 5.2 (Normal: 3.6 to 11.0 x 109/L), Neut: 6.2 (Normal: 1.8 to 7.5  x 109/L), Lymph's: 2.7 (Normal: 1.0 to 4.0  x 109/L), Platelet Count: 273 (Normal: 140 to 400 x 109/L)",
            "Duration": 500
        },
        "Other Biochemistry Tests": {
            "Output": "Chloride: 98 (Normal: 95 to 105 mmol/l), Glucose: 3.9 (Normal: 3.5 to 5.5 mmol/L), Protein Total: 72 (Normal: 60 to 80 g/L), Albumin: 39 (Normal: 36 to 50 g/L), AST (SGOT): 21 (Normal: 5 to 35 U/L), ALP: 60 (Normal: 30 to 150 U/L)",
            "Duration": 20
        },
        "Chest X-Ray": {
            "Output": "Unremarkable",
            "Duration": 20
        }
    }
}
