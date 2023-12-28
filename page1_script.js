function validateForm() 
{
    // // Отримання значень полів форми
    // var email = document.getElementById('email').value;
    // var password = document.getElementById('password').value;
    // var confirmPassword = document.getElementById('confirmPassword').value;

    let form = document.forms.regForm;

    // Перевірка електронної пошти
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var emailError = document.getElementById('emailError');

    if (!emailRegex.test(form.email.value) || form.email.value < 4) 
    {
        emailError.textContent = 'Невірна електронна пошта!';
    }
    else 
    {        
        emailError.textContent = ''; // Очистка помилки, якщо введено коректні дані
        return true;
    }

    // Перевірка пароля
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    var passwordError = document.getElementById('passwordError');

    if (!passwordRegex.test(form.password.value)) 
    {
        passwordError.textContent = 'Невірний пароль! Пароль повинен містити принаймні 6 символів, 1 літеру нижнього регістра, 1 літеру верхнього регістра та 1 цифру.';
    }
    else 
    {
        passwordError.textContent = '';
        return true;
    }

    // Перевірка підтвердження пароля
    // var confirmPasswordError = document.getElementById('confirmPasswordError');

    if (form.password.value !== form.confirmPassword.value) 
    {
        confirmPasswordError.textContent = 'Підтвердження пароля не співпадає!';
        return true;
    }
    else 
    {
        console.log("Добре! Перевірка пароля");
        confirmPasswordError.textContent = '';
        return true;
    }

    const currentDate = new Date(Date.now());

    expire = currentDate;
    expire.setMinutes(expire.getMinutes() + 10);


    // Якщо всі перевірки пройдені, можна продовжити обробку форми або відправку на сервер
    if (emailError.textContent === '' && passwordError.textContent === '' && confirmPasswordError.textContent === '') 
    {
        alert('Реєстрація успішна!');
        // Тут ви можете виконати додаткові дії або перейти на іншу сторінку

        //записуємо в куки
        document.cookie = `email = ${form.email.value}` + expire.toUTCString() + "; path='/';";
        document.cookie = `password = ${form.password.value}` + expire.toUTCString() + ";";
        window.location.href = "next_page.html";
        return true;
    }
}