/*
 * This component that two props: name and avatar.
 * The name prop is a string that represents the name of the person being displayed.
 * This component is use with in the Table component.
 */

const Name_Avatar = ({ name, avatar }) => {
	return (
		<>
			<div className='flex items-center gap-3'>
				<div className='avatar'>
					<div className='mask mask-squircle w-12 h-12'>
						{/* The img element displays the avatar image. */}
						<img src={avatar} alt={name} />
					</div>
				</div>
				<div>
					<h2 className='font-bold'>{name}</h2>
				</div>
			</div>
		</>
	);
};

// Export the Name_Avatar component so that it can be used in other parts of the application.
export default Name_Avatar;
