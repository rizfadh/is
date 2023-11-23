import healthImg from '../assets/health.svg'

function Intro({ setBegin }) {
    return (
        <div className='row row-cols-1 row-cols-md-2'>
            <div className='col order-md-last'>
                <img src={healthImg} className='img-fluid' alt='health image' />
            </div>
            <div className='col order-md-first'>
                <div className='d-flex align-items-center h-100 mt-3 mt-md-0'>
                    <div>
                        <h2 className='text-center text-md-start'>
                            Cek kemungkinan terkena serangan jantung disini!
                        </h2>
                        <div className='d-flex justify-content-center justify-content-md-start mt-3'>
                            <button
                                onClick={() => setBegin(true)}
                                className='btn btn-primary btn-lg'
                            >
                                Mulai
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
