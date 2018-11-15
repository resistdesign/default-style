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
          <summary className='Box'>Key:</summary>
          <dl>
            <dd>
              <div
                className='Box'
              >
                <details>
                  <summary className='Box'>Key:</summary>
                  <dl>
                    <dd>
                      <div
                        className='Box'
                      >
                        <code>Value</code>
                      </div>
                    </dd>
                  </dl>
                </details>
                <details>
                  <summary className='Box'>Key:</summary>
                  <dl>
                    <dd>
                      <div
                        className='Box'
                      >
                        <code>Value</code>
                      </div>
                    </dd>
                  </dl>
                </details>
              </div>
            </dd>
          </dl>
        </details>
        <br/>
        <div
          className='Row'
        >
          <div
            className='Box Filled'
          >
            <button>
              A Button
            </button>
          </div>
          <div
            className='Box Filled'
          >
            <button>
              A Button
            </button>
          </div>
          <div
            className='Box Filled'
          >
            <button>
              A Button
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
