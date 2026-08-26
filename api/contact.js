export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body ?? {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const apiKey = process.env.BRAVO_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL
  // Brevo requires the sender *email* to be a verified identity — it can't be the
  // visitor's address (that would let anyone spoof arbitrary senders through your API key).
  // The display *name* isn't verified, so that part can safely reflect who submitted the form.
  const senderEmail = process.env.CONTACT_SENDER_EMAIL
  const senderName = `${name} (via Portfolio)`

  const missing = []
  if (!apiKey) missing.push('BRAVO_API_KEY')
  if (!toEmail) missing.push('CONTACT_TO_EMAIL')
  if (!senderEmail) missing.push('CONTACT_SENDER_EMAIL')

  if (missing.length > 0) {
    console.error('Missing Brevo configuration env var(s):', missing.join(', '))
    return res.status(500).json({ error: 'Email service is not configured' })
  }

  try {
    const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        sender: { name: senderName, email: senderEmail },
        to: [{ email: toEmail }],
        replyTo: { email, name },
        subject: `Portfolio inquiry from ${name}`,
        textContent: `${message}\n\n— ${name} (${email})`,
      }),
    })

    if (!brevoRes.ok) {
      const errorBody = await brevoRes.text()
      console.error('Brevo API error:', brevoRes.status, errorBody)
      return res.status(502).json({ error: 'Failed to send message' })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return res.status(500).json({ error: 'Failed to send message' })
  }
}
