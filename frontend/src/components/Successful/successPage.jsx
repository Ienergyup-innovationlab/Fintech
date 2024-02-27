

const SuccessPage = () => {

    return (
        <>
        
            <div className="content-success bg-primary text-center pt-20"> 
                <div className="flex justify-center">
                    <svg width="400" height="400">
                        <circle
                            fill="none"
                            stroke="#000000"
                            strokeWidth="20"
                            cx="200"
                            cy="200"
                            r="190"
                            strokeLinecap="round"
                            transform="rotate(-90 200 200)"
                            className="circle"
                        />
                        <polyline
                            fill="none"
                            stroke="#000000"
                            points="88,214 173,284 304,138"
                            strokeWidth="24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tick"
                        />
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