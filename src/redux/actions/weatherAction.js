export function weatherAction (weather){
    return {
     type:  'UPDATE_WEATHER',
     payload:{
         weather
     }
    }
}