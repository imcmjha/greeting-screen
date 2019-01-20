import * as React from 'react';

export interface IWeatherState {
  lat: string;
  lng: string;
  loc: string;
  weather: any;
}

export class Weather extends React.Component<{}, {}> {
  public state = {
    lat: "",
    lng: "",
    loc: "",
    weather: ""
  }

  public componentWillMount(){
    const key = "AIzaSyARnr7RYD5soUsiJVJmcmUwpbgyosdpIbE";
    this.fetchData(key);
  }

  public render() {
    return (
      <React.Fragment>
        We suppose u r staying in {this.state.loc} and it is {this.state.weather} out there.
      </React.Fragment>
    );
  }

  public fetchData = (key:string) => {
    fetch('https://www.googleapis.com/geolocation/v1/geolocate?key='+key,{
      method: 'post'
    }).then((response) => {
      if(response.ok){
        response.json().then((res) => {
          let {lat, lng, loc, weather} = this.state;
          lat = res.location.lat;
          lng = res.location.lng;
          const owKey = '5d262ea16ef429dfebe8e81cdc882210';
          fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&appid='+owKey, {
            method:'get'
          }).then((r)=> {
            if(r.ok){
              r.json().then((x)=>{
                loc = x.name; 
                weather = x.weather[0].description
                this.setState({loc, weather});
              })
            }
          })
          // fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&sensor=true&key='+key,{
          //   method: 'post'
          // }).then((response2)=>{
          //   if(response2.ok){
          //     response2.json().then((res2)=>{
          //       this.print(res2)
          //     })
          //   }
          // })
          this.setState({lat, lng});
        })
      }
    }).catch((err)=>{
      this.print(err);
    })
  }

  public print = (text:any) => {
    // tslint:disable-next-line:no-console
    console.log(text);
  }
}

export default Weather;