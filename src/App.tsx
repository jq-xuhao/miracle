import React from 'react';
import { IndexKind } from 'typescript';
import Button,{ButtonSize,ButtonType} from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={1} onSelect={(index)=>{alert(index)}}>
          <MenuItem index={1}>
          Cool link
          </MenuItem>
          <MenuItem index={2} disabled>
          Cool link 2
          </MenuItem>
          <MenuItem index={3}>
          Cool link 3
          </MenuItem>
        </Menu>
        <Menu defaultIndex={1} onSelect={(index)=>{alert(index)}} className={'menu-vertical'}>
          <MenuItem index={1}>
          Cool link
          </MenuItem>
          <MenuItem index={2} disabled>
          Cool link 2
          </MenuItem>
          <MenuItem index={3}>
          Cool link 3
          </MenuItem>
        </Menu>
        <Button onClick={()=>console.log('123')}> hello </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large} disabled> Primary 按钮 </Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Small}> Primary 按钮 </Button>
        <Button btnType={ButtonType.Link} href='www.baidu.com' disabled>  Link  </Button>
        <Button btnType={ButtonType.Danger}> hello </Button>
        <Button> hello </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
