<template>
  <div class="mail-view">
    <form class="mail-form">
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

      <button type="button" class="save-btn">Send Mail</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const subject = ref('')
const fromName = ref('')
const body = ref(``)


</script>

<style scoped>
.mail-view {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 170px;
  width: 50em;
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