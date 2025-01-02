var config = {
    style: 'mapbox://styles/imelchor/cm4syjc6h004401qwetlq7pcc',
    accessToken: 'pk.eyJ1IjoiaW1lbGNob3IiLCJhIjoiY20ydWg5dTU1MDE3MTJrcTF4eHpjMDl6cSJ9.mYb62Z76ksJIeujostps2g',
    showMarkers: false,
    //markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: '',


    
    chapters: [
        {
            id: 'franklin',
            alignment: 'right',
            hidden: true,
            title: 'Franklin Township, New Jersey',
            //image: 'C:/Users/im2484/OneDrive - Princeton University/Desktop/High_WaterMark/Documentary/Asheville_MapBox/MapBox_tutorial/biltmore_mcdonalds.png',
            description: '',
            location: {
                center: [-74.54757, 40.52982], 
                zoom: 12.5,
                pitch: 45,
                bearing: 10,
                speed: 1,
                curve: 1.5,
                easing: (t) => t * (2 - t)
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [              
              {
                    layer: 'franklin-warehouse-3d',
                    opacity: 1.0,
                    duration: 600
              },
              
              {
                    layer: 'franklin-warehouse-base',
                    opacity: 0.0,
                    duration: 600
              },
              
              {
                    layer: 'empire_state',
                    opacity: 0.0,
                    duration:600
              }
                            ],
          
            onChapterExit:  [               
              {
                    layer: 'franklin-warehouse-3d',
                    opacity: 0.0,
                    duration: 600
              },
                            {
                    layer: 'empire_state',
                    opacity: 0.0,
                    duration:600
              }
               
                            ],
          
              },
      
              {
            id: 'hillsborough',
            alignment: 'right',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-74.54757, 40.52982],
                zoom: 14,
                pitch: 45,
                bearing: 0,
                speed: 1,
                curve: 1.5
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
               },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter:[
               {              
              
                    layer: 'franklin-warehouse-base',
                    opacity: 1.0,
                    duration: 600
                
               }
                 ],
            onChapterExit: []
        },
         {
            id: 'Amazon',
            alignment: 'right',
            hidden: true,
            title: 'Franklin Township, New Jersey',
            //image: 'C:/Users/im2484/OneDrive - Princeton University/Desktop/High_WaterMark/Documentary/Asheville_MapBox/MapBox_tutorial/biltmore_mcdonalds.png',
            description: '',
            location: {
                center: [-74.55843, 40.53980], 
                zoom: 14.88,
                pitch: 0,
                bearing: 0,
                speed: 1,
                curve: 1.5,
                easing: (t) => t * (2 - t)
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [              
              {              
                    layer: 'franklin-warehouse-base',
                    opacity: 1.0,
                    duration: 600
               }
            ],
          
            onChapterExit:  [
                            {              
                    layer: 'franklin-warehouse-base',
                    opacity: 0.0,
                    duration: 600
               }
            ],
          
              },
        {
            id: 'amazon',
            alignment: 'right',
            hidden: true,
            title: '',
            //image: 'C:/Users/im2484/OneDrive - Princeton University/Desktop/High_WaterMark/Documentary/Asheville_MapBox/MapBox_tutorial/biltmore_mcdonalds.png',
            description: '',
            location: {
                center: [-74.56195, 40.54067], 
                zoom: 13.8,
                pitch: 75,
                bearing: -8,
                speed: 1,
                curve: 1.5,
                easing: (t) => t * (2 - t)
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [              
              {
                    layer: 'empire_state',
                    opacity: 1.0,
                    duration: 600
              }
                            ],
          
            onChapterExit:  [
                          
              {
                    layer: 'empire_state',
                    opacity: 0.0,
                    duration: 600
              }
            ],
          
              },
        
    ]

    
}
