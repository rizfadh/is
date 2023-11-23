function Navbar() {
    return (
        <header>
            <nav className='navbar my-2 sticky-top'>
                <div className='container'>
                    <div className='bg-light w-100 py-2 d-flex justify-content-center rounded-2 shadow-sm'>
                        <a className='text-decoration-none text-body' href='#'>
                            <h1 className='fs-4 fw-bold'>IT-UP</h1>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
