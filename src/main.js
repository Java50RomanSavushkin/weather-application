import { DataProcessor } from "./service/DataProcessor.js";
import { weatherConfig } from "./config/weather-config.js";

const url = weatherConfig.url;
const citiesObj = weatherConfig.cities;
const dataProcessor = new DataProcessor(url, citiesObj);
dataProcessor.getTemperatureData("Rehovot","2023-02-17","2023-02-17","00:00","02:00");
