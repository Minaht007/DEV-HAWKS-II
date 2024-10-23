"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import sendEmail from "./fetchFunction";

const inputStyle =
	"sm:w-[400px] desk:w-[280px] h-10 border-2 border-textContacts rounded-xl pl-2 text-textContacts placeholder-textContacts";
const inputStyleSubject =
	"sm:w-[400px] desk:w-[600px] h-10 border-2 border-textContacts rounded-xl pl-2";
const textAreaStyle = "sm:w-2/3 border-2 border-textContacts rounded-xl pl-2 pt-1";

const ContactForm = () => {
	const [clientData, setClientData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	const templateMassage = `Доброго дня, ${clientData.firstName} ${clientData.lastName} цікавить таке питання ${clientData.subject} ${clientData.message}. Контактні дані: Емейл: ${clientData.email}, телефон: ${clientData.phone}. `;

	const t = useTranslations("ContactForm");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {
			to: "dr.andrii.telnov@gmail.com",
			subject: "Лист з нашого сайту",
			text: templateMassage,
		};
		await sendEmail(data);
	};

	const onChangeInput = (e) => {
		const { id, value } = e.target;
		setClientData((prevUserData) => ({ ...prevUserData, [id]: value }));
	};

	return (
		<form className="static top-0 left-0" onSubmit={handleSubmit}>
			<h1 className="text-5xl text-textContacts font-bold mb-10">Contacts</h1>

			<div className="flex sm:flex-col md:flex-col desk:flex-row">
				<div className="flex sm:flex-col mx-5 my-5">
					<label htmlFor="firstName" className="mr-5 sm:mb-4">
						<input
							type="text"
							id="firstName"
							placeholder={t("firstName")}
							className={inputStyle}
							onChange={(e) => onChangeInput(e)}
						/>
					</label>
					<label htmlFor="lastName">
						<input
							type="text"
							id="lastName"
							placeholder={t("lastName")}
							className={inputStyle}
							onChange={(e) => onChangeInput(e)}
						/>
					</label>
				</div>

				<div className="flex sm:w-2/3 sm:flex-col mx-5 my-5">
					<label htmlFor="email" className="mr-5 sm:mb-4">
						<input
							type="email"
							id="email"
							placeholder="email"
							className={inputStyle}
							onChange={(e) => onChangeInput(e)}
							required
						/>
					</label>
					<label htmlFor="phone" className="mr-5">
						<input
							type="text"
							id="phone"
							placeholder="phone/telegram"
							onChange={(e) => onChangeInput(e)}
							className={inputStyle}
						/>
					</label>
				</div>
			</div>

			<div className="flex sm:flex-col flex-col mx-5 my-5">
				<label htmlFor="subject" className="mr-5 flex flex-col">
					<p className="pl-2">{t("subject")}*</p>
					<input
						type="text"
						id="subject"
						required
						className={inputStyleSubject}
						onChange={(e) => onChangeInput(e)}
					/>
				</label>
			</div>

			<div className="sm:w-100 w-[580px] ml-5">
				<label htmlFor="message" className="flex flex-col">
					<p>{t("message")}</p>
					<textarea
						id="message"
						cols="60"
						rows="10"
						className={textAreaStyle}
						onChange={(e) => onChangeInput(e)}
					></textarea>
				</label>

				<div className="flex mt-10 justify-center">
					<button className="sm:w-52 desk:w-[280px] bg-btmContacts text-center text-2xl text-secondaryTextColor font-bold rounded-2xl py-4 px-10">
						{t("contactBtm")}
					</button>
				</div>
			</div>
		</form>
	);
};

export default ContactForm;
