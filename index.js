//  const fetch = require('node-fetch')
//  import fetch from "node-fetch";
const endpoint = 'https://eastus2.api.azureml.ms/pipelines/v1.0/subscriptions/afcacae9-39a1-4b89-9722-66074f408ff1/resourceGroups/ml-resources/providers/Microsoft.MachineLearningServices/workspaces/proyecto-almacenamiento/PipelineRuns/PipelineEndpointSubmit/Id/d09958d9-70a1-4758-8bf1-b86dd76f3ef9' 
const key = 'pxXjlE5GO4sEcFjRCOlgrCBgXRMRlRig'

const boton = document.getElementById('enviar');


const data2 = {
    "Inputs": {
        "WebServiceInput0":
            [
                {
                    "PatientID": 1882185,
                    "Pregnancies": 9,
                    "PlasmaGlucose": 104,
                    "DiastolicBloodPressure": 51,
                    "TricepsThickness": 7,
                    "SerumInsulin": 24,
                    "BMI": 27.36983156,
                    "DiabetesPedigree": 1.3504720469999998,
                    "Age": 43
                }
            ]
    },
    "GlobalParameters": {
    }
}

const generarPeticion = () => {

    const data = {
        "Inputs": {
            "WebServiceInput0":
                [
                    {
                        'PatientID': parseInt(document.getElementById("pacienteID").value, 10),
                        'Pregnancies': parseInt(document.getElementById("pregnancies").value, 10),
                        'PlasmaGlucose': parseInt(document.getElementById("plasmaGlucose").value, 10),
                        'DiastolicBloodPressure': parseInt(document.getElementById("diastolicBloodPressure").value, 10),
                        'TricepsThickness': parseInt(document.getElementById("tricepsThickness").value, 10),
                        'SerumInsulin': parseInt(document.getElementById("serumInsulin").value, 10),
                        'BMI': parseFloat(document.getElementById("iBMI").value),
                        'DiabetesPedigree': parseFloat(document.getElementById("diabetesPedigree").value),
                        'Age': parseInt(document.getElementById("age").value, 10),
                    },
                ],
        },
        "GlobalParameters": {
        }
    }
    getResultado(data)
}


function getResultado(data) {
    fetch('https://eastus2.api.azureml.ms/pipelines/v1.0/subscriptions/afcacae9-39a1-4b89-9722-66074f408ff1/resourceGroups/ml-resources/providers/Microsoft.MachineLearningServices/workspaces/proyecto-almacenamiento/PipelineRuns/PipelineEndpointSubmit/Id/d09958d9-70a1-4758-8bf1-b86dd76f3ef9', {
        method: 'POST', // or 'PUT'
        credentials: 'include',
        mode: 'no-cors', // no-cors, *cors, same-origin
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer pxXjlE5GO4sEcFjRCOlgrCBgXRMRlRig'
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response["Results"]["WebServiceOutput0"][0]));

}
getResultado(data2)

boton.addEventListener('click', event => {
    event.preventDefault()
    generarPeticion()
});



// async function postData(url = '', data = {}) {
//     // Opciones por defecto estan marcadas con un *
//     const response = await fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': ('Bearer ' + 'pxXjlE5GO4sEcFjRCOlgrCBgXRMRlRig')
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
// }

// postData(endpoint, data2)
//     .then(data => {
//         console.log(data); // JSON data parsed by `data.json()` call
//     });


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