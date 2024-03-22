const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const htmlName = document.querySelector('.name');//se modifica $n por htmlName para hacerlo mas leguible , se cambio name por .name por que hace referencia a la clase en HTML
const htmlBlog = document.querySelector('.blog');//se modifica $b por htmlBlog para hacerlo mas leguible, se cambio #blog por .blog por que hace referencia a la clase en HTML
const htmlLocation = document.querySelector('.location');//se modifica $l por htmlLocation para hacerlo mas leguible

async function displayUser(username) {   //se agrega async a la funcion 
  htmlName.textContent = 'cargando...';

  try{                //se agrego un try y catch para que en ves de llamar al error inmediatamante espere la respuesta en caso de no tenerla llamar al error
  const response = await fetch(`${usersEndpoint}/${username}`);

  const data =  await response.json(); // se crea la variable data donde se guarde el json ya convertido 

  console.log(data);
  htmlName.textContent = `${data.name}`;//se cambia ' por ` ahora se pueda ver el valor dentro de data.name
  htmlBlog.textContent = `${data.blog}`;//se cambia ' por ` ahora se pueda ver el valor dentro de data.blog
  htmlLocation.textContent = `${data.location}`;//se cambia ' por ` ahora se pueda ver el valor dentro de data.location
  }catch(error){
    handleError(error);//se agrego el error para pasar el error a la funcion handleError
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  htmlName.textContent = `Algo salió mal: ${err}` //nombre de la variable erroneo se cambio por el nuevo nombre
}

displayUser('stolinski');// Se movio el catch para que no actue inmediatemente al llamar la funcion 