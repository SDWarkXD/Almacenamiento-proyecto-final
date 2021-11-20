// const fetch = require('node-fetch')
//  import fetch from "node-fetch";


const endpoint = 'http://adce6090-a3ed-4871-8472-3edcd748b99b.eastus2.azurecontainer.io/score'
const key = 'pxXjlE5GO4sEcFjRCOlgrCBgXRMRlRig'

const data = {
    "Inputs": {
        "WebServiceInput0":
            [
                {
                    'PatientID': 1882185,
                    'Pregnancies': 9,
                    'PlasmaGlucose': 104,
                    'DiastolicBloodPressure': 51,
                    'TricepsThickness': 7,
                    'SerumInsulin': 24,
                    'BMI': 27.36983156,
                    'DiabetesPedigree': 1.3504720469999998,
                    'Age': 43,
                },
            ],
    },
    "GlobalParameters": {
    }
}




function getResultado(data) {
    fetch(endpoint, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': ('Bearer ' + key)
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

}

getResultado(data)
// body = str.encode(json.dumps(data))


// headers = {'Content-Type':'application/json', 'Authorization':('Bearer '+ key)}

// req = urllib.request.Request(endpoint, body, headers)

// try:
//     response = urllib.request.urlopen(req)
//     result = response.read()
//     json_result = json.loads(result)
//     output = json_result["Results"]["WebServiceOutput0"][0]
//     print('Patient: {}\nPrediction: {}\nProbability: {:.2f}'.format(output["PatientID"],
//                                                             output["DiabetesPrediction"],
//                                                             output["Probability"]))
// except urllib.error.HTTPError as error:
//     print("The request failed with status code: " + str(error.code))

//     # Print the headers to help debug
//     print(error.info())
//     print(json.loads(error.read().decode("utf8", 'ignore')))