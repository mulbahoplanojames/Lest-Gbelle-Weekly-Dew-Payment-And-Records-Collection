import Table from "../Components/Table/Table";

// Import the necessary member info data
import MEMBERS_INFO_JUNE from "../Data/MemberInfo";
import MEMBERS_INFO_FEBRUARY, {
	MEMBERS_INFO_APRIL,
	MEMBERS_INFO_MAY,
} from "../Data/MemberInfo";
import MEMBERS_INFO_MARCH from "../Data/MemberInfo";

/**
 * The MoreData component displays the data for the months of February, March, April, May and June.
 * It uses the Table component to display the data in a table format.
 */
const MoreData = () => {
	return (
		<>
			<div className='mt-36 container mx-auto md:px-14 px-2'>
				{/* Display the table for February */}
				<Table text={"February data"} month={MEMBERS_INFO_FEBRUARY} />
				{/* Display the table for March */}
				<Table text={"March data"} month={MEMBERS_INFO_MARCH} />
				{/* Display the table for April */}
				<Table text={"April data"} month={MEMBERS_INFO_APRIL} />
				{/* Display the table for May */}
				<Table text={"May data"} month={MEMBERS_INFO_MAY} />
				{/* Display the table for June */}
				<Table text={"June data"} month={MEMBERS_INFO_JUNE} />
			</div>
		</>
	);
};

export default MoreData;
