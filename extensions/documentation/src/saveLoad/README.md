[](order=10)
## Saving Custom Data for an Extension

The Extension Framework allows you to easily save arbitrary data for an extension when an `.sb3` (Scratch 3 format) project is saved. 

You can also set up how your extension utilizes that data when a project is loaded that contains custom save data. 

All you must do is specify the `"customSaveData"` [add on]() when invoking the `extension` creation function, and then override the `saveDataHandler` property in your Extension class, like so:

[](./index.ts?export=x)