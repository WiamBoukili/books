
import { createRoot } from 'react-dom/client'
import './index.css'
import State from './state.jsx'
import Prop_father from './prop_father.jsx'
import Search from '../search.jsx'
import Select from '../select.jsx'

createRoot(document.getElementById('root')).render(
  <Select />
)
