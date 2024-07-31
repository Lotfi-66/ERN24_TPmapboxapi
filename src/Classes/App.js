//on import LocalEvents.js
import LocalEvents from './LocalEvents.js'
//on import la config 
import config from '../../app.config.json'
//on importe la libririe mapbox
import mapboxgl from 'mapbox-gl'
//ojn import la librarie bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
//on import la librarie bootstrap-icons
import 'bootstrap-icons/font/bootstrap-icons.css';
//on import la librarie mapbox
import 'mapbox-gl/dist/mapbox-gl.css';
//on import le css
import '../assets/style.css';


class App {
    //properties
    //container de la map 
    elDivMap;
    //instance de la map 
    map;
    
    LocalEvents;


    lngLat = null



    constructor(){
        this.LocalEvents = new LocalEvents();
     
    }


    start(){
        console.log('App started');
        this.loadDom();
        this.initMap(); 
       
        this.LocalEvents.formConstruct();
      
    }

    //Chargement du dom 
    loadDom(){
        //on récupére notre div app 
        const app = document.getElementById('app');
        //on crée un élément div pour la map 
        this.elDivMap = document.createElement('div');
        //on lui donnée un id 
        this.elDivMap.id = 'map';

        //on ajoute la div de la map a la div app
        app.appendChild(this.elDivMap);
    }

    //initialisation de la map
    initMap(){
        mapboxgl.accessToken = config.apis.mapbox_gl.apiKey;
        //on va instancier notre map
        this.map = new mapboxgl.Map({
            container: this.elDivMap,
            style: config.apis.mapbox_gl.map_styles.satellite_streets,
            center: [2.3522, 48.8566],
            zoom:12
        })
        const nav = new mapboxgl.NavigationControl();
        this.map.addControl(nav, 'top-left');

        //ajout d'un ecouteur sur la map 
        this.map.on('click', this.handleClicMap.bind(this))

      
        
    }

    //Méthode qui capte le clique sur la map 
    handleClicMap(e){

        let lat= document.getElementById('lat');
        let long= document.getElementById('long');

    lat.value = e.lngLat.lat
    long.value = e.lngLat.lng

       
 
    const marker = new mapboxgl.Marker()
      .setLngLat(e.lngLat)
      .addTo(this.map);
    

    }

    addLocalStorage() {
        const send = document.getElementById("send");
        send.addEventListener("click", () => {
            prevent
          console.log("click");
        });
      }


    


    
}

const app = new App();

export default app