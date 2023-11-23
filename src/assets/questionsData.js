const questionsData = [
    {
        question: 'How old are you?',
        choices: null,
    },
    {
        question: 'What are your gender?',
        choices: [
            { text: 'Female', value: 0 },
            { text: 'Male', value: 1 },
        ],
    },
    {
        question: 'Chest Pain type?',
        choices: [
            { text: 'Typical Angina', value: 0 },
            { text: 'Atypical Angina', value: 1 },
            { text: 'Non-anginal Pain', value: 2 },
            { text: 'Asymptomatic', value: 3 },
        ],
    },
    {
        question: 'Resting blood pressure (in mm Hg)?',
        choices: null,
    },
    {
        question: 'Cholesterol in mg/dl fetched via BMI sensor?',
        choices: null,
    },
    {
        question: 'Fasting blood sugar > 120 mg/dl?',
        choices: [
            { text: 'False', value: 0 },
            { text: 'True', value: 1 },
        ],
    },
    {
        question: 'Resting electrocardiographic results?',
        choices: [
            { text: 'Normal', value: 0 },
            { text: 'Having ST-T wave abnormality', value: 1 },
            { text: 'Showing probable', value: 2 },
        ],
    },
    {
        question: 'Maximum heart rate achieved?',
        choices: null,
    },
    {
        question: 'Exercise induced angina?',
        choices: [
            { text: 'No', value: 0 },
            { text: 'Yes', value: 1 },
        ],
    },
    {
        question: 'ST depression induced by exercise relative to rest?',
        choices: null,
    },
    {
        question: 'The slope of the peak exercise ST segment?',
        choices: [
            { text: 'Unsloping', value: 0 },
            { text: 'Flat', value: 1 },
            { text: 'Downsloping', value: 2 },
        ],
    },
    {
        question: 'Number of major vessels?',
        choices: [
            { text: '0', value: 0 },
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
        ],
    },
    {
        question: 'Thalassemia?',
        choices: [
            { text: 'Null', value: 0 },
            { text: 'Fixed defect', value: 1 },
            { text: 'Normal', value: 2 },
            { text: 'Rreversable defect', value: 3 },
        ],
    },
]

export default questionsData
