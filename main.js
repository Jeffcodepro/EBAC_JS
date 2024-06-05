document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('login-form');
    const nomeValidation = form.querySelector('input[type="text"]');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirm-password');
    const showPasswordsContainer = document.getElementById('show-passwords-container');
    const showPasswordsCheckbox = document.getElementById('show-passwords');
    const nameError = document.getElementById('name-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');
    let formEValido = false;

    const validaNome = (nomeCompleto) => nomeCompleto.trim().split(' ').length >= 2;
    const validaSenha = (senha) => senha.length >= 8 && /[!@#$%^&*(),.?":{}|<>]/g.test(senha);
    const toggleError = (element, isValid, errorElement) => {
        if (isValid) {
            element.classList.remove('error');
            errorElement.style.display = 'none';
        } else {
            element.classList.add('error');
            errorElement.style.display = 'block';
        }
    };
    const handlePasswordField = () => {
        const senhaValida = validaSenha(passwordField.value);
        toggleError(passwordField, senhaValida, passwordError);
        confirmPasswordField.style.display = senhaValida ? 'block' : 'none';
        showPasswordsContainer.style.display = senhaValida ? 'flex' : 'none';
    };
    const handleConfirmPasswordField = () => {
        const senhasCorrespondem = passwordField.value === confirmPasswordField.value;
        toggleError(confirmPasswordField, senhasCorrespondem, confirmPasswordError);
    };
    const handleNomeCompleto = () => {
        formEValido = validaNome(nomeValidation.value);
        toggleError(nomeValidation, formEValido || nomeValidation.value.trim() === "", nameError);
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleNomeCompleto();
        handlePasswordField();
        handleConfirmPasswordField();

        if (formEValido && validaSenha(passwordField.value) && passwordField.value === confirmPasswordField.value) {
            form.submit();
        }
    });

    passwordField.addEventListener('keyup', handlePasswordField);
    confirmPasswordField.addEventListener('keyup', handleConfirmPasswordField);
    nomeValidation.addEventListener('keyup', handleNomeCompleto);

    showPasswordsCheckbox.addEventListener('change', () => {
        const type = showPasswordsCheckbox.checked ? 'text' : 'password';
        passwordField.type = type;
        confirmPasswordField.type = type;
    });
});
