<template>
  <div class="signup">
    <main class="signup-content">
      <h2>Sign Up</h2>
      <form @submit.prevent="submitForm" class="signup-form"> // Form element prevents default submit behavior and calls submitForm()
        <!-- Name -->
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" v-model="name" id="name" required />
        </div>

        <!-- Email -->
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" v-model="email" id="email" required />
        </div>

        <!-- Password -->
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            v-model="password"
            id="password"
            required
          />
          <div v-if="passwordErrors.length" class="errors">
            <p>Password is not valid:</p>
            <ul>
              <li v-for="(error, index) in passwordErrors" :key="index">{{ error }}</li> // Loops through all errors and display them as list items
            </ul>
          </div>
        </div>

        <!-- Confirm Password -->
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            v-model="confirmPassword"
            id="confirmPassword"
            required
          />
          <div v-if="confirmPassword && confirmPassword !== password" class="errors">
            <p>Passwords do not match</p>
          </div>
        </div>

        <button type="submit" class="submit-btn" :disabled="!canSubmit"> // Submit button is disabled if canSubmit is false
          Sign Up
        </button>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: "SignUpView",

  data() {
    return { // Stores the inputs
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },

  // Computed properties are reactive and automatically update when their dependencies change
  computed: {
    // Computes an array of password errors based on validation rules
    passwordErrors() {
      const errors = [];

      // Length must be >= 8 and < 15
      if (this.password.length < 8 || this.password.length >= 15) {
        errors.push("Password must be between 8 and 15 characters.");
      }

      // Must include at least 1 uppercase letter
      if (!/[A-Z]/.test(this.password)) {
        errors.push("At least one uppercase letter required.");
      }

      // Must include at least 2 lowercase letters
      // Uses match() to count lowercase letters, defaulting to empty array if none
      if ((this.password.match(/[a-z]/g) || []).length < 2) { // g = global search, meaning it finds all matches, not just the first one.
        errors.push("At least two lowercase letters required.");
      }

      // Must include at least 1 numeric value
      if (!/[0-9]/.test(this.password)) {
        errors.push("At least one numeric value required.");
      }

      // Must start with an uppercase letter
      if (!/^[A-Z]/.test(this.password)) { // ^ checks if the first letter is uppercase
        errors.push("Password must start with an uppercase letter.");
      }

      // Must include the underscore character "_"
      if (!/_/.test(this.password)) {
        errors.push("Password must include '_'.");
      }

      return errors;
    },

    // Determines if the form can be submitted
    canSubmit() {
      return (
        this.name &&                                // Name must not be empty
        this.email &&                               // Email must not be empty
        this.password &&                            // Password must not be empty
        this.confirmPassword === this.password &&   // Confirm password must match password
        this.passwordErrors.length === 0            // There must be no password validation errors
      );
    }
  },

  // Methods
  methods: {
    // Called when the form is submitted
    submitForm() {
      // Only proceed if the form is valid
      if (this.canSubmit) {
        alert("Signup successful!"); // Show success message

        // Reset the form fields
        this.name = "";
        this.email = "";
        this.password = "";
        this.confirmPassword = "";
      }
    }
  }
};
</script>

<style scoped>
/* Outer wrapper for the signup page */
.signup {
  font-family: Arial, sans-serif;
  margin: 0;
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
}

/* Centered white card containing the form */
.signup-content {
  max-width: 500px;
  margin: auto;
  background: #fff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
}

/* Each form field group */
.signup-form .form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

.signup-form label {
  font-weight: bold;
  margin-bottom: 5px;
}

.signup-form input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.errors {
  margin-top: 5px;
  color: #b00020;
  font-size: 0.9rem;
}

/* Error list formatting */
.errors ul {
  margin: 0;
  padding-left: 18px;
}

.submit-btn {
  padding: 10px 20px;
  background: #004080;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-btn:hover:not(:disabled) {
  opacity: 0.9;
}
</style>