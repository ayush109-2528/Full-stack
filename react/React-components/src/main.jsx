import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Heading from "../components/heading";
import List from "../components/list"
createRoot(document.getElementById('root')).render(
  <StrictMode>
        <>
      <Heading />
      <List />
    </>
  </StrictMode>,
)
