
var React = require('react');
var ReactDOM = require('react-dom');


require('cesium/Build/Cesium/Cesium.js');
require('cesium/Build/Cesium/Widgets/widgets.css');
var Cesium = window.Cesium;

let cesiumViewerOptions = {
    animation: false,
    baseLayerPicker: false,
    fullscreenButton: false,
    geocoder: false,
    homeButton: false,
    infoBox: false,
    sceneModePicker: false,
    selectionIndicator: false,
    timeline: false,
    navigationHelpButton: false,
    navigationInstructionsInitiallyVisible: false,
    automaticallyTrackDataSourceClocks: false
};

CesiumComponent = React.createClass({

    shouldComponentUpdate() {
        return false;
    },

    componentDidMount() {
        // Create the Cesium Viewer

        this.viewer = new Cesium.Viewer(this.refs.map, cesiumViewerOptions);

        // Add the initial points
        // this.props.cities.forEach((city) => {
        //     this.viewer.entities.add(new Entity({
        //         id: city.id,
        //         show: city.visible,
        //         position: new Cartesian3.fromDegrees(city.longitude, city.latitude),
        //         billboard: {
        //             image: require('../../public/images/pin.svg'),
        //             width: 30,
        //             height: 30
        //         }
        //     }));
        // });
    },

    // componentWillReceiveProps(nextProps) {
    //     let patches = CesiumPatcher.calculatePatches(this.props, nextProps);

    //     // Map patch operations to Cesium's Entity API
    //     patches.forEach((patch) => {
    //         if (patch.attribute === 'visible') {
    //             this.viewer.entities.getById(patch.id).show = patch.nextValue;
    //         }
    //         // else if (patch.attribute === 'name') { .. and so on .. }
    //     });
    // },

    render() {
        return (
            <div ref="map">
            </div>
        );
    }
});

module.exports=CesiumComponent;