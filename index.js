// *** URLs SECTION ***

const chuckNorrisUrl = 'https://api.chucknorris.io/jokes/random';
const jsonPlaceHolderUrl = 'https://jsonplaceholder.typicode.com/users';

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
  console.log(data.value);
};
joke();

//.
//.
//.

// END CONSUMER SECTION
