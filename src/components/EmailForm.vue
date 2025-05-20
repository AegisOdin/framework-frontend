<template>
  <div class="mail-view">
    <form class="mail-form" @submit.prevent="sendMail">
      <div class="form-group">
        <label for="subject">Subject</label>
        <input
          id="subject"
          v-model="subject"
          type="text"
          class="input"
          placeholder="Put here the subject of the email"
        />
      </div>

      <div class="form-group">
        <label for="body">E-mail Body</label>
        <textarea
          id="body"
          v-model="body"
          class="textarea"
          rows="6"
          placeholder="Write here the whole context of the email!!"
        ></textarea>
      </div>
        <button type="submit" class="save-btn">Send Mail</button>
      <div v-if="status" :class="status.ok ? 'hint' : 'hint small'" style="margin-top:1rem;">
        {{ status.message }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const subject = ref('')
const body = ref('')
const status = ref(null)

const user = JSON.parse(localStorage.getItem('user') || '{}')

async function sendMail() {
  status.value = null
  try {
    const res = await fetch('http://localhost:3000/enviar-mensaje', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include', // importante para enviar la cookie de sesión
      body: JSON.stringify({
        mensaje: body.value,
        correo: user.email,
        asunto: subject.value
      })
    })
    const data = await res.json()
    if (data.ok) {
      status.value = { ok: true, message: 'Correo enviado correctamente.' }
      subject.value = ''
      body.value = ''
    } else {
      status.value = { ok: false, message: data.error || 'Error al enviar el correo.' }
    }
  } catch (e) {
    status.value = { ok: false, message: 'Error de red o servidor.' }
  }
}
</script>

<style scoped>
.mail-view {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 10em;
}
.mail-form {
  background: #fff;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  width: 100%;
  max-width: 600px;
}
.form-group {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
}
label {
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #444;
}
.input, .textarea {
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  background: #fafbfc;
  color: #222;
  transition: border 0.2s;
}
.input:focus, .textarea:focus {
  border-color: #000000;
  outline: none;
}
.textarea {
  resize: vertical;
  font-family: inherit;
}
.hint {
  color: #b0b0b0;
  font-size: 0.95rem;
  margin-top: 0.3rem;
}
.hint.small {
  font-size: 0.85rem;
  margin-top: 0.5rem;
}
.save-btn {
  background: #222;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.7rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.2s;
}
.save-btn:hover {
  background: #444;
}
</style>