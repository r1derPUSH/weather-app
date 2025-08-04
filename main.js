async function getData () {
    const response = await fetch(`https://wttr.in/Kyiv?format=j1`);
    const data = await response.json();
    console.log(data);
    console.log(1)
}

getData();