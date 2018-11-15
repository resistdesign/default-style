import './default-style.less';
import {hot} from 'react-hot-loader';
import React, {PureComponent} from 'react';
import Style from './App.less';

const {App: ClassName} = Style;

export class App extends PureComponent {
  render() {
    return (
      <main
        className={`App ${ClassName}`}
      >
        <div>
          <input
            type='text'
            defaultValue='Demo Text Input'
          />
          <div>
            <input
              type='number'
              defaultValue={7}
            />
            <section>
              <div>
                <input
                  type='text'
                  defaultValue='Demo Text Input'
                />
              </div>
              <div>
                <input
                  type='text'
                  defaultValue='Demo Text Input'
                />
              </div>
              <div>
                <input
                  type='text'
                  defaultValue='Demo Text Input'
                />
              </div>
            </section>
          </div>
        </div>
        <br/>
        <div>
          <code>
            Demo Code Text
          </code>
        </div>
        <br/>
        <div>
          <textarea
            defaultValue={`Demo Text Block
AAA BBB CCC DDD EEE FFF GGG AAA BBB CCC DDD EEE FFF GGG AAA BBB CCC DDD EEE FFF GGG AAA BBB CCC DDD EEE FFF GGG
AAA BBB CCC DDD EEE FFF GGG AAA BBB CCC DDD EEE FFF GGG AAA BBB CCC DDD EEE FFF GGG AAA BBB CCC DDD EEE FFF GGG
AAA BBB CCC DDD EEE FFF GGG AAA BBB CCC DDD EEE FFF GGG`}
          >
          </textarea>
        </div>
        <br/>
        <details
          open
        >
          <summary>Key:</summary>
          <details
            open
          >
            <summary>Key:</summary>
            <div>
              <code>Value</code>
            </div>
          </details>
          <details
            open
          >
            <summary>Key:</summary>
            <div>
              <pre>
                {`Multiple
Line
Value`}
              </pre>
            </div>
          </details>
        </details>
        <br/>
        <section>
          <div>
            <button>
              A Button
            </button>
          </div>
          <div>
            <button>
              A Button
            </button>
          </div>
          <div>
            <button>
              A Button
            </button>
          </div>
          <div>
            <button>
              A Button
            </button>
          </div>
        </section>
      </main>
    );
  }
}

export default hot(module)(App);
