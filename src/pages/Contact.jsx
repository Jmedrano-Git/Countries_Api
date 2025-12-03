import { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const validate = () => {
    const newErrors = {}

    if (!form.name.trim()) newErrors.name = 'El nombre es obligatorio'
    if (!form.email.trim()) {
      newErrors.email = 'El email es obligatorio'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'El email no es válido'
    }
    if (!form.message.trim()) newErrors.message = 'El mensaje es obligatorio'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess(false)

    if (!validate()) return

    setSuccess(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="container">
      <h1 className="h3 mb-4">Contacto</h1>

      <form className="col-md-6 mx-auto" onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            name="name"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea
            name="message"
            rows="4"
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && (
            <div className="invalid-feedback">{errors.message}</div>
          )}
        </div><S></S>

        <button type="submit" className="btn btn-primary w-100">
          Enviar
        </button>

        {success && (
          <div className="alert alert-success mt-3">
            ¡Mensaje enviado!
          </div>
        )}
      </form>
    </div>
  )
}

export default Contact;
