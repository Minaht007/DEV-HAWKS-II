"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import sendEmail from "./fetchFunction";

const inputStyle =
	"sm:w-[90%] h-10 border-2 border-textContacts rounded-xl pl-2 text-textContacts placeholder:text-textContacts";
const inputStyleSubject =
	"sm:w-[90%] h-10 border-2 border-textContacts rounded-xl pl-2";
const textAreaStyle = "sm:w-[90%] border-2 border-textContacts rounded-xl pl-2 pt-1";

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
	};

	const onChangeInput = (e) => {
		const { id, value } = e.target;
		setClientData((prevUserData) => ({ ...prevUserData, [id]: value }));
	};

	return (
		<form className="sm:w-[90%] md:w-[600px] mx-auto" onSubmit={handleSubmit}>
			<h1 className="text-5xl text-textContacts font-bold mb-10">Contacts</h1>

			<div className="flex flex-col sm:w-[90%] md:flex-row md:justify-between">
				<div className="flex flex-col sm:w-full md:w-1/2 ">
					<label htmlFor="firstName" className="mr-5 sm:mb-2 md:mb-3">
						<input
							type="text"
							id="firstName"
							placeholder={t("firstName")}
							className={inputStyle}
							onChange={onChangeInput}
						/>
					</label>
					<label htmlFor="lastName" className="sm:mb-2 md:mb-3">
						<input
							type="text"
							id="lastName"
							placeholder={t("lastName")}
							className={inputStyle}
							onChange={onChangeInput}
						/>
					</label>
				</div>

				<div className="flex flex-col sm:w-full md:w-1/2 ">
					<label htmlFor="email" className="mr-5 sm:mb-2 md:mb-3">
						<input
							type="email"
							id="email"
							placeholder="email"
							className={inputStyle}
							onChange={onChangeInput}
							required
						/>
					</label>
					<label htmlFor="phone" className="mr-5 sm:mb-2 md:mb-3">
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

			<div className="flex flex-col sm:w-[90%] mt-5">
				<label htmlFor="subject" className="mr-5 flex flex-col">
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

			<div className="flex flex-col sm:w-[90%] mt-5">
				<label htmlFor="message" className="flex flex-col">
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
					<button className="sm:w-52 md:w-[280px] bg-btmContacts text-center text-2xl text-secondaryTextColor font-bold rounded-2xl py-4 px-10">
						{t("contactBtm")}
					</button>
				</div>
			</div>
		</form>
	);
};

export default ContactForm;
