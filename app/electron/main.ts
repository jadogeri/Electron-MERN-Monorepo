import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import installExtension, { REACT_DEVELOPER_TOOLS } from "electron-devtools-installer";
//import installExtension, { REACT_DEVELOPER_TOOLS } from "@daltonmenezes/electron-devtools-installer";

//import { app as expressApp } from "../src/server/index"
import {app as expressServer } from "../src/server/index"
import { connectDB } from "../src/database/connectDB"
import { EXPRESS_APP_PORT } from '../src/server/index';

function createWindow() {

  // connectDB().then(()=>{
  //   expressApp.listen(5000, () => {
  //   console.log('Express server running on port 5000');
  // });


  // })

    connectDB().then(()=>{

      
    
      expressServer.listen(EXPRESS_APP_PORT, () => {
      console.log(`Express server running on port ${EXPRESS_APP_PORT}`);
  });


  })


  const win = new BrowserWindow({
//  frame: false,
    width: 1000,
    height: 700,
    // useContentSize: true,
    center : true,
    // backgroundColor: '#000000',
    // transparent: true,
     resizable: true,
    // x: 20,
    // y: 500 - 450,
    // zoomToPageWidth : true,
    webPreferences: {
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js'),
    }
  })

  if (app.isPackaged) {
    // 'build/index.html'
    win.loadURL(`file://${__dirname}/../index.html`);
  } else {
    win.loadURL('http://localhost:3000/index.html');
     win.center(); // Center the window
     

    win.webContents.openDevTools();

    // Hot Reloading on 'node_modules/.bin/electronPath'
    require('electron-reload')(__dirname, {
      electron: path.join(__dirname,
        '..',
        '..',
        'node_modules',
        '.bin',
        'electron' + (process.platform === "win32" ? ".cmd" : "")),
      forceHardReset: true,
      hardResetMethod: 'exit'
    });
  }
}

app.whenReady().then(() => {
  // DevTools
  installExtension(REACT_DEVELOPER_TOOLS, {
      forceDownload: false,
      //sessionId: 'persist:my-app', // custom session partition
      loadExtensionOptions: {
        allowFileAccess: true,
      },
    })
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
});

