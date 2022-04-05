let tutorialScenario = 
{
    "ID": 0,
	"True Condition": "Acute Aortic Dissection",
    "Prompt": "Welcome to the experiment! In each patient case, you will be shown a presenting complaint to start with (eg 'Patient is a 54 year old male presenting with sudden onset chest pain which started whilst lifting weights in the gym.') On the next page, you can gather information about the patient. Your aim is to record the possible differential diagnoses for this patient.",
    "Suspected": "",
    "Patient History": {
    	"Present Illness History": {
            "Output": "The patient had a long history of intravenous drug abuse. Six months prior to admission, he had enrolled in a Methadone maintenance program, and had stopped using intravenous drugs. At that time, he was found to be hypertensive, and was started on hydrochlorothiazide. Six weeks prior to admission, he noted painless swelling of his face, and upper and lower extremities. He gained 20 lbs in weight. He denied fever, rash, sore throat, arthralgias, myalgias, Raynaud's phenomenon, chest pain, cough, shortness of breath, hematuria, or declining urine output.",
            "Duration": 20
        },
    	"Past Medical History": {
            "Output": "No prior history of cardiac, hepatic, or renal disease.",
            "Duration": 60
        },
    	"Medication": {
            "Output": "Methadone, hydrochlorothiazide.",
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
            "Output": "He is married and has two children. He works as a factory clerk. He had a past history of intravenous use of cocaine and brown heroin, and had shared needles. He does not use tobacco or alcohol.",
            "Duration": 30
        }
    },
    "Physical Examination": {
    	"Take Pulse": {
            "Output": "100",
            "Duration": 1200
        },
        "Measure Blood Pressure": {
            "Output": "175/110 mmHG",
            "Duration": 300
        },
        "Assess Respiratory Rate": {
            "Output": "17/min",
            "Duration": 900
        },
        "Auscultate Lungs": {
            "Output": "The lungs are clear.",
            "Duration": 0
        },
        "Auscultate the Heart": {
            "Output": "Cardiac examination revealed a normal apical impulse, and normal S1 and S2, without S3 or S4 gallop. There was a II/VI systolic ejection murmur at the apex, without radiation.",
            "Duration": 1500
        },
        "Assess Eyes": {
            "Output": "The conjunctivae were pink. The sclerae were anicteric. The pupils were equal, round, and reactive to light and accommodation.",
            "Duration": 1800
        },
        "Measure Temperature": {
            "Output": "37.7 degrees celsius",
            "Duration": 800
        },
        "Abdomen Examination": {
            "Output": "The abdomen was soft and non-tender, with normoactive bowel sounds. The liver was 11 cm in the midclavicular line. The spleen was not enlarged.",
            "Duration": 400
        },
        "Rectal Examination": {
            "Output": "Rectal examination showed no tenderness or masses; the stool was guaiac negative.",
            "Duration": 900
        },
        "Neck/Throat Examination": {
            "Output": "The oropharynx was benign. The neck was supple. There was no jugular venous distention. The thyroid gland was normal in size. There was no lymphadenopathy.",
            "Duration": 300
        },
        "Assess Head": {
            "Output": "The head was normocephalic and atraumatic.",
            "Duration": 200
        },
        "Neurologic Exam Record": {
            "Output": "The neurologic examination was normal.",
            "Duration": 400
        },
        "Assess Extremities": {
            "Output": "The upper and lower extremities showed 4+ pitting edema; no rash or purpuric lesions were seen.",
            "Duration": 400
        },
    },
    "Generalised Testing": {
        "CBC - Hgb": {
            "Output": "12.0 (Normal: 14.0-18.0 g/dl)",
            "Duration": 20
        },
        "CBC - Hct": {
            "Output": "35 (Normal: 42-52%)",
            "Duration": 20
        },
        "CBC - MCV": {
            "Output": "88 (Normal: 84-99 fl)",
            "Duration": 20
        },
        "CBC - WBC": {
            "Output": "11.7 (Normal: 4.8-10.8 x 10^9/L)",
            "Duration": 20
        },
        "CBC - Neut": {
            "Output": "78 (Normal: 40-70%)",
            "Duration": 20
        },
        "CBC - Lymphs": {
            "Output": "19 (Normal: 25-45%)",
            "Duration": 20
        },
        "CBC - Platelet Count": {
            "Output": "350 (Normal: 150-400 x 10^9/l)",
            "Duration": 20
        },
        "Chemistries - Sodium": {
            "Output": "137 (Normal: 135-149 mmol/l)",
            "Duration": 20
        },
        "Chemistries - Potassium": {
            "Output": "2.7 (Normal: 3.5-5.3 mmol/l)",
            "Duration": 20
        },
        "Chemistries - Chloride": {
            "Output": "98 (Normal: 98-108 mmol/l)",
            "Duration": 20
        },
        "Chemistries - CO2": {
            "Output": "28 (Normal: 24-32 mmol/l)",
            "Duration": 20
        },
        "Chemistries - BUN": {
            "Output": "23 (Normal: 6-20 mg/dl)",
            "Duration": 20
        },
        "Chemistries - Creatinine": {
            "Output": "2.0 (Normal: 0.5-1.5 mg/dl)",
            "Duration": 20
        },
        "Chemistries - Glucose": {
            "Output": "90 (Normal: 70-110 mg/dl)",
            "Duration": 20
        },
        "Chemistries - Protein Total": {
            "Output": "7.3 (Normal: 6.0-8.0 g/dl)",
            "Duration": 20
        },
        "Chemistries - Albumin": {
            "Output": "2.4 (Normal: 3.6-50 g/dl)",
            "Duration": 20
        },
        "Chemistries - AST (SGOT)": {
            "Output": "30 (Normal: 0-50 U/L)",
            "Duration": 20
        },
        "Chemistries - ALP": {
            "Output": "274 (Normal: 40-125 U/L)",
            "Duration": 20
        }
    },
    "Specialised Testing": {
        "Chest X-Ray": {
            "Output": "Normal heart and lungs",
            "Duration": 60
        },
        "Urinalysis": {
            "Output": "Specific gravity 1.030, 3+ protein; microscopic examination showed 40-50 RBCs, 10-15 WBCs, many granular and hyaline casts, and oval fat bodies, but no red cell casts.",
            "Duration": 60
        },
        "Serum Protein and Immuno-Electrophoresis": {
            "Output": "Alpha-1 globulin of 6.7 (normal 2.5-4.5 ), beta globulin 14.1 (normal 8-12), and gamma globulin 25.4 (normal 10-18). IgM 220 (normal 50-350) with IgM kappa monoclonal protein detected; IgG and IgA were normal.",
            "Duration": 60
        },
        "ECG/EKG": {
            "Output": "Sinus tachycardia with left ventricular hypertrophy, and nonspecific ST-T wave changes",
            "Duration": 60
        },
        "Abdominal CT Scan": {
            "Output": "Aortocaval adenopathy and bilaterally enlarged kidneys.",
            "Duration": 60
        },
        "Sputum Culture/Grain Stain": {
            "Output": "Results were inconclusive.",
            "Duration": 60
        },
        "ANA/Rheumatoid Factor": {
            "Output": "ANA was negative; rheumatoid factor was positive.",
            "Duration": 180
        },
        "Bone and Joint Radiographs": {
            "Output": "Results were inconclusive.",
            "Duration": 180
        },
        "Coomb’s Test (AGT)": {
            "Output": "Results were inconclusive.",
            "Duration": 180
        },
        "Blood Smear": {
            "Output": "Results were inconclusive.",
            "Duration": 180
        },
        "Haptoglobin": {
            "Output": "Results were inconclusive.",
            "Duration": 180
        },
        "HIV Antibody": {
            "Output": "Negative",
            "Duration": 180
        },
        "PPD/Anergy Battery": {
            "Output": "Results were inconclusive.",
            "Duration": 180
        },
        "Blood Cultures": {
            "Output": "Two blood cultures showed no growth.",
            "Duration": 180
        },
        "Arterial Blood Gas on Room Air": {
            "Output": "Results were inconclusive.",
            "Duration": 180
        },
        "Urine Culture and Protein Electrophoresis": {
            "Output": "Total volume of 2,250 ml, protein of 6.9 gm. Negative for Bence-Jones protein.",
            "Duration": 180
        }
    }
}
