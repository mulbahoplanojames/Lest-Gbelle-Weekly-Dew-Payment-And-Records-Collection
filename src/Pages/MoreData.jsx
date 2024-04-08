import Table from "../Components/Table/Table";

const MoreData = () => {
	return (
		<>
			<div className='mt-36 container mx-auto md:px-14 px-2'>
				<Table text={"Feburay data"} />
				<Table text={"March data"} />
				<Table text={"April data"} />
				<Table text={"May data"} />
			</div>
		</>
	);
};

export default MoreData;
