
const baseUrl = 'http://localhost:8001';

export const sendEmail = async (emailData) => {
    const response = await fetch(`${baseUrl}/send/email`, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
    });
    return response.json();
}