import {hot} from 'react-hot-loader';
import React, {PureComponent} from 'react';
import Style from './App.less';

const {App: ClassName} = Style;

export class App extends PureComponent {
  render() {
    return (
      < div
        className={`App ${ClassName}`}
      >
        <div
          className='Box'
        >
          <input
            type='text'
            defaultValue='Demo Text Input'
          />
          <div
            className='Box'
          >
            <input
              type='text'
              defaultValue='Demo Text Input'
            />
            <div
              className='Row'
            >
              <div
                className='Box'
              >
                <input
                  type='text'
                  defaultValue='Demo Text Input'
                />
              </div>
              <div>
                &nbsp;
              </div>
              <div
                className='Box'
              >
                <input
                  type='text'
                  defaultValue='Demo Text Input'
                />
              </div>
              <div>
                &nbsp;
              </div>
              <div
                className='Box'
              >
                <input
                  type='text'
                  defaultValue='Demo Text Input'
                />
              </div>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <div
          className='Box'
        >
          <code>
            Demo Code Text
          </code>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
