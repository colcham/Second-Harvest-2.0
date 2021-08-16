
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "SantaClaraCounty_0": {
            "type": "geojson",
            "data": json_SantaClaraCounty_0
        }
                    ,
        "SanMateoCounty_1": {
            "type": "geojson",
            "data": json_SanMateoCounty_1
        }
                    ,
        "PartneredOrganizationsServingUnhoused_2": {
            "type": "geojson",
            "data": json_PartneredOrganizationsServingUnhoused_2
        }
                    ,
        "UnpartneredUnhousedPrograms_3": {
            "type": "geojson",
            "data": json_UnpartneredUnhousedPrograms_3
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#c7cdd7"
            }
        },
        {
            "id": "lyr_SantaClaraCounty_0_0",
            "type": "fill",
            "source": "SantaClaraCounty_0",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'Unhoused Population'], 0.0], ['<=', ['get', 'Unhoused Population'], 2.0]], 1.0, ['all', ['>', ['get', 'Unhoused Population'], 2.0], ['<=', ['get', 'Unhoused Population'], 6.0]], 1.0, ['all', ['>', ['get', 'Unhoused Population'], 6.0], ['<=', ['get', 'Unhoused Population'], 12.0]], 1.0, ['all', ['>', ['get', 'Unhoused Population'], 12.0], ['<=', ['get', 'Unhoused Population'], 19.0]], 1.0, ['all', ['>', ['get', 'Unhoused Population'], 19.0], ['<=', ['get', 'Unhoused Population'], 29.0]], 1.0, ['all', ['>', ['get', 'Unhoused Population'], 29.0], ['<=', ['get', 'Unhoused Population'], 38.0]], 1.0, ['all', ['>', ['get', 'Unhoused Population'], 38.0], ['<=', ['get', 'Unhoused Population'], 48.0]], 1.0, ['all', ['>', ['get', 'Unhoused Population'], 48.0], ['<=', ['get', 'Unhoused Population'], 59.0]], 1.0, ['all', ['>', ['get', 'Unhoused Population'], 59.0], ['<=', ['get', 'Unhoused Population'], 70.0]], 1.0, ['all', ['>', ['get', 'Unhoused Population'], 70.0], ['<=', ['get', 'Unhoused Population'], 87.0]], 1.0, ['all', ['>', ['get', 'Unhoused Population'], 87.0], ['<=', ['get', 'Unhoused Population'], 115.0]], 1.0, ['all', ['>', ['get', 'Unhoused Population'], 115.0], ['<=', ['get', 'Unhoused Population'], 138.0]], 1.0, ['all', ['>', ['get', 'Unhoused Population'], 138.0], ['<=', ['get', 'Unhoused Population'], 202.0]], 1.0, ['all', ['>', ['get', 'Unhoused Population'], 202.0], ['<=', ['get', 'Unhoused Population'], 294.0]], 1.0, ['all', ['>', ['get', 'Unhoused Population'], 294.0], ['<=', ['get', 'Unhoused Population'], 352.0]], 1.0, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'Unhoused Population'], 0.0], ['<=', ['get', 'Unhoused Population'], 2.0]], '#fff5f0', ['all', ['>', ['get', 'Unhoused Population'], 2.0], ['<=', ['get', 'Unhoused Population'], 6.0]], '#fee9e0', ['all', ['>', ['get', 'Unhoused Population'], 6.0], ['<=', ['get', 'Unhoused Population'], 12.0]], '#fedccd', ['all', ['>', ['get', 'Unhoused Population'], 12.0], ['<=', ['get', 'Unhoused Population'], 19.0]], '#fdc8b2', ['all', ['>', ['get', 'Unhoused Population'], 19.0], ['<=', ['get', 'Unhoused Population'], 29.0]], '#fcb398', ['all', ['>', ['get', 'Unhoused Population'], 29.0], ['<=', ['get', 'Unhoused Population'], 38.0]], '#fc9c7e', ['all', ['>', ['get', 'Unhoused Population'], 38.0], ['<=', ['get', 'Unhoused Population'], 48.0]], '#fc8666', ['all', ['>', ['get', 'Unhoused Population'], 48.0], ['<=', ['get', 'Unhoused Population'], 59.0]], '#fb7050', ['all', ['>', ['get', 'Unhoused Population'], 59.0], ['<=', ['get', 'Unhoused Population'], 70.0]], '#f6573e', ['all', ['>', ['get', 'Unhoused Population'], 70.0], ['<=', ['get', 'Unhoused Population'], 87.0]], '#f03e2e', ['all', ['>', ['get', 'Unhoused Population'], 87.0], ['<=', ['get', 'Unhoused Population'], 115.0]], '#dd2a25', ['all', ['>', ['get', 'Unhoused Population'], 115.0], ['<=', ['get', 'Unhoused Population'], 138.0]], '#c9181d', ['all', ['>', ['get', 'Unhoused Population'], 138.0], ['<=', ['get', 'Unhoused Population'], 202.0]], '#b31218', ['all', ['>', ['get', 'Unhoused Population'], 202.0], ['<=', ['get', 'Unhoused Population'], 294.0]], '#930b13', ['all', ['>', ['get', 'Unhoused Population'], 294.0], ['<=', ['get', 'Unhoused Population'], 352.0]], '#67000d', '#ffffff']}
        }
,
        {
            "id": "lyr_SanMateoCounty_1_0",
            "type": "fill",
            "source": "SanMateoCounty_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'Unhoused Pop'], 0.0], ['<=', ['get', 'Unhoused Pop'], 12.0]], 1.0, ['all', ['>', ['get', 'Unhoused Pop'], 12.0], ['<=', ['get', 'Unhoused Pop'], 42.0]], 1.0, ['all', ['>', ['get', 'Unhoused Pop'], 42.0], ['<=', ['get', 'Unhoused Pop'], 74.0]], 1.0, ['all', ['>', ['get', 'Unhoused Pop'], 74.0], ['<=', ['get', 'Unhoused Pop'], 116.0]], 1.0, ['all', ['>', ['get', 'Unhoused Pop'], 116.0], ['<=', ['get', 'Unhoused Pop'], 221.0]], 1.0, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'Unhoused Pop'], 0.0], ['<=', ['get', 'Unhoused Pop'], 12.0]], '#fff5f0', ['all', ['>', ['get', 'Unhoused Pop'], 12.0], ['<=', ['get', 'Unhoused Pop'], 42.0]], '#fcbea5', ['all', ['>', ['get', 'Unhoused Pop'], 42.0], ['<=', ['get', 'Unhoused Pop'], 74.0]], '#fb7050', ['all', ['>', ['get', 'Unhoused Pop'], 74.0], ['<=', ['get', 'Unhoused Pop'], 116.0]], '#d32020', ['all', ['>', ['get', 'Unhoused Pop'], 116.0], ['<=', ['get', 'Unhoused Pop'], 221.0]], '#67000d', '#ffffff']}
        }
,
        {
            "id": "lyr_PartneredOrganizationsServingUnhoused_2_0",
            "type": "circle",
            "source": "PartneredOrganizationsServingUnhoused_2",
            "layout": {},
            "paint": {'circle-radius': ['/', 14.285714285714285, 2], 'circle-color': '#000000', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#ffffff'}
        }
,
        {
            "id": "lyr_UnpartneredUnhousedPrograms_3_0",
            "type": "circle",
            "source": "UnpartneredUnhousedPrograms_3",
            "layout": {},
            "paint": {'circle-radius': ['/', 14.285714285714285, 2], 'circle-color': '#487bb6', 'circle-opacity': 0.877, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#325780'}
        }
],
}