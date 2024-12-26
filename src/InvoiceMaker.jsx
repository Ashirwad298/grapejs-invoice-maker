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

    const blockManager = editor.BlockManager;

    // Create individual components for the header section with preview in the label
    blockManager.add("company-name", {
      label: `
        <div style="text-align: center; padding: 10px; border: 1px solid #ccc; max-width: 200px; overflow: hidden; height: 50px; display: flex; justify-content: center; align-items: center;">
          <h1 style="font-size: 16px; margin: 0; transform: scale(0.7);">Company Name</h1>
        </div>
      `,  // Label with preview
      content: `
        <div class="company-name" style="text-align: center; padding: 10px;">
          <h1>Company Name</h1>
        </div>
      `,
      category: "Header",
    });

    blockManager.add("company-phone", {
      label: `
        <div style="text-align: center; padding: 10px; border: 1px solid #ccc; max-width: 200px; overflow: hidden; height: 50px; display: flex; justify-content: center; align-items: center;">
          <p style="font-size: 14px; margin: 0; transform: scale(0.7);">Phone: (123) 456-7890</p>
        </div>
      `,  // Label with preview
      content: `
        <div class="company-phone" style="text-align: center; padding: 10px;">
          <p>Phone: (123) 456-7890</p>
        </div>
      `,
      category: "Header",
    });

    blockManager.add("company-email", {
      label: `
        <div style="text-align: center; padding: 10px; border: 1px solid #ccc; max-width: 200px; overflow: hidden; height: 50px; display: flex; justify-content: center; align-items: center;">
          <p style="font-size: 14px; margin: 0; transform: scale(0.7);">Email: contact@company.com</p>
        </div>
      `,  // Label with preview
      content: `
        <div class="company-email" style="text-align: center; padding: 10px;">
          <p>Email: contact@company.com</p>
        </div>
      `,
      category: "Header",
    });

    blockManager.add("company-logo", {
      label: `
        <div style="text-align: center; padding: 10px; border: 1px solid #ccc; max-width: 200px; overflow: hidden; height: 100px; display: flex; justify-content: center; align-items: center;">
          <img src="https://via.placeholder.com/150" alt="Logo" style="max-width: 100%; height: auto; transform: scale(0.5);" />
        </div>
      `,  // Label with preview
      content: `
        <div class="company-logo" style="text-align: center; padding: 10px;">
          <img src="https://via.placeholder.com/150" alt="Logo" style="max-width: 100%; height: auto;" />
        </div>
      `,
      category: "Header",
    });

    // Create a full header section block with preview
    blockManager.add("header-section", {
      label: `
        <div style="text-align: center; padding: 20px; border: 1px solid #ccc; max-width: 200px; overflow: hidden; display: flex; flex-direction: column; justify-content: center; align-items: center;">
          <h1 style="font-size: 16px; margin: 0; transform: scale(0.7);">Company Name</h1>
          <img src="https://via.placeholder.com/150" alt="Logo" style="max-width: 100%; height: 40px; transform: scale(0.5);" />
          <p style="font-size: 14px; transform: scale(0.7);">Phone: (123) 456-7890</p>
          <p style="font-size: 14px; transform: scale(0.7);">Email: contact@company.com</p>
        </div>
      `,  // Label with preview
      content: `
        <div class="header-section" style="text-align: center; padding: 20px; border: 1px solid #000;">
          <h1>Company Name</h1>
          <img src="https://via.placeholder.com/150" alt="Logo" style="max-width: 100px;" />
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@company.com</p>
        </div>
      `,
      category: "Header",
    });

    // Create an alternate body section with preview
    blockManager.add("body-section-alt", {
      label: `
        <div style="width: 100%; border-collapse: collapse; margin: 20px 0; background-color: #f0f0f0;  transform: scale(0.6);">
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <thead>
              <tr>
                <th style="border: 1px solid #000; padding: 15px; background-color: #ccc;">Product</th>
                <th style="border: 1px solid #000; padding: 15px; background-color: #ccc;">Amount</th>
                <th style="border: 1px solid #000; padding: 15px; background-color: #ccc;">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="border: 1px solid #000; padding: 10px;">Product X</td>
                <td style="border: 1px solid #000; padding: 10px;">2</td>
                <td style="border: 1px solid #000; padding: 10px;">$200</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,  // Label with preview
      content: `
        <div class="body-section-alt" style="width: 100%; border-collapse: collapse; margin: 20px 0; background-color: #f0f0f0;">
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <thead>
              <tr>
                <th style="border: 1px solid #000; padding: 10px; background-color: #ccc;">Item</th>
                <th style="border: 1px solid #000; padding: 10px; background-color: #ccc;">Quantity</th>
                <th style="border: 1px solid #000; padding: 10px; background-color: #ccc;">Price</th>
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
      category: "Body",
    });

    // Add the default components (header, body, footer) to the workspace
    editor.setComponents(`
      <div>
        <div class="header-section" style="text-align: center; padding: 20px; border: 1px solid #000;">
          <h1>Company Name</h1>
          <img src="https://via.placeholder.com/150" alt="Logo" style="max-width: 100px;" />
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@company.com</p>
        </div>
        <div class="body-section" style="width: 100%; border-collapse: collapse; margin: 20px 0;">
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
