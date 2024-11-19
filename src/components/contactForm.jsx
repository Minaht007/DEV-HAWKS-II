"use client";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import sendEmail from "./fetchFunction";

const inputStyle =
	" sm:w-full md:w-[290px] h-10 border-2 border-textContacts rounded-xl pl-2 text-textContacts placeholder:text-textContacts";
const inputStyleSubject =
	" sm:w-full md:w-[600px] h-10 border-2 border-textContacts rounded-xl pl-2";
const textAreaStyle = "sm:w-full md:w-[600px] border-2 border-textContacts rounded-xl pl-2 pt-1 ";

const ContactForm = () => {
	const [clientData, setClientData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});
	const formRef = useRef(null);

	const templateMassage = `Доброго дня, ${clientData.firstName} ${clientData.lastName} цікавить таке питання ${clientData.subject} ${clientData.message}. Контактні дані: Емейл: ${clientData.email}, телефон: ${clientData.phone}. `;

	const t = useTranslations("ContactForm");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {
			to: "dr.andrii.telnov@gmail.com",
			subject: "DEV-HAWKS Contacts",
			text: templateMassage,
		};
		await sendEmail(data);
		setClientData({
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			subject: "",
			message: "",
		});
		if (formRef.current) {
			formRef.current.reset();
		}
	};

	const onChangeInput = (e) => {
		const { id, value } = e.target;
		setClientData((prevUserData) => ({ ...prevUserData, [id]: value }));
	};

	return (
		<form
			className="sm:max-w-[500px] md:max-w-[600px] mx-auto"
			onSubmit={handleSubmit}
			ref={formRef}
		>
			<h1 className="text-5xl text-textContacts font-bold mb-10 text-center">Contacts</h1>

			<div className="flex flex-col sm:w-full  md:justify-between">
				<div className="flex sm:flex-col md:flex-row md:w-[600px] sm:w-full  ">
					<label htmlFor="firstName" className=" sm:mb-2 md:mb-3">
						<input
							type="text"
							id="firstName"
							placeholder={t("firstName")}
							className={`${inputStyle} md:mr-5`}
							onChange={onChangeInput}
						/>
					</label>
					<label htmlFor="lastName" className=" sm:mb-2 md:mb-3">
						<input
							type="text"
							id="lastName"
							placeholder={t("lastName")}
							className={inputStyle}
							onChange={onChangeInput}
						/>
					</label>
				</div>

				<div className="flex sm:flex-col md:flex-row  sm:w-full md:w-[600px] ">
					<label htmlFor="email" className=" sm:mb-2 md:mb-3">
						<input
							type="email"
							id="email"
							placeholder="email"
							className={`${inputStyle} md:mr-5`}
							onChange={onChangeInput}
							required
						/>
					</label>
					<label htmlFor="phone" className=" sm:mb-2 md:mb-3">
						<input
							type="text"
							id="phone"
							placeholder="phone/telegram"
							className={inputStyle}
							onChange={onChangeInput}
						/>
					</label>
				</div>
			</div>

			<div className="flex flex-col  mt-5">
				<label htmlFor="subject" className=" flex flex-col">
					<p className="pl-2">{t("subject")}*</p>
					<input
						type="text"
						id="subject"
						required
						className={inputStyleSubject}
						onChange={onChangeInput}
					/>
				</label>
			</div>

			<div className="flex flex-col  mt-5">
				<label htmlFor="message" className=" flex flex-col">
					<p>{t("message")}</p>
					<textarea
						id="message"
						cols="60"
						rows="10"
						className={textAreaStyle}
						onChange={onChangeInput}
					></textarea>
				</label>

				<div className="flex mt-10 justify-center">
					<button className="sm:min-w-[240px]  md:w-[280px] bg-btmContacts text-center sm:text-xl md:text-2xl text-secondaryTextColor font-bold rounded-2xl py-2 px-10">
						{t("contactBtm")}
					</button>
				</div>
			</div>
		</form>
	);
};

export default ContactForm;
