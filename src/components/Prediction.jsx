import { useEffect, useState } from 'react'
import getPrediction from '../api/prediction'

function Prediction({ answer }) {
    const [prediction, setPrediction] = useState('')
    const postData = {
        Age: answer[0],
        Sex: answer[1],
        Cp: answer[2],
        Trtbps: answer[3],
        Chol: answer[4],
        Fbs: answer[5],
        Restecg: answer[6],
        Thalachh: answer[7],
        Exng: answer[8],
        Oldpeak: answer[9],
        Slp: answer[10],
        Caa: answer[11],
        Thall: answer[12],
    }

    useEffect(() => {
        const getPredictionHandler = async () => {
            const { prediction } = await getPrediction(postData)
            const result = prediction === 'less' ? 'lebih kecil' : 'lebih besar'
            setPrediction(result)
        }

        getPredictionHandler()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='text-center'>
            <h2>Hasil Prediksi</h2>
            <p>
                {prediction.length == 0
                    ? 'Loading...'
                    : `Kamu memiliki kemungkinan ${prediction} untuk terkena serangan jantung`}
            </p>
        </div>
    )
}

export default Prediction
