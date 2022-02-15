import '../styles/Timer.css'

let timeDivisor = (timeElap) => {
    let newTime = String(timeElap)
    let timeArr = []

    timeArr = newTime.split("")

    return timeArr

} 

const Timer = ({timeElapsed}) => {
    let timePassed = timeDivisor(timeElapsed)
    
    return <div className='timer'>
        <i className="fa-regular fa-clock"></i>
        <div className="counter">
            {/* Left to right */}
            <span className="firstField field">{timePassed[timePassed.length-6] || 0}</span>
            <span className="secondField field">{timePassed[timePassed.length-5] || 0}</span>
            <span className="thirdField field">{timePassed[timePassed.length-4] || 0}</span>
            <span className="fourthField field">{timePassed[timePassed.length-3] || 0}</span>
            <span className="fifthField field">{timePassed[timePassed.length-2] || 0}</span>
            <span className="sixthField field">{timePassed[timePassed.length-1] || 0}</span>
        </div>
    </div>
}
export default Timer