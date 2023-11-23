function Question({ number, question, choices, setNumber, setAnswer }) {
    const handleClick = (answer) => {
        setAnswer((prev) => [...prev, answer])
        setNumber((prev) => prev + 1)
    }

    return (
        <div className='text-center'>
            <p>{`${number + 1}. ${question}`}</p>
            {choices === null ? (
                <form
                    className='d-grid gap-2 d-md-flex'
                    onSubmit={(e) => {
                        e.preventDefault()
                        const input = e.target.elements[0]
                        handleClick(Number(input.value))
                        input.value = ''
                    }}
                >
                    <input
                        type='number'
                        className='form-control'
                        name='input'
                        id='input'
                        step='0.1'
                        required
                    />
                    <button type='submit' className='btn btn-primary'>
                        Submit
                    </button>
                </form>
            ) : (
                <div className='d-grid gap-2 d-md-block'>
                    {choices.map((choice) => (
                        <button
                            key={choice.text}
                            type='button'
                            className='btn btn-outline-primary mx-md-1'
                            onClick={() => handleClick(choice.value)}
                        >
                            {choice.text}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Question
