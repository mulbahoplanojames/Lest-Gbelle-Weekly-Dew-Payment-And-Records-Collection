import { FREQUENTLY_ASK_QUESIONS } from "../../Constant/Constant";
import Accordion from "./Accordion";

const Faq = () => {
	return (
		<>
			<section className='mt-20 mb-16 '>
				<h1 className='md:text-3xl text-xl capitalize font-bold pb-8 text-cente'>
					Frequently ask questions
				</h1>
				<div className='join join-vertical w-full bg-neutral-50'>
					{FREQUENTLY_ASK_QUESIONS.map((faq) => (
						<Accordion
							key={faq.id}
							question={faq.question}
							answer={faq.answer}
						/>
					))}
				</div>
			</section>
		</>
	);
};

export default Faq;
