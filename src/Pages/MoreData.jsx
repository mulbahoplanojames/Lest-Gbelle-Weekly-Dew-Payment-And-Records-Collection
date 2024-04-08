import Table from "../Components/Table/Table";
import MEMBERS_INFO_FEBRUARY from "../Data/MemberInfo";
import MEMBERS_INFO_MARCH from "../Data/MemberInfo";

const MoreData = () => {
	return (
		<>
			<div className='mt-36 container mx-auto md:px-14 px-2'>
				<Table text={"Feburay data"} month={MEMBERS_INFO_FEBRUARY} />
				<Table text={"March data"} month={MEMBERS_INFO_MARCH} />
				{/* <Table text={"April data"} month={""} />
				<Table text={"May data"} month={""} /> */}
			</div>
		</>
	);
};

export default MoreData;
