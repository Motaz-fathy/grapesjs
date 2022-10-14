import React from "react";
import 'grapesjs/dist/css/grapes.min.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import grapesjs from "grapesjs";
import grapesJSMJML from "grapesjs-mjml";
import Newsleter from 'grapesjs-preset-newsletter'
import plugin_blocks from "grapesjs-blocks-basic";
export const WebBuilder = () => {
  const { pageId } = useParams();
  console.log(pageId);
  const [editor, setEditor] = useState(null);

  function myPlugin(editor) {
 

    editor.BlockManager.add("mj-button", {
      id : "mj-button" ,
      label: 'button',
      category : "Extra",
      
      media: `<svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M20 20.5C20 21.3 19.3 22 18.5 22H13C12.6 22 12.3 21.9 12 21.6L8 17.4L8.7 16.6C8.9 16.4 9.2 16.3 9.5 16.3H9.7L12 18V9C12 8.4 12.4 8 13 8S14 8.4 14 9V13.5L15.2 13.6L19.1 15.8C19.6 16 20 16.6 20 17.1V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.1 2.9 14 4 14H8V12H4V4H20V12H18V14H20C21.1 14 22 13.1 22 12V4C22 2.9 21.1 2 20 2Z" />
      </svg>`,
      content: `<style> .big {width : 400px , heigth : 35px, color : red} </style><button className="big">press to button</button> `,
    });

    editor.BlockManager.add("mj-navbar", {
      id : "mj-navbar" ,
      label: 'navBar',
      media: `<svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
      </svg>`,
      content: `<mj-navbar>
        <mj-navbar-link>Getting started</mj-navbar-link>
        <mj-navbar-link>Try it live</mj-navbar-link>
        <mj-navbar-link>Templates</mj-navbar-link>
        <mj-navbar-link>Components</mj-navbar-link>
      </mj-navbar>`,
    });

  }

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",

      plugins: [  grapesJSMJML , Newsleter , myPlugin , plugin_blocks  ],

      pluginsOpts: {
        plugins :{}
      }
    });
    setEditor(editor);
  }, []);

  return (
    <div>
      <div id="gjs" />
    </div>
  );
}
