const Searchbar = () => {
	return (
		<div>
			<input type="text" className='border-solid border-teal-400' />
			<button type='submit' className="bg-black px-5">
				<svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
					<path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/>
				</svg>
			</button>
		</div>
	)
}

export default Searchbar
