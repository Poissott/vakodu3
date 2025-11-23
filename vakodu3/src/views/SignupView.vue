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
