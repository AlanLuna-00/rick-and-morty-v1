const validation = (form, errors, setErrors) => {
    const newErrors = {...errors}
    const EMAIL = 'alanluna@gmail.com';
    const PASSWORD = 'alan05';

    if (!form.email) {
      newErrors.email = "Se requiere email";
    } else if (!/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(form.email)) { 
        newErrors.email = "Formato invalido";
    } else if (form.email.length > 35) { 
        newErrors.email = "Email nombre de usurio no puede tener mas de 35";
    } else if (form.email !== EMAIL) {
        newErrors.email = "Email incorrecto"
    } else {
        newErrors.email = ""
    }

    if (!form.password) {
      newErrors.password = "Ingrese contraseña"
    } else if (!/\d/.test(form.password)) {
        newErrors.password = "la contraseña tiene que tener al menos un número"
    } else if (form.password.length < 5 || form.password.length > 11 ) {
        newErrors.password = "La contraseña tiene que tener una longitud entre 6 y 10 caracteres"
    } else if (form.password !== PASSWORD) {
        newErrors.password = "Contraseña incorrecta"
    } else { 
        newErrors.password = ""
    }

    setErrors(newErrors)
  };

export default validation