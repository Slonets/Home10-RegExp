function validateForm() {
    // Отримання значень полів форми
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Перевірка електронної пошти
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var emailError = document.getElementById('emailError');

    if (!emailRegex.test(email) || email.length < 4) 
    {
        emailError.textContent = 'Невірна електронна пошта!';
        return false;
    }
    else 
    {
        emailError.textContent = ''; // Очистка помилки, якщо введено коректні дані
    }

    // Перевірка пароля
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    var passwordError = document.getElementById('passwordError');

    if (!passwordRegex.test(password)) 
    {
        passwordError.textContent = 'Невірний пароль! Пароль повинен містити принаймні 6 символів, 1 літеру нижнього регістра, 1 літеру верхнього регістра та 1 цифру.';
        return false;
    }
    else 
    {
        passwordError.textContent = '';
    }

    // Перевірка підтвердження пароля
    var confirmPasswordError = document.getElementById('confirmPasswordError');

    if (password !== confirmPassword) 
    {
        confirmPasswordError.textContent = 'Підтвердження пароля не співпадає!';
        return false;
    }
    else 
    {
        confirmPasswordError.textContent = '';
    }

    const currentDate = new Date(Date.now());

    expire = currentDate;
    expire.setMinutes(expire.getMinutes() + 10);

    //записуємо в куки
    document.cookie = `email = ${email}`+ expire.toUTCString()+ "; path='/';";
    document.cookie = `password = ${epassword}`+ expire.toUTCString()+ ";";
    
    // Якщо всі перевірки пройдені, можна продовжити обробку форми або відправку на сервер
    if (emailError.textContent === '' && passwordError.textContent === '' && confirmPasswordError.textContent === '') {
        alert('Реєстрація успішна!');
        // Тут ви можете виконати додаткові дії або перейти на іншу сторінку

        return true;
    }
}