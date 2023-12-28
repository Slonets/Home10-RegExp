function validateForm() 
{
    event.preventDefault();

    let form = document.forms.registrationForm;

    // Перевірка електронної пошти
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var emailError = document.getElementById('emailError');

    if (!emailRegex.test(form.elements.email.value) || form.elements.email.lenght < 4) {
        emailError.textContent = 'Невірна електронна пошта!';
    }
    else {
        emailError.textContent = ''; // Очистка помилки, якщо введено коректні дані
    }

    // Перевірка пароля
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    var passwordError = document.getElementById('passwordError');

    if (!passwordRegex.test(form.elements.password.value)) {
        passwordError.textContent = 'Невірний пароль! Пароль повинен містити принаймні 6 символів, 1 літеру нижнього регістра, 1 літеру верхнього регістра та 1 цифру.';
    }
    else {
        passwordError.textContent = '';
    }

    // Перевірка підтвердження пароля    
    if (form.elements.password.value !== form.elements.confirmPassword.value) 
    {
        confirmPasswordError.textContent = 'Підтвердження пароля не співпадає!';

    }
    else 
    {
        confirmPasswordError.textContent = '';
    }

    const currentDate = new Date(Date.now());

    expire = currentDate;
    expire.setMinutes(expire.getMinutes() + 10);

    console.log('Реєстрація успішна!');
    // Тут ви можете виконати додаткові дії або перейти на іншу сторінку

    // записуємо в куки    
    document.cookie = `email = ${form.email.value}` + expire.toUTCString() + "; path='/';";
    document.cookie = `password = ${form.password.value}` + expire.toUTCString() + ";";
    return true;

}