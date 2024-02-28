

const SuccessPage = () => {

    return (
        <>
        
            <div className="bg-primary text-center pt-20 pb-60"> 
                <div className="flex justify-center text-center mt-10 svg-circle">
                    <svg viewBox="0 0 66 26" xmlns="http://www.w3.org/2000/svg" className="svg-details">
                        <g stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                            <path className="circle" d="M13 1C6.372583 1 1 6.372583 1 13s5.372583 12 12 12 12-5.372583 12-12S19.627417 1 13 1z"/>
                            <path className="tick" d="M6.5 13.5L10 17 l8.808621-8.308621"/>
                        </g>
                    </svg>
                </div>
                <div className="font-bold text-white text-[60px] mt-8">
                    <h2>Transaction Successful</h2>
                </div>
            </div>
        
        </>
    )

}

export default SuccessPage