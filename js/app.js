fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature;"
)
  .then((res) => res.json())
  .then((data) => {
    document.body.style.backgroundImage = `url("${data.urls.regular}")`;
    document.getElementById("image-info").innerHTML = `
        <h3>By: ${data.user.name}</h3>
        <h5>Location: ${data.location.name}</h5>
    `;
  })
  .catch((err) => {
    document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1523978591478-c753949ff840?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTAzNDI1MzY&ixlib=rb-1.2.1&q=85")`;
  });

fetch(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin"
)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
