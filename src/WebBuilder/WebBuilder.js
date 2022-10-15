import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import grapesjs from "grapesjs";
import grapesjspresetwebpage from "grapesjs-preset-webpage";
import grapesjsaviary from "grapesjs-aviary";
import grapesjsblocksbasic from "grapesjs-blocks-basic";
import grapesjscomponentcountdown from "grapesjs-component-countdown";
import grapesjsnavbar from "grapesjs-navbar";
import grapesjspluginexport from "grapesjs-plugin-export";
import grapesjsplugifilestack from "grapesjs-plugin-filestack";
import grapesjspluginforms from "grapesjs-plugin-forms";

export const WebBuilder = () => {
  const { pageId } = useParams();
  console.log(pageId);
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      blockManager: {
        blocks: []
      },
      plugins: [
        grapesjsblocksbasic,
        grapesjscomponentcountdown,
        grapesjsnavbar,
        grapesjspluginexport ,
        grapesjspluginforms,
        grapesjspresetwebpage
      ],

      pluginsOpts: {
        plugins: {}
      }
    });
    setEditor(editor);
  }, []);

  return (
    <div>
      <div id="gjs" />
    </div>
  );
};
