import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://restcountries.com/v3.1",
})

console.log(apiClient, "apiClient");

export const getCountryData = () => {
    return apiClient.get("/all?fields=name,population,region,capital,flags")
}