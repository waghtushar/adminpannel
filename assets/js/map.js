// var map;
// AmCharts.ready( function() {
//     map = new AmCharts.AmMap();
//     map.panEventsEnabled = true;
//     map.backgroundColor = "#fff";
//     map.backgroundAlpha =1;

//     map.zoomControl.panControlEnabled = true;
//     map.zoomControl.zoomControlEnabled = true;

//     var dataProvider = {
//         map: "indiaLow",
//         getAreasFromMap: true
//     };

//     map.dataProvider = dataProvider;

//     map.areasSettings = {
//         autoZoom: false,
//         color: "#CDCDCD",
//         colorSolid: "#5EB7DE",
//         selectedColor: "#5EB7DE",
//         outlineColor: "#666666",
//         rollOverColor: "#88CAE7",
//         rollOverOutlineColor: "#FFFFFF",
//         selectable: true
//     };

//     map.addListener( 'clickMapObject', function( event ) {
//         // deselect the area by assigning all of the dataProvider as selected object
//         map.selectedObject = map.dataProvider;

//         // toggle showAsSelected
//         event.mapObject.showAsSelected = !event.mapObject.showAsSelected;

//         // bring it to an appropriate color
//         map.returnInitialColor( event.mapObject );

//         // let's build a list of currently selected states
//         var states = [];
//         for ( var i in map.dataProvider.areas ) {
//             var area = map.dataProvider.areas[ i ];
//             if ( area.showAsSelected ) {
//                 states.push( area.title );
//             }
//         }
//     } );
//     map.export = {
//         enabled: true
//     }

//     map.write( "map" );
// } );
(async () => {

    const topology = await fetch(
        'https://code.highcharts.com/mapdata/countries/in/in-all.topo.json'
    ).then(response => response.json());

    // Prepare demo data. The data is joined to map using value of 'hc-key'
    // property by default. See API docs for 'joinBy' for more info on linking
    // data and map.
    const data = [
        ['in-py', 10], ['in-ld', 11], ['in-wb', 12], ['in-or', 13],
        ['in-br', 14], ['in-sk', 15], ['in-ct', 16], ['in-tn', 17],
        ['in-mp', 18], ['in-2984', 19], ['in-ga', 20], ['in-nl', 21],
        ['in-mn', 22], ['in-ar', 23], ['in-mz', 24], ['in-tr', 25],
        ['in-3464', 26], ['in-dl', 27], ['in-hr', 28], ['in-ch', 29],
        ['in-hp', 30], ['in-jk', 31], ['in-kl', 32], ['in-ka', 33],
        ['in-dn', 34], ['in-mh', 35], ['in-as', 36], ['in-ap', 37],
        ['in-ml', 38], ['in-pb', 39], ['in-rj', 40], ['in-up', 41],
        ['in-ut', 42], ['in-jh', 43]
    ];

    // Create the chart
    Highcharts.mapChart('map', {
        chart: {
            map: topology
        },
        
    

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series: [{
            data: data,
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });

})();
