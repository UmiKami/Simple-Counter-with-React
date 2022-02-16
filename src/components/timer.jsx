import '../styles/Timer.css';

let isGoingUp = true;
let counter = 0;

let state = {
	value: ''
};

let getValue = (val) => {
	state.value = val.target.value;
};

const setTime = () => {
	counter = state.value;
};

let timeDivisor = (timeElap) => {
	let newTime = String(timeElap);
	let timeArr = [];

	timeArr = newTime.split('');

	return timeArr;
};

const Timer = () => {
	isGoingUp ? counter++ : counter--;
	let timePassed = timeDivisor(counter);

	return (
		<div className="timer-container">
			<section className="timer">
				<i className="fa-regular fa-clock" />
				<div className="counter">
					{/* Left to right */}
					<span className="firstField field">{timePassed[timePassed.length - 6] || 0}</span>
					<span className="secondField field">{timePassed[timePassed.length - 5] || 0}</span>
					<span className="thirdField field">{timePassed[timePassed.length - 4] || 0}</span>
					<span className="fourthField field">{timePassed[timePassed.length - 3] || 0}</span>
					<span className="fifthField field">{timePassed[timePassed.length - 2] || 0}</span>
					<span className="sixthField field">{timePassed[timePassed.length - 1] || 0}</span>
				</div>
			</section>

			<section className="counter-input">
				<input type="number" className="timeInpt" onChange={getValue} autoFocus />
				<button className="btn" type="button" onClick={setTime}>
					Change Time
				</button>
				<button className="btn" type="button" onClick={() => (isGoingUp = true)}>
					▲
				</button>
				<button className="btn" type="button" onClick={() => (isGoingUp = false)}>
					▼
				</button>
			</section>
		</div>
	);
};
export default Timer;
