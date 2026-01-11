// controllers/leadController.js
const nodemailer = require('nodemailer');

exports.createLead = async (req, res) => {
  const { propertyId, agentEmail, clientName, clientEmail, message } = req.body;

  try {
    // 1. Save to Database
    const newLead = await Lead.create(req.body);

    // 2. Configure Email Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    });

    // 3. Send Alert to Agent
    await transporter.sendMail({
      from: '"SONEY Real Estate" <system@soney.com>',
      to: agentEmail,
      subject: `New Lead for Property #${propertyId}`,
      html: `<h3>New Tour Request!</h3>
             <p><strong>From:</strong> ${clientName} (${clientEmail})</p>
             <p><strong>Message:</strong> ${message}</p>
             <a href="https://soney.com/agent/dashboard">View Lead Details</a>`
    });

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to process lead." });
  }
};
