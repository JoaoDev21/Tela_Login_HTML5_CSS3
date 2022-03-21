function showPassword(){
    const eye = document.getElementById('eye');
    const eyeSlash =  document.getElementById('eyeSlash');
    const FieldPassword = document.getElementById('FieldPassword');

    if(eye.style.display === 'none')
    {
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        FieldPassword.type = 'text';
    }
    else
    {
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        FieldPassword.type = "password";
    }
};

document.getElementById('btnLogin').addEventListener('click', function(e){
    e.preventDefault();
    //alert('Você Está Logado')
})

function ValidLogin(){

    const email = document.getElementById('email');
    const FieldPassword = document.getElementById('FieldPassword');
    const btnLogin = document.getElementById('btnLogin');

    
}

