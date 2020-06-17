const { app, BrowserWindow } = require("electron");

let appWindow;

function crearVentana() {
  appWindow = new BrowserWindow({
    width: 800,
    height: 600,
    center: true,
    show: false,
    //icon: "icon.png",
  });
  //cuando la aplicación se cierera
  appWindow.on("closed", () => {
    appWindow = null;
  });

  //cargar hmtml
  appWindow.loadFile("./index.html");

  //cunado la app está lista mostrar la ventana
  appWindow.once("ready-to-show", () => {
    appWindow.show();
  });
}

app.on("ready", crearVentana);
