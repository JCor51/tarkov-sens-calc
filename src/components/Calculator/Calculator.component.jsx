import React from 'react'
import './Calculator.styles.css'
import EftLogo from '../../img/eftlogo.png'

export const Calculator = () => {
	const [active, setActive] = React.useState(false)
	const [turnRate, setTurnRate] = React.useState()
	const [userSensitivity, setUserSensitivity] = React.useState()
	const [adjustedSensitivity, setAdjustedSensitivity] = React.useState()

	const sensitivityCalculation = e => {
		e.preventDefault()
		const multiplier = 100 - turnRate
		setAdjustedSensitivity((userSensitivity / multiplier) * 100)
		setActive(true)
	}

	return (
		<div className='Calculator'>
			<img src={EftLogo} alt='Escape From Tarkov' />
			<h2>Sensitivity Calculator</h2>
			<form>
				<label htmlFor='turnRateReduction'>
					Turn Rate Reduction (%)
				</label>
				<input
					type='text'
					name='turnRateReduction'
					id='turnRateReduction'
					onInput={e => setTurnRate(e.target.value)}
				/>
				<label htmlFor='userSensitivity'>Your sensitivity</label>
				<input
					type='text'
					name='userSensitivity'
					id='userSensitivity'
					onInput={e => setUserSensitivity(e.target.value)}
				/>
				<button onClick={sensitivityCalculation}>Calculate</button>
			</form>

			{active ? (
				<div className='active'>
					{adjustedSensitivity ? (
						<h3>
							Adjusted sensitivity:{' '}
							{adjustedSensitivity.toFixed(2)}
						</h3>
					) : (
						<h3>You missed something</h3>
					)}
					<button type='reset' onClick={() => setActive(false)}>
						Reset
					</button>
				</div>
			) : null}
		</div>
	)
}
