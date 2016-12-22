define({
  root: ({
    _widgetLabel: "Batch Attribute Editor",
    widgetIntroSelectByArea: "Use one of the tools below to create a selected set of features to update.  If the row is <font class='maxRecordInIntro'>highlighted</font>, the maximum number of records has been exceeded.",
    widgetIntroSelectByFeature: "Use the tool below to select a feature from <font class='layerInIntro'>${0}</font> layer.  This feature will be used select and update all intersecting features.  If the row is <font class='maxRecordInIntro'>highlighted</font>, the maximum number of records has been exceeded.",
    widgetIntroSelectByFeatureQuery: "Use the tool below to select a feature from <font class='layerInIntro'>${0}</font> .  This feature's <font class='layerInIntro'>${1}</font> attribute will be used to query the layers below and update the resulting features.  If the row is <font class='maxRecordInIntro'>highlighted</font>, the maximum number of records has been exceeded.",
    widgetIntroSelectByQuery: "Enter a value to create a selection set.  If the row is <font class='maxRecordInIntro'>highlighted</font>, the maximum number of records has been exceeded.",
    layerTable: {
      colLabel: "Layer Name",
      numSelected: "#",
      colSyncStatus: ""
    },
    noConfiguredLayers: "No editable layers configured",
    editorPopupTitle: "Batch Attribute Editor",
    editorPopupSaveBtn: "Save",
    editorPopupMultipleValues: "",
    clear: "Clear",
    featuresUpdated: "${0} / ${1} feature(s) updated",
    featuresSelected: "${0} feature(s) selected",
    featuresSkipped: "Bypassed",
    search: "Search",
    queryInput: "Enter value to query",
    noFilterTip: "Without filter expression defined, this query task will list all features in the specified data source.",
    setFilterTip: "Please set filter correctly.",
    filterPopup: "Filter Layer",
    cancel: "Cancel",
    noValue: "No Value",
    emptyString: "Empty String",
    existingValue: "Keep Existing Value",
    newDate: "New Date",
    valueChooser: "Select/Type a Value",
    ok: "OK",
    drawBox: {
      point: "Point",
      line: "Line",
      polyline: "Polyline",
      freehandPolyline: "Freehand Polyline",
      extent: "Extent",
      polygon: "Polygon",
      freehandPolygon: "Freehand Polygon",
      clear: "Clear",
      addPointToolTip: "Click to select in this area",
      addShapeToolTip: "Draw a shape to select features",
      freehandToolTip: "Press and hold to draw a shape to select features",
      startToolTip: "Draw a shape to select features"
    },
    errors: {
      layerNotFound: "Layer ${0} with ID ${1} was not found in the map, the map may have changed since the widgets configuration",
      queryNullID: "The feature from ${0} returned an invalid ID",
      noSelectedLayers: "No selected layers with records to update",
      inputValueError: "Invalid value in the form",
      saveError: "Unable to save ${0} features, details added to console",
      requiredValue: "Required Value"
    }
  }),
  "ar": 1,
  "cs": 1,
  "da": 1,
  "de": 1,
  "el": 1,
  "es": 1,
  "et": 1,
  "fi": 1,
  "fr": 1,
  "he": 1,
  "hr": 1,
  "it": 1,
  "ja": 1,
  "ko": 1,
  "lt": 1,
  "lv": 1,
  "nb": 1,
  "nl": 1,
  "pl": 1,
  "pt-br": 1,
  "pt-pt": 1,
  "ro": 1,
  "ru": 1,
  "sr": 1,
  "sv": 1,
  "th": 1,
  "tr": 1,
  "vi": 1,
  "zh-cn": 1,
  "zh-hk": 1,
  "zh-tw": 1
});
