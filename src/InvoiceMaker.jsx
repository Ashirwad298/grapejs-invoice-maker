import React, { useEffect, useRef } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-blocks-basic";

const InvoiceMaker = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    // Initialize GrapesJS Editor
    const editor = grapesjs.init({
      container: "#gjs",
      fromElement: true,
      height: "100vh",
      width: "100%",
      panels: { defaults: [] },
      blockManager: {
        appendTo: "#blocks",
      },
      styleManager: { appendTo: "#style-manager" },
      storageManager: false, // Disable storage for this demo
    });

    // Define blocks (drag-and-drop components)
    const blockManager = editor.BlockManager;

    blockManager.add("header-section", {
      label: "Header Section",
      content: `
        <header style="text-align: center; padding: 20px;">
          <h1>Company Name</h1>
          <img src="https://via.placeholder.com/150" alt="Logo" style="max-width: 100px;"/>
        </header>
      `,
    });

    blockManager.add("body-section", {
      label: "Body Section",
      content: `
        <div>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <thead>
              <tr>
                <th style="border: 1px solid #000; padding: 10px;">Item</th>
                <th style="border: 1px solid #000; padding: 10px;">Quantity</th>
                <th style="border: 1px solid #000; padding: 10px;">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="border: 1px solid #000; padding: 10px;">Sample Item</td>
                <td style="border: 1px solid #000; padding: 10px;">1</td>
                <td style="border: 1px solid #000; padding: 10px;">$100</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
    });

    blockManager.add("footer-section", {
      label: "Footer Section",
      content: `
        <footer style="text-align: center; padding: 20px;">
          <p>Thank you for your business!</p>
          <p>Contact: your-email@example.com</p>
        </footer>
      `,
    });

    // Add a premade template
    editor.setComponents(`
      <div>
        <header style="text-align: center; padding: 20px;">
          <h1>Company Name</h1>
          <img src="https://via.placeholder.com/150" alt="Logo" style="max-width: 100px;"/>
        </header>
        <div>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <thead>
              <tr>
                <th style="border: 1px solid #000; padding: 10px;">Item</th>
                <th style="border: 1px solid #000; padding: 10px;">Quantity</th>
                <th style="border: 1px solid #000; padding: 10px;">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="border: 1px solid #000; padding: 10px;">Sample Item</td>
                <td style="border: 1px solid #000; padding: 10px;">1</td>
                <td style="border: 1px solid #000; padding: 10px;">$100</td>
              </tr>
            </tbody>
          </table>
        </div>
        <footer style="text-align: center; padding: 20px;">
          <p>Thank you for your business!</p>
          <p>Contact: your-email@example.com</p>
        </footer>
      </div>
    `);

    editorRef.current = editor;

    return () => {
      editor.destroy();
    };
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div id="blocks" style={{ width: "20%", padding: "10px", background: "#f0f0f0" }}>
        <h4>Blocks</h4>
      </div>
      <div id="gjs" style={{ flex: 1, background: "#fff" }}></div>
    </div>
  );
};

export default InvoiceMaker;
