const numCount = 15
const urlApi = "https://api2.minhablaze.com.br/api/v1/result/double"

const fetchNums = async () => {
    //for (let i = 1; i <= numCount; i++) {
        await getNums()
   // }
}

const getNums = async () => {
    const url = urlApi
    const resp = await fetch(url)
    const data = await resp.json()
    ver(data)
}

const ver  = (data) => {
    for (let i = 1; i <= numCount; i++) {
        console.log(data.results[i])
    }

    

    console.log("aaaaaaa")



}

fetchNums()

