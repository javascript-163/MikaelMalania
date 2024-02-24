async function infoFetcher() {
    const data = await fetch("https://www.gov.uk/bank-holidays.json");
    console.log("Some random process here");
    const dataJson = await data.json();

    console.log(dataJson);
}

infoFetcher()
