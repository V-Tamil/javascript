const url = "https://jsonplaceholder.org/posts";

async function fetchData() {
  try {
    console.log(1);
    const response = await fetch(url);
    console.log(2);
    const data = await response.json();
  } catch (error) {
    console.log(error);
  }
}

fetchData();
