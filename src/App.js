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
              <div
                className='Box'
              >
                <input
                  type='text'
                  defaultValue='Demo Text Input'
                />
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
        <br/>
        <details>
          <summary>Key:</summary>
          <dd>
            <details>
              <summary>Key:</summary>
              <dd><code>Value</code></dd>
            </details>
            <details>
              <summary>Key:</summary>
              <dd><code>Value</code></dd>
            </details>
          </dd>
        </details>
      </div>
    );
  }
}

export default hot(module)(App);
