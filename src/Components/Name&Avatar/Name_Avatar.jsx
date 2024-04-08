const Name_Avatar = ({ name, avatar }) => {
	return (
		<>
			<div className='flex items-center gap-3'>
				<div className='avatar'>
					<div className='mask mask-squircle w-12 h-12'>
						<img
							src='/tailwind-css-component-profile-2@56w.png'
							alt='Avatar Tailwind CSS Component'
						/>
					</div>
				</div>
				<div>
					<h2 className='font-bold'>{name}</h2>
				</div>
			</div>
		</>
	);
};

export default Name_Avatar;
