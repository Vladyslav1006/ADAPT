// pages/api/upload.js
export const config = {
  api: {
    bodyParser: false, // Disabling body parsing
  },
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end('Method Not Allowed')
  }

  const BACKEND_BASE_URL = 'http://localhost:5005/convert/doc' // Adjust as needed

  const formData = await new Promise((resolve) => {
    const form = new FormData()
    req.pipe(form)
    form.on('file', (name, stream, filename, encoding, mimetype) => {
      // Prepare the file stream and details to be sent to the Flask backend
      resolve({ stream, filename, mimetype })
    })
  })

  try {
    // Forward the file to the Flask backend
    const response = await fetch(BACKEND_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData.stream, // You need to implement proper stream forwarding here
    })
    const data = await response.json()

    res.status(200).json(data)
  } catch (error) {
    console.error('Error forwarding the file to Flask:', error)
    res.status(500).json({ error: 'Error forwarding the file to Flask.' })
  }
}
