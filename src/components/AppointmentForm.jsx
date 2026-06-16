import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { crearReserva } from '../services/api';
import RevealSection from './RevealSection';
import WhatsAppButton from './WhatsAppButton';
import './AppointmentForm.css';

const MOTIVOS = [
  { value: 'Ortodoncia', label: 'Ortodoncia' },
  { value: 'Estética dental', label: 'Estética dental' },
  { value: 'Odontología general', label: 'Odontología general' },
  { value: 'Otro', label: 'Otro' },
];

const initialForm = {
  nombre: '',
  apellido: '',
  dni: '',
  telefono: '',
  email: '',
  fecha_nacimiento: '',
  motivo: '',
  website: '',
};

function validarForm(form) {
  const errores = {};

  if (!form.nombre.trim()) errores.nombre = 'Ingresá tu nombre.';
  if (!form.apellido.trim()) errores.apellido = 'Ingresá tu apellido.';
  if (!/^\d{7,8}$/.test(form.dni.trim())) errores.dni = 'El DNI debe tener 7 u 8 dígitos.';
  if (!form.telefono.trim()) errores.telefono = 'Ingresá tu teléfono.';
  if (!form.fecha_nacimiento) errores.fecha_nacimiento = 'Ingresá tu fecha de nacimiento.';
  if (!form.motivo) errores.motivo = 'Seleccioná un motivo.';

  return errores;
}

export default function AppointmentForm() {
  const [form, setForm] = useState(initialForm);
  const [errores, setErrores] = useState({});
  const [estado, setEstado] = useState('idle');
  const [errorGlobal, setErrorGlobal] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errores[name]) {
      setErrores((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorGlobal('');

    if (form.website) return;

    const validationErrors = validarForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrores(validationErrors);
      return;
    }

    setEstado('loading');
    try {
      const res = await crearReserva({
        nombre: form.nombre.trim(),
        apellido: form.apellido.trim(),
        dni: form.dni.trim(),
        telefono: form.telefono.trim(),
        email: form.email.trim() || undefined,
        fecha_nacimiento: form.fecha_nacimiento,
        motivo: form.motivo,
      });
      setResultado(res);
      setEstado('success');
    } catch (err) {
      setErrorGlobal(err.message);
      setEstado('error');
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrores({});
    setEstado('idle');
    setErrorGlobal('');
    setResultado(null);
  };

  return (
    <section id="turno" className="section appointment-section">
      <div className="container">
        <RevealSection>
          <h2>¡Reservá tu turno!</h2>
          <p className="appointment-intro">
            Completá el formulario con tus datos y motivo de consulta. Te contactaremos
            para coordinar el día y horario que mejor te quede. Atención los miércoles
            de 11:00 a 14:00 h.
          </p>
        </RevealSection>

        <RevealSection delay={0.1}>
          <div className="appointment-card">
            <AnimatePresence mode="wait">
              {estado === 'success' && resultado ? (
                <motion.div
                  key="success"
                  className="appointment-success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="success-icon" aria-hidden="true">✓</div>
                  <h3>¡Solicitud enviada!</h3>
                  <p>
                    Registramos tus datos. Te vamos a contactar para coordinar fecha y horario.
                  </p>
                  <p className="success-note">
                    Podés enviarnos un mensaje por WhatsApp para agilizar la coordinación.
                  </p>
                  <div className="success-actions">
                    <WhatsAppButton url={resultado.whatsapp_url} variant="solid" />
                    <button type="button" className="btn btn-secondary" onClick={resetForm}>
                      Enviar otra solicitud
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="form-grid form-grid-2">
                    <div className="form-group">
                      <label htmlFor="nombre">Nombre</label>
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        autoComplete="given-name"
                        value={form.nombre}
                        onChange={handleChange}
                        aria-invalid={!!errores.nombre}
                      />
                      {errores.nombre && <span className="form-error">{errores.nombre}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="apellido">Apellido</label>
                      <input
                        id="apellido"
                        name="apellido"
                        type="text"
                        autoComplete="family-name"
                        value={form.apellido}
                        onChange={handleChange}
                        aria-invalid={!!errores.apellido}
                      />
                      {errores.apellido && <span className="form-error">{errores.apellido}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="dni">DNI</label>
                      <input
                        id="dni"
                        name="dni"
                        type="text"
                        inputMode="numeric"
                        autoComplete="off"
                        value={form.dni}
                        onChange={handleChange}
                        aria-invalid={!!errores.dni}
                      />
                      {errores.dni && <span className="form-error">{errores.dni}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="telefono">Teléfono</label>
                      <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        autoComplete="tel"
                        placeholder="11 1234 5678"
                        value={form.telefono}
                        onChange={handleChange}
                        aria-invalid={!!errores.telefono}
                      />
                      {errores.telefono && <span className="form-error">{errores.telefono}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email <span className="optional">(opcional)</span></label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="fecha_nacimiento">Fecha de nacimiento</label>
                      <input
                        id="fecha_nacimiento"
                        name="fecha_nacimiento"
                        type="date"
                        value={form.fecha_nacimiento}
                        onChange={handleChange}
                        aria-invalid={!!errores.fecha_nacimiento}
                      />
                      {errores.fecha_nacimiento && (
                        <span className="form-error">{errores.fecha_nacimiento}</span>
                      )}
                    </div>

                    <div className="form-group form-group-full">
                      <label htmlFor="motivo">Motivo de consulta</label>
                      <select
                        id="motivo"
                        name="motivo"
                        value={form.motivo}
                        onChange={handleChange}
                        aria-invalid={!!errores.motivo}
                      >
                        <option value="">Seleccioná un motivo</option>
                        {MOTIVOS.map((m) => (
                          <option key={m.value} value={m.value}>
                            {m.label}
                          </option>
                        ))}
                      </select>
                      {errores.motivo && <span className="form-error">{errores.motivo}</span>}
                    </div>
                  </div>

                  <div className="honeypot" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={handleChange}
                    />
                  </div>

                  {errorGlobal && (
                    <p className="form-error form-error-global" role="alert">
                      {errorGlobal}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary appointment-submit"
                    disabled={estado === 'loading'}
                  >
                    {estado === 'loading' ? 'Enviando…' : 'Solicitar turno'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
