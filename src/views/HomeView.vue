<!-- setup identificador del composition api -->
<script lang="ts">
import { ref } from 'vue';

const name = ref();
const color= ref('#d03');
const error= ref(true);
const lastname= ref();
const age= ref();

const NameValidation= () => {
  if(name.value.length < 5){
    error.value = false;
  } else{
    error.value= true;
  }
};

interface FormData {
  name: string;
  lastname: string;
  age: number;
  gender: string;
  otherGender: string;
  isNameValid: boolean;
  isLastNameValid: boolean;
  isAgeValid: boolean;
}

export default {
  data(): FormData {
    return {
      name: '',
      lastname: '',
      age: 0,
      gender: 'masculino',
      otherGender: '',
      isNameValid: true,
      isLastNameValid: true,
      isAgeValid: true,
    };
  },
  methods: {
    validateName() {
      this.isNameValid = this.name.length >= 5 && this.name.length <= 18;
    },
    validateLastName() {
      this.isLastNameValid = this.lastname !== this.name;
    },
    validateAge() {
      this.isAgeValid = this.age > 0 && this.age < 60;
    },
    submitForm() {
      if (this.isNameValid && this.isLastNameValid && this.isAgeValid) {
        alert('El formulario enviado con éxito, ¡Felicidades!');
        console.log('Formulario enviado:', {
          name: this.name,
          lastname: this.lastname,
          age: this.age,
          gender: this.gender === 'otro' ? this.otherGender : this.gender,
        });
      } else {
        alert('Por favor, corrija los errores en el formulario >~<');
      }
    },
  },
};
</script>


<template>
  <main>
    <h1>Hello from home c:</h1>
    
    <form @submit.prevent="submitForm">
      <label for="name">Nombre:</label>
      <input
        type="text"
        id="name"
        v-model="name"
        @input="validateName"
        :class="{ 'error': !isNameValid }"
      />
      <p v-if="!isNameValid" class="error">El nombre debe tener entre 5 y 18 caracteres.</p>

      <label for="lastname">Apellido:</label>
      <input
        type="text"
        id="lastname"
        v-model="lastname"
        @input="validateLastName"
        :class="{ 'error': !isLastNameValid }"
      />
      <p v-if="!isLastNameValid" class="error">El apellido no puede ser igual al nombre.</p>

      <label for="age">Edad:</label>
      <input
        type="number"
        id="age"
        v-model="age"
        @input="validateAge"
        :class="{ 'error': !isAgeValid }"
      />
      <p v-if="!isAgeValid" class="error">La edad debe ser mayor que 0 y menor que 60.</p>

      <label for="gender">Género:</label>
      <select id="gender" v-model="gender">
        <option value="masculino">Masculino</option>
        <option value="femenino">Femenino</option>
        <option value="otro">Otro</option>
      </select>

      <div v-if="gender === 'otro'">
        <label for="otherGender">Agregar otro género:</label>
        <input type="text" id="otherGender" v-model="otherGender" />
      </div>

      <button type="submit">Enviar</button>
    </form>
  </main>
</template>

<style>
  main {
    max-width: 400px;
    margin: 0 auto;
    padding: 30px;
    background-color: #1a1a1a;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    color: #ddd;
  }

  h1 {
    color: #bbb;
    text-align: center;
    margin-bottom: 20px;
  }

  form {
    display: grid;
    gap: 15px;
  }

  label {
    font-weight: bold;
  }

  input,
  select {
    padding: 12px;
    border: 1px solid #444;
    border-radius: 6px;
    background-color: #333;
    color: white;
    width: 100%;
    box-sizing: border-box;
    transition: border-color 0.3s ease;
  }

  input:focus,
  select:focus {
    border-color: #4caf50;
  }

  .error {
    background-color: #cc3333;
    color: white;
    padding: 12px;
    border-radius: 6px;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 15px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    width: 100%;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #45a049;
  }
</style>
