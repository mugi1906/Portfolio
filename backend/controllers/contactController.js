const transporter = require("../config/mail");

const sendContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Check all fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Email details
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact - ${subject}`,

      text: `
            You received a new message from your portfolio.

            Name: ${name}
            Email: ${email}
            Subject: ${subject}

            Message:
            ${message}
        `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });

  } catch (error) {
    console.error("Email Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
};

module.exports = {
  sendContactMessage,
};