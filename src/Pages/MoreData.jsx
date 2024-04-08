import Table from "../Components/Table/Table";
import MEMBERS_INFO_JUNE from "../Data/MemberInfo";
import MEMBERS_INFO_FEBRUARY, {
	MEMBERS_INFO_APRIL,
	MEMBERS_INFO_MAY,
} from "../Data/MemberInfo";
import MEMBERS_INFO_MARCH from "../Data/MemberInfo";

const MoreData = () => {
	return (
		<>
			<div className='mt-36 container mx-auto md:px-14 px-2'>
				<Table text={"Feburay data"} month={MEMBERS_INFO_FEBRUARY} />
				<Table text={"March data"} month={MEMBERS_INFO_MARCH} />
				<Table text={"April data"} month={MEMBERS_INFO_APRIL} />
				<Table text={"May data"} month={MEMBERS_INFO_MAY} />
				<Table text={"June data"} month={MEMBERS_INFO_JUNE} />
			</div>
		</>
	);
};

export default MoreData;
