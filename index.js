// *** URLs SECTION ***

const chuckNorrisUrl = 'https://api.chucknorris.io/jokes/random';
const jsonPlaceHolderUrl = 'https://jsonplaceholder.typicode.com/users';
const randomImageURL = 'https://picsum.photos/200';

// *** APIs SECTION ***

const chuckNorrisAPI = async () => {
  let responseRaw = await fetch(chuckNorrisUrl);
  let responseJson = await responseRaw.json();
  return responseJson;
};

const jsonPlaceHolderAPI = async () => {
  let responseRaw = await fetch(jsonPlaceHolderUrl);
  let responseJson = await responseRaw.json();
  return responseJson;
};

const randomImageAPI = async () => {
  let response = await fetch(randomImageURL);
  return response.url;
};

// *** CONSUMERs SECTION ***

// CONSUMER OF jsonPlaceHolderAPI
const userEmails = async () => {
  let data = await jsonPlaceHolderAPI();
  const emails = data.map((user) => {
    return user.email;
  });
  console.log(emails);
};
userEmails();

// CONSUMER OF jsonPlaceHolderAPI
const userAddress = async () => {
  let data = await jsonPlaceHolderAPI();
  const address = data.map((user) => {
    return user.address.city;
  });
  console.log(address);
};
userAddress();

//.
//.
//.

// CONSUMER OF chuckNorrisAPI
const joke = async () => {
  let data = await chuckNorrisAPI();
  //console.log(data.value);
};
//joke();

const image = async () => {
  let data = await randomImageAPI();
  document.getElementById('imageArea').src = data;
  document.getElementById('imageArea2').src = data;
  console.log(data);
};

var button = document.getElementById('subButton');
button.onclick = () => {
  image();
};

//.
//.
//.

// END CONSUMER SECTION