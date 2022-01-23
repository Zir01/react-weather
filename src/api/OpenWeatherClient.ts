import axios from 'axios';

export interface IWeatherResponse {
    coord: {
        lon: number,
        lng: number
    },
    weather: {
        id: number,
        main: string,
        description: string,
        icon: string
    }[],
    base: string,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number
    },
    visibility: number,
    wind: {
        speed: number,
        deg: number,
        gust: number
    },
    clouds: {
        all: number
    },
    dt: Date,
    sys: {
        type: number,
        id: number,
        country: string,
        sunrise: Date,
        sunset: Date
    },
    timezone: number,
    id: number,
    name: string,
    cod: number
}


export class OpenWeatherClient {

    public async getWeatherForAllCitiesAsync() {

        const baseUrl = this.buildBaseUrl();
        
        const cityIds = [
            6619279,
            7839805,
            2078025,
            2153391,
            7839402,
            7839562,
            7839672
        ]; // hard coded just for Australian cities

        let fetchList: any[] = [];
        cityIds.map((cityId) => {
            return fetchList.push(axios.get(baseUrl + cityId.toString()));
        });
        try {
            const res = await Promise.all(fetchList);
            const data:IWeatherResponse[] = res.map((res) => res.data);
            return data;
        } catch {
            throw Error("Promise failed");
        }

    }

    private buildBaseUrl(): string {

        let url:string|undefined = process.env.REACT_APP_OPEN_WEATHER_URL;
        if (!url){
            console.error("Please configure REACT_APP_OPEN_WEATHER_URL in .env file")
        }
        
        let apiKey:string|undefined = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
        if (!apiKey){
            console.error("Please configure REACT_APP_OPEN_WEATHER_API_KEY in .env file")
        }
        
        const baseUrl = `${url}?appid=${apiKey}&units=metric&id=`;
        return baseUrl

    }




}