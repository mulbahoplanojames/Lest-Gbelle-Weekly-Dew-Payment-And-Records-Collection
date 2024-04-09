import { IoIosMail } from "react-icons/io";
import { MdPhoneInTalk, MdLocationOn } from "react-icons/md";
import Button from "../../Interfaces/Button/Button";
import { useState } from "react";
import Swal from "sweetalert2";
import InputField from "./InputField";
import { FORM_TEXT } from "../../Constant/Constant";

const MemberForm = () => {
	const [result, setResult] = useState("");

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending....");
		const formData = new FormData(event.target);

		formData.append("access_key", "562d6485-71c4-4390-9184-2c1cf99e08b5");

		const res = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		}).then((res) => res.json());

		if (res.success) {
			console.log("Success", res);
			setResult(res.message);
			event.target.reset();

			Swal.fire({
				title: "🎉👏🙌✨🎊",
				text: "Message sent successfully!",
				icon: "success",
			});
		} else {
			console.log("Error", res);
			setResult(res.message);

			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Something went wrong!",
			});
		}
	};

	return (
		<>
			<section className='lg:px-10 md:mt-24 mt-16 py-14 '>
				<div className='text-center md:pb-10 pb-6'>
					<h2 className='text-lg uppercase text-1 font-medium pb-2'>
						Contact Us
					</h2>
					<h1 className='text-4xl capitalize font-semibold'>Get in touch</h1>
				</div>
				<div className='grid sm:grid-cols-2 grid-cols-1 px-3 place-items-center md:place-items-start '>
					<div className='px-3 py-4'>
						<h1 className='text-3xl pb-3'>Send us a message</h1>
						<p className='text-xl pb-3 opacity-70'>{FORM_TEXT}</p>
						<p className='text-xl pb-4 flex items-center gap-x-1'>
							<IoIosMail className='text-4xl text-1' />
							mulbahjamesoplano@gmail.com
						</p>
						<p className='text-xl pb-4 flex items-center gap-x-1'>
							<MdPhoneInTalk className='text-4xl text-1' />
							+250791676207
						</p>
						<p className='text-xl pb-4 flex items-center gap-x-1'>
							<MdLocationOn className='text-4xl text-1' />
							KG 763 Gisozi, Kigali, Rwanda
						</p>
					</div>
					<div className=' px-1 sm:px-7 py-2 w-full'>
						<form onSubmit={onSubmit}>
							<InputField
								label={"Your Name"}
								type={"text"}
								placeholder={"Enter you name"}
								name={"name"}
							/>
							<InputField
								label={"Your Email"}
								type={"email"}
								placeholder={"Enter your email"}
								name={"email"}
							/>
							<InputField
								label={"Your Number"}
								type={"number"}
								placeholder={"Enter your phone number"}
								name={"number"}
							/>

							
							<Button text={"Submit now"} />
							<p className='pt-4 text-red-500'>{result}</p>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default MemberForm;
