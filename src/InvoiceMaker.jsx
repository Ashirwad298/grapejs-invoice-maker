import React, { useEffect, useRef } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import { invoiceData } from "./data"; // Import the JSON data

const InvoiceMaker = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      fromElement: true,
      height: "100vh",
      width: "100%",
      panels: { defaults: [] },
      blockManager: { appendTo: "#blocks" },
      storageManager: false,
    });

    const blockManager = editor.BlockManager;
    const components = editor.DomComponents;

    // Custom Component for Company Name
    components.addType("dynamic-company-name", {
      model: {
        defaults: {
          tagName: "div",
          draggable: true,
          droppable: false,
          attributes: { class: "dynamic-company-name" },
          traits: [
            {
              type: "text",
              label: "Company Name",
              name: "companyName",
            },
          ],
        },
      },
      view: {
        onRender() {
          const companyName = invoiceData.companyName || "Default Company Name";
          this.el.innerHTML = `<h1>${companyName}</h1>`;
        },
      },
    });

    // Custom Component for Items Table
    components.addType("dynamic-items-table", {
      model: {
        defaults: {
          tagName: "div",
          draggable: true,
          droppable: false,
          attributes: { class: "dynamic-items-table" },
          traits: [],
        },
      },
      view: {
        onRender() {
          const items = invoiceData.items || [];
          let tableHtml = `
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <thead>
                <tr>
                  <th style="border: 1px solid #000; padding: 10px;">Item</th>
                  <th style="border: 1px solid #000; padding: 10px;">Quantity</th>
                  <th style="border: 1px solid #000; padding: 10px;">Price</th>
                </tr>
              </thead>
              <tbody>
          `;
          items.forEach(item => {
            tableHtml += `
              <tr>
                <td style="border: 1px solid #000; padding: 10px;">${item.name}</td>
                <td style="border: 1px solid #000; padding: 10px;">${item.quantity}</td>
                <td style="border: 1px solid #000; padding: 10px;">$${item.price}</td>
              </tr>
            `;
          });
          tableHtml += `
              </tbody>
            </table>
          `;
          this.el.innerHTML = tableHtml;
        },
      },
    });

    // Add the blocks to the Block Manager
    blockManager.add("company-name", {
      label: "Company Name",
      content: { type: "dynamic-company-name" },
      category: "Header",
    });

    blockManager.add('company-logo', {
      label: 'Company Logo',
      content: '<div class="company-logo"><img src="placeholder-logo.png" alt="Company Logo" /></div>',
      preview: '<img src="placeholder-logo.png" alt="Company Logo" style="width: 50px; height: auto;" />',
      category: "Header",
    });
    
    blockManager.add('company-email', {
      label: 'Company Email',
      content: '<div class="company-email">Email: yourcompany@example.com</div>',
      preview: '<div>Email: yourcompany@example.com</div>',
      category: "Header",
    });
    
    blockManager.add('company-phone', {
      label: 'Company Phone',
      content: '<div class="company-phone">Phone: +1234567890</div>',
      preview: '<div>Phone: +1234567890</div>',
      category: "Header",
    });

    //////////////////////////////-------------------------------------///////////////////////////////

    blockManager.add("items-table", {
      label: "Items Table",
      content: { type: "dynamic-items-table" },
      category: "Body",
    });

    blockManager.add('minimal-table', {
      label: 'Minimal Table',
      content: `
        <table class="minimal-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sample Item</td>
              <td>1</td>
              <td>$100</td>
            </tr>
          </tbody>
        </table>
      `,
      preview: '<div style="padding: 10px; font-size: 12px;">Minimal Table</div>',
      category: "Body",
    });
    
    

    // Set default components
    editor.setComponents(`
      <div>
        <div class="dynamic-company-name" data-gjs-type="dynamic-company-name"></div>
        <div class="dynamic-items-table" data-gjs-type="dynamic-items-table"></div>
      </div>
    `);

    editorRef.current = editor;

    return () => {
      editor.destroy();
    };
  }, []);

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      border: '1px solid #ccc',
      margin: '5px',
      padding: '10px',
      gap: '10px',
    }}>
      <div id="blocks" style={{ width: "20%", padding: "10px", background: "#f0f0f0" }}>
        <h4>Blocks</h4>
      </div>
      <div id="gjs" style={{
        flex: 1,
        background: '#fff',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
      }}>
      </div>
    </div>
  );
};

export default InvoiceMaker;
