
function Popup(propTypes) {

    return (propTypes.trigger) ? (
        <>
            <div className="popup">
                <div className="popup-inner text-center px-10 pb-8">
                    {/* <button className="close-btn">Close</button> */}
                    { propTypes.children }
                </div>
            </div>
        </>
    ): "";
}

export default Popup