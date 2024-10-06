import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="form-control flex items-center">
      <h1
      className='text-2xl font-bold underline mb-4'
      >
        Bag of Dungeon Companion App</h1>
      
        <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
  <li>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      Home
    </a>
  </li>

  <li>
    <a>
      <svg version="1.1" id="Layer_1" 
      xmlns="http://www.w3.org/2000/svg" 
      x="0px" y="0px" width="122.88px" height="95.089px" viewBox="0 0 122.88 95.089" enable-background="new 0 0 122.88 95.089"
        className="h-5 w-5"
        fill="currentColor">
        <g><path 
        d="M66.605,9.676c-0.791-0.791-1.718-1.181-2.792-1.181c-1.073,0-2.013,0.39-2.791,1.181l-4.255,4.241 c-1.141-0.738-2.348-1.383-3.61-1.96c-1.261-0.577-2.55-1.072-3.852-1.502V3.931c0-1.1-0.375-2.026-1.141-2.791 C47.401,0.375,46.475,0,45.374,0h-8.187c-1.047,0-1.958,0.375-2.75,1.14c-0.778,0.765-1.168,1.691-1.168,2.791v5.973 c-1.368,0.321-2.697,0.724-3.973,1.221c-1.287,0.496-2.508,1.061-3.663,1.691l-4.711-4.644c-0.738-0.778-1.637-1.181-2.724-1.181 c-1.075,0-2,0.403-2.792,1.181l-5.73,5.745c-0.791,0.791-1.181,1.718-1.181,2.79c0,1.074,0.39,2.014,1.181,2.792l4.242,4.255 c-0.738,1.14-1.382,2.348-1.959,3.608c-0.578,1.262-1.073,2.552-1.504,3.853H3.933c-1.102,0-2.028,0.375-2.792,1.14 C0.376,33.121,0,34.047,0,35.148v8.187c0,1.045,0.376,1.959,1.14,2.751c0.764,0.777,1.691,1.167,2.792,1.167h5.971 c0.322,1.367,0.724,2.696,1.222,3.971c0.498,1.289,1.061,2.537,1.691,3.744l-4.644,4.63c-0.779,0.739-1.181,1.638-1.181,2.726 c0,1.073,0.402,2,1.181,2.792l5.745,5.811c0.791,0.738,1.717,1.102,2.792,1.102c1.072,0,2.011-0.363,2.791-1.102l4.254-4.321 c1.14,0.737,2.349,1.381,3.61,1.96c1.262,0.575,2.55,1.073,3.852,1.502v6.523c0,1.1,0.376,2.025,1.14,2.789 c0.765,0.767,1.692,1.143,2.792,1.143h8.186c1.047,0,1.959-0.376,2.751-1.143c0.777-0.764,1.167-1.689,1.167-2.789v-5.973 c1.369-0.321,2.697-0.724,3.972-1.222c1.289-0.496,2.538-1.061,3.744-1.691l4.63,4.645c0.739,0.778,1.65,1.181,2.753,1.181 c1.112,0,2.025-0.402,2.765-1.181l5.811-5.744c0.738-0.793,1.102-1.719,1.102-2.792s-0.363-2.013-1.102-2.791l-4.321-4.255 c0.738-1.141,1.382-2.348,1.96-3.609c0.575-1.261,1.072-2.551,1.502-3.852h6.523c1.1,0,2.025-0.378,2.789-1.141 c0.766-0.766,1.142-1.691,1.142-2.792v-8.186c0-1.047-0.376-1.958-1.142-2.752c-0.764-0.778-1.689-1.167-2.789-1.167h-5.973 c-0.322-1.315-0.725-2.63-1.222-3.931c-0.496-1.316-1.061-2.55-1.691-3.706l4.645-4.709c0.778-0.738,1.181-1.638,1.181-2.724 c0-1.075-0.402-2-1.181-2.792L66.605,9.676L66.605,9.676z M111.918,53.649c-0.506-0.355-1.044-0.479-1.627-0.376 c-0.583,0.101-1.057,0.401-1.401,0.904l-1.908,2.702c-0.688-0.292-1.402-0.526-2.144-0.721c-0.737-0.194-1.484-0.343-2.231-0.451 l-0.616-3.538c-0.105-0.596-0.395-1.063-0.884-1.406c-0.486-0.343-1.024-0.459-1.621-0.354l-4.441,0.774 c-0.566,0.099-1.025,0.39-1.383,0.879c-0.35,0.487-0.475,1.027-0.369,1.625l0.564,3.238c-0.713,0.303-1.395,0.648-2.037,1.038 c-0.654,0.392-1.263,0.812-1.828,1.264l-2.995-2.073c-0.476-0.352-0.999-0.484-1.59-0.383c-0.583,0.103-1.046,0.407-1.402,0.904 l-2.564,3.659c-0.354,0.504-0.479,1.044-0.377,1.623c0.102,0.585,0.402,1.057,0.905,1.404l2.703,1.907 c-0.292,0.687-0.527,1.402-0.721,2.144c-0.195,0.738-0.343,1.484-0.452,2.231l-3.538,0.616c-0.596,0.104-1.063,0.396-1.406,0.884 c-0.344,0.486-0.458,1.025-0.354,1.621l0.773,4.441c0.099,0.566,0.388,1.026,0.88,1.383c0.487,0.35,1.027,0.474,1.624,0.369 l3.239-0.564c0.304,0.713,0.648,1.394,1.038,2.039c0.392,0.652,0.815,1.274,1.272,1.869l-2.081,2.952 c-0.353,0.475-0.485,0.999-0.383,1.59c0.102,0.583,0.406,1.047,0.904,1.402l3.665,2.607c0.499,0.325,1.036,0.436,1.618,0.334 c0.583-0.101,1.059-0.389,1.41-0.862l1.899-2.746c0.688,0.293,1.403,0.528,2.144,0.721c0.738,0.194,1.484,0.343,2.23,0.45 l0.618,3.54c0.104,0.597,0.396,1.063,0.883,1.404c0.486,0.344,1.025,0.46,1.621,0.356l4.439-0.775 c0.569-0.1,1.028-0.389,1.386-0.879c0.349-0.488,0.474-1.025,0.368-1.624l-0.565-3.241c0.713-0.303,1.396-0.646,2.04-1.037 c0.651-0.393,1.274-0.814,1.87-1.27l2.951,2.081c0.475,0.352,1.008,0.483,1.604,0.378c0.604-0.104,1.061-0.409,1.388-0.901 l2.609-3.665c0.324-0.5,0.435-1.036,0.332-1.618c-0.101-0.583-0.387-1.059-0.86-1.41l-2.748-1.899 c0.294-0.688,0.528-1.403,0.722-2.144c0.194-0.738,0.342-1.484,0.452-2.232l3.537-0.616c0.597-0.104,1.063-0.394,1.405-0.883 c0.344-0.488,0.459-1.024,0.355-1.621l-0.775-4.441c-0.099-0.567-0.389-1.025-0.879-1.384c-0.487-0.351-1.027-0.473-1.624-0.369 l-3.239,0.565c-0.299-0.684-0.642-1.358-1.035-2.017c-0.395-0.667-0.816-1.283-1.267-1.85l2.074-2.995 c0.353-0.475,0.484-0.998,0.38-1.59c-0.101-0.583-0.405-1.045-0.904-1.401L111.918,53.649L111.918,53.649z M99.16,64.929 c1.071-0.188,2.118-0.162,3.147,0.075c1.025,0.246,1.953,0.657,2.777,1.231c0.825,0.582,1.523,1.316,2.101,2.198 c0.573,0.889,0.95,1.865,1.139,2.936c0.187,1.072,0.16,2.119-0.076,3.15c-0.246,1.023-0.655,1.949-1.233,2.776 c-0.582,0.823-1.314,1.522-2.196,2.1c-0.889,0.573-1.865,0.951-2.937,1.139c-1.07,0.186-2.117,0.159-3.148-0.077 c-1.025-0.246-1.95-0.655-2.777-1.232c-0.822-0.582-1.522-1.314-2.1-2.196c-0.572-0.889-0.952-1.866-1.138-2.937 c-0.188-1.07-0.162-2.117,0.075-3.148c0.246-1.025,0.657-1.951,1.231-2.778c0.583-0.821,1.316-1.521,2.198-2.099 C97.114,65.494,98.09,65.116,99.16,64.929L99.16,64.929z M40.262,24.224c2.201,0,4.28,0.417,6.252,1.248 c1.961,0.846,3.666,1.986,5.115,3.421c1.435,1.449,2.575,3.156,3.421,5.113c0.833,1.973,1.248,4.054,1.248,6.254 c0,2.201-0.415,4.282-1.248,6.254c-0.846,1.959-1.986,3.666-3.421,5.115c-1.449,1.436-3.154,2.575-5.115,3.421 c-1.972,0.833-4.051,1.248-6.252,1.248s-4.282-0.415-6.255-1.248c-1.958-0.846-3.664-1.985-5.112-3.421 c-1.437-1.449-2.577-3.155-3.423-5.115c-0.831-1.972-1.248-4.053-1.248-6.254c0-2.2,0.417-4.281,1.248-6.254 c0.846-1.958,1.986-3.664,3.423-5.113c1.448-1.435,3.154-2.576,5.112-3.421C35.979,24.641,38.061,24.224,40.262,24.224 L40.262,24.224z"/></g>
        </svg>
      Settings
    </a>
  </li>
  <li>
    <a>
    <svg xmlns="http://www.w3.org/2000/svg"  
          x="0px" y="0px" width="512px" height="392.34px"  
          enable-background="new 0 0 512 392.34"
            className="h-5 w-5"
            fill="currentColor"
    viewBox="0 0 512 392.34">
      <g><path 
      d="M98.02 0h315.96c26.89 0 51.4 11.03 69.19 28.82C500.96 46.54 512 71.05 512 98.02V294.3c0 26.91-11.03 51.41-28.83 69.21-17.71 17.78-42.22 28.82-69.19 28.82H98.02c-26.97 0-51.48-11.04-69.23-28.79l-1.1-1.18C10.57 344.67 0 320.64 0 294.3V98.02c0-26.89 11.03-51.37 28.79-69.16l.07-.07C46.69 11.01 71.15 0 98.02 0zm225.71 208.59c12.37-7.99 12.34-16.89 0-23.96l-99.22-69.09c-10.09-6.32-20.6-2.61-20.32 10.55l.4 139c.86 14.27 9.01 18.19 21.02 11.59l98.12-68.09zm90.25-169.67H98.02c-16.29 0-31.07 6.62-41.73 17.3l-.07.07c-10.68 10.66-17.3 25.44-17.3 41.73V294.3c0 15.88 6.28 30.31 16.47 40.9l.9.84c10.71 10.71 25.49 17.37 41.73 17.37h315.96c16.24 0 31.02-6.66 41.73-17.37 10.74-10.66 17.37-25.44 17.37-41.74V98.02c0-16.24-6.66-31.02-17.37-41.73-10.66-10.75-25.44-17.37-41.73-17.37z"/></g></svg>
      Play   
    </a>
  </li>
</ul>









    </div>
    </div>
  );
}

export default App;
