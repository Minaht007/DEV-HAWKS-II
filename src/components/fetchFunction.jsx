async function sendEmail(data) {
	try {
		const response = await fetch("https://dev-hawks-back.onrender.com/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		const result = await response.json();

		if (result.success) {
			console.log("Email sent successfully!");
		} else {
			console.error("Error sending email:", result.message);
		}
	} catch (error) {
		console.error("Error:", error);
	}
}
export default sendEmail;
