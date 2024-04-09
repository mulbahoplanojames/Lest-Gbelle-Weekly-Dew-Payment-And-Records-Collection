import Accordion from "./Accordion";

const Faq = () => {
	return (
		<>
			<section className='mt-20 mb-16 '>
				<h1 className='md:text-3xl text-xl capitalize font-bold pb-8 text-center'>
					Frequently ask questions
				</h1>
				<div className='join join-vertical w-full'>
					<Accordion title={""} description={""} />
					<Accordion title={""} description={""} />
					<Accordion title={""} description={""} />
					<Accordion title={""} description={""} />
					<Accordion title={""} description={""} />
					<Accordion title={""} description={""} />
					<Accordion title={""} description={""} />
				</div>
			</section>
		</>
	);
};

export default Faq;
