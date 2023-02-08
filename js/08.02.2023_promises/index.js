const formElem = document.querySelector('.login-form');

const serverUrl = 'https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/users';

function createUserHandler(event) {
  event.preventDefault();

  // read form

  const user = {
    email: 'test@gmail.com',
    name: 'Vitalii',
    password: '123',
  };

  // save to DB (server)

  // input: string (url), obj (params)
  // output: promise
  const res = fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    // input: callback fulfilled, promise rejectd
    //boutput: promise

    // callback
    // input: result of promise
    // output: promise | undefined
    .then((res) => {
      //    if(res.status === 400) {
      //        alert(res.body.message);
      //    }

      //    if(res.status === 500) {
      //        alert('Server is not available');
      //        throw new Error();
      //    }

      //    if(!res.ok) {
      //        alert('Something went wrong');
      //        return;
      //    }

      return res.json();
    })
    .then((body) => {
      console.log(body);
      // input: string
      // output: undefined
      alert(JSON.stringify(body));
    })
    .catch((err) => {
      alert('Your connection lost...');
    });

  console.log(res);
}

formElem.addEventListener('submit', createUserHandler);
