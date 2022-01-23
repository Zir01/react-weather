import React from 'react';
import { IWeatherResponse } from '../api/OpenWeatherClient';
import { round } from '../utils';
import styled from 'styled-components';

type Properties = {
    weatherData: IWeatherResponse
}

const StyledWeatherItem = styled.div`
    text-align: center;
    width: 140px;
    margin: 10px;
    padding: 10px;;
    box-shadow: 2px 2px 8px rgb(68, 68, 68);
    background-color: #ffbb00;
    border-radius: 5px;
`;
const City = styled.p`
    font-weight: 200;
`;
const Temperature = styled.p`
    font-size: 32px;
    margin: 0px;
`;
const FeelsLike = styled.p`
    font-size: 12px;
    margin: 0px;
`;
const Description = styled.p`
    font-size: 12px;
    margin: 0px;
`;


type IconProps = {
    icon:string;
};
const Icon = styled.div<IconProps>`
    background-image: ${(props) => `url(https://openweathermap.org/img/wn/${props.icon}@2x.png)`};
    height: 100px;
    width: 100px;
    margin: 0 auto;
`;

const WeatherItem: React.FC<Properties> = (props) => {
    return (
        <StyledWeatherItem>
            <City>
                {props.weatherData.name}
            </City>
            <Temperature>
                {round(props.weatherData.main.temp, 1)}&deg;
            </Temperature>
            <FeelsLike>
                Feels like {round(props.weatherData.main.feels_like, 1)}&deg;
            </FeelsLike>
            <Icon 
                role="img" 
                title={props.weatherData.weather[0].main + "(" + props.weatherData.weather[0].description + ")"} 
                icon={props.weatherData.weather[0].icon} />
            <Description>
                {props.weatherData.weather[0].main} ({props.weatherData.weather[0].description})
            </Description>
        </StyledWeatherItem>
    )
}

export default WeatherItem;