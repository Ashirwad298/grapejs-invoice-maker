import grapesjs from 'grapesjs';
import GjsEditor, { Canvas } from '@grapesjs/react';

export default function CustomEditor() {
  const onEditor = (editor) => {
    console.log('Editor loaded', { editor });
  };

  return (
    <GjsEditor
      grapesjs={grapesjs}
      grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
      onEditor={onEditor}
      options={{
        height: '100vh',
        storageManager: false,
      }}
    >
        <div>
          <h1>Hello</h1>
          <Canvas>
            <h1>Hello</h1>
          </Canvas>
        </div>
    </GjsEditor>
  );
}